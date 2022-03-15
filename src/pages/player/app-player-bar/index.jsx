import React, { memo, useEffect, useState, useRef, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getSizeImage, formatDate, getPlayUrl } from '@/utils/format-utils.js';
import { getSongDetailAction } from '../store/actionCreators';
import { Slider } from 'antd';

import { PlayerBarWrapper, PlayerInfo, ControlWrapper, OperateWrapper } from './style';

export default memo(function PlayBar() {
    // props/state
    const [currentTime, setCurrentTime] = useState(0); // 用于保存当前播放的时间
    const [progress, setProgress] = useState(0); // 滑块进度
    const [isChanging, setIsChanging] = useState(false); // 是否正在滑动
    const [isPlaying, setIsPlaying] = useState(false); // 是否正在播放

    // redux hook
    const dispatch = useDispatch();
    const { currentSong } = useSelector(
        (state) => ({
            currentSong: state.getIn(['player', 'currentSong']),
        }),
        shallowEqual
    );

    // other hook
    const audioRef = useRef();
    // 默认歌曲
    useEffect(() => {
        dispatch(getSongDetailAction(167876));
    }, [dispatch]);
    // 设置音频src
    useEffect(() => {
        audioRef.current.src = getPlayUrl(currentSong.id);
    }, [currentSong]);

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

    const playOrPause = () => {
        const play = (
            <span className="iconfont play_pause"
                onClick={playMusic}>
                &#xe61b;
            </span>
        );
        const pause = (<span className="iconfont play_pause"
            onClick={playMusic}>
            &#xea82;
        </span>)
        return isPlaying ? play : pause;
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
                        <NavLink to="/play" className="image">
                            <img src={getSizeImage(picUrl, 40, 40)} alt="" />
                        </NavLink>
                        <div className="info_block">
                            <div className="song_info">
                                <NavLink to="/play" className="song_name">
                                    {songName}
                                </NavLink>
                                <NavLink to="/search" className="singer_name">
                                    {singerName}
                                </NavLink>
                            </div>

                            <div className="icons">
                                <span className="iconfont">&#xe617;</span>
                                <span className="iconfont">&#xe639;</span>
                                <span className="iconfont">&#xe891;</span>
                            </div>
                        </div>
                    </PlayerInfo>
                </div>
                <div className="center">
                    <ControlWrapper>
                        <span className="iconfont order">&#xe68d;</span>
                        <span className="iconfont prev">&#xe79e;</span>
                        <span className="iconfont play_pause" onClick={playMusic}>
                            {playOrPause()}
                        </span>
                        <span className="iconfont next">&#xe79f;</span>
                        <span className="iconfont volume">&#xea0e;</span>
                    </ControlWrapper>
                </div>
                <div className="right">
                    <OperateWrapper>
                        <em className="now_time">{formatDate(currentTime, 'mm:ss')} </em>
                        <em className="total_time">
                            / {duration && formatDate(duration, 'mm:ss')}
                        </em>
                        <span className="iconfont">&#xe623;</span>
                    </OperateWrapper>
                </div>
            </div>
            <audio id="audio" ref={audioRef} onTimeUpdate={timeUpdate} preload="auto" />
        </PlayerBarWrapper>
    );
});
