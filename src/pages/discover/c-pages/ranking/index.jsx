import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTopListAction } from '../../store/actionCreators';
import ThemeCover from '@/components/theme-cover';
import RankingItem from './c-cpns/ranking-item';
import { RankingWrapper } from './style';
import(getTopListAction);
export default memo(function Ranking() {
    const { topList } = useSelector(
        (state) => ({
            topList: state.getIn(['discover', 'topList']),
        }),
        shallowEqual
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopListAction());
    }, [dispatch]);
    const navigate = useNavigate();
    const clickItem = (id) => {
        return () => {
            navigate(`/playlist/detail?id=${id}`);
        };
    };
    return (
        <RankingWrapper>
            <div className="long_item">
                {topList.splice(0, 7).map((item) => {
                    const props = {
                        id: item.id,
                        name: item.name,
                        img_url: item.coverImgUrl,
                        playCount: item.playCount,
                        width: 150,
                        height: 150,
                    };
                    return (
                        <div onClick={clickItem(item.id)} key={item.id}>
                            <RankingItem {...props} key={item.id} />
                        </div>
                    );
                })}
            </div>
            <div className="rank_name">全球榜</div>
            <div className="cover_item">
                {topList &&
                    topList.map((item) => {
                        const props = {
                            img_url: item.coverImgUrl,
                            playCount: item.playCount,
                            width: 150,
                            height: 150,
                        };
                        return (
                            <div
                                className="theme_cover"
                                onClick={clickItem(item.id)}
                                key={item.id}
                            >
                                <ThemeCover key={item.id} {...props} />
                            </div>
                        );
                    })}
            </div>
        </RankingWrapper>
    );
});
