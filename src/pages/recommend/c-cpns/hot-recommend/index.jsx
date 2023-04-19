import React, { useEffect, useRef, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    getHotRecommends,
} from '@/service/recommend.js';

import { Carousel } from 'antd';

import { RecommendWrapper, RecommendControl } from './style';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import ThemeCover from '@/components/theme-cover';

export default memo(function HotRecommend() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const hover = () => {
        const btn = document.querySelectorAll('.btn span');
        btn[2].style.visibility = 'visible';
        btn[3].style.visibility = 'visible';
    };
    const leave = () => {
        const btn = document.querySelectorAll('.btn span');
        btn[2].style.visibility = 'hidden';
        btn[3].style.visibility = 'hidden';
    };
    const recommendRef = useRef();
    const [hotRecommends, setHotRecommends] = useState([])


    useEffect(() => {
        // 在组件渲染之后发送网络请求
        getHotRecommends(10).then((res) => {
            res && res.result && setHotRecommends(res.result)
        })
        
    }, []);
    const arr = new Array(Math.floor(hotRecommends.length / 5)).fill(0);
    const groupNum = arr.map((item, index) => {
        return index + item;
    });
    return (
        <RecommendWrapper onMouseLeave={leave} onMouseEnter={hover}>
            <ThemeHeaderRCM title="推荐歌单" moreLink="#" />
            <div className="content">
                {/* <div className="arrow arrow-left"
                    onClick={e => carouselRef.current.prev()}></div> */}
                <div className="album">
                    <Carousel ref={recommendRef} dots={false}>
                        {groupNum.map((item) => {
                            return (
                                <div key={item} className="page">
                                    {hotRecommends
                                        .slice(item * 5, (item + 1) * 5)
                                        .map((it) => {
                                            // key={it.id} info={it}  url_name="picUrl" playCount={true} width={200} height={200}
                                            const cover_props = {
                                                img_url: it.picUrl,
                                                name: it.name,
                                                playCount: it.playCount,
                                                width: 200,
                                                height: 200,
                                            };
                                            //                 key={item.id}
                                            // name={item.name}
                                            // singer={item.artist.name}
                                            // img_url={item.picUrl}
                                            // width={200}
                                            // height={200}
                                            return (
                                                <Link
                                                    key={it.id}
                                                    to={`/playlist/detail?id=${it.id}`}
                                                >
                                                    <ThemeCover
                                                        className="cover"
                                                        {...cover_props}
                                                    />
                                                </Link>
                                            );
                                        })}
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
            <RecommendControl>
                <button
                    className="btn"
                    onClick={() => recommendRef.current.prev()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
                <button
                    className="btn"
                    onClick={() => recommendRef.current.next()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
            </RecommendControl>
        </RecommendWrapper>
    );
});
