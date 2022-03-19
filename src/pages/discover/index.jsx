import React, { memo, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { TopNav } from './style';
import { discoverLinks } from '@/common/local-data';

export default memo(function Discover() {
    useEffect(() => {
        window.addEventListener('scroll', function (e) {
            const nav = document.querySelector('.nav_list');
            if (window == null || nav == null) {
                return;
            } else if (window.pageYOffset >= nav.offsetTop) {
                nav.style.position = 'fixed';
                nav.style.top = '75px';
            } else {
                nav.style.position = 'static';
            }
        });
    }, []);

    return (
        <div>
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
        </div>
    );
});
