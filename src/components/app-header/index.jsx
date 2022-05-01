import React, { memo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import { ConsoleSqlOutlined, SearchOutlined } from '@ant-design/icons';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import Login from '../../pages/login';
import Search from 'antd/lib/transfer/search';
export default memo(function AppHeader() {
    let navigate = useNavigate();
    const changeTheme = () => {
        let mode = localStorage.getItem('MODE');

        if (mode === undefined || mode === 'DARK_MODE')
            localStorage.setItem('MODE', 'LIGHT_MODE');
        else localStorage.setItem('MODE', 'DARK_MODE');

        window.location.reload();
    };
    const inputRef = useRef();
    const showLogin = () => {
        document.querySelector('.lg-container').style.display =
            'flex';
    };
    const searchKeyword = (e) => {
        navigate(`/search/song?keywords=${e.target.value}`);
    };
    const pre = () => {
        navigate(-1, { replace: true });
    }
    const next = () => {
        navigate(1, { replace: true });
    }
    return (
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
                <span className='login-button' onClick={showLogin}>点击登录</span>
                <span className="iconfont toolbar">&#xe63a;</span>
                <span className="iconfont toolbar" onClick={changeTheme}>
                    &#xe650;
                </span>
                <span className="iconfont toolbar">&#xe6a9;</span>
            </HeaderRight>
        </HeaderWrapper>
    );
});
