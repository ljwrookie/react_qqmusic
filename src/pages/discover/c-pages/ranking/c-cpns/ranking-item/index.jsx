import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import ThemeCover from '@/components/theme-cover';
import { RankingItemWrapper } from './style';
import { getPlaylistAllSongsAction } from '@/pages/playlist/store/actionCreator';
export default memo(function RankingItem(props) {
    const { playlistAllSongs } = useSelector(
        (state) => ({
            playlistAllSongs: state.getIn([
                'playlist',
                'playlistAllSongs',
            ]),
        }),
        shallowEqual
    );
    const { id, name, img_url, playCount, width, height } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPlaylistAllSongsAction(id));
    }, [dispatch, id]);
    const str = JSON.stringify(playlistAllSongs.splice(0, 3));
    const songList = JSON.parse(str);
    const info = {
        img_url,
        playCount,
        width,
        height,
        key: id,
        hover: false,
    };
    return (
        <RankingItemWrapper>
            <div className="cover">
                <ThemeCover {...info} />
            </div>
            <div className="list">
                <div className="list_name">{name}</div>
                <div className="list_content">
                    {songList.map((item, index) => {
                        return (
                            <li className="text-nowrap">
                                {index + 1} {item.name}
                                {'-'}
                                {item.ar[0].name}
                            </li>
                        );
                    })}
                </div>
            </div>
        </RankingItemWrapper>
    );
});
//  img_url, playCount, width, height
