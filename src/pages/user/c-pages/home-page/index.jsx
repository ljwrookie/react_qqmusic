import React, { memo, useState, useEffect } from 'react'
import { useSearchParams, NavLink, Link, Outlet } from 'react-router-dom'
import {
    getUserDetail,
    getLoginUserInfo,
} from '@/service/user';
import { getSizeImage } from '@/utils/format-utils';
import { HomePageWrapper } from './style';
const HomePage = memo(() => {
    const [userId, setUserId] = useSearchParams()
    const uid = userId.get('uid')
    const [userDetail, setUserDetail] = useState({})
    const [loginUserInfo, setLoginUserInfo] = useState({})
    useEffect(() => {
        getUserDetail(uid).then((res) => {
            setUserDetail(res)
        })
        getLoginUserInfo().then((res) => {
            console.log(res)
            setLoginUserInfo(res)
        })
    }, [uid])
    return (
        <HomePageWrapper>
            <div className="top-main">
                <div className="top-left">
                    <img
                        src={getSizeImage(
                            userDetail.profile?.avatarUrl,
                            300,
                            300
                        )}
                        alt="头像"
                    />
                </div>
                <div className="top-right">
                    <div className="top-right-top">
                        <div className="top-right-top-name">
                            {userDetail.profile?.nickname}
                        </div>
                        <div className="top-right-top-level">
                            lv{userDetail.level}
                        </div>
                    </div>
                    <div className="top-right-middle">
                        {userDetail.profile?.signature === ''
                            ? '暂无'
                            : userDetail.profile?.signature}
                    </div>
                    <div className="top-right-bottom">
                        <span><Link to={`/userdetail/follow?uid=${uid}`}>关注: {userDetail.profile?.follows}</Link></span>
                        <span><Link to={`/userdetail/followed?uid=${uid}`}>粉丝: {userDetail.profile?.followeds}</Link></span>
                    </div>
                </div>
            </div>
            <ul className="user-nav">
                <li className="nav-item">
                    <NavLink to={`/userdetail/love?uid=${uid}`}>
                        我喜欢
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to={`/userdetail/createplaylist?uid=${uid}&l=${loginUserInfo.createdPlaylistCount}`}
                    >
                        创建的歌单{loginUserInfo.createdPlaylistCount}
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to={`/userdetail/collectionplaylist?uid=${uid}&l=${loginUserInfo.createdPlaylistCount}`}
                    >
                        收藏的歌单{loginUserInfo.subPlaylistCount}
                    </NavLink>
                </li>
            </ul>
            <div className="bottom-main">
                <Outlet />
            </div>
        </HomePageWrapper>
    );
})

export default HomePage;