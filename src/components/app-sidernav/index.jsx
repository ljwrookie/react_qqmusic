import React, { memo, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
    getLoginStatusAction,
    getLoginUserPlaylistAction,
} from '../../pages/user/store/actionCreator';
import { AppSiderNav, NavList } from './style';

import { siderLinks, siderSongLinks } from '@/common/local-data';

export default memo(function AppSider() {
    const dispatch = useDispatch();
    const [showCreatePlaylist, setShowCreatePlaylist] = useState(true);
    const [showCollectionPlaylist, setShowCollectionPlaylist] =
        useState(true);
    const { loginStatus, loginUserPlaylist } = useSelector(
        (state) => ({
            loginStatus: state.getIn(['user', 'loginStatus']),
            loginUserPlaylist: state.getIn(['user', 'loginUserPlaylist']),
        }),
        shallowEqual
    );
    useEffect(() => {
        dispatch(getLoginStatusAction());
        dispatch(getLoginUserPlaylistAction());
    }, []);
    const toggleShowCreatePlaylist = () => {
        setShowCreatePlaylist(!showCreatePlaylist);
    };
    const toggleShowCollectionPlaylist = () => {
        setShowCollectionPlaylist(!showCollectionPlaylist);
    };
    return (
        <AppSiderNav>
            <NavLink className="logo text-indent" to="/recommend">
                QQ音乐
            </NavLink>
            <NavList>
                <span className="list_title text-indent">在线音乐</span>
                {siderLinks &&
                    siderLinks.map((item, index) => {
                        return (
                            <NavLink
                                className="list_item"
                                key={item.title}
                                to={item.link}
                            >
                                {item.icon}
                                <em>{item.title}</em>
                            </NavLink>
                        );
                    })}
                    {
                        loginStatus.profile !== null ? 
                        <NavLink className="list_item" to="/personalfm"><span className='iconfont'>&#xe72c;</span><em>私人</em></NavLink>:
                        <></>
                    }
            </NavList>
            <NavList>
                <span className="list_title">我的音乐</span>
                {siderSongLinks &&
                    siderSongLinks.map((item, index) => {
                        return (
                            <NavLink
                                className="list_item"
                                key={item.title}
                                to={item.link}
                            >
                                {item.icon}
                                <em>{item.title}</em>
                            </NavLink>
                        );
                    })}
            </NavList>
            {loginStatus.profile !== null ? (
                <>
                    {loginUserPlaylist.filter(
                        (item) => item.userId == loginStatus.profile.userId
                    ).length !== 0 ? (
                        <NavList className="playlist">
                            <div className="playlist-title">
                                <div className="title-left">
                                    <span className="list_title">
                                        <Link
                                            to={`/userdetail?uid=${loginStatus.profile.userId}`}
                                        >
                                            创建的歌单
                                        </Link>
                                    </span>
                                </div>
                                <div className="title-right">
                                    <span className="iconfont">
                                        &#xeb78;
                                    </span>
                                    {showCreatePlaylist ? (
                                        <span
                                            className="iconfont"
                                            onClick={
                                                toggleShowCreatePlaylist
                                            }
                                        >
                                            &#xe622;
                                        </span>
                                    ) : (
                                        <span
                                            className="iconfont"
                                            onClick={
                                                toggleShowCreatePlaylist
                                            }
                                        >
                                            &#xe642;
                                        </span>
                                    )}
                                </div>
                            </div>
                            {showCreatePlaylist &&
                                loginUserPlaylist
                                    .filter(
                                        (item) =>
                                            item.userId ==
                                            loginStatus.profile.userId
                                    )
                                    .map((item) => {
                                        return (
                                            <Link
                                                className="list_item text-nowrap"
                                                key={item.id}
                                                to={`/playlist/detail?id=${item.id}`}
                                            >
                                                <em>{item.name}</em>
                                            </Link>
                                        );
                                    })}
                        </NavList>
                    ) : (
                        <></>
                    )}
                    {loginUserPlaylist.filter(
                        (item) => item.userId != loginStatus.profile.userId
                    ).length !== 0 ? (
                        <NavList className="playlist">
                            <div className="playlist-title">
                                <span className="list_title">
                                    <Link
                                        to={`/userdetail?uid=${loginStatus.profile.userId}`}
                                    >
                                        {' '}
                                        收藏的歌单
                                    </Link>
                                </span>
                                {showCollectionPlaylist ? (
                                    <span
                                        className="iconfont"
                                        onClick={
                                            toggleShowCollectionPlaylist
                                        }
                                    >
                                        &#xe622;
                                    </span>
                                ) : (
                                    <span
                                        className="iconfont"
                                        onClick={
                                            toggleShowCollectionPlaylist
                                        }
                                    >
                                        &#xe642;
                                    </span>
                                )}
                            </div>
                            {showCollectionPlaylist &&
                                loginUserPlaylist
                                    .filter(
                                        (item) =>
                                            item.userId !=
                                            loginStatus.profile.userId
                                    )
                                    .map((item) => {
                                        return (
                                            <Link
                                                className="list_item text-nowrap"
                                                key={item.id}
                                                to={`/playlist/detail?id=${item.id}`}
                                            >
                                                <em>{item.name}</em>
                                            </Link>
                                        );
                                    })}
                        </NavList>
                    ) : (
                        <></>
                    )}
                </>
            ) : (
                <></>
            )}
        </AppSiderNav>
    );
});
