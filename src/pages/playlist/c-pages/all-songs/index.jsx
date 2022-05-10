import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AllSongsWrapper } from './style';
import { getLoginStatusAction, getLoginUserPlaylistAction } from '../../../user/store/actionCreator';
import { message } from 'antd';
import { likeSong } from '@/service/user';
import { getPlaylistAllSongsAction } from '../../store/actionCreator';
import SongListItem from '@/components/song-item';
export default memo(function PlaylistAllSongs() {
    const dispatch = useDispatch();
    const { playlistAllSongs, loginStatus, loginUserLoverList } = useSelector(
        (state) => ({
            playlistAllSongs: state.getIn([
                'playlist',
                'playlistAllSongs',
            ]),
            loginStatus: state.getIn(['user', 'loginStatus']),
            loginUserLoverList: state.getIn(['user', 'loginUserLoverList'])
        }),
        shallowEqual
    );
    const [playlistId, setPlaylistId] = useSearchParams();

    const id = playlistId.get('id');
    useEffect(() => {
        dispatch(getPlaylistAllSongsAction(id));
        dispatch(getLoginStatusAction());
        dispatch(getLoginUserPlaylistAction());
    }, [dispatch, id]);

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

    return (
        <AllSongsWrapper>
            <div className="list_header">
                <div className="song">歌曲</div>
                <div className="singer">歌手</div>
                <div className="album">专辑</div>
                <div className="total_time">时长</div>
            </div>
            { playlistAllSongs.length !== 0 ? (playlistAllSongs &&
                playlistAllSongs.map((item) => {
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
                })) : 
                <div className='un-open'>
                    <span className='iconfont'>&#xe664;</span>
                    <span> 主人信息未公开</span>
                </div>
            }
        </AllSongsWrapper>
    );
});
