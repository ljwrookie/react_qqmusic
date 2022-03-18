import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import AlbumListItem from '@/components/album-item';
import { getAlbumListAction } from '../../store/actionCreators';
import { AlbumListWrapper } from './style';
export default memo(function SearchAlbum() {
    const [keyword] = useSearchParams();
    const keywords = keyword.get('keywords');
    const { albums } = useSelector(
        (state) => ({
            albums: state.getIn(['search', 'albumList']),
        }),
        shallowEqual
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAlbumListAction(keywords));
    }, [dispatch, keywords]);
    return (
        <AlbumListWrapper>
            <div className="list_header">
                <div className="header_name">专辑名称</div>
                <div className="header_singer">创作者</div>
                <div className="header_publish">发行时间</div>
                <div className="header_size">大小</div>
            </div>
            {albums.map((item) => {
                return <AlbumListItem key={item.id} info={item} />;
            })}
        </AlbumListWrapper>
    );
});
