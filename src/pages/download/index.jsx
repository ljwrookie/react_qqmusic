import React, { memo } from 'react';
import { DownloadNav } from './style';
import { Result } from 'antd';
import { FormatPainterOutlined } from '@ant-design/icons';
export default memo(function Download() {
    return (
        <DownloadNav>
            <div className="nav_title">下载</div>
            <Result
                icon={<FormatPainterOutlined />}
                title="该页面还未实现!"
            />
        </DownloadNav>
    );
});
