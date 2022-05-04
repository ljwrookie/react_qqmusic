import React, { memo } from 'react';
import { LocalSongNav } from './style';
import { Result } from 'antd';
import { FormatPainterOutlined } from '@ant-design/icons';
export default memo(function LocalSong() {
    return (
        <LocalSongNav>
            <div className="nav_title">本地歌曲</div>
            <Result
                icon={<FormatPainterOutlined />}
                title="该页面还未实现!"
            />
        </LocalSongNav>
    );
});
