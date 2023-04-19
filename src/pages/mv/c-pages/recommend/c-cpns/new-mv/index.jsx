import React, { useEffect, memo, useRef, useState } from 'react';

import {
    getNewMv
} from '@/service/mv'
import { Carousel } from 'antd';
import {
    NewMvWrapper, MvControl
} from "./style";

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import VideoCover from '@/components/video-cover'


export default memo(function NewMv() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const [newMv, setNewMv] = useState([])
    const newMvRef = useRef()

    const hover = () => {
        const btn = document.querySelectorAll('.btn span');
        console.log(btn)
        btn[1].style.visibility = 'visible';
        btn[2].style.visibility = 'visible';
    };
    const leave = () => {
        const btn = document.querySelectorAll('.btn span');
        btn[1].style.visibility = 'hidden';
        btn[2].style.visibility = 'hidden';
    };
    useEffect(() => {
        getNewMv().then(res => {
            setNewMv(res?.data || newMv)
        })
    }, []);
    const arr = new Array(Math.floor(newMv.length / 6)).fill(0);
    const groupNum = arr.map((item, index) => {
        return index + item
    })

    return (
        <NewMvWrapper onMouseLeave={leave} onMouseEnter={hover}>
            <ThemeHeaderRCM title="最新" moreLink="#" />
            <div className="content">
                {/* <div className="arrow arrow-left"
                    onClick={e => carouselRef.current.prev()}></div> */}
                <div className="album">
                    <Carousel ref={newMvRef} dots={false}>
                        {
                            // const cover_props= {key:it.id, info:it ,url_name:"picUrl", playCount:true, width:200, height:200}
                            groupNum.map((item) => {
                                return (
                                    <div key={item} className="page">
                                        {
                                            // const cover_props= {key:it.id, info:it ,url_name:"picUrl", playCount:true, width:200, height:200}

                                            newMv
                                                .slice(
                                                    6 + item * 3,
                                                    6 + (item + 1) * 3
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
                    onClick={() => newMvRef.current.prev()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
                <button
                    className="btn"
                    onClick={() => newMvRef.current.next()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
            </MvControl>
        </NewMvWrapper>
    );
})
