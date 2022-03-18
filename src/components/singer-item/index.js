import React, { memo } from 'react';
import { getSizeImage } from '@/utils/format-utils.js';
import { SingerItemWrapper } from './style';
export default memo(function SingerListItem(props) {
    const { info } = props;
    return (
        <SingerItemWrapper>
            <img alt="头像" src={getSizeImage(info.picUrl, 160, 160)} />
            <div className="name text-nowrap">{info.name}</div>
            <div className="info text-nowrap">
                专辑：{info.albumSize} 视频：{info.mvSize}
            </div>
        </SingerItemWrapper>
    );
});
