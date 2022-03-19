import React, { memo, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { getMvDetailAction, getMvDetailInfoAction, getMvUrlAction, getSimMvAction, getMvCommentsAction } from './store/actionCreator';
import VideoCover from '../../components/video-cover'

import { MvPlayerWrapper } from './style';
export default memo(function MvPlayer() {
    const dispatch = useDispatch()
    const { mvDetail=[], mvUrl=[], simMv=[] } = useSelector((
        state => ({
            mvDetail: state.getIn(['mvPlayer', 'mvDetail']),
            mvUrl: state.getIn(['mvPlayer', 'mvUrl']),
            simMv: state.getIn(['mvPlayer', 'simMv'])
        })
    ), shallowEqual)
    const [search, _] = useSearchParams()
    const id = search.get('mvid')

    useEffect(() => {
        dispatch(getMvDetailAction(id));
        dispatch(getMvDetailInfoAction(id))
        dispatch(getMvUrlAction(id));
        dispatch(getSimMvAction(id));
        dispatch(getMvCommentsAction(id,20,0))

    }, [dispatch,id]);
    
    return (
        <MvPlayerWrapper>
            <div className="mv-player-left">
                <div className="mv-title">视频详情</div>
                <video src={mvUrl} controls="controls">
                    your browser does not support the video tag
                </video>
                <span>{mvDetail.artistId} </span>
                <span>{mvDetail.artistName}</span>
                <br />
                <span>发布 {mvDetail.publishTime} </span>
                <span>播放 24万次</span>
                <br />
            </div>
            <div className="mv-player-right">
                <div className="mv-title">相关推荐</div>
                {simMv.map((item) => {
                    const cover_props = {
                        key: item.id,
                        info: item,
                        url_name: 'cover',
                        playCount: false,
                        width: 350,
                        height: 200,
                    };
                    return <VideoCover {...cover_props} />;
                })}
            </div>
        </MvPlayerWrapper>
    );
});

