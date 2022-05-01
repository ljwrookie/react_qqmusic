import React, { useEffect, memo, useRef, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import moment from 'moment';
import { Carousel } from 'antd';
import { getNewSongsAction } from '../../store/actionCreators';
import { getSongDetailAction } from '@/pages/player/store/actionCreators';
import { RecommendWrapper, RecommendControl } from './style';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import ThemeCover from '@/components/theme-cover';

export default memo(function NewSongs() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const dispatch = useDispatch();
    const [state, setState] = useState({
        type: 0,
        index: 0,
    });
    const hover = () => {
        const btn = document.querySelectorAll('.btn span');
        btn[6].style.visibility = 'visible';
        btn[7].style.visibility = 'visible';
    };
    const leave = () => {
        const btn = document.querySelectorAll('.btn span');
        btn[6].style.visibility = 'hidden';
        btn[7].style.visibility = 'hidden';
    };
    const newSongsRef = useRef();
    const { newSongs = [] } = useSelector(
        (state) => ({
            newSongs: state.getIn(['recommend', 'newSongs']),
        }),
        shallowEqual
    );
    // const keywordClick = useCallback((keyword) => {
    //     // navigate.push({ pathname: "/discover/songs", type: keyword });
    const keywordClick = (keyword) => {
        // console.log('@@')
        switch (keyword) {
            case (keyword = '全部'):
                setState({ type: 0, index: 0 });
                break;
            case (keyword = '华语'):
                setState({ type: 7, index: 1 });
                break;
            case (keyword = '欧美'):
                setState({ type: 96, index: 2 });
                break;
            case (keyword = '日本'):
                setState({ type: 8, index: 3 });
                break;
            case (keyword = '韩国'):
                setState({ type: 16, index: 4 });
                break;
            default:
                return;
        }
    };
    // }, [navigate]);

    useEffect(() => {
        dispatch(getNewSongsAction(state.type));
    }, [dispatch, state]);
    const arr = new Array(5).fill(0);
    const nums = arr.map((item, index) => {
        return index + item;
    });
    // 全部:0 华语:7 欧美:96 日本:8 韩国:16
    const clickPlay = (id) => {
        return () => {
            dispatch(getSongDetailAction(id));
        };
    };
    return (
        <RecommendWrapper onMouseLeave={leave} onMouseEnter={hover}>
            <ThemeHeaderRCM
                title="最新音乐"
                index={state.index}
                keywords={['全部', '华语', '欧美', '日本', '韩国']}
                moreLink="#"
                keywordClick={keywordClick}
            />
            <div className="content">
                {/* <div className="arrow arrow-left"
                    onClick={e => carouselRef.current.prev()}></div> */}
                <div className="album">
                    <Carousel ref={newSongsRef} dots={false}>
                        {nums.map((item) => {
                            return (
                                <div key={item} className="page">
                                    {newSongs
                                        .slice(item * 5, (item + 1) * 5)
                                        .map((it) => {
                                            const cover_props = {
                                                key: nanoid(),
                                                name: it.name,
                                                // singer: it.artists[0].name,
                                                img_url: it.album.picUrl,
                                                width: 200,
                                                height: 200,
                                            };
                                            return (
                                                <div key={it.id}>
                                                    <div
                                                        className="song-name"
                                                        // to={`/player?id=${it.id}`}
                                                        onClick={clickPlay(
                                                            it.id
                                                        )}
                                                    >
                                                        <ThemeCover
                                                            className="cover"
                                                            {...cover_props}
                                                        />
                                                    </div>
                                                    <div className="all_name text-nowrap">
                                                        {it.artists.map(
                                                            (artist) => {
                                                                return (
                                                                    <Link
                                                                        key={nanoid()}
                                                                        className="artist"
                                                                        to={
                                                                            '/search/song?keywords=' +
                                                                            artist.name
                                                                        }
                                                                    >
                                                                        {
                                                                            artist.name
                                                                        }
                                                                    </Link>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                    <div className="time">
                                                        {moment(
                                                            it.album
                                                                .publishTime
                                                        ).format(
                                                            'YYYY-MM-DD'
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
            <RecommendControl>
                <button
                    className="btn"
                    onClick={() => newSongsRef.current.prev()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
                <button
                    className="btn"
                    onClick={() => newSongsRef.current.next()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
            </RecommendControl>
        </RecommendWrapper>
    );
});
