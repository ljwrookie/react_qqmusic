import React, { memo } from 'react';
import { DiscoverNewWrapper } from './style';
import { NavLink, Outlet } from 'react-router-dom';
export default memo(function New() {
    return (
        <div>
            <DiscoverNewWrapper>
                <div className="switch_part">
                    <NavLink to={'/discover/new/songs'} className="songs">
                        新歌速递
                    </NavLink>
                    <NavLink to={'/discover/new/album'} className="album">
                        新碟上架
                    </NavLink>
                </div>
            </DiscoverNewWrapper>
            <Outlet />
        </div>
    );
});
