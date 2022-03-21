import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { SubScriberWrapper } from './style';
import { Pagination } from 'antd';


import {  getSizeImage } from '@/utils/format-utils';
import { getPlaylistSubscriberAction } from '../../store/actionCreator';
import { getPlaylistSubscriber } from '../../../../service/playlist';
import { nanoid } from 'nanoid';

export default memo(function PlaylistSubscriber() {
    const loginStatus = -1
    const dispatch = useDispatch();
    const { playlistSubscriber } = useSelector((state) => {
        return {
            playlistSubscriber: state.getIn([
                'playlist',
                'playlistSubscriber',
            ]),
        };
    }, shallowEqual);
    const [playlistId, setPlaylistId] = useSearchParams();

    const [page, setPage] = useState({
        limit: 30,
        offset: 0,
    });
    const pageChange = (index, number) => {
        setPage({ offset: (index - 1) * number, limit: number });
    };
    const id = playlistId.get('id');
    const total = playlistId.get('total');
  
  useEffect(() => {
    dispatch(getPlaylistSubscriberAction(id, page.limit, page.offset));
    }, [dispatch, id, page]);
    return (
        <SubScriberWrapper>
            <div className="person-list">
                {
                  playlistSubscriber && playlistSubscriber.map((item) => {
                        return (
                            <div key={nanoid()}  className="person">
                                <img
                                    src={getSizeImage(
                                        item.avatarUrl,
                                        100,
                                        100
                                    )}
                                    alt={item.nickname}
                                ></img>
                                <span>{item.nickname}</span>
                            </div>
                        );
                    })}
            </div>
            <div className="pagination">
                <Pagination style={{display : loginStatus=== -1 ? 'none': 'flex'}}
                    onChange={(page, pageSize) => {
                        pageChange(page, pageSize);
                    }}
                    defaultCurrent={1}
                    defaultPageSize={30}
                    total={total}
                />
            </div>
        </SubScriberWrapper>
    );
});
