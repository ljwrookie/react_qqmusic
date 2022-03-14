import React, { useEffect, memo, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import { useHistory } from 'react-router-dom';
import { Carousel } from 'antd';

import {
    getMvRecommendAction
} from "../../store/actionCreator";

import {
    RecommendWrapper
} from "./style";

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import ThemeCover from '@/components/theme-cover'


export default memo(function MvRecommend() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const dispatch = useDispatch()
    const mvRecommendsRef = useRef()
    const {mvRecommends = []} = useSelector(
        state => ({
            mvRecommends: state.getIn(["recommend", "mvRecommends"])
    }), shallowEqual);


    useEffect(() => {
        dispatch(getMvRecommendAction())
    }, [dispatch]);
    const arr = new Array(Math.floor(mvRecommends.length / 3)).fill(0)
    const nums = arr.map((item, index) => {
        
        return index + item
    })

    return (
        <RecommendWrapper>
            <ThemeHeaderRCM title="推荐MV" moreLink="#"/>
            <div className="content">
                {/* <div className="arrow arrow-left"
                    onClick={e => carouselRef.current.prev()}></div> */}
                <div className="album">
                    <Carousel ref={mvRecommendsRef} dots={false}>
                        {
                            nums.map(item => {
                                return (
                                    <div key={item} className="page">
                                        {
                                            mvRecommends.slice(item * 3, (item + 1) * 3).map(it => {
                                                return (
                                                    <ThemeCover className="cover" key={it.id} url_name="picUrl" playCount={true} info={it} width={350} height={200}/>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </RecommendWrapper>
    )
})
