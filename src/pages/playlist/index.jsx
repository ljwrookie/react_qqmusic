import React, { memo } from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
    getPlaylistDetailAction,
    getPlaylistAllSongsAction,
} from './store/actionCreator';
import { PlaylistWrapper } from './style';
const Playlist = memo(() => {
    const [playlistId, setPlaylistId] = useSearchParams();
    const id = playlistId.get('id');
    const dispatch = useDispatch();
    const { playlistDetail, playlistAllSongs } = useSelector(
        (state) => ({
            playlistDetail: state.getIn(['playlist', 'playlistDetail']),
            playlistAllSongs: state.getIn([
                'playlist',
                'playlistAllSongs',
            ]),
        }),
        shallowEqual
    );
    useEffect(() => {
        dispatch(getPlaylistDetailAction(id));
        dispatch(getPlaylistAllSongsAction(id));
    }, [dispatch, id]);
    const nickname =
        playlistDetail.creator && playlistDetail.creator.nickname;
    return (
        <PlaylistWrapper>
            <div className="top-detail">
                <div className="top-left">
                    <img
                        src={playlistDetail.coverImgUrl}
                        alt={playlistDetail.name}
                    />
                </div>
                <div className="top-right">
                    <div className="playlist-name">playlistName</div>
                    <div>
                        <span>{nickname}</span>
                        <div>{playlistDetail.tags}</div>
                    </div>

                    <div>{playlistDetail.description}</div>
                    <div>
                        <button>播放全部</button>
                        <button>收藏</button>
                        <button>...</button>
                    </div>
                </div>
            </div>
            <div className="playlist-nav">
                <NavLink to={`/playlist/detail?id=${id}`}>
                    歌曲{playlistDetail.trackCount}
                </NavLink>
                <NavLink to={`/playlist/comment?id=${id}`}>
                    评论{playlistDetail.commentCount}
                </NavLink>
                <NavLink to={`/playlist/subscriber?id=${id}`}>
                    收藏者{playlistDetail.subscribedCount4}
                </NavLink>
            </div>
            <Outlet />
        </PlaylistWrapper>
    );
});

export default Playlist;
