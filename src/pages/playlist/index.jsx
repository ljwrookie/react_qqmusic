import React, { memo } from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
    getPlaylistDetailAction,
    getPlaylistAllSongsAction,
} from './store/actionCreator';
import {getSizeImage} from '@/utils/format-utils'
import { PlaylistWrapper } from './style';

export default  memo(function Playlist(){
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
        playlistDetail &&
        playlistDetail.creator &&
        playlistDetail.creator.nickname;
    const avatarUrl =
        playlistDetail &&
        playlistDetail.creator &&
        playlistDetail.creator.avatarUrl;
    const tags =
        playlistDetail &&
        playlistDetail.tags
    return (
        <PlaylistWrapper>
            <div className="top-detail">
                <div className="top-left">
                    <img
                        src={getSizeImage(
                            playlistDetail.coverImgUrl,
                            160,
                            160
                        )}
                        alt={playlistDetail.name}
                    />
                </div>
                <div className="top-right">
                    <div className="playlist-name">
                        {playlistDetail.name}
                    </div>
                    <div className="creator">
                        <img
                            src={getSizeImage(avatarUrl, 25, 25)}
                            alt={nickname}
                        ></img>
                        <span>{nickname}</span>

                        {tags &&
                            tags.map((item) => {
                                return (
                                    <span key={item.id}>
                                        {'#' + item}
                                    </span>
                                );
                            })}
                    </div>

                    <div className="description text-nowrap">
                        {playlistDetail.description}
                    </div>
                    <div className="btns">
                        <button className="btn play">
                            <span className="iconfont">
                                &#xea6d; 播放全部
                            </span>
                        </button>
                        <button className="btn love">
                            <span className="iconfont">&#xe761;</span> 收藏
                        </button>
                        <button className="btn more">
                            <span className="iconfont">&#xe63b;</span>
                        </button>
                    </div>
                </div>
            </div>
            <ul className="playlist-nav">
                <li className="nav-item">
                    <NavLink to={`/playlist/detail?id=${id}`}>
                        歌曲{playlistDetail.trackCount}
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/playlist/comment?id=${id}`}>
                        评论{playlistDetail.commentCount}
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/playlist/subscriber?id=${id}&total=${playlistDetail.subscribedCount}`}>
                        收藏{playlistDetail.subscribedCount}
                    </NavLink>
                </li>
            </ul>
            <Outlet/>
        </PlaylistWrapper>
    );
});

