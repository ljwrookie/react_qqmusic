import React, { memo } from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
    getPlaylistDetailAction,
} from './store/actionCreator';
import { getLoginStatusAction, getLoginUserPlaylistAction } from '../user/store/actionCreator';
import { message } from 'antd';
import {getSizeImage} from '@/utils/format-utils'
import { PlaylistWrapper } from './style';
import { subscribePlaylist } from '../../service/user';
export default  memo(function Playlist(){
    const [playlistId, setPlaylistId] = useSearchParams();
    const id = playlistId.get('id');
    const dispatch = useDispatch();
    const { playlistDetail, loginStatus, loginUserPlaylist } = useSelector(
        (state) => ({
            playlistDetail: state.getIn(['playlist', 'playlistDetail']),
            loginStatus: state.getIn(['user', 'loginStatus']),
            loginUserPlaylist: state.getIn(['user', 'loginUserPlaylist']),
        }),
        shallowEqual
    );
    useEffect(() => {
        dispatch(getPlaylistDetailAction(id));
        dispatch(getLoginStatusAction());
        dispatch(getLoginUserPlaylistAction());
    }, [dispatch, id]);
    const subscribe = ()=>{
        subscribePlaylist(1,id).then((res)=>{
            
            dispatch(getLoginUserPlaylistAction());
            message.success({
                content:
                    '收藏成功',
                style: {
                    marginTop: '5vh',
                    borderRadius: '5px',
                },
            });
        })
    }

    
    const cancelSubscribe = ()=>{
        subscribePlaylist(2,id).then((res)=>{
            
            dispatch(getLoginUserPlaylistAction());
            message.success({
                content:
                    '取消收藏成功',
                style: {
                    marginTop: '5vh',
                    borderRadius: '5px',
                },
            });
        })
    }
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
                            {loginUserPlaylist.filter(item=>item.userId == loginStatus.profile.userId).filter(item=>item.id == id).length == 1 ? 
                            (<span className="iconfont">&#xe607; 分享</span> ): 
                            loginUserPlaylist.filter(item=>item.userId != loginStatus.profile.userId).filter(item=>item.id == id).length == 1 ?
                            <span className="iconfont" onClick={cancelSubscribe} style={{color: '#ff6a6a'}}>&#xe761; 已收藏</span>:
                            <span className="iconfont" onClick={subscribe}>&#xe761; 收藏</span>
                             }
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

