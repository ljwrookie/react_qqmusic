import React, { useEffect, memo, useRef} from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import { useHistory } from 'react-router-dom';
import { Carousel } from 'antd';
import {getPrivateContentAction} from "../../store/actionCreator";

import {RecommendWrapper, RecommendControl} from "./style";

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import ThemeCover from '@/components/theme-cover'
export default memo(function PrivateContent() {
     // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const dispatch = useDispatch()
    const privateContentRef = useRef()
    const {privateContent =[]} = useSelector(
        state => ({
        privateContent: state.getIn(["recommend", "privateContent"])
    }), shallowEqual);


    useEffect(() => {
        dispatch(getPrivateContentAction())
    }, [dispatch]);

    const arr = new Array(Math.floor(privateContent.length / 3)).fill(0)
    const nums = arr.map((item, index) => {
        
        return index + item
    })
    return (
        <RecommendWrapper>
            <ThemeHeaderRCM title="独家放送" moreLink="#"/>
        
            
            <div className="content">
                {/* <div className="arrow arrow-left"
                    onClick={e => carouselRef.current.prev()}></div> */}
                <div className="album">
                    <Carousel ref={privateContentRef} dots={false}>
                        {
                            nums.map(item => {
                                return (
                                    <div key={item} className="page">
                                        {
                                            privateContent.slice(item * 3, (item + 1) * 3).map(it => {
                                                return (
                                                    <ThemeCover className="cover" key={it.id} url_name="sPicUrl" playCount={false} info={it} width={350} height={200}/>
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
            <RecommendControl>
                <button
                    className="btn"
                    onClick={() => privateContentRef.current.prev()}
                ><span className="iconfont">&#xe662;</span></button>
                <button
                    className="btn"
                    onClick={() => privateContentRef.current.next()}
                ><span className="iconfont">&#xe662;</span></button>

            </RecommendControl>
            </RecommendWrapper>
    )
})
