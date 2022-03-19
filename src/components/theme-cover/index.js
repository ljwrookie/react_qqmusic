import React, { memo } from 'react';

import { getSizeImage, getCount } from '@/utils/format-utils';

import { ThemeCoverWrapper } from './style';

export default memo(function ThemeCover(props) {
    const { name, singer, img_url, playCount, width, height } = props; // const {url_name} =
    // console.log(urlList)
    return (
        <ThemeCoverWrapper width={width} height={height}>
            <div className="cover-top">
                <img
                    className="image"
                    src={getSizeImage(img_url, height, width)}
                    alt={name}
                />
                <div className="mask"></div>
                <div className="cover">
                    {/* <div className="logo"><i className="iconfont icon">&#xe601;</i></div> */}
                    <i className="iconfont play">&#xea82;</i>
                    <div
                        className="info"
                        style={{
                            visibility: playCount ? 'visible' : 'hidden',
                        }}
                    >
                        <span>
                            <i className="iconfont listen">&#xe718;</i>
                            {getCount(playCount)}
                        </span>
                    </div>
                </div>
            </div>
            <div className="cover-bottom text-nowrap ">{name}</div>
            <div className="singer_name">{singer}</div>
        </ThemeCoverWrapper>
    );
});
