import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
    getNewSongsAction
} from "../../store/actionCreator";

import {
    RecommendWrapper
} from "./style";

import ThemeHeaderRCM from '@/components/theme-header-rcm';


export default memo(function NewSongs() {
     // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const dispatch = useDispatch()
    const {newSongs} = useSelector(
        state => ({
        newSongs: state.getIn(["recommend", "newSongs"])
    }), shallowEqual);


    useEffect(() => {
        dispatch(getNewSongsAction())
    }, [dispatch]);


    return (
        <RecommendWrapper>
            <ThemeHeaderRCM title="最新音乐"/>
            <div>
                    {
                    newSongs.slice(0,12).map((item)=>{
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
