import React, { memo } from 'react';
import {Link} from 'react-router-dom'
import {nanoid} from 'nanoid'
import { getSizeImage} from '@/utils/format-utils';
// import VideoCover from '../video-cover'

import { RankListCoverWrapper } from './style';

export default memo(function MvRankCover(props) {

    const { info, url_name, index, width, height, time } = props; // const {url_name} =
    const urlList = url_name.split('.');
    const img_url = urlList.reduce((pre, cur) => {
        return (cur = pre[cur]);
    }, info);
    // console.log(urlList)
    return (
        <RankListCoverWrapper width={width} height={height}>
            <div className='mv-index'>
                <span>{index}</span>
            </div>
            <div className="mv-cover">
                <img className="image" src={getSizeImage(img_url, width, height)} alt={info.name} />
                <div className="mask"></div>
                <div className="cover">
                    {/* <div className="logo"><i className="iconfont icon">&#xe601;</i></div> */}
                    <i className="iconfont play">&#xea82;</i>
                </div>
            </div>
            <div className='mv-info'>
                <p className="mv-name">{info.name}</p>
                <div className="mv-artists">
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
                <p className="mv-time">发布时间: {time}</p>
            </div>
            
        </RankListCoverWrapper>
    );
});

