import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getSingerListAction } from '../../store/actionCreators';
import SingerListItem from '@/components/singer-item';
import { SearchSingerWrapper } from './style';
export default memo(function SearchSinger() {
    const [keyword] = useSearchParams();
    const keywords = keyword.get('keywords');
    const { singerList } = useSelector(
        (state) => ({
            singerList: state.getIn(['search', 'singerList']),
        }),
        shallowEqual
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSingerListAction(keywords));
    }, [dispatch, keywords]);
    return (
        <SearchSingerWrapper>
            {singerList &&
                singerList.map((item) => {
                    return <SingerListItem info={item} key={item.id} />;
                })}
        </SearchSingerWrapper>
    );
});
