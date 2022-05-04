import React, { memo, useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight,
    LoginWrapper,
} from './style';
import Login from '../../pages/login';

export const LoginContext = React.createContext(null);

export default memo(function AppHeader(props) {
    const [theme, setTheme] = props.theme;
    const [isShow, setIsShow] = useState(false);
    const [fullscreen, setFullScreen] = useState(false);
    let navigate = useNavigate();
    const changeTheme = () => {
        if (theme) localStorage.setItem('Dark', false);
        else localStorage.setItem('Dark', true);
        // window.location.reload();
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
                    {/* <a href="/login" className="login">
                    点击登录
                </a> */}
                    <span className="login-button" onClick={showLogin}>
                        点击登录
                    </span>
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
