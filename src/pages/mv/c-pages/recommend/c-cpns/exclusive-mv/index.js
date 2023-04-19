import React, { useEffect, memo, useRef, useState } from 'react';

import {
    getExclusiveMv
} from '@/service/mv'
import { Carousel } from 'antd';

import { ExclusiveMvWrapper, MvControl } from './style';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import VideoCover from '@/components/video-cover';

export default memo(function ExclusiveMv() {

    const exclusiveMvRef = useRef();
    const [exclusiveMv, setExclusiveMv] = useState([])
    const hover = () => {
        const btn = document.querySelectorAll('.btn span');
        btn[5].style.visibility = 'visible';
        btn[6].style.visibility = 'visible';
    };
    const leave = () => {
        const btn = document.querySelectorAll('.btn span');
        btn[5].style.visibility = 'hidden';
        btn[6].style.visibility = 'hidden';
    };
    useEffect(() => {
        getExclusiveMv(12).then(res => {
            setExclusiveMv(res?.data || exclusiveMv)
        })
    }, []);
    const arr = new Array(Math.floor(exclusiveMv.length / 3)).fill(0);
    const groupNum = arr.map((item, index) => {
        return index + item;
    });

    return (
        <ExclusiveMvWrapper onMouseLeave={leave} onMouseEnter={hover}>
            <ThemeHeaderRCM title="独家" moreLink="#" />
            <div className="content">
                {/* <div className="arrow arrow-left"
                    onClick={e => carouselRef.current.prev()}></div> */}
                <div className="album">
                    <Carousel ref={exclusiveMvRef} dots={false}>
                        {
                            // const cover_props= {key:it.id, info:it ,url_name:"picUrl", playCount:true, width:200, height:200}
                            groupNum.map((item) => {
                                return (
                                    <div key={item} className="page">
                                        {
                                            // const cover_props= {key:it.id, info:it ,url_name:"picUrl", playCount:true, width:200, height:200}

                                            exclusiveMv
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
            <MvControl>
                <button
                    className="btn"
                    onClick={() => exclusiveMvRef.current.prev()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
                <button
                    className="btn"
                    onClick={() => exclusiveMvRef.current.next()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
            </MvControl>
        </ExclusiveMvWrapper>
    );
});
