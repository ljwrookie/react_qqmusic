import React, { memo, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { PlayerWrapper } from './style';

import {
    getSongLyricAction,
    getSongInfoAction,
} from './store/actionCreators';
import { getSizeImage } from '@/utils/format-utils';
export default memo(function Player() {
    const [search, setSearch] = useSearchParams();
    const { songInfo, songLyric } = useSelector(
        (state) => ({
            songInfo: state.getIn(['player', 'songInfo']),
            songLyric: state.getIn(['player', 'songLyric']),
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
            <div className="comment">TODO:评论部分。。。</div>
        </div>
    );
});
