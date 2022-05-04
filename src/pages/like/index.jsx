import React, { memo } from 'react';
import { LikeNav } from './style';
import { Result } from 'antd';
import { FormatPainterOutlined } from '@ant-design/icons';
export default memo(function Like() {
    return (
        <LikeNav>
            <div className="nav_title">我的喜欢</div>
            <Result
                icon={<FormatPainterOutlined />}
                title="该页面还未实现!"
            />
        </LikeNav>
    );
});
