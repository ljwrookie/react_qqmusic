import React, { useEffect, memo, useRef, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
    getTopBanners,
    getHotRecommends,
    getPrivateContent,
    getNewSongs,
    getMvRecommends,
    //   getNewAlbums,
    // getSettleSinger,
} from '@/service/recommend.js';
import { Carousel } from 'antd';

import { getMvRecommendAction } from '../../store/actionCreators';

import { RecommendWrapper, RecommendControl } from './style';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import VideoCover from '@/components/video-cover';

export default memo(function MvRecommend() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const dispatch = useDispatch();
    const [mvRecommends, setMvRecommends] = useState([])
    const mvRecommendsRef = useRef();
    
    const hover = () => {
        const btn = document.querySelectorAll('.btn span');
        btn[8].style.visibility = 'visible';
        btn[9].style.visibility = 'visible';
    };
    const leave = () => {
        const btn = document.querySelectorAll('.btn span');
        btn[8].style.visibility = 'hidden';
        btn[9].style.visibility = 'hidden';
    };
    useEffect(() => {
        getMvRecommends().then(res =>
            res && res.data && setMvRecommends(res.data)
        )
    }, [dispatch]);
    const arr = new Array(Math.floor(mvRecommends.length / 3)).fill(0);
    const nums = arr.map((item, index) => {
        return index + item;
    });

    return (
        <RecommendWrapper onMouseLeave={leave} onMouseEnter={hover}>
            <ThemeHeaderRCM title="推荐MV" moreLink="#" />
            <div className="content">
                {/* <div className="arrow arrow-left"
                    onClick={e => carouselRef.current.prev()}></div> */}
                <div className="album">
                    <Carousel ref={mvRecommendsRef} dots={false}>
                        {
                            // const cover_props= {key:it.id, info:it ,url_name:"picUrl", playCount:true, width:200, height:200}
                            nums.map((item) => {
                                return (
                                    <div key={item} className="page">
                                        {
                                            // const cover_props= {key:it.id, info:it ,url_name:"picUrl", playCount:true, width:200, height:200}

                                            mvRecommends
                                                .slice(
                                                    item * 3,
                                                    (item + 1) * 3
                                                )
                                                .map((it) => {
                                                    const cover_props = {
                                                        key: it.id,
                                                        info: it,
                                                        url_name: 'cover',
                                                        playCount: true,
                                                        width: 350,
                                                        height: 200,
                                                    };
                                                    return (
                                                        <VideoCover
                                                            className="cover"
                                                            {...cover_props}
                                                        />
                                                    );
                                                })
                                        }
                                    </div>
                                );
                            })
                        }
                    </Carousel>
                </div>
            </div>
            <RecommendControl>
                <button
                    className="btn"
                    onClick={() => mvRecommendsRef.current.prev()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
                <button
                    className="btn"
                    onClick={() => mvRecommendsRef.current.next()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
            </RecommendControl>
        </RecommendWrapper>
    );
});
