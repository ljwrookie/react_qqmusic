import React, { memo } from 'react';
import { OperateWrapper } from './style';
export default memo(function Operation() {
    return (
        <OperateWrapper>
            <em className="now_time">02:51 </em>
            <em className="total_time">/ 03:33</em>
            <span className="iconfont">&#xe623;</span>
        </OperateWrapper>
    );
});
