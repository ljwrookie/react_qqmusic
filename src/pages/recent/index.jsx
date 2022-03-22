import React, { memo } from 'react';
import { RecentNav } from './style';
import { Skeleton } from 'antd';
export default memo(function Radio() {
    return (
        
            <RecentNav>
                <div className="nav_title">最近播放</div>
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
            </RecentNav>
        
    );
});