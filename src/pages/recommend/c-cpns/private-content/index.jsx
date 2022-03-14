import React, { useEffect, memo} from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import { useHistory } from 'react-router-dom';

import {getPrivateContentAction} from "../../store/actionCreator";

import {RecommendWrapper} from "./style";

import ThemeHeaderRCM from '@/components/theme-header-rcm';

export default memo(function PrivateContent() {
     // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const dispatch = useDispatch()
    const {privateContent =[]} = useSelector(
        state => ({
        privateContent: state.getIn(["recommend", "privateContent"])
    }), shallowEqual);


    useEffect(() => {
        dispatch(getPrivateContentAction())
    }, [dispatch]);


    return (
        <RecommendWrapper>
            <ThemeHeaderRCM title="私人放送" moreLink="#"/>
        
            
                <div>
                    {
                    privateContent.map((item)=>{
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
