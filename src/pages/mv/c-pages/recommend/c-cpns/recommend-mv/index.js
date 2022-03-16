import React, { useEffect, memo, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import { useHistory } from 'react-router-dom';
import { Carousel } from 'antd';

import {
    getAllMvAction
} from "../../../../store/actionCreator";

import {
    RecommendMvWrapper, MvControl
} from "./style";

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import VideoCover from '@/components/video-cover'


export default memo(function RecommendMv() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const dispatch = useDispatch()
    const recommendMvRef = useRef()
    const { recommendMv = [] } = useSelector(
        state => ({
            recommendMv: state.getIn(["mv", "allMv"])
        }), shallowEqual);


    useEffect(() => {
        dispatch(getAllMvAction())
    }, [dispatch]);
    const arr = new Array(Math.floor(recommendMv.length / 3)).fill(0);
    const nums = arr.map((item, index) => {

        return index + item
    })
    return (
        <RecommendMvWrapper>
            <ThemeHeaderRCM title='个性推荐' moreLink="#" moreDisplay='false'></ThemeHeaderRCM>
            <div className="content">
                {/* <div className="arrow arrow-left"
                    onClick={e => carouselRef.current.prev()}></div> */}
                <div className="album">
                    <Carousel ref={recommendMvRef} dots={false} style={{display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}>
                        {
                            // const cover_props= {key:it.id, info:it ,url_name:"picUrl", playCount:true, width:200, height:200}
                            nums.map((item) => {
                                return (
                                    <div key={item} className="page">
                                        {
                                            // const cover_props= {key:it.id, info:it ,url_name:"picUrl", playCount:true, width:200, height:200}

                                            recommendMv
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
                                                            // className="cover"
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
                    onClick={() => recommendMvRef.current.next()}
                >
                    <span className="iconfont">换一批 &#xe65a;</span>
                </button>
            </MvControl>
        </RecommendMvWrapper>
    )
})
