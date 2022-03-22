import React, { memo } from 'react';
import { DownloadNav } from './style';
import { Skeleton } from 'antd';
export default memo(function Download() {
    return (
        <DownloadNav>
            <div className="nav_title">下载</div>
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
        </DownloadNav>
    );
});