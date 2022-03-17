import React, { memo, useEffect, useState } from 'react';
import {
    shallowEqual,
    useDispatch,
    useSelector,
} from 'react-redux';
import { MvListWrapper } from './style';
import { getAllMvAction } from '../../store/actionCreator'
import VideoCover from '../../../../components/video-cover';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';
const { themeColor } = getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;
export default memo(function Ranking() {

    const firstList = ["全部", "内地", "港台", "欧美", "韩国", "日本"]
    const secondList = ["全部", "官方", "现场", "原生", "独占"]
    
    const [state, setState] = useState({
        order: '最新',
        area: "",
        type:"",
    })
    const { allMv } = useSelector(
        (state) => ({
            allMv: state.getIn(['mv', 'allMv'])
        }), shallowEqual
    )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllMvAction(state.area, state.type, state.order,120))
    },[dispatch, state])

    const page_num = 3;
    const arr_page = new Array(Math.floor(allMv.length / page_num)).fill(0);
 
    const index_page = arr_page.map((item, index) => {
        return index + item;
    });
    return (
        <MvListWrapper>
            <div className="firstList">
                {firstList.map((item) => {
                    return (
                        <button
                            className="nav-button"
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
                            className="nav-button"
                        >
                            {item}
                        </button>
                    );
                })}
            </div>
            <div className='list-title'>
                <div class="title-left">全部MV</div> 
                <div class="title-right">
                    <span>最新</span>
                    <span>最热</span>
                </div> 
            </div>

            <div className="content">
                {
                    index_page.map((item_page) => {
                        return (
                            <div>
                                return (
                                <div>
                                    {
                                        allMv.slice(item_page * page_num, (item_page + 1) * page_num).map((it) => {
                                            const cover_props = {
                                                key: it.id,
                                                info: it,
                                                url_name: 'cover',
                                                playCount: true,
                                                width: 350,
                                                height: 200,
                                            }
                                            return (<VideoCover {...cover_props}/>)
                                        })
                                    }
                                </div>
                                )
                            </div>
                        )
                    })
                }
            </div>
        </MvListWrapper>
    );
});
