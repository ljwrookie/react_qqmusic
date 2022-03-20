import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AllSongsWrapper } from './style';
import { getPlaylistAllSongsAction } from '../../store/actionCreator';
import SongListItem from '../../../../components/song-item';
export default memo(function PlaylistAllSongs() {
    const dispatch = useDispatch();
    const { playlistAllSongs } = useSelector(
        (state) => ({
            playlistAllSongs: state.getIn([
                'playlist',
                'playlistAllSongs',
            ]),
        }),
        shallowEqual
    );
    const [playlistId, setPlaylistId] = useSearchParams();

    const id = playlistId.get('id');
    useEffect(() => {
        dispatch(getPlaylistAllSongsAction(id));
    }, [dispatch, id]);

    return (
        <AllSongsWrapper>
            <div className="list_header">
                <div className="song">歌曲</div>
                <div className="singer">歌手</div>
                <div className="album">专辑</div>
                <div className="total_time">时长</div>
            </div>
            {playlistAllSongs &&
                playlistAllSongs.map((item) => {
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
        </AllSongsWrapper>
    );
});
