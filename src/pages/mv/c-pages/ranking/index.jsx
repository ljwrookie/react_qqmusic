import React, { useEffect, useState, memo } from 'react';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { MvRankingWrapper } from './style';
import MvRankCover from '../../../../components/mv-rank-cover';
import { getMvRankingAction } from '../../store/actionCreator';
import { nanoid } from "nanoid";
import moment from 'moment';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';
const { themeColor} = (getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE)
export default memo(function Ranking() {
    const dispatch = useDispatch()
    const {mvRanking = []}= useSelector(
        (state)=>({
            mvRanking: state.getIn(['mv','mvRanking'])
        }),
        shallowEqual
    );

    const [state, setState] = useState({
        index: 0,
        value: ''
    })

    useEffect(()=>{
        dispatch(getMvRankingAction(state.value))
    },[dispatch,state])
    const keywordClick = (item,index) => {
        if(index === 0) setState({index: 0 , value: ''})
        else setState({index, value: item})
    }

    const getCurrWeekDays = () => {
        let date = []
        let weekOfday = parseInt(moment().format('d')) // 计算今天是这周第几天 周日为一周中的第一天
        let start = moment().subtract(weekOfday, 'days').format('MM.DD') // 周一日期
        let end = moment().add(7 - weekOfday - 1, 'days').format('MM.DD') // 周日日期
        date.push(start)
        date.push(end)
        return date
    }
    const navList = ['总榜', '内地', '港台', '欧美', '韩国', '日本']
    return (
        <MvRankingWrapper>
            <div className="rank-title">
                <div className="rank-title-left">
                    <img
                        className="image"
                        src={require('@/assets/image/mvRanking.png')}
                        alt="MV巅峰榜"
                    />
                </div>
                <div className="rank-title-right">
                    <p className="rank-name">巅峰榜.MV</p>
                    <p className="rank-time">
                        {getCurrWeekDays()[0] } - {getCurrWeekDays()[1]}
                    </p>
                </div>
            </div>
            <div className="rank-content">
                <div className="rank-nav">
                    {navList.map((item, index) => {
                        return (
                            <span
                                key={nanoid()}
                                className={ index === state.index ? 'active' : 'link'
                                }
                                onClick={() => keywordClick(item, index)}
                            >
                                {item}
                            </span>
                        );
                    })}
                </div>
                <div className="rank-list">
                    {mvRanking.map((item, index) => {
                        const cover_props = {
                            index: index + 1,
                            info: item,
                            url_name: 'cover',
                            time: item.mv.publishTime,
                            width: 140,
                            height: 80,
                        };
                        return (
                            <MvRankCover
                                className="rank-cover"
                                key={nanoid()}
                                {...cover_props}
                            />
                        );
                    })}
                </div>
            </div>
        </MvRankingWrapper>
    );
});
