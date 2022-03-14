import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { getSizeImage, formatDate, getPlayUrl } from '@/utils/format-utils.js';
import { PlayerInfo } from './style';

export default memo(function Info() {
    return (
        <PlayerInfo>
            <NavLink to="/play" className="image">
                <img
                    src={getSizeImage(
                        'http://p1.music.126.net/1I1SSyqjt42ZBBchm4lCYA==/109951165665736798.jpg',
                        40
                    )}
                    alt=""
                />
            </NavLink>
            <div className="info_block">
                <NavLink to="/play" className="song_name text-nowrap">
                    半岛铁盒asdasd asd asdasda --周杰伦
                </NavLink>
                <div className="icons">
                    <span className="iconfont">&#xe617;</span>
                    <span className="iconfont">&#xe639;</span>
                    <span className="iconfont">&#xe891;</span>
                </div>
            </div>
        </PlayerInfo>
    );
});
