import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LikeNav } from './style';
import { Result } from 'antd';
import ThemeCover from '@/components/theme-cover';
import SongListItem from '@/components/song-item';
import { LovePageWrapper, LoveWrapper,PlaylistWrapper } from './style';
import {
    getLoginStatusAction,
    getLoginUserPlaylistAction,
} from '../user/store/actionCreator';
import {
    deletePlaylist
} from '@/service/user';
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
            e.preventDefault();
            if (window.confirm('确定删除？')) {
                deletePlaylist(id).then(async (res) => {
                    dispatch(getLoginUserPlaylistAction());
                    // let user_detail = await getUserDetail(uid);
                    // setUserDetail(user_detail);
                    // console.log(userDetail)
                    // setPlaylist(playlist.filter((item) => item.id !== id));
                });
            }
        };
    };
    useEffect(() => {
        dispatch(getLoginStatusAction());
        dispatch(getLoginUserPlaylistAction());
    },[]);
    return loginStatus.profile !== null ? (
        <LovePageWrapper>
            <div className="top-main">
                <div className="top-left">我喜欢</div>
                <div className="top-right">智能管理</div>
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
                            <span className="iconfont">&#xe664;</span>
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
                            <span className="iconfont">&#xe664;</span>
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
            <Result
                status="info"
                title="请登录"
                subTitle="登录后可查看相关内容"
            />
        </LikeNav>
    );
});
