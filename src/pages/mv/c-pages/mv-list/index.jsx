import React, { memo, useEffect, useState } from 'react';
import classnames from 'classnames'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { MvListWrapper } from './style';
import { getAllMvAction } from '../../store/actionCreator';
import VideoCover from '@/components/video-cover';
import { myTheme } from '@/common/constants';
const { themeColor } = myTheme;
export default memo(function Ranking() {
    const firstList = ['全部', '内地', '港台', '欧美', '韩国', '日本'];
    const secondList = ['全部', '官方版', '现场版', '网易出品'];

    const [state, setState] = useState({
        order: '最新',
        area: '全部',
        type: '全部',
    });
    const { allMv = [] } = useSelector(
        (state) => ({
            allMv: state.getIn(['mv', 'allMv']),
        }),
        shallowEqual
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMvAction(state.area, state.type, state.order, 120));
    }, [dispatch, state]);

    const page_num = 3;
    const arr_page = new Array(Math.floor(allMv.length / page_num)).fill(
        0
    );
    const index_page = arr_page.map((item, index) => {
        return index + item;
    });
    const changeArea = (item) => {
        setState({ ...state, area: item });
    };
    const changeType = (item) => {
        setState({ ...state, type: item });
    };
    const changeOrder = (item) => {
        setState({ ...state, order: item });
    };
    return (
        <MvListWrapper>
            <div className="firstList">
                {firstList.map((item) => {
                    return (
                        <button
                            className={classnames(
                                'nav-button',
                                state.area === item ? 'active' : ''
                            )}
                            key={nanoid()}
                            onClick={() => changeArea(item)}
                        >
                            {item}
                        </button>
                    );
                })}
            </div>
            <div className="secondList">
                {secondList.map((item) => {
                    return (
                        <button
                            className={classnames(
                                'nav-button',
                                state.area === item ? 'active' : ''
                            )}
                            onClick={() => changeType(item)}
                            key={nanoid()}
                        >
                            {item === '网易出品' ? '独占' : item}
                        </button>
                    );
                })}
            </div>
            <div className="list-title">
                <div className="title-left">全部MV</div>
                <div className="title-right">
                    <span
                        onClick={() => changeOrder('最新')}
                        className={state.order === '最新' ? 'active' : ''}
                    >
                        最新
                    </span>
                    <span
                        onClick={() => changeOrder('最热')}
                        className={state.order === '最热' ? 'active' : ''}
                    >
                        最热
                    </span>
                </div>
            </div>

            <div className="content">
                {index_page.map((item) => {
                    return (
                        <div className="page" key={nanoid()}>
                            {allMv
                                .slice(
                                    item * page_num,
                                    (item + 1) * page_num
                                )
                                .map((it) => {
                                    const cover_props = {
                                        key: it.id,
                                        info: it,
                                        url_name: 'cover',
                                        playCount: false,
                                        width: 350,
                                        height: 200,
                                    };
                                    return <VideoCover {...cover_props} />;
                                })}
                        </div>
                    );
                })}
            </div>
        </MvListWrapper>
    );
});
