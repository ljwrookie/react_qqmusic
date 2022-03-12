import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { AppSiderNav, NavList } from './style';

import { siderLinks, siderSongLinks } from '@/common/local-data';
export default memo(function AppSider() {
    return (
        <AppSiderNav>
            <NavLink className="logo text-indent" to="/recommend">
                QQ音乐
            </NavLink>
            <NavList>
                <span className="list_title">在线音乐</span>
                {siderLinks &&
                    siderLinks.map((item, index) => {
                        return (
                            <NavLink className="list_item" key={item.title} to={item.link}>
                                {item.icon}
                                <em>{item.title}</em>
                            </NavLink>
                        );
                    })}
            </NavList>
            <NavList>
                <span className="list_title">我的音乐</span>
                {siderSongLinks &&
                    siderSongLinks.map((item, index) => {
                        return (
                            <NavLink className="list_item" key={item.title} to={item.link}>
                                {item.icon}
                                <em>{item.title}</em>
                            </NavLink>
                        );
                    })}
            </NavList>
        </AppSiderNav>
    );
});
