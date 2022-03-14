import React, { memo } from 'react';
import { Slider } from 'antd';
import Info from './c-cps/info';
import Control from './c-cps/control';
import Operation from './c-cps/operation';

import { PlayerBarWrapper } from './style';

export default memo(function PlayBar() {
    return (
        <PlayerBarWrapper>
            <Slider defaultValue={0} min={0} max={100} />
            <div className="control">
                <div className="left">
                    <Info />
                </div>
                <div className="center">
                    <Control />
                </div>
                <div className="right">
                    <Operation />
                </div>
            </div>
        </PlayerBarWrapper>
    );
});
