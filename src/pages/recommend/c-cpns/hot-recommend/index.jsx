import React, { useEffect, useRef, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { Carousel } from 'antd';
import { getHotRecommendAction } from '../../store/actionCreator';

import { RecommendWrapper, RecommendControl } from './style';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import ThemeCover from '@/components/theme-cover';

export default memo(function HotRecommend() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const dispatch = useDispatch();
    const recommendRef = useRef();
    const { hotRecommends = [] } = useSelector(
        (state) => ({
            // topBanners: state.get('recommend').get('topBanners')
            // 获取redux-reducer转换成Immutable对象的深层state
            hotRecommends: state.getIn(['recommend', 'hotRecommends']),
        }),
        shallowEqual
    );
    // 其他Hook

    useEffect(() => {
        // 在组件渲染之后发送网络请求
        dispatch(getHotRecommendAction());
    }, [dispatch]);
    // console.log(hotRecommends)
    const arr = new Array(Math.floor(hotRecommends.length / 5)).fill(0);
    const nums = arr.map((item, index) => {
        return index + item;
    });
    // console.log(nums)
    return (
        <RecommendWrapper>
            <ThemeHeaderRCM title="推荐歌单" moreLink="#" />
            <div className="content">
                {/* <div className="arrow arrow-left"
                    onClick={e => carouselRef.current.prev()}></div> */}
                <div className="album">
                    <Carousel ref={recommendRef} dots={false}>
                        {nums.map((item) => {
                            return (
                                <div key={item} className="page">
                                    {hotRecommends
                                        .slice(item * 5, (item + 1) * 5)
                                        .map((it) => {
                                            // key={it.id} info={it}  url_name="picUrl" playCount={true} width={200} height={200}
                                            const cover_props = {
                                                key: it.id,
                                                img_url: it.picUrl,
                                                name: it.name,
                                                playCount: it.playCount,
                                                width: 200,
                                                height: 200,
                                            };
                                            //                 key={item.id}
                                            // name={item.name}
                                            // singer={item.artist.name}
                                            // img_url={item.picUrl}
                                            // width={200}
                                            // height={200}
                                            return (
                                                <ThemeCover
                                                    className="cover"
                                                    {...cover_props}
                                                />
                                            );
                                        })}
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
            <RecommendControl>
                <button
                    className="btn"
                    onClick={() => recommendRef.current.prev()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
                <button
                    className="btn"
                    onClick={() => recommendRef.current.next()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
            </RecommendControl>
        </RecommendWrapper>
    );
});
