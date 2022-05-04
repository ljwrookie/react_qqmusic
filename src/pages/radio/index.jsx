import React, { memo } from 'react';
import { RadioNav } from './style';
import { Result } from 'antd';

export default memo(function Radio() {
    return (
        <RadioNav>
            {/* <div className="nav_title">本地歌曲</div> */}
            <Result status="info" title="代开发" subTitle="功能尚未实现" />
        </RadioNav>
    );
});
