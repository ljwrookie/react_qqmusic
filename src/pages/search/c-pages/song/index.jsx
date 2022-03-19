import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { SongWrapper } from './style';
import SongListItem from '@/components/song-item';
import { getSongListAction } from '../../store/actionCreators';
export default memo(function SearchSong() {
    const [keyword] = useSearchParams();
    const keywords = keyword.get('keywords');
    const { songs } = useSelector(
        (state) => ({
            songs: state.getIn(['search', 'songList']),
        }),
        shallowEqual
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSongListAction(keywords));
    }, [dispatch, keywords]);
    return (
        <SongWrapper>
            <div className="batch_operation">
                <div className="play_all">
                    <span className="iconfont">&#xea6d;</span>播放全部
                </div>
                <div className="download_all">
                    <span className="iconfont">&#xe639;</span>下载
                </div>
                <div className="addlist_all">
                    <span className="iconfont">&#xe623;</span>
                    加入列表
                </div>
            </div>
            <div className="list_header">
                <div className="song">歌曲</div>
                <div className="singer">歌手</div>
                <div className="album">专辑</div>
                <div className="total_time">时长</div>
            </div>
            {songs &&
                songs.map((item) => {
                    const props = {
                        id: item.id,
                        name: item.name,
                        dt: item.dt,
                        album: item.al.name,
                        artist: item.ar[0].name,
                        alias: item.alia,
                    };
                    return <SongListItem key={item.id} {...props} />;
                })}
        </SongWrapper>
    );
});
