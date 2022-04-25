import React, { memo, useEffect, useState, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { SongWrapper } from './style';
import SongListItem from '@/components/song-item';
import { getSongListAction } from '../../store/actionCreators';
import { message, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAddPlaylist } from '@/hooks/change-music';
export default memo(function SearchSong() {
    const { playList, songs } = useSelector(
        (state) => ({
            playList: state.getIn(['player', 'playList']),
            songs: state.getIn(['search', 'songList']),
        }),
        shallowEqual
    );
    const [keyword] = useSearchParams();
    const keywords = keyword.get('keywords');
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(1);

    const loadMoreData = () => {
        if (loading || offset > 10) {
            return;
        }
        setLoading(true);
        dispatch(getSongListAction(keywords, 30, offset * 30));
        setOffset(offset + 1);
        setLoading(false);
    };

    useEffect(() => {
        setData([...data, ...songs]);
    }, [songs]);
    useEffect(() => {
        dispatch(getSongListAction(keywords));
        setData([...data, ...songs]);
        return () => {
            setData();
        };
    }, []);
    const addPlayList = useAddPlaylist(playList, message);
    const clickAll = (e) => {
        // 阻止超链接跳转
        e.preventDefault && e.preventDefault();
        // 阻止合成事件的冒泡
        e.stopPropagation();
        // 阻止与原生事件的冒泡
        e.nativeEvent.stopImmediatePropagation();
        // 获取歌曲详情,添加到播放列表
        const ids = songs.map((item) => {
            return item.id;
        });
        for (let id of ids) {
            // dispatch(getSongDetailAction(id));
            addPlayList(e, id);
        }
    };

    return (
        <SongWrapper>
            <div className="batch_operation">
                <div className="play_all" onClick={clickAll}>
                    <span className="iconfont">&#xea6d;</span>
                    播放全部
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
            <InfiniteScroll
                dataLength={data.length}
                next={loadMoreData}
                hasMore={data.length < 270}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                endMessage={<Divider plain>我是有底线的 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                {data &&
                    data.map((item) => {
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
                                key={item.id + item.al.name + item.name}
                                {...props}
                                lazyload="true"
                            />
                        );
                    })}
            </InfiniteScroll>
        </SongWrapper>
    );
});
