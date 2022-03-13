import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import { useHistory } from 'react-router-dom';

import {
    getMvRecommendAction
} from "../../store/actionCreator";

import {
    RecommendWrapper
} from "./style";

import ThemeHeaderRCM from '@/components/theme-header-rcm';


export default memo(function MvRecommend() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const dispatch = useDispatch()
    const {mvRecommends} = useSelector(
        state => ({
            mvRecommends: state.getIn(["recommend", "mvRecommends"])
    }), shallowEqual);


    useEffect(() => {
        dispatch(getMvRecommendAction())
    }, [dispatch]);


    return (
        <RecommendWrapper>
            <ThemeHeaderRCM title="推荐MV"/>
            <div>
                    {
                    mvRecommends.slice(0,3).map((item)=>{
                        return(<div key={item.id}>{item.name}</div>)
                    })
                }</div>
            {/* <div className="recommend-list">
                {
                    state.recommends.slice(0, 8).map((item, index) => {
                        return (
                            <HYThemeCover info={item} key={item.id} />
                        )
                    })
                }
            </div> */}
        </RecommendWrapper>
    )
})
