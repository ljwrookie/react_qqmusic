// 1. 第三方开库
import React, { memo, useEffect, useRef, useState } from 'react';

// 2. 功能性东西
import {
    getTopBanners,
} from '@/service/recommend.js';
// 3. 导入的组件
import { Carousel } from 'antd';
import { RecommendControl, BannerWrapper } from './style';

export default memo(function TopBanners() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const [topBanners, setTopBanners] = useState([])
    
    const hover = () => {
        const btn = document.querySelectorAll('.btn span');
        btn[0].style.visibility = 'visible';
        btn[1].style.visibility = 'visible';
    };
    const leave = () => {
        const btn = document.querySelectorAll('.btn span');
        btn[0].style.visibility = 'hidden';
        btn[1].style.visibility = 'hidden';
    };

    // 其他Hook
    const bannerRef = useRef();
    useEffect(() => {
        // 在组件渲染之后发送网络请求
        getTopBanners().then(res => {
            res && res.banners && setTopBanners(res.banners)
        })
    }, []);

    // const bannerChange = useCallback((from, to) => {
    //     setCurrentIndex(to)
    // }, [])
    const arr = new Array(Math.floor(topBanners.length / 2)).fill(0);
    const groupNum = arr.map((item, index) => {
        return index + item;
    });

    return (
        <BannerWrapper onMouseLeave={leave} onMouseEnter={hover}>
            <Carousel effect="fade" autoplay ref={bannerRef} >
                {groupNum.map((item) => {
                    return (
                        <div key={item} className="content">
                            {topBanners
                                .slice(item * 2, (item + 1) * 2)
                                .map((banner) => {
                                    return (
                                        <img
                                            key={banner.imageUrl}
                                            src={banner.imageUrl}
                                            className="banner_img"
                                            alt="#"
                                        />
                                    );
                                })}
                        </div>
                    );
                })}
            </Carousel>
            <RecommendControl>
                <button
                    className="btn"
                    onClick={() => bannerRef.current.prev()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
                <button
                    className="btn"
                    onClick={() => bannerRef.current.next()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
            </RecommendControl>
        </BannerWrapper>
    );
});
