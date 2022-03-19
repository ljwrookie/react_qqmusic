import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getMvListAction } from '../../store/actionCreators';
import { nanoid } from 'nanoid';
import VideoCover from '@/components/video-cover';
import { MvWrapper } from './style';

export default memo(function SearchMv() {
    const [keyword] = useSearchParams();
    const keywords = keyword.get('keywords');
    const { videos } = useSelector(
        (state) => ({
            videos: state.getIn(['search', 'mvList']),
        }),
        shallowEqual
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMvListAction(keywords));
    }, [dispatch, keywords]);
    if (!videos) {
        console.log('video未获取');
        return (
            <MvWrapper>很抱歉，未找到{keywords}相关的任何视频</MvWrapper>
        );
    } else {
        const arr_page = new Array(Math.floor(videos.length / 3)).fill(0);
        const index_page = arr_page.map((item, index) => {
            return index + item;
        });
        return (
            <MvWrapper>
                {index_page.map((item) => {
                    return (
                        <div className="page" key={nanoid()}>
                            {videos
                                .slice(item * 3, (item + 1) * 3)
                                .map((it) => {
                                    const cover_props = {
                                        key: it.vid,
                                        info: it,
                                        url_name: 'cover',
                                        playCount: true,
                                        width: 350,
                                        height: 200,
                                    };
                                    return <VideoCover {...cover_props} />;
                                })}
                        </div>
                    );
                })}
            </MvWrapper>
        );
    }
});
// key: it.id,
// info: it,
// url_name: 'cover',
// playCount: false,
// width: 350,
// height: 200,
