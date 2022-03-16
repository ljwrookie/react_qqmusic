import React, { useEffect, memo, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import { useHistory } from 'react-router-dom';
import { Carousel } from 'antd';

import {
    getMvRankingAction
} from "../../../../store/actionCreator";

import {
    HotMvWrapper, MvControl
} from "./style";

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import VideoCover from '@/components/video-cover'


export default memo(function HotMv() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const dispatch = useDispatch()
    const hotMvRef = useRef()
    const { hotMv = [] } = useSelector(
        state => ({
            hotMv: state.getIn(["mv", "mvRanking"])
        }), shallowEqual);


    useEffect(() => {
        dispatch(getMvRankingAction())
    }, [dispatch]);
    const arr = new Array(Math.floor(hotMv.length / 3)).fill(0);
    const nums = arr.map((item, index) => {

        return index + item
    })

    return (
        <HotMvWrapper>
            <ThemeHeaderRCM title="热门" moreLink="#" />
            <div className="content">
                {/* <div className="arrow arrow-left"
                    onClick={e => carouselRef.current.prev()}></div> */}
                <div className="album">
                    <Carousel ref={hotMvRef} dots={false}>
                        {
                            // const cover_props= {key:it.id, info:it ,url_name:"picUrl", playCount:true, width:200, height:200}
                            nums.map((item) => {
                                return (
                                    <div key={item} className="page">
                                        {
                                            // const cover_props= {key:it.id, info:it ,url_name:"picUrl", playCount:true, width:200, height:200}

                                            hotMv
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
                    onClick={() => hotMvRef.current.prev()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
                <button
                    className="btn"
                    onClick={() => hotMvRef.current.next()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
            </MvControl>
        </HotMvWrapper>
    );
})
