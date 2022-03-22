import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { SongWrapper } from './style';
import SongListItem from '@/components/song-item';
import { getSongListAction } from '../../store/actionCreators';
import { message } from 'antd';
import { useAddPlaylist } from '@/hooks/change-music';
import { getSongDetailAction } from '@/pages/player/store/actionCreators';
export default memo(function SearchSong() {
    const { playList } = useSelector(
        (state) => ({
            playList: state.getIn(['player', 'playList']),
        }),
        shallowEqual
    );
    const [keyword] = useSearchParams();
    const keywords = keyword.get('keywords');
    const { songs } = useSelector(
        (state) => ({
            songs: state.getIn(['search', 'songList']),
        }),
        shallowEqual
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSongListAction(keywords));
    }, [dispatch, keywords]);
    const addPlayList = useAddPlaylist(playList, message);
    const clickAll = (e) => {
        // 阻止超链接跳转
        e.preventDefault && e.preventDefault();
        // 阻止合成事件的冒泡
        e.stopPropagation();
        // 阻止与原生事件的冒泡
        e.nativeEvent.stopImmediatePropagation();
        // 获取歌曲详情,添加到播放列表
        const ids = songs.map((item) => {
            return item.id;
        });
        for (let id of ids) {
            // dispatch(getSongDetailAction(id));
            addPlayList(e, id);
        }
    };
    return (
        <SongWrapper>
            <div className="batch_operation">
                <div className="play_all" onClick={clickAll}>
                    <span className="iconfont">&#xea6d;</span>
                    播放全部
                </div>
                <div className="download_all">
                    <span className="iconfont">&#xe639;</span>下载
                </div>
                <div className="addlist_all">
                    <span className="iconfont">&#xe623;</span>
                    加入列表
                </div>
            </div>
            <div className="list_header">
                <div className="song">歌曲</div>
                <div className="singer">歌手</div>
                <div className="album">专辑</div>
                <div className="total_time">时长</div>
            </div>
            {songs &&
                songs.map((item) => {
                    const props = {
                        id: item.id,
                        name: item.name,
                        dt: item.dt,
                        album: item.al.name,
                        artist: item.ar[0].name,
                        alias: item.alia,
                    };
                    return (
                        <SongListItem
                            className="song_list"
                            key={item.id}
                            {...props}
                            lazyload="true"
                        />
                    );
                })}
        </SongWrapper>
    );
});
