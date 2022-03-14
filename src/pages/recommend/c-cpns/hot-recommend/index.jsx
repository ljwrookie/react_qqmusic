import React, { useEffect, memo} from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import { useHistory } from 'react-router-dom';

import {
    getHotRecommendAction
} from "../../store/actionCreator";

import {
    RecommendWrapper
} from "./style";

import ThemeHeaderRCM from '@/components/theme-header-rcm';


export default memo(function HotRecommend() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const dispatch = useDispatch()
    const { hotRecommends = [] } = useSelector(
        state => ({
            // topBanners: state.get('recommend').get('topBanners')
            // 获取redux-reducer转换成Immutable对象的深层state
            hotRecommends: state.getIn(['recommend', 'hotRecommends']),
        }),
        shallowEqual
    )
    // 其他Hook
    
    useEffect(() => {
        // 在组件渲染之后发送网络请求
        dispatch(getHotRecommendAction())
    }, [dispatch])


    return (
        <RecommendWrapper>
            <ThemeHeaderRCM title="推荐歌单" moreLink="#"/>
            <div>
                {
                    hotRecommends.map((item)=>{
                        return(<div key={item.id}>{item.name}</div>)
                    })
                }
            </div>
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
