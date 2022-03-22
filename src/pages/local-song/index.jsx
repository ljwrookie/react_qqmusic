import React, { memo } from 'react';
import { LocalSongNav } from './style';
import { Skeleton } from 'antd';
export default memo(function LocalSong() {
    return (
        <LocalSongNav>
            <div className="nav_title">本地歌曲</div>
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
        </LocalSongNav>
    );
});