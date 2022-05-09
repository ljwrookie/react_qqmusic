import React, { memo } from 'react';
import { LocalSongNav } from './style';


export default memo(function LocalSong() {
    return (
        <LocalSongNav>
            <div className="un-content">
                        <span className="iconfont">&#xe60d;</span>
                        <span> 待开发</span>
            </div>
        </LocalSongNav>
    );
});
