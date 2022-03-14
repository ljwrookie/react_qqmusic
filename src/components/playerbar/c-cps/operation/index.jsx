import React, { memo } from 'react';
import { OperateWrapper } from './style';
export default memo(function Operation() {
    return (
        <OperateWrapper>
            <em className="time_per">02:51/03:33</em>
            <span className="iconfont">&#xe623;</span>
        </OperateWrapper>
    );
});
