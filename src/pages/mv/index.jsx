import React, { memo, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { TopNav } from './style';
import { mvLinks } from '@/common/local-data';

export default memo(function Mv() {
    useEffect(() => {
        window.addEventListener('scroll', function (e) {
            const nav = document.querySelector('.nav_list');
            // console.log(window.pageYOffset, nav.offsetTop)
            if (window.pageYOffset >= nav.offsetTop) {
                nav.style.position = 'fixed';
                nav.style.top = '75px';
            } else {
                nav.style.position = 'static';
            }
        });
    }, []);

    return (
        <>
            <TopNav>
                <div className="nav_title">视频</div>
                <ul className="nav_list" style={{zIndex: 2, width: '100%'} }>
                    {mvLinks.map((item) => {
                        return (
                            <li className="nav_item" key={item.title}>
                                <NavLink to={item.link}>{item.title}</NavLink>
                            </li>
                        );
                    })}
                </ul>
            </TopNav>
            <Outlet />
        </>
    );
});
