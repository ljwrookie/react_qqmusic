import React, { memo } from 'react';

import { getSizeImage, getCount } from '@/utils/format-utils';

import { ThemeCoverWrapper } from './style';

export default memo(function ThemeCover(props) {

    const { info, url_name, playCount, width, height } = props; // const {url_name} =
    const urlList = url_name.split('.');
    const img_url = urlList.reduce((pre, cur) => {
        return (cur = pre[cur]);
    }, info);
    // console.log(urlList)
    return (
        <ThemeCoverWrapper width={width} height={height}>
            <div className="cover-top">
                <img className="image" src={getSizeImage(img_url, width, height)} alt={info.name} />
                <div className="mask"></div>
                <div className="cover">
                    {/* <div className="logo"><i className="iconfont icon">&#xe601;</i></div> */}
                    <i className="iconfont play">&#xea82;</i>
                    <div className="info" style={{ visibility: playCount ? 'visible' : 'hidden' }}>
                        <span>
                            <i className="iconfont listen">&#xe718;</i>
                            {getCount(info.playCount)}
                        </span>
                    </div>
                </div>
            </div>
            <div className="cover-bottom">{info.name}</div>
        </ThemeCoverWrapper>
    );
});

