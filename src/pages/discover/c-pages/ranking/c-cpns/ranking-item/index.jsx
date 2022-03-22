import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import ThemeCover from '@/components/theme-cover';
import { getPlaylistDetail } from '@/service/playlist';

import { RankingItemWrapper } from './style';
export default memo(function RankingItem(props) {
    const [songList, setSongList] = useState([]);

    const { id, name, img_url, playCount, width, height } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        getPlaylistDetail(id).then((res) => {
            setSongList(res.playlist.tracks.splice(0, 3));
        });
        return () => {
            setSongList([]);
        };
    }, [dispatch, id]);

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
                    {songList &&
                        songList.map((item, index) => {
                            return (
                                <li
                                    className="text-nowrap"
                                    key={item.name}
                                >
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
