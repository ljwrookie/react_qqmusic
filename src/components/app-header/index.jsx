import React, { memo, useRef } from 'react';
import { Input } from 'antd';
import { ConsoleSqlOutlined, SearchOutlined } from '@ant-design/icons';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import Login from '../../pages/login'
export default memo(function AppHeader() {
    
    const changeTheme = ()=>{
        let mode = localStorage.getItem("MODE");
        
        if(mode === undefined || mode === 'DARK_MODE')
            localStorage.setItem("MODE", "LIGHT_MODE");
        else localStorage.setItem("MODE", "DARK_MODE");
            
        window.location.reload();
        
        
    }
    const inputRef = useRef();
    return (
        <HeaderWrapper>
            <HeaderLeft>
                <div className="prev_next">
                    <span className="iconfont">&#xe603;</span>
                    <em>&nbsp;&nbsp;&nbsp;&nbsp;</em>
                    <span className="iconfont">&#xe61f;</span>
                </div>
                <Input
                    ref={inputRef}
                    className="search "
                    placeholder="搜索音乐"
                    prefix={<SearchOutlined />}
                    bordered={false}
                    allowClear={true}
                />
            </HeaderLeft>
            <HeaderRight>
                {/* <a href="/login" className="login">
                    点击登录
                </a> */}
                <Login/>
                <span className="iconfont toolbar">&#xe63a;</span>
                <span className="iconfont toolbar" onClick={changeTheme}>&#xe650;</span>
                <span className="iconfont toolbar">&#xe6a9;</span>
            </HeaderRight>
        </HeaderWrapper>
    );
});
