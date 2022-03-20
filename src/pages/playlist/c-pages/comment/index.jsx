import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { CommentWrapper } from './style';
import { Comment, Avatar, Pagination } from 'antd';
import moment from 'moment';
import { nanoid } from 'nanoid';
import { getSizeImage } from '@/utils/format-utils';
import { getPlaylistCommentAction } from '../../store/actionCreator';
export default memo(function PlaylistComment() {
    const dispatch = useDispatch();
    const { playlistComment } = useSelector((state) => {
        return {
            playlistComment: state.getIn(['playlist', 'playlistComment']),
        };
    }, shallowEqual);
    const [playlistId, setPlaylistId] = useSearchParams();

    const [page, setPage] = useState({
        limit: 20,
        offset: 0,
    });
    const pageChange = (index, number) => {
        setPage({ offset: (index - 1) * number, limit: number });
    };
    const id = playlistId.get('id');
    useEffect(() => {
        dispatch(getPlaylistCommentAction(id, page.limit, page.offset));
    }, [dispatch, id, page]);
    return (
        <CommentWrapper>
            <div className="playlist-comments">
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
                <div
                    className="hot-comments"
                    style={{
                        display: page.offset !== 0 ? 'none' : 'block',
                    }}
                >
                    <div className="title">
                        <span>精彩评论</span>
                    </div>

                    {playlistComment.hotComments &&
                        playlistComment.hotComments.map((item) => {
                            return (
                                <div
                                    key={nanoid()}
                                    className="comment-item"
                                >
                                    <Comment
                                        className="comment-concent"
                                        // actions={actions}
                                        author={
                                            <span>
                                                {item.user.nickname}
                                            </span>
                                        }
                                        avatar={
                                            <Avatar
                                                src={getSizeImage(
                                                    item.user.avatarUrl,
                                                    40,
                                                    40
                                                )}
                                                alt={item.user.nickname}
                                            />
                                        }
                                        content={<p>{item.content}</p>}
                                        datetime={
                                            <span>
                                                {moment(item.time).format(
                                                    'YYYY-MM-DD HH:mm:ss'
                                                )}
                                            </span>
                                        }
                                    />
                                    <div className="icon">
                                        <span className="iconfont">
                                            &#xec7f; {item.likedCount}
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
                <div
                    className="comment-center"
                    style={{
                        display: page.offset !== 0 ? 'none' : 'flex',
                    }}
                >
                    <button className="btn btn-center">
                        更多精彩评论 &gt;
                    </button>
                </div>
                <div className="all-comments">
                    <div className="title">
                        <span>最新评论</span>
                    </div>
                    {playlistComment.comments &&
                        playlistComment.comments.map((item) => {
                            return (
                                <div
                                    key={nanoid()}
                                    className="comment-item"
                                >
                                    <Comment
                                        className="comment-concent"
                                        // actions={actions}
                                        author={
                                            <span>
                                                {item.user.nickname}
                                            </span>
                                        }
                                        avatar={
                                            <Avatar
                                                src={item.user.avatarUrl}
                                                alt="Han Solo"
                                            />
                                        }
                                        content={<p>{item.content}</p>}
                                        datetime={
                                            <span>
                                                {moment(item.time).format(
                                                    'YYYY-MM-DD HH:mm:ss'
                                                )}
                                            </span>
                                        }
                                    />
                                    <div className="icon">
                                        <span className="iconfont">
                                            &#xec7f; {item.likedCount}
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
            <div className="pagination">
                <Pagination
                    onChange={(page, pageSize) => {
                        pageChange(page, pageSize);
                    }}
                    defaultCurrent={1}
                    defaultPageSize={20}
                    total={playlistComment.total}
                />
            </div>
        </CommentWrapper>
    );
});
