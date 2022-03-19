import React, { memo, useState,  useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { getMvDetailAction, getMvDetailInfoAction, getMvUrlAction, getSimMvAction, getMvCommentsAction } from './store/actionCreator';
import SimMvCover from '../../components/sim-mv-cover'

import { getCount } from '../../utils/format-utils'; 
import { MvPlayerWrapper } from './style';
import { getArtistDetailAction } from '../artist/store/actionCreator';
import {
    Comment,
    Tooltip,
    Avatar,
    Pagination,
    Menu,
    Dropdown,
} from 'antd';
import moment from 'moment';


export default memo(function MvPlayer() {
    const dispatch = useDispatch()
    const { mvDetail = {}, mvDetailInfo = {},mvUrl={}, simMv=[], mvComments={} } = useSelector((
        state => ({
            mvDetail: state.getIn(['mvPlayer', 'mvDetail']),
            mvDetailInfo: state.getIn(['mvPlayer', 'mvDetailInfo']),
            mvUrl: state.getIn(['mvPlayer', 'mvUrl']),
            simMv: state.getIn(['mvPlayer', 'simMv']),
            mvComments: state.getIn(['mvPlayer', 'mvComments'])
        })
    ), shallowEqual)

    const [page, setPage] = useState({
        pageIndex: 1,
        pageNumber: 20,
    })
    const [resolution, setResolution] = useState(
        1080
    );

    const { artistDetail = {} } = useSelector((
        state => ({
            artistDetail: state.getIn(['artist', 'artistDetail'])
        })
    ))
    const [search, _] = useSearchParams()
    const id = search.get('mvid')
    
    useEffect(() => {
        dispatch(getMvDetailAction(id));
        dispatch(getMvDetailInfoAction(id));
        dispatch(getMvUrlAction(id));
        dispatch(getSimMvAction(id));
        dispatch(getArtistDetailAction(mvDetail.artistId));
    }, [dispatch, id, mvDetail.artistId]);
    //分页功能
    useEffect(() => {
        dispatch(
            getMvCommentsAction(id, page.pageNumber, page.pageIndex - 1)
        );
    }, [page, dispatch, id])
    //切换分辨率功能
    useEffect(() => {
        dispatch(getMvUrlAction(id, resolution, resolution.value));
    }, [resolution, dispatch, id]);
    const pageChange = (index, number) => {
        setPage({ pageIndex: index, pageNumber: number });
    }
    const resolutionChange = (index) => {
        setResolution(index);
    }

    //切换分辨率
    const menu = (
        <Menu>
            <Menu.Item>
                <span
                    onClick={() => {
                        resolutionChange(1080);
                    }}
                >
                    蓝光
                </span>
            </Menu.Item>
            <Menu.Item>
                <span
                    onClick={() => {
                        resolutionChange(720);
                    }}
                >
                    超清
                </span>
            </Menu.Item>
            <Menu.Item>
                <span
                    onClick={() => {
                        resolutionChange(480);
                    }}
                >
                    高清
                </span>
            </Menu.Item>
            <Menu.Item>
                <span
                    onClick={() => {
                        resolutionChange(240);
                    }}
                >
                    标清
                </span>
            </Menu.Item>
        </Menu>
    );
    return (
        <MvPlayerWrapper>
            <div className="main">
                <div className="mv-player-left">
                    <div className="mv-title">视频详情</div>
                    <div className="video">
                        <video
                            src={mvUrl}
                            controls="controls"
                            autoplay="autoplay"
                            
                        >
                            your browser does not support the video tag
                        </video>
                        <Dropdown
                            className="resolution"
                            overlay={menu}
                            placement="top"
                        >
                            <span id="hql" className="iconfont hql">
                                &#xe610;
                            </span>
                        </Dropdown>
                    </div>
                    <div className="mv-info">
                        <div className="mv-info-top">
                            <div>
                                <span>
                                    <img
                                        className="artist-img"
                                        src={
                                            artistDetail.artist &&
                                            artistDetail.artist.cover
                                        }
                                        alt={mvDetail.artistName}
                                    ></img>
                                </span>
                                <span className="artist-name">
                                    {mvDetail.artistName}
                                </span>
                            </div>
                            <div>
                                <button className="btn">
                                    <span className="iconfont">
                                        &#xeb78;
                                    </span>{' '}
                                    关注
                                </button>
                            </div>
                        </div>
                        <div className="mv-name">
                            <span>{mvDetail.name}</span>
                        </div>
                        <div className="mv-other-info">
                            <span>
                                发布 {mvDetail.publishTime} 
                            </span>
                            <span>
                                播放 {getCount(mvDetail.playCount)}次
                            </span>
                        </div>
                        <div className="btn-all">
                            <button className="btn">
                                <span className="iconfont ">
                                    &#xec7f;{' '}
                                </span>
                                {mvDetailInfo.likedCount}
                            </button>
                            <button className="btn">
                                <span className="iconfont">&#xe891; </span>
                                {mvDetailInfo.commentCount}
                            </button>
                            <button className="btn">
                                <span className="iconfont">&#xe607; </span>
                                {mvDetailInfo.shareCount}
                            </button>
                        </div>
                    </div>
                    <div className="mv-comments">
                        <div className="mv-comment-title">
                            <span>评论</span>
                            <span className="comment-count">
                                （{getCount(mvDetailInfo.commentCount)}）
                            </span>
                        </div>
                        <div className="input-comment">
                            <textarea></textarea>
                        </div>
                        <div className="comment-icon">
                            <div className="comment-icon-left">
                                <span className="iconfont">&#xe60a;</span>
                                <span className="iconfont">&#xe7df;</span>
                            </div>
                            <div className="comment-icon-right">
                                <button className="btn">评论</button>
                            </div>
                        </div>
                        <div className="hot-comments">
                            <div className="title">
                                <span>精彩评论</span>
                            </div>

                            {mvComments.hotComments &&
                                mvComments.hotComments.map((item) => {
                                    return (
                                        <div className="comment-item">
                                            <Comment
                                                className="comment-concent"
                                                // actions={actions}
                                                author={
                                                    <span>
                                                        {
                                                            item.user
                                                                .nickname
                                                        }
                                                    </span>
                                                }
                                                avatar={
                                                    <Avatar
                                                        src={
                                                            item.user
                                                                .avatarUrl
                                                        }
                                                        alt="Han Solo"
                                                    />
                                                }
                                                content={
                                                    <p>{item.content}</p>
                                                }
                                                datetime={
                                                    <span>
                                                        {moment(
                                                            item.time
                                                        ).format(
                                                            'YYYY-MM-DD HH:mm:ss'
                                                        )}
                                                    </span>
                                                }
                                            />
                                            <div className="icon">
                                                <span className="iconfont">
                                                    &#xec7f;{' '}
                                                    {item.likedCount}
                                                </span>
                                                <span className="iconfont">
                                                    &#xe891;
                                                </span>
                                                <span className="iconfont">
                                                    &#xe607;
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                        <div className="comment-center">
                            <button className="btn btn-center">
                                更多精彩评论 &gt;
                            </button>
                        </div>
                        <div className="all-comments">
                            <div className="title">
                                <span>最新评论</span>
                            </div>
                            {mvComments.comments &&
                                mvComments.comments.map((item) => {
                                    return (
                                        <div className="comment-item">
                                            <Comment
                                                className="comment-concent"
                                                // actions={actions}
                                                author={
                                                    <span>
                                                        {
                                                            item.user
                                                                .nickname
                                                        }
                                                    </span>
                                                }
                                                avatar={
                                                    <Avatar
                                                        src={
                                                            item.user
                                                                .avatarUrl
                                                        }
                                                        alt="Han Solo"
                                                    />
                                                }
                                                content={
                                                    <p>{item.content}</p>
                                                }
                                                datetime={
                                                    <Tooltip
                                                        title={moment().format(
                                                            'YYYY-MM-DD HH:mm:ss'
                                                        )}
                                                    >
                                                        <span>
                                                            {moment(
                                                                item.time
                                                            ).format(
                                                                'YYYY-MM-DD HH:mm:ss'
                                                            )}
                                                        </span>
                                                    </Tooltip>
                                                }
                                            />
                                            <div className="icon">
                                                <span className="iconfont">
                                                    &#xec7f;{' '}
                                                    {item.likedCount}
                                                </span>
                                                <span className="iconfont">
                                                    &#xe891;
                                                </span>
                                                <span className="iconfont">
                                                    &#xe607;
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
                <div className="mv-player-right">
                    <div className="mv-title">相关推荐</div>
                    {simMv.map((item) => {
                        const cover_props = {
                            key: item.id,
                            info: item,
                            url_name: 'cover',
                            playCount: true,
                            width: 170,
                            height: 90,
                        };
                        return <SimMvCover {...cover_props} />;
                    })}
                </div>
            </div>
            <div className="pagination">
                <Pagination
                    onChange={(page, pageSize) =>
                        pageChange(page, pageSize)
                    }
                    defaultCurrent={1}
                    defaultPageSize={20}
                    total={Math.floor(mvDetailInfo.commentCount)}
                />
            </div>
        </MvPlayerWrapper>
    );
});

