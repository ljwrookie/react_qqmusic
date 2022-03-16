import React, { memo } from 'react';

import { getSizeImage, getCount } from '@/utils/format-utils';
import { Link } from 'react-router-dom';
import { VideoCoverWrapper } from './style';
import { nanoid } from 'nanoid';
export default memo(function VideoCover(props) {

    const { info, url_name, playCount, width, height } = props; // const {url_name} =
    const urlList = url_name.split('.');
    const img_url = urlList.reduce((pre, cur) => {
        return (cur = pre[cur]);
    }, info);
    // console.log(urlList)
    return (
        <VideoCoverWrapper width={width} height={height}>
            <div className="cover-top">
                <img className="image" src={getSizeImage(img_url, width, height)} alt={info.name} />
                <div className="mask"></div>
                <div className="cover">
                    {/* <div className="logo"><i className="iconfont icon">&#xe601;</i></div> */}
                    <i className="iconfont play">&#xea82;</i>
                    <div className="info" style={{ visibility: playCount ? 'visible' : 'hidden' }}>
                        <span>
                            <i className="iconfont listen">&#xe621;</i>
                            {getCount(info.playCount)}
                        </span>
                    </div>
                </div>
            </div>
            <div className="cover-bottom text-nowrap ">{info.name}</div>
            <div className="all_name text-nowrap">
                {info.artists.map(
                    (artist) => {
                        return (
                            <Link
                                key={nanoid()}
                                className="artist"
                                to="#"
                            >
                                {
                                    artist.name
                                }
                            </Link>
                        );
                    }
                )}
            </div>
        </VideoCoverWrapper>
    );
});

