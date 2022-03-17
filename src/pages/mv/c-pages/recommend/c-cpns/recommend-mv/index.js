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
    const list_num = 12
    const page_num = 3
    const arr_list = new Array(Math.floor(recommendMv.length / list_num)).fill(0);
    const arr_page = new Array(Math.floor(list_num / page_num)).fill(0);
    const index_list = arr_list.map((item, index) => {
        return index + item
    })
    const index_page = arr_page.map((item, index) => {
        return index + item
    })
    return (
        <RecommendMvWrapper>
            <ThemeHeaderRCM title='个性推荐' moreLink="#" moreDisplay='false'></ThemeHeaderRCM>
            <div className="content">
                {/* <div className="arrow arrow-left"
                    onClick={e => carouselRef.current.prev()}></div> */}
                <div className="album">
                    <Carousel ref={recommendMvRef} dots={false} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        // height: '500px'
                    }}>
                        {
                            index_list.map((item_list) => {
                                return (
                                    <div >
                                        {index_page.map((item_page) => {
                                            return (
                                                <div key={item_page+item_list*list_num} className="page">
                                                    {
                                                        recommendMv.slice(
                                                            item_list * list_num + item_page * page_num,
                                                            item_list * list_num + (item_page + 1) * page_num
                                                        ).map((it) => {
                                                            const cover_props = {
                                                                key: it.id,
                                                                info: it,
                                                                url_name: 'cover',
                                                                playCount: true,
                                                                width: 350,
                                                                height: 200,
                                                            };
                                                            return (<VideoCover {...cover_props} />);
                                                        })
                                                    }
                                                </div>
                                            )
                                        })}
                                        </div>
                                )
                            
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
