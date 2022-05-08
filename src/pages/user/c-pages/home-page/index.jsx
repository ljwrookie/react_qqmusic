import React, { memo, useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
    getLoginStatusAction,
    getLoginUserPlaylistAction,
    getLoginUserInfoAction
} from '../../store/actionCreator';
import ThemeCover from '@/components/theme-cover';
import SongListItem from '@/components/song-item';
import { useSearchParams, Link } from 'react-router-dom';
import {getLoginStatus} from '@/service/login'
import { getUserDetail, getUserPlaylist, deletePlaylist, getLoginUserInfo } from '@/service/user';
import { getPlaylistAllSongs } from '@/service/playlist';
import { getSizeImage } from '@/utils/format-utils';
import { HomePageWrapper, PlaylistWrapper, LoveWrapper } from './style';
const HomePage = memo(() => {
    const [userId, setUserId] = useSearchParams();
    const uid = userId.get('uid');
    
    const [userDetail, setUserDetail] = useState({});
    // const [loginUserInfo, setLoginUserInfo] = useState({})
    const [createPlaylist, setCreatePlaylist] = useState();
    const [playlist, setPlaylist] = useState();
    const [collectionPlaylist, setCollectionPlaylist] = useState();
    const [showOption, setShowOption] = useState('love');
    const [musicList, setMusicList] = useState([]);
    const [currentPlaylist, setCurrentPlaylist] = useState([])
    const [loginUser, setLoginUser] = useState({})
    const [playlistClass, setPlaylistClass] = useState()
    // const dispatch = useDispatch()
    // const { loginUserInfo } = useSelector(
    //     (state) => ({
    //         loginUserInfo: state.getIn(['user', 'loginUserInfo']),
    //     }),
    //     shallowEqual
    // );
    const deleteFunc = (id) => {
        return (e) => {
            e.preventDefault();
            if (window.confirm('确定删除？')) {
                deletePlaylist(id).then(async(res) => {
                    // let user_detail = await getUserDetail(uid);
                    // setUserDetail(user_detail);
                    // console.log(userDetail)
                    setPlaylist(playlist.filter((item) => item.id !== id));
                });
            }
        }
    }
    const userDetailInfo = async () => {
        let user_detail = await getUserDetail(uid);
        setUserDetail(user_detail);
        let playlist_res = await getUserPlaylist(uid);
        setCreatePlaylist(
            playlist_res.playlist.filter((item) => item.userId == uid)
        );
        setCollectionPlaylist(
            playlist_res.playlist.filter((item) => item.userId != uid)
        );
        setPlaylist(
            playlist_res.playlist
        )
        let music_list_res = await getPlaylistAllSongs(
            playlist_res.playlist[0].id
        );
        setMusicList(music_list_res.songs);
        let login_status = await getLoginStatus()
        console.log('loginStatus',login_status)
        setLoginUser(login_status.data.profile)
        
    };
    useEffect(() => {
        userDetailInfo();
    }, [uid]);
    return (
        <HomePageWrapper>
            <div className="top-main">
                <div className="top-left">
                    <img
                        src={getSizeImage(
                            userDetail.profile?.avatarUrl,
                            300,
                            300
                        )}
                        alt="头像"
                    />
                </div>
                <div className="top-right">
                    <div className="top-right-top">
                        <div className="top-right-top-name">
                            {userDetail.profile?.nickname}
                        </div>
                        <div className="top-right-top-level">
                            lv{userDetail.level}
                        </div>
                    </div>
                    <div className="top-right-middle">
                        {userDetail.profile?.signature === ''
                            ? '暂无'
                            : userDetail.profile?.signature}
                    </div>
                    <div className="top-right-bottom">
                        <span>
                            <Link to={`/userdetail/follow?uid=${uid}`}>
                                关注: {userDetail.profile?.follows}
                            </Link>
                        </span>
                        <span>
                            <Link to={`/userdetail/followed?uid=${uid}`}>
                                粉丝: {userDetail.profile?.followeds}
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
            <ul className="user-nav">
                <li className="nav-item">
                    <span 
                    className={showOption === 'love' ? 'active': ''}
                    onClick={()=>setShowOption('love')}>我喜欢</span>
                </li>
                <li className="nav-item">
                    <span 
                    className={showOption === 'playlist' && playlistClass == 1 ? 'active': ''}
                    onClick={()=>{setShowOption('playlist'); 
                    setCurrentPlaylist(createPlaylist);
                    setPlaylistClass(1)
                }}
                    >创建的歌单{playlist && playlist.filter((item) => item.userId == uid).length}</span>
                </li>
                <li className="nav-item">
                    <span 
                    className={showOption === 'playlist' && playlistClass == 2 ? 'active': ''}
                    onClick={()=>{setShowOption('playlist'); 
                    setCurrentPlaylist(collectionPlaylist);
                    setPlaylistClass(2)
                }
                    
                }
                    >收藏的歌单{playlist && playlist.filter((item) => item.userId != uid).length}</span>
                </li>
            </ul>
            <div className="bottom-main">
                
                {showOption == 'love' &&
                musicList &&
                musicList.length !== 0 ? <LoveWrapper>{
                    
                    musicList.map((item) => {
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
                    }
                )}</LoveWrapper>: (
                    <></>
                )}
                {showOption == 'love' &&
                musicList &&
                musicList.length === 0 ? (<LoveWrapper>
                    <div className="un-open">
                        <span className="iconfont">&#xe664;</span>
                        <span> 主人信息未公开</span>
                    </div></LoveWrapper>
                ) : (
                    <></> 
                )}
               
                {
                    showOption == 'playlist' && currentPlaylist && currentPlaylist.length !== 0 ? (
                        <PlaylistWrapper>{
                            currentPlaylist.map((item) => {
                                
                                    const cover_props = {
                                        img_url: item.coverImgUrl,
                                        name: item.name,
                                        // playCount: it.playCount,
                                        width: 160,
                                        height: 160,
                                        deleteIt: uid == loginUser?.userId,
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
                                        <ThemeCover className="cover" {...cover_props} />
                                    </Link>
                                );
                                
                        })
                        }
                        </PlaylistWrapper>
                    ): (<></>)
                }
                {showOption == 'playlist' &&
                currentPlaylist &&
                currentPlaylist.length === 0 ? (<PlaylistWrapper>
                    <div className="un-open">
                        <span className="iconfont">&#xe664;</span>
                        <span> 暂无内容</span>
                    </div></PlaylistWrapper>
                ) : (
                    <></> 
                )}
            </div>
        </HomePageWrapper>
    );
});

export default HomePage;
