import React, { useEffect, memo, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
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

    // 全部:0 华语:7 欧美:96 日本:8 韩国:16
    return (
        <RecommendWrapper>
            <ThemeHeaderRCM title="最新音乐"
                keywords={["全部", "华语", "欧美", "日本", "韩国"]}
                moreLink="#"
                keywordClick={keywordClick}
            />
            <div>
                {
                    newSongs.slice(0, 12).map((item) => {
                        return (<div key={item.id}>{item.name}</div>)
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
