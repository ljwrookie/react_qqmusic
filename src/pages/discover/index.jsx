import React, { memo } from 'react';
import { TopNav } from './style';
import { NavLink, Outlet } from 'react-router-dom';
import { discoverLinks } from '@/common/local-data';

export default memo(function Discover() {
    return (
        <>
            <TopNav>
                <div className="nav_title">音乐馆</div>
                <ul className="nav_list">
                    {discoverLinks.map((item) => {
                        return (
                            <li className="nav_item" key={item.title}>
                                <NavLink to={item.link}>
                                    {item.title}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </TopNav>
            <Outlet />
        </>
    );
});
