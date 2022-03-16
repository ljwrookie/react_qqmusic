// 1. 第三方开库
import React, { memo, useEffect, useRef } from 'react';

// 2. 功能性东西
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopBannersAction } from '../../store/actionCreator';
// 3. 导入的组件
import { Carousel } from 'antd';
import { RecommendControl, BannerWrapper } from './style';

export default memo(function TopBanners() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const dispatch = useDispatch();
    const { topBanners } = useSelector(
        (state) => ({
            // topBanners: state.get('recommend').get('topBanners')
            // 获取redux-reducer转换成Immutable对象的深层state
            topBanners: state.getIn(['recommend', 'topBanners']),
        }),
        shallowEqual
    );
    // 其他Hook
    const bannerRef = useRef();
    useEffect(() => {
        // 在组件渲染之后发送网络请求
        dispatch(getTopBannersAction());
    }, [dispatch]);

    // const bannerChange = useCallback((from, to) => {
    //     setCurrentIndex(to)
    // }, [])
    const arr = new Array(Math.floor(topBanners.length / 2)).fill(0);
    const nums = arr.map((item, index) => {
        return index + item;
    });

    return (
        <BannerWrapper>
            <Carousel effect="fade" autoplay ref={bannerRef}>
                {nums.map((item) => {
                    return (
                        <div key={item} className="content">
                            {topBanners
                                .slice(item * 2, (item + 1) * 2)
                                .map((banner) => {
                                    return (
                                        <img
                                            key={banner.imageUrl}
                                            src={banner.imageUrl}
                                            className="banner_img"
                                            alt="#"
                                        />
                                    );
                                })}
                        </div>
                    );
                })}
            </Carousel>
            <RecommendControl>
                <button
                    className="btn"
                    onClick={() => bannerRef.current.prev()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
                <button
                    className="btn"
                    onClick={() => bannerRef.current.next()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
            </RecommendControl>
        </BannerWrapper>
    );
});
