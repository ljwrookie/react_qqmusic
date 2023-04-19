import React, { memo, useEffect, useState } from 'react';
import {
    getNewSong
} from '@/service/discover'
import SongListItem from '@/components/song-item';
import { SwitchArea, PlayList } from './style';
export default memo(function DiscoverNewSong() {
    const [area, setArea] = useState(0);
    const [current, setCurrent] = useState('全部');
    const [newSongList, setNewSongList] = useState([])
    useEffect(() => {
        getNewSong(area).then(res => {
            res && res.data && setNewSongList(res.data)
        })
    }, [area]);
    const catLink = {
        全部: 0,
        华语: 7,
        欧美: 96,
        韩国: 16,
        日本: 8,
    };
    const catKeys = Object.keys(catLink);
    const changeArea = (e) => {
        // e.target.className = e.target.className + ' active';
        // console.log(e.target.value);
        // console.log(e.target.innerText);
        setArea(catLink[e.target.innerText]);
        setCurrent(e.target.innerText);
    };
    return (
        <div>
            <SwitchArea>
                {catKeys.map((item) => {
                    // console.log(item);
                    return (
                        <span
                            className={
                                current === item ? 'active' : 'area'
                            }
                            key={item}
                            onClick={changeArea}
                        >
                            {item}
                        </span>
                    );
                })}
            </SwitchArea>
            <PlayList>
                <div className="batch_operation">
                    <div className="play_all">
                        <span className="iconfont">&#xea6d;</span>播放全部
                    </div>
                    <div className="download_all">
                        <span className="iconfont">&#xe639;</span>下载
                    </div>
                </div>
                <div className="list_header">
                    <div className="song">歌曲</div>
                    <div className="singer">歌手</div>
                    <div className="album">专辑</div>
                    <div className="total_time">时长</div>
                </div>
                {newSongList.map((item) => {
                    const props = {
                        id: item.id,
                        name: item.name,
                        dt: item.duration,
                        album: item.album.name,
                        artist: item.artists[0].name,
                        alias: item.alias,
                    };
                    return <SongListItem key={item.id} {...props} />;
                })}
            </PlayList>
        </div>
    );
});
