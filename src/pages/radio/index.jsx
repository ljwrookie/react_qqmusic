import React, { memo } from 'react';
import { RadioNav } from './style';
import { Result } from 'antd';
import { FormatPainterOutlined } from '@ant-design/icons';
export default memo(function Radio() {
    return (
        <RadioNav>
            <div className="nav_title">电台</div>
            <Result
                icon={<FormatPainterOutlined />}
                title="该页面还未实现!"
            />
        </RadioNav>
    );
});
