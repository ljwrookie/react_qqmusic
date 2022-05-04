import React, { memo, useRef, useState, useEffect } from 'react';
import {getSizeImage} from '@/utils/format-utils'
import { useNavigate, Link } from 'react-router-dom';
import { Input, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight,
    LoginWrapper,
} from './style';
import {
    getLoginStatus,
    getLogout,
} from '../../service/login';
import {
    getLoginUserInfo,
    getSignIn,
    getUserDetail,
} from '../../service/user';

import Login from '../../pages/login';

import { DownOutlined } from '@ant-design/icons';


export const LoginContext = React.createContext(null);

export default memo(function AppHeader(props) {
    const [theme, setTheme] = props.theme;
    const [isShow, setIsShow] = useState(false);

    const [loginStatus, setLoginStatus] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [userDetail, setUserDetail] = useState(null);

    const forLogin = async () => {
        const res = await getLoginStatus();
        console.log(res);
        setLoginStatus(res.data);
        const res1 = await getLoginUserInfo();
        console.log(res1);
        setUserInfo(res1);

        const res3 = await getUserDetail(res.data.profile?.userId);
        console.log(res3);
        setUserDetail(res3);
    }

    useEffect(() => {
        forLogin();
    }, [isShow]);
    const [showDrop, setShowDrop] = useState(false);
    const [fullscreen, setFullScreen] = useState(false);
    let navigate = useNavigate();
    const changeTheme = () => {
        setTheme(!theme);
    };
    const inputRef = useRef();
    const showLogin = () => {
        setIsShow(true);
    };
    const searchKeyword = (e) => {
        navigate(`/search/song?keywords=${e.target.value}`);
    };
    function troggleFullScreen() {
        if (fullscreen) {
            //退出全屏
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        } else {
            var element = document.documentElement;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullScreen();
            }
        }
        setFullScreen(!fullscreen);
    }

    const pre = () => {
        navigate(-1, { replace: true });
    };
    const next = () => {
        navigate(1, { replace: true });
    };
    const logout = async () => {
        const res = await getLogout();
        if (res.code === 200) {
            setLoginStatus(null);
            setShowDrop(false);
            message.success({
                content:
                    '退出成功',
                style: {
                    marginTop: '5vh',
                    borderRadius: '5px',
                },
            });
        }
    };
    //关闭下拉栏
    const closeDrop = () => {
        setShowDrop(false);
    };
    const signIn = async () => {
        const res = await getSignIn();
        console.log(res)
        if (res.code === 200) {
            message.success({
                content:
                    '签到成功',
                style: {
                    marginTop: '5vh',
                    borderRadius: '5px',
                },
            });
        }
    };
    return (
        <>
            <HeaderWrapper>
                <HeaderLeft>
                    <div className="prev_next">
                        <span onClick={pre} className="iconfont">
                            &#xe603;
                        </span>
                        <em>&nbsp;&nbsp;&nbsp;&nbsp;</em>
                        <span onClick={next} className="iconfont">
                            &#xe61f;
                        </span>
                    </div>
                    <Input
                        ref={inputRef}
                        className="search "
                        placeholder="搜索音乐"
                        prefix={<SearchOutlined />}
                        bordered={false}
                        allowClear={true}
                        onPressEnter={(e) => searchKeyword(e)}
                    />
                </HeaderLeft>
                <HeaderRight>
                    {loginStatus &&
                    loginStatus.code === 200 &&
                    loginStatus.account !== null ? (
                        <>
                            <Link
                                to={`/userdetail/love?uid=${loginStatus.profile.userId}`}
                            >
                                <img
                                    src={
                                        getSizeImage(loginStatus?.profile
                                            ?.avatarUrl, 60,60)
                                    }
                                />
                            </Link>
                            <div className="drop-down">
                                <div
                                    className="nickname"
                                    onClick={() => setShowDrop(!showDrop)}
                                >
                                    <span className="text-nowrap">
                                        {loginStatus.profile?.nickname}
                                    </span>
                                    <DownOutlined
                                        style={{ fontSize: '10px' }}
                                    />
                                </div>
                                {showDrop ? (
                                    <div className="drop-bottom">
                                        <div className="drop-sore">
                                            <div>
                                                <span className="sore-number">
                                                    {userDetail.level}
                                                </span>
                                                级
                                            </div>
                                            <button onClick={signIn}>
                                                立即签到得积分
                                            </button>
                                        </div>
                                        <div className="drop-list">
                                            <div onClick={closeDrop}>
                                                <Link
                                                    to={`/userdetail/love?uid=${loginStatus.profile.userId}`}
                                                >
                                                    歌单
                                                    {
                                                        userDetail.profile
                                                            .playlistCount
                                                    }
                                                </Link>
                                            </div>
                                            <div onClick={closeDrop}>
                                                <Link
                                                    to={`/userdetail/follow?uid=${loginStatus.profile.userId}`}
                                                >
                                                    关注
                                                    {
                                                        userDetail.profile
                                                            .follows
                                                    }
                                                </Link>
                                            </div>
                                            <div onClick={closeDrop}>
                                                <Link
                                                    to={`/userdetail/followed?uid=${loginStatus.profile.userId}`}
                                                >
                                                    粉丝
                                                    {
                                                        userDetail.profile
                                                            .followeds
                                                    }
                                                </Link>
                                            </div>
                                        </div>
                                        {/* 分割线 */}
                                        <div className="drop-line"></div>
                                        <div className="drop-logout">
                                            <div onClick={closeDrop}>
                                                <Link
                                                    to={`/userdetail/love?uid=${loginStatus.profile.userId}`}
                                                >
                                                    个人主页
                                                </Link>
                                            </div>
                                            <div></div>
                                            <div onClick={logout}>
                                                退出登录
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </>
                    ) : (
                        <span className="login-button" onClick={showLogin}>
                            点击登录
                        </span>
                    )}
                    <span className="iconfont toolbar">&#xe63a;</span>
                    <span
                        className="iconfont toolbar"
                        onClick={changeTheme}
                    >
                        &#xe650;
                    </span>
                    {fullscreen ? (
                        <span
                            className="iconfont toolbar"
                            onClick={() => troggleFullScreen()}
                        >
                            &#xe633;
                        </span>
                    ) : (
                        <span
                            className="iconfont toolbar"
                            onClick={() => troggleFullScreen()}
                        >
                            &#xe651;
                        </span>
                    )}
                </HeaderRight>
            </HeaderWrapper>
            {isShow ? (
                <LoginContext.Provider value={[isShow, setIsShow]}>
                    <LoginWrapper>
                        <Login />
                    </LoginWrapper>
                </LoginContext.Provider>
            ) : (
                <></>
            )}
        </>
    );
});
