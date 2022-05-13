import React, { memo, useEffect, useState } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { PersonalFmWrapper,PlayerWrapper,  PlayerCommentWrapper } from './style'
import {getPersonalFm} from '@/service/user'
import { Image} from 'antd'
import {
    getSongDetailAction,
    changeFirstLoad,
} from '@/pages/player/store/actionCreators';

import { Avatar, Comment, Pagination } from 'antd'
import moment from 'moment'
import classNames from 'classnames';
import { getCount, getSizeImage } from '../../utils/format-utils';
import {
    getSongLyricAction,
    getSongInfoAction,
    getHotCommentAction,
    getNewCommentAction,
} from '../player/store/actionCreators';
const PersonalFm = memo(() => {
    const dispatch = useDispatch()
    const [id, setId] = useState()
    const [isPlay, setIsPlay] = useState(false)
    const {
        songInfo,
        songLyric,
        hotComments,
        newComments,
        commentTotal,
        
    } = useSelector(
        (state) => ({
            songInfo: state.getIn(['player', 'songInfo']),
            songLyric: state.getIn(['player', 'songLyric']),
            hotComments: state.getIn(['player', 'hotComments']),
            newComments: state.getIn(['player', 'newComments']),
            commentTotal: state.getIn(['player', 'commentTotal']),
            
        }),
        shallowEqual
    );
    const [page, setPage] = useState({
        limit: 20,
        offset: 0,
    });
    const play = async()=>{
        let res = await getPersonalFm()
        const ids = res.data[0].id
        setId(ids)
        dispatch(getSongLyricAction(ids));
        dispatch(getSongInfoAction(ids));
        dispatch(getHotCommentAction(ids));
        dispatch(getNewCommentAction(ids, page.limit, page.offset))
        
        return ids
    }
    useEffect(()=>{
        play()
    },[])
    useEffect(() => {
        dispatch(getNewCommentAction(id, page.limit, page.offset));
        // console.log(comment.limit, comment.offset)
    }, [dispatch, id, page]);
    const commentChange = (index, number) => {
        setPage({ offset: (index - 1) * number, limit: number });
    };
    const { name, al, ar } = songInfo;
    const albumName = al && al.name;
    const picUrl = al && al.picUrl;
    //图像加载出错时的处理
    const changePlay = ()=>{
        setIsPlay(!isPlay)
    }
    
    const nextPlay = async(e)=>{
        let ids = await play()
        playMusic(e,ids)
        setIsPlay(true)
    }

    const playMusic = (e, item) => {
        // 如果不跳转,那么组织超链接的默认行为
        e.preventDefault();
        // 阻止合成事件的冒泡
        e.stopPropagation();
        // 阻止与原生事件的冒泡
        e.nativeEvent.stopImmediatePropagation();
        // 派发action 歌曲详情
        dispatch(getSongDetailAction(item));
        // 不是首次加载,播放音乐
        dispatch(changeFirstLoad(false));
    };
    return (
        <PersonalFmWrapper>
            <div className="top">
            <PlayerWrapper >
                <div className="left">
                    <div className="image">
                    
                        <Image
                            width={300}
                            height={300}
                            src={getSizeImage(picUrl, 300, 300)}
                            placeholder={true}
                            preview={false}
                            fallback="data:image/png;base64,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"
                        />
                        <div onClick={changePlay} className={classNames("control", {"play": isPlay})}>
                            {isPlay? <span className="iconfont">&#xe61b;</span>:
                            <span className="iconfont" onClick={(e) => {playMusic(e, id); changePlay();}}>&#xea82;</span> }
                        </div>
                    </div>
                    <div className="btn">
                        <span className='iconfont'>&#xe86f;</span>
                        <span className='iconfont' onClick={nextPlay}>&#xe61c;</span>
                        <span className='iconfont'onClick={nextPlay}>&#xe7a5;</span>
                        <span className='iconfont'>&#xe63b;</span>
                        
                    </div>
                </div>
                <div className="right">
                    <div className="song_name text-nowarp">{name}</div>
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
                        <div
                            className="hot-comments"
                            style={{
                                display:
                                    page.offset !== 0 ? 'none' : 'block',
                            }}
                        >
                            <div className="title">
                                <span>精彩评论</span>
                            </div>

                            {hotComments &&
                                hotComments.map((item) => {
                                    return (
                                        <div
                                            key={item.id}
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
                                                        src={getSizeImage(
                                                            item.user
                                                                .avatarUrl,
                                                            40,
                                                            40
                                                        )}
                                                        alt={
                                                            item.user
                                                                .nickname
                                                        }
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
                        <div
                            className="comment-center"
                            style={{
                                display:
                                    page.offset !== 0 ? 'none' : 'flex',
                            }}
                        >
                            <button className="btn btn-center">
                                更多精彩评论 &gt;
                            </button>
                        </div>
                        <div className="all-comments">
                            <div className="title" id="new-comment">
                                <span>最新评论</span>
                            </div>
                            {newComments &&
                                newComments.map((item) => {
                                    return (
                                        <div
                                            key={item.id}
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
                            onChange={(page, pageSize) => {
                                commentChange(page, pageSize);
                            }}
                            defaultCurrent={1}
                            defaultPageSize={20}
                            total={commentTotal}
                        />
                    </div>
                </PlayerCommentWrapper>
            
        </PersonalFmWrapper>
    )
})

export default PersonalFm