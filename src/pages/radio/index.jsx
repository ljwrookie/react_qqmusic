import React, { memo } from 'react';
import { RadioNav } from './style';
import { Skeleton } from 'antd';
export default memo(function Radio() {
    return (
        
            <RadioNav>
                <div className="nav_title">电台</div>
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
            </RadioNav>
        
    );
});