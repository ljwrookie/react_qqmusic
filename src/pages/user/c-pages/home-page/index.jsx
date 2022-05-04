import React, { memo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getUserDetail } from '../../../../service/login';
import { HomePageWrapper } from './style';
const HomePage = memo(() => {
    const [userId, setUserId] = useSearchParams()
    const uid = userId.get('uid')
    const [userDetail, setUserDetail] = useState({})
    useEffect(() => {
        getUserDetail(uid).then((res) => {
            setUserDetail(res)
        })
    }, [uid])
    return (
        <HomePageWrapper>
            <div className="top-main">
                <div className="top-left">
                    <img src={userDetail.profile?.avatarUrl} alt='头像'/>
                </div>
                <div className="top-right">
                    <div className="top-right-top">
                        <div className="top-right-top-name">{userDetail.profile?.nickname}
                        </div>
                        <div className="top-right-top-level">lv{ userDetail.level}</div>
                    </div>
                    <div className="top-right-middle">暂无</div>
                    <div className="top-right-bottom">
                        <span>关注: {userDetail.profile?.follows}</span>
                        <span>粉丝: { userDetail.profile?.followeds}</span>
                    </div>
                </div>
            </div>
            <div className="bottom-main">

            </div>
        </HomePageWrapper>
    )
})

export default HomePage;