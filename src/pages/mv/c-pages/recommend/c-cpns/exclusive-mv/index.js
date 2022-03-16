import React, { useEffect, memo, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import { useHistory } from 'react-router-dom';
import { Carousel } from 'antd';

import {
    getExclusiveMvAction
} from "../../../../store/actionCreator";

import {
    ExclusiveMvWrapper, MvControl
} from "./style";

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import VideoCover from '@/components/video-cover'


export default memo(function ExclusiveMv() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const dispatch = useDispatch()
    const exclusiveMvRef = useRef()
    const { exclusiveMv = [] } = useSelector(
        state => ({
            exclusiveMv: state.getIn(["mv", "exclusiveMv"])
        }), shallowEqual);


    useEffect(() => {
        dispatch(getExclusiveMvAction(12))
    }, [dispatch]);
    const arr = new Array(Math.floor(exclusiveMv.length / 3)).fill(0);
    const nums = arr.map((item, index) => {

        return index + item
    })

    return (
        <ExclusiveMvWrapper>
            <ThemeHeaderRCM title="精品" moreLink="#" />
            <div className="content">
                {/* <div className="arrow arrow-left"
                    onClick={e => carouselRef.current.prev()}></div> */}
                <div className="album">
                    <Carousel ref={exclusiveMvRef} dots={false}>
                        {
                            // const cover_props= {key:it.id, info:it ,url_name:"picUrl", playCount:true, width:200, height:200}
                            nums.map((item) => {
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
})
