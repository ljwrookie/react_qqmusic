import React, { memo } from 'react';
import { ControlWrapper } from './style';

export default memo(function Control() {
    return (
        <ControlWrapper>
            <span className="iconfont order">&#xe68d;</span>
            <span className="iconfont prev">&#xe79e;</span>
            <span className="iconfont play_pause">&#xea82;</span>
            <span className="iconfont next">&#xe79f;</span>
            <span className="iconfont volume">&#xea0e;</span>
        </ControlWrapper>
    );
});
