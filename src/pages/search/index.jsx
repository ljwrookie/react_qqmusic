import React, { memo, useEffect } from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { searchLinks } from '@/common/local-data';
import { TopNav } from './style';
export default memo(function Search() {
    const [keyword, setKeyword] = useSearchParams();
    const keywords = keyword.get('keywords');
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
        <>
            <TopNav>
                <div className="nav_title">搜索：{keywords}</div>
                <ul className="nav_list">
                    {searchLinks.map((item) => {
                        return (
                            <li className="nav_item" key={item.title}>
                                <NavLink
                                    to={
                                        item.link + '?keywords=' + keywords
                                    }
                                >
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
