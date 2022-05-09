import React, { memo } from 'react';
import { RecentNav } from './style';

export default memo(function Like() {
    return (
        <RecentNav>
            <div className="un-content">
                        <span className="iconfont">&#xe60d;</span>
                        <span> 待开发</span>
            </div>
        </RecentNav>
    );
});
