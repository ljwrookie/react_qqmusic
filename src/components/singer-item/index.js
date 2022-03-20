import React, { memo } from 'react';
import { getSizeImage } from '@/utils/format-utils.js';
import { SingerItemWrapper } from './style';
export default memo(function SingerListItem(props) {
    const { info } = props;
    const clickItem = (keywords) => {
        return () => {
            window.location.href = `/search/song?keywords=${keywords}`;
        };
    };
    return (
        <SingerItemWrapper>
            <div onClick={clickItem(info.name)}>
                <img
                    alt="头像"
                    src={getSizeImage(info.picUrl, 160, 160)}
                />
            </div>

            <div
                className="name text-nowrap"
                onClick={clickItem(info.name)}
            >
                {info.name}
            </div>
            <div className="info text-nowrap">
                专辑：{info.albumSize}
                {info.mvSize
                    ? ` 视频：${info.mvSize}`
                    : ` 单曲：${info.musicSize}`}
            </div>
        </SingerItemWrapper>
    );
});
