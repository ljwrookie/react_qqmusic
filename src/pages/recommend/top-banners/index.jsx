// 1. 第三方开库
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

// 2. 功能性东西
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopBannersAction } from '../../store/actionCreator';
// 3. 导入的组件
import { Carousel } from 'antd';
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style';

export default memo(function TopBanners() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const dispatch = useDispatch();
    // 其他Hook
    const bannerRef = useRef();
    useEffect(() => {
        // 在组件渲染之后发送网络请求
        dispatch(getTopBannersAction());
    }, [dispatch]);
    return <div></div>;
});
