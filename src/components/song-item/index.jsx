import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useAddPlaylist } from '@/hooks/change-music';
import {
    getSongDetailAction,
    changeFirstLoad,
} from '@/pages/player/store/actionCreators';
import { formatDate } from '@/utils/format-utils';
import { SongItem } from './style';
import { message } from 'antd';
export default memo(function SongListItem(props) {
    // const props = {
    //     id: item.id,
    //     name: item.name,
    //     dt: item.duration,
    //     album: item.album.name,
    //     artist: item.artists[0].name,
    // };
    const { id, name, dt, album, artist, alias } = props;
    const duration = formatDate(dt, 'mm:ss');
    const dispatch = useDispatch();
    const { playlist } = useSelector(
        (state) => ({
            playlist: state.getIn(['player', 'playList']),
        }),
        shallowEqual
    );
    // other function
    const playMusic = (e, item) => {
        // 如果不跳转,那么组织超链接的默认行为
        // e.preventDefault();
        // // 阻止合成事件的冒泡
        // e.stopPropagation();
        // 阻止与原生事件的冒泡
        e.nativeEvent.stopImmediatePropagation();
        // 派发action 歌曲详情
        dispatch(getSongDetailAction(item));
        // 不是首次加载,播放音乐
        dispatch(changeFirstLoad(false));
    };
    const addPlaylist = useAddPlaylist(playlist, message);

    return (
        <SongItem
            onClick={(e) => {
                playMusic(e, id);
            }}
        >
            <div className="song_name">
                <div className="first_line">
                    <div className="name text-nowrap">
                        <span className="iconfont">&#xe761;</span> {name}
                    </div>
                    <div className="operator">
                        <span
                            className="iconfont"
                            onClick={(e) => {
                                playMusic(e, id);
                            }}
                        >
                            &#xea6d;
                        </span>
                        <span
                            className="iconfont"
                            onClick={(e) => addPlaylist(e, id)}
                        >
                            &#xe602;
                        </span>
                        <span className="iconfont">&#xe639;</span>
                    </div>
                </div>
                <div className="alias text-nowrap">{alias}</div>
            </div>
            <div className="singer">{artist}</div>
            <div className="album text-nowrap">{album}</div>
            <div className="total_time">{duration}</div>
        </SongItem>
    );
});
