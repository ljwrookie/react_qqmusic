import React, {
    memo,
    useEffect,
    useState,
    useRef,
    useCallback,
} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
    getSizeImage,
    formatDate,
    getPlayUrl,
} from '@/utils/format-utils.js';
import {
    getSongDetailAction,
    changePlaySequenceAction,
    changeCurrentIndexAndSongAction,
    changeCurrentLyricIndexAction,
} from '../store/actionCreators';
import { Slider, Drawer, message } from 'antd';

import SongListItem from './c-cpns/songlist-item';
import {
    PlayerBarWrapper,
    PlayerInfo,
    ControlWrapper,
    OperateWrapper,
} from './style';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const { normalColor, bodyColor } =
    getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;
// import { SONG_PLAYLIST_ID } from '@/common/constants';

export default memo(function PlayBar() {
    // props/state
    const [currentTime, setCurrentTime] = useState(0); // 用于保存当前播放的时间
    const [isShowBar, setIsShowBar] = useState(false); // 是否显示音量播放条
    const [progress, setProgress] = useState(0); // 滑块进度
    const [isChanging, setIsChanging] = useState(false); // 是否正在滑动
    const [isPlaying, setIsPlaying] = useState(false); // 是否正在播放
    const [visible, setVisible] = useState(false);
    const [isShowLyric, setIsShowLyric] = useState(false); //是否显示桌面歌词
    // redux hook
    const dispatch = useDispatch();
    const {
        currentSong,
        playSequence,
        firstLoad,
        lyricList = [],
        playList,
        currentLyricIndex,
        playlistCount,
        currentSongIndex,
    } = useSelector(
        (state) => ({
            currentSong: state.getIn(['player', 'currentSong']),
            playSequence: state.getIn(['player', 'playSequence']),
            firstLoad: state.getIn(['player', 'firstLoad']),
            lyricList: state.getIn(['player', 'lyricList']),
            playList: state.getIn(['player', 'playList']),
            currentLyricIndex: state.getIn([
                'player',
                'currentLyricIndex',
            ]),
            playlistCount: state.getIn(['player', 'playListCount']),
            currentSongIndex: state.getIn(['player', 'currentSongIndex']),
        }),
        shallowEqual
    );
    const divStyle = {
        backgroundColor: bodyColor,
        color: normalColor,
    };
    // other hook
    const audioRef = useRef();
    // 默认歌曲
    useEffect(() => {
        dispatch(getSongDetailAction(167876));
    }, [dispatch]);

    // 设置音频src
    useEffect(() => {
        audioRef.current.src = getPlayUrl(currentSong.id);
        // 设置音量
        audioRef.current.volume = 0.3;
        // 如果不是首次加载: 播放音乐
        if (!firstLoad) setIsPlaying(true + Math.random());
    }, [currentSong, firstLoad]);

    // 切换歌曲时播放音乐
    useEffect(() => {
        isPlaying && audioRef.current.play();
    }, [isPlaying, dispatch]);
    // other handle
    const picUrl = currentSong.al && currentSong.al.picUrl; // 图片url
    const songName = currentSong.name; // 歌曲名字
    const singerName = currentSong.ar && currentSong.ar[0].name; //作者名字
    const duration = currentSong.dt; //播放总时间
    const songId = currentSong && currentSong.id;
    // other function
    // 点击播放或暂停按钮后音乐
    const playMusic = useCallback(() => {
        // 设置src属性
        setIsPlaying(!isPlaying);
        // 播放音乐
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
    }, [isPlaying]);

    // 歌曲播放触发
    function timeUpdate(e) {
        // 没有在滑动滑块时触发(默认时没有滑动)
        let currentTime = e.target.currentTime;
        if (!isChanging) {
            setCurrentTime(currentTime * 1000);
            setProgress(((currentTime * 1000) / duration) * 100);
        }

        // 当前音乐处于播放状态(用于搜索音乐,点击item播放音乐时使用)
        if (currentTime > 0.1 && currentTime < 0.5) setIsPlaying(true);

        // 获取当前播放歌词
        let i = 0; //用于获取歌词的索引
        // 2.遍历歌词数组
        for (; i < lyricList.length; i++) {
            const item = lyricList[i];
            if (currentTime * 1000 < item.totalTime) {
                // 4.跳出循环
                break;
            }
        }
        // 对dispatch进行优化,如果index没有改变,就不进行dispatch
        if (currentLyricIndex !== i - 1) {
            dispatch(changeCurrentLyricIndexAction(i - 1));
            const content = lyricList[i - 1] && lyricList[i - 1].content;
            if (isShowLyric) {
                message.open({
                    key: 'lyric',
                    content: content ? content : 'QQ音乐，听我想听',
                    duration: 0,
                    className: 'lyric_class',
                });
            } else {
                message.destroy('lyric');
            }
        }
    }
    // 滑动滑块时触发
    const sliderChange = useCallback(
        (value) => {
            // 滑动滑块时:更改标识变量为false(touch move for changing state),此时不会触发onTimeUpdate(歌曲播放事件)
            setIsChanging(true);
            // 更改"当前播放时间"要的是毫秒数: 241840(总毫秒)   1 * 241840 / 1000 241.84 / 60  4.016667
            const currentTime = (value / 100) * duration;
            setCurrentTime(currentTime);
            // 更改进度条值
            setProgress(value);
        },
        [duration]
    );

    // 手指抬起时触发
    const slideAfterChange = useCallback(
        (value) => {
            // 重新设置当前播放时长 value(进度)/100 * duration(总毫秒数) / 1000 得到当前播放的"秒数"
            const currentTime = ((value / 100) * duration) / 1000;
            audioRef.current.currentTime = currentTime;
            // 设置当前播放时间的state,设置的是'毫秒',所以需要*1000
            setCurrentTime(currentTime * 1000);
            setIsChanging(false);
            // 更改播放状态
            setIsPlaying(true);
            // 播放音乐
            audioRef.current.play();
        },
        [duration, audioRef]
    );
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    // 更改音量
    function changingVolume(value) {
        audioRef.current.volume = value / 100;
    }
    // 更改播放顺序
    const changeSequence = useCallback(() => {
        let currentSequence = playSequence;
        currentSequence++;
        if (currentSequence > 2) {
            currentSequence = 0;
        }
        dispatch(changePlaySequenceAction(currentSequence));
    }, [playSequence, dispatch]);
    // 切换歌曲(点击播放下一首或上一首音乐)
    const changeSong = (tag) => {
        // 首先判断播放列表中是否存在音乐，再决定是否播放
        if (playlistCount < 1) {
            // message.error('请添加播放列表', 0.5);
            return;
        }
        // 需要需要派发action,所以具体逻辑在actionCreator中完成
        dispatch(changeCurrentIndexAndSongAction(tag));
        setIsPlaying(true + Math.random()); // 更改播放状态图标
    };

    // 当前歌曲播放结束后
    function handleTimeEnd() {
        // 单曲循环
        if (playSequence === 2) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        } else {
            // 播放下一首
            dispatch(changeCurrentIndexAndSongAction(1));
            // 更改播放状态
            setIsPlaying(true + Math.random());
        }
    }
    const Sequence = useCallback(() => {
        if (playSequence === 0)
            return (
                <span
                    className="iconfont order"
                    onClick={(e) => changeSequence()}
                >
                    &#xe68d;
                </span>
            );
        else if (playSequence === 1)
            return (
                <span
                    className="iconfont order"
                    onClick={(e) => changeSequence()}
                >
                    &#xe68c;
                </span>
            );
        else
            return (
                <span
                    className="iconfont order"
                    onClick={(e) => changeSequence()}
                >
                    &#xe66d;
                </span>
            );
    }, [playSequence, changeSequence]);
    // 点击item播放音乐
    const clickItem = (index, item) => {
        // 播放音乐 dispatch
        dispatch(getSongDetailAction(item.id));
        playMusic();
    };

    const playOrPause = () => {
        const play = (
            <span className="iconfont play_pause" onClick={playMusic}>
                &#xe61b;
            </span>
        );
        const pause = (
            <span className="iconfont play_pause" onClick={playMusic}>
                &#xea82;
            </span>
        );
        return isPlaying ? play : pause;
    };
    const changeShowDeskLyc = () => {
        setIsShowLyric(!isShowLyric);
    };
    return (
        <PlayerBarWrapper>
            <Slider
                defaultValue={0}
                tooltipVisible={false}
                value={progress}
                onChange={sliderChange}
                onAfterChange={slideAfterChange}
            />
            <div className="control">
                <div className="left">
                    <PlayerInfo>
                        <NavLink
                            to={`/player?id=${songId}`}
                            className="image"
                        >
                            <img
                                src={getSizeImage(picUrl, 40, 40)}
                                alt=""
                            />
                        </NavLink>
                        <div className="info_block">
                            <div className="song_info">
                                <NavLink
                                    to={`/player?id=${songId}`}
                                    className="song_name"
                                >
                                    {songName}
                                </NavLink>
                                <NavLink
                                    to={`/artist?id=${songId}`}
                                    className="singer_name"
                                >
                                    {singerName}
                                </NavLink>
                            </div>

                            <div className="icons">
                                <span className="iconfont like">
                                    &#xe86f;
                                </span>
                                <span className="iconfont  download">
                                    &#xe639;
                                </span>
                                <span className="iconfont  comment">
                                    &#xe891;
                                </span>
                            </div>
                        </div>
                    </PlayerInfo>
                </div>
                <div className="center">
                    <ControlWrapper>
                        {Sequence()}
                        <span
                            className="iconfont prev"
                            onClick={(e) => changeSong(-1)}
                        >
                            &#xe79e;
                        </span>
                        {playOrPause()}
                        <span
                            className="iconfont next"
                            onClick={(e) => changeSong(1)}
                        >
                            &#xe79f;
                        </span>
                        <span
                            className="iconfont volume"
                            onClick={() => setIsShowBar(!isShowBar)}
                        >
                            &#xea0e;
                        </span>
                        <div
                            className="sprite_player top-volume"
                            style={{
                                display: isShowBar ? 'block' : 'none',
                            }}
                            onMouseLeave={() => {
                                setIsShowBar(false);
                            }}
                        >
                            <Slider
                                vertical
                                defaultValue={30}
                                onChange={changingVolume}
                            />
                        </div>
                    </ControlWrapper>
                </div>
                <div className="right">
                    <OperateWrapper isShowDeskLyric={isShowLyric}>
                        <em className="now_time">
                            {formatDate(currentTime, 'mm:ss')}{' '}
                        </em>
                        <em className="total_time">
                            / {duration && formatDate(duration, 'mm:ss')}
                        </em>
                        <span
                            className="desk_lyc"
                            onClick={changeShowDeskLyc}
                        >
                            词
                        </span>
                        <span className="iconfont" onClick={showDrawer}>
                            &#xe623;
                        </span>
                        <Drawer
                            title="播放列表"
                            placement="right"
                            onClose={onClose}
                            visible={visible}
                            width={320}
                            closable={false}
                            drawerStyle={divStyle}
                            headerStyle={divStyle}
                            // getContainer={false}
                            // mask={false}
                        >
                            {playList &&
                                playList.map((item, index) => {
                                    return (
                                        <SongListItem
                                            key={item.id}
                                            isActive={
                                                (currentSongIndex
                                                    ? currentSongIndex
                                                    : 0) === index
                                                    ? 'active'
                                                    : ''
                                            }
                                            songName={item.name}
                                            singer={item.ar[0].name}
                                            duration={item.dt}
                                            clickItem={() =>
                                                clickItem(index, item)
                                            }
                                            songId={item.id}
                                        />
                                    );
                                })}
                        </Drawer>
                    </OperateWrapper>
                </div>
            </div>
            <audio
                id="audio"
                ref={audioRef}
                onTimeUpdate={timeUpdate}
                onEnded={handleTimeEnd}
                preload="auto"
            />
        </PlayerBarWrapper>
    );
});
