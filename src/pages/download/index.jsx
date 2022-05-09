import React, { memo } from 'react';
import { DownloadNav } from './style';

export default memo(function Download() {
    return (
        <DownloadNav>
           <div className="un-content">
                        <span className="iconfont">&#xe60d;</span>
                        <span> 待开发</span>
            </div>
        </DownloadNav>
    );
});
