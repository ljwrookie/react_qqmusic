import React, { memo } from 'react';
import { RecentNav } from './style';
import { Result } from 'antd';

export default memo(function Like() {
    return (
        <RecentNav>
            {/* <div className="nav_title">本地歌曲</div> */}
            <Result status="info" title="代开发" subTitle="功能尚未实现" />
        </RecentNav>
    );
});
