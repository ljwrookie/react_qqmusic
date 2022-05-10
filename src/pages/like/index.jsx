import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LikeNav } from './style';

import ThemeCover from '@/components/theme-cover';
import SongListItem from '@/components/song-item';
import { LovePageWrapper, LoveWrapper,PlaylistWrapper } from './style';
import {
    getLoginStatusAction,
    getLoginUserPlaylistAction,
} from '../user/store/actionCreator';
import {
    deletePlaylist,
    likeSong
} from '@/service/user';
import { message } from 'antd';
export default memo(function Like() {
    // const [isLoginStatus, setIsLogin] = useState(false);
    const [showOption, setShowOption] = useState('love');
    const dispatch = useDispatch();
    const { loginStatus, loginUserPlaylist , loginUserLoverList} = useSelector(
        (state) => ({
            loginStatus: state.getIn(['user', 'loginStatus']),
            loginUserPlaylist: state.getIn(['user', 'loginUserPlaylist']),
            loginUserLoverList: state.getIn(['user', 'loginUserLoverList']),
        }),
        shallowEqual
    );
    const deleteFunc = (id) => {
        return (e) => {
            deletePlaylist(id).then((res) => {
                dispatch(getLoginUserPlaylistAction());
            });
        };
    };

    const loveSongFunc = (id)=>{
        return (e)=>{
            e.preventDefault();

            likeSong(true, id).then(res=>{
                if(res.code === 200){
                    dispatch(getLoginUserPlaylistAction());
                    // dispatch(getSongListAction(keywords));
                    console.log('喜欢歌曲',id, res)
                    message.success({
                        content:
                            '加入喜欢列表',
                        style: {
                            marginTop: '5vh',
                            borderRadius: '5px',
                        },
                    });
                }else{
                    message.error({
                        content:
                            '请勿频繁添加',
                        style: {
                            marginTop: '5vh',
                            borderRadius: '5px',
                        },
                    });
                }
                
            })
        }
    }
    const unLoveSongFunc = (id)=>{
        
        return (e)=>{
            e.preventDefault();
            likeSong(false, id).then(res=>{
                if(res.code === 200){
                    dispatch(getLoginUserPlaylistAction());
                    // dispatch(getSongListAction(keywords));
                    console.log('不喜欢歌曲',id, res)
                    message.success({
                        content:
                            '移除喜欢列表',
                        style: {
                            marginTop: '5vh',
                            borderRadius: '5px',
                        },
                    });
                }
                else{
                    message.error({
                        content:
                            '请勿频繁移除',
                        style: {
                            marginTop: '5vh',
                            borderRadius: '5px',
                        },
                    });
                }
                
            })
        }
    }

    useEffect(() => {
        dispatch(getLoginStatusAction());
        dispatch(getLoginUserPlaylistAction());
    },[]);
    return loginStatus.profile !== null ? (
        <LovePageWrapper>
            <div className="top-main">
                <div className="top-left">我喜欢</div>
                <div className="top-right"><span className='iconfont'>&#xe638;</span><span>智能管理</span></div>
            </div>
            <ul className="user-nav">
                <li className="nav-item">
                    <span
                        className={showOption === 'love' ? 'active' : ''}
                        onClick={() => setShowOption('love')}
                    >
                        歌曲 {loginUserLoverList.length}
                    </span>
                </li>
                <li className="nav-item">
                    <span
                        className={
                            showOption === 'playlist' ? 'active' : ''
                        }
                        onClick={() => {
                            setShowOption('playlist');
                        }}
                    >
                        歌单
                        {loginUserPlaylist &&
                            loginUserPlaylist.filter(
                                (item) =>
                                    item.userId ==
                                    loginStatus.profile.userId
                            ).length}
                    </span>
                </li>
            </ul>
            <div className='button-option'>
               
                <div className="batch_operation">
                    <div className="play_all">
                        <span className="iconfont">&#xea6d;</span> 播放全部
                    </div>
                    <div className="download_all">
                        <span className="iconfont">&#xe639;</span> 下载
                    </div>
                    <div className="handle_all">
                        <span className="iconfont">&#xe618;</span> 批量操作
                    </div>
                </div>
                <div className="other_operation">
                    <div className="search"><span className="iconfont">&#xe8b9;</span>搜索</div>
                    <div className="sort"><span className="iconfont">&#xe66e;</span>排序</div>
                    <div className='btn list'><span className="iconfont">&#xe60b;</span></div>
                    <div className='btn singer'><span className="iconfont">&#xe605;</span></div>
                    <div className='btn album'><span className="iconfont">&#xed2d;</span></div>
                </div>
              
            </div>
            <div className="list_header">
                    <div className="song">歌曲</div>
                    <div className="singer">歌手</div>
                    <div className="album">专辑</div>
                    <div className="total_time">时长</div>
                </div>
            <div className="bottom-main">
                {showOption == 'love' &&
                loginUserLoverList &&
                loginUserLoverList.length !== 0 ? (
                    <LoveWrapper>
                        {loginUserLoverList.map((item) => {
                            const props = {
                                id: item.id,
                                name: item.name,
                                dt: item.dt,
                                album: item.al.name,
                                artist: item.ar[0].name,
                                alias: item.alia,
                                isLogin: loginStatus.profile !== null,
                                loveFunc: loveSongFunc(item.id),
                                unLoveFunc: unLoveSongFunc(item.id),
                                isLove: loginUserLoverList.filter(items=>items.id == item.id).length === 1
                            };
                            return (
                                <SongListItem
                                    className="song_list"
                                    key={item.id}
                                    {...props}
                                    lazyload="true"
                                />
                            );
                        })}
                    </LoveWrapper>
                ) : (
                    <></>
                )}
                {showOption == 'love' &&
                loginUserLoverList &&
                loginUserLoverList.length === 0 ? (
                    <LoveWrapper>
                        <div className="un-open">
                            <span className="iconfont">&#xe646;</span>
                            <span> 主人信息未公开</span>
                        </div>
                    </LoveWrapper>
                ) : (
                    <></>
                )}

                {showOption == 'playlist' &&
                loginUserPlaylist &&
                loginUserPlaylist.filter(
                    (item) => item.userId == loginStatus.profile.userId
                ).length !== 0 ? (
                    <PlaylistWrapper>
                        {loginUserPlaylist
                            .filter(
                                (item) =>
                                    item.userId ==
                                    loginStatus.profile.userId
                            )
                            .map((item) => {
                                const cover_props = {
                                    img_url: item.coverImgUrl,
                                    name: item.name,
                                    // playCount: it.playCount,
                                    width: 160,
                                    height: 160,
                                    deleteIt: true,
                                    deleteThis: deleteFunc(item.id),
                                };
                                //                 key={item.id}
                                // name={item.name}
                                // singer={item.artist.name}
                                // img_url={item.picUrl}
                                // width={200}
                                // height={200}
                                return (
                                    <Link
                                        className="item"
                                        key={item.id}
                                        to={`/playlist/detail?id=${item.id}`}
                                    >
                                        <ThemeCover
                                            className="cover"
                                            {...cover_props}
                                        />
                                    </Link>
                                );
                            })}
                    </PlaylistWrapper>
                ) : (
                    <></>
                )}
                {showOption == 'playlist' &&
                loginUserPlaylist &&
                loginUserPlaylist.filter(
                    (item) => item.userId == loginStatus.account.id
                ).length === 0 ? (
                    <PlaylistWrapper>
                        <div className="un-open">
                            <span className="iconfont">&#xe760;</span>
                            <span> 暂无内容</span>
                        </div>
                    </PlaylistWrapper>
                ) : (
                    <></>
                )}
            </div>
        </LovePageWrapper>
    ) : (
        <LikeNav>
            <div className="un-login">
                            <span className="iconfont">&#xe60d;</span>
                            <span> 请登录</span>
                        </div>
        </LikeNav>
    );
});
