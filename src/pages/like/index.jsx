import React, { memo } from 'react';
import { LikeNav } from './style';
import { Skeleton } from 'antd';
export default memo(function Like() {
    return (
        
            <LikeNav>
                <div className="nav_title">我的喜欢</div>
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
            </LikeNav>
        
    );
});