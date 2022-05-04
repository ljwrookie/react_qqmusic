import React, { memo } from 'react';
import { RecentNav } from './style';
import { Result } from 'antd';
import { FormatPainterOutlined } from '@ant-design/icons';
export default memo(function Radio() {
    return (
        <RecentNav>
            <div className="nav_title">最近播放</div>
            <Result
                icon={<FormatPainterOutlined />}
                title="该页面还未实现!"
            />
        </RecentNav>
    );
});
