import React, { memo } from 'react';

import { getSizeImage, getCount } from '@/utils/format-utils';
import { Link } from 'react-router-dom';
import { VideoCoverWrapper } from './style';
import { nanoid } from 'nanoid';
export default memo(function VideoCover(props) {
    const { info, url_name, playCount, width, height, noArtistName
} = props; // const {url_name} =
    const urlList = url_name.split('.');
    const img_url = urlList.reduce((pre, cur) => {
        return (cur = pre[cur]);
    }, info);
    const type = info.id ? 'mv' : 'video';
    let artists = noArtistName ? [] : info.artists
    // console.log(urlList)
    return (
        <VideoCoverWrapper width={width} height={height}>
            <Link className = 'video-link' to={`/mvplayer?mvid=${info.id}`}>
            <div className="cover-top">
                <img
                    className="image"
                    src={getSizeImage(img_url, width*2, height*2)}
                    alt={type === 'mv' ? info.name : info.title}
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
                            <i className="iconfont listen">&#xe621;</i>
                            {getCount(
                                type === 'mv'
                                    ? info.playCount
                                    : info.playTime
                            )}
                        </span>
                    </div>
                </div>
            </div>
            <div className="cover-bottom text-nowrap ">
                {type === 'mv' ? info.name : info.title}
            </div>     
            </Link>
            <div className="all_name text-nowrap">
                {(type === 'mv' ? artists : info.creator).map(
                    (artist) => {
                        return (
                            <Link key={nanoid()} className="artist" to="#">
                                {type === 'mv'
                                    ? artist.name
                                    : artist.userName}
                            </Link>
                        );
                    }
                )}
            </div>
        </VideoCoverWrapper>
    );
});
