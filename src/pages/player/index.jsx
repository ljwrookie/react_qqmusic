import React, { memo, useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { PlayerWrapper, BottomWrapper , PlayerCommentWrapper } from './style';
import { Comment, Avatar, Pagination } from 'antd';
import moment from 'moment';
import { nanoid } from 'nanoid';
import { getCount } from '../../utils/format-utils'; 
import {
    getSongLyricAction,
    getSongInfoAction,
    getHotCommentAction,
    getNewCommentAction,
    getSimilarSongAction,
    getSimilarAlbumAction,
} from './store/actionCreators';
import { getSizeImage } from '@/utils/format-utils';
export default memo(function Player() {
    const [search, setSearch] = useSearchParams();
    const {
        songInfo,
        songLyric,
        hotComments,
        newComments,
        commentTotal,
        similarSong,
        similarAlbum,
    } = useSelector(
        (state) => ({
            songInfo: state.getIn(['player', 'songInfo']),
            songLyric: state.getIn(['player', 'songLyric']),
            hotComments: state.getIn(['player', 'hotComments']),
            newComments: state.getIn(['player', 'newComments']),
            commentTotal: state.getIn(['player', 'commentTotal']),
            similarSong: state.getIn(['player', 'similarSong']),
            similarAlbum: state.getIn(['player', 'similarAlbum']),
        }),
        shallowEqual
    );
    const { name, al, ar } = songInfo;
    const albumName = al && al.name;
    const picUrl = al && al.picUrl;
    const id = search.get('id');
    useEffect(() => {
        setuId(id);
    });

    const [uid, setuId] = useState(id);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSongLyricAction(uid));
        dispatch(getSongInfoAction(uid));
    }, [dispatch, uid]);
    const [comment, setComment] = useState({
        limit: 20,
        offset: 0,
    })
    useEffect(() => {
        dispatch(getHotCommentAction(id))
        dispatch(getSimilarAlbumAction(id))
        dispatch(getSimilarSongAction(id))
    }, [dispatch, id])
    useEffect(() => {
        dispatch((getNewCommentAction(id, comment.limit, comment.offset)))
        // console.log(comment.limit, comment.offset)
    }, [dispatch, id, comment])

    const commentChange = (index, number) => {
        setComment({ offset: (index-1)*number , limit: number });
    };

    const bgImage = picUrl + '?imageView&blur=40x40';
    return (
        <div>
            <PlayerWrapper bgImage={bgImage}>
                <div className="left">
                    <div className="image">
                        <img
                            src={getSizeImage(picUrl, 350, 350)}
                            alt="{name}"
                        />
                    </div>
                </div>
                <div className="right">
                    <div className="song_name">{name}</div>
                    <div className="song_info">
                        <div className="song_album">
                            专辑： {albumName}
                        </div>
                        {/* <div className="song_author">歌手：{ar.name}</div> */}
                        {ar &&
                            ar.map((item, index) => {
                                return (
                                    <div
                                        className="song_author"
                                        key={index}
                                    >
                                        <span className="text">
                                            歌手： {item.name}
                                        </span>
                                    </div>
                                );
                            })}
                    </div>
                    <div className="lyric">
                        <div className="lyric_content">
                            {songLyric &&
                                songLyric.map((item, index) => {
                                    return (
                                        <p
                                            className="lyric-list"
                                            key={index}
                                        >
                                            {item.content}
                                        </p>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </PlayerWrapper>
            <BottomWrapper>
                <div className="bottom-left">
                    <div className="simi-title playlists">
                        <span>包含这首歌的歌单</span>
                    </div>

                    <div className="simi-playlists">
                        {similarAlbum.map((item) => {
                            console.log(item);
                            return (
                                <Link key={ item.id } to={`/playlist?id=${item.id}`}>
                                    <div className="playlist">
                                        <img
                                            src={item.coverImgUrl}
                                            alt={item.name}
                                        ></img>
                                        <span>{item.name}</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <div className="simi-title songs">
                        <span>喜欢这首歌的人也在听</span>
                    </div>
                    <div className="simi-songs">
                        {similarSong.map((item) => {
                            console.log(item);
                            return (
                                <Link key={ item.id } to={`/player?id=${item.id}`}>
                                <div className="song">
                                    <img
                                        src={item.album.picUrl}
                                        alt={item.name}
                                    ></img>
                                    <span>{item.name}</span>
                                </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <PlayerCommentWrapper className="bottom-right">
                    <div className="music-comments">
                        <div className="music-comment-title">
                            <span>评论</span>
                            <span className="comment-count">
                                （{getCount(commentTotal)}）
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

                            {hotComments &&
                                hotComments.map((item) => {
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
                            {newComments &&
                                newComments.map((item) => {
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
                    </div>
                    <div className="pagination">
                        <Pagination
                            onChange={(page, pageSize) =>
                                commentChange(page, pageSize)
                            }
                            defaultCurrent={1}
                            defaultPageSize={20}
                            total={Math.floor(commentTotal)}
                        />
                    </div>
                </PlayerCommentWrapper>
            </BottomWrapper>
        </div>
    );
});
