import React, { memo } from 'react';

import { getSizeImage, getCount } from '@/utils/format-utils';
import { Link } from 'react-router-dom';
import { SimMvCoverWrapper } from './style';
import moment from 'moment';
export default memo(function VideoCover(props) {
    const { info, url_name, playCount, width, height
    } = props; // const {url_name} =
    const urlList = url_name.split('.');
    const img_url = urlList.reduce((pre, cur) => {
        return (cur = pre[cur]);
    }, info);
    const type = info.id ? 'mv' : 'video';

    return (
        <SimMvCoverWrapper width={width} height={height}>
            <Link to={`/mvplayer?mvid=${info.id}`}>
                <div className="cover-left">
                    <img
                        className="image"
                        src={getSizeImage(img_url, width, height)}
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
                                <i className="iconfont watch">&#xe621;</i>
                                {getCount(
                                    type === 'mv'
                                        ? info.playCount
                                        : info.playTime
                                )}
                            </span>
                            
                        </div>
                        <div className='time'><span >{moment(info.duration).format('mm:ss')}</span></div>
                    </div>
                </div>
            </Link>
            <div className="cover-right ">
                <Link to={`/mvplayer?mvid=${info.id}`}>
                    <div className='mv-name'> {type === 'mv' ? info.name : info.title}</div>
                </Link>
                <div className='artist-name'> by:  {type === 'mv'
                                    ? info.artistName
                                    : info.userName}
                </div>
                                
            </div>
    
        </SimMvCoverWrapper>
    );
});
