import React, { memo } from 'react';
import { RadioNav } from './style';

export default memo(function Radio() {
    return (
        <RadioNav>
            <div className="un-content">
                        <span className="iconfont">&#xe60d;</span>
                        <span> 待开发</span>
            </div>
        </RadioNav>
    );
});
