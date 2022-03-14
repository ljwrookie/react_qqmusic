import React, { useEffect, memo, useCallback, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'antd';
import {
    getNewSongsAction
} from "../../store/actionCreator";

import {
    RecommendWrapper, RecommendControl
} from "./style";

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import ThemeCover from '@/components/theme-cover'


export default memo(function NewSongs() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const newSongsRef = useRef();
    const { newSongs = [] } = useSelector(
        state => ({
            newSongs: state.getIn(["recommend", "newSongs"])
        }), shallowEqual);
    const keywordClick = useCallback((keyword) => {
        // navigate.push({ pathname: "/discover/songs", type: keyword });
    }, [navigate]);

    useEffect(() => {
        dispatch(getNewSongsAction())
    }, [dispatch]);
    const arr = new Array(Math.floor(newSongs.length / 5)).fill(0)
    const nums = arr.map((item, index) => {
        
        return index + item
    })
    // 全部:0 华语:7 欧美:96 日本:8 韩国:16
    return (
        <RecommendWrapper>
            <ThemeHeaderRCM title="最新音乐"
                keywords={["全部", "华语", "欧美", "日本", "韩国"]}
                moreLink="#"
                keywordClick={keywordClick}
            />
            <div className="content">
                {/* <div className="arrow arrow-left"
                    onClick={e => carouselRef.current.prev()}></div> */}
                <div className="album">
                    <Carousel ref={newSongsRef} dots={false}>
                        {
                            nums.map(item => {
                                return (
                                    <div key={item} className="page">
                                        {
                                            newSongs.slice(item * 5, (item + 1) * 5).map(it => {
                                                return (
                                                    <ThemeCover className="cover" key={it.id} info={it} url_name={"album.picUrl"} playCount={false} width={200} height={200}/>
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
                    onClick={() => newSongsRef.current.prev()}
                ><span className="iconfont">&#xe662;</span></button>
                <button
                    className="btn"
                    onClick={() => newSongsRef.current.next()}
                ><span className="iconfont">&#xe662;</span></button>

            </RecommendControl>

        </RecommendWrapper>
    )
})
