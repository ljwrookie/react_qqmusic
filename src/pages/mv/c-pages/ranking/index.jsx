import React, { useEffect, useState, memo } from 'react';
import {
    getMvRanking
} from '@/service/mv'
import { MvRankingWrapper } from './style';
import MvRankCover from '../../../../components/mv-rank-cover';
import moment from 'moment';
import { myTheme } from '@/common/constants';
const { themeColor } = myTheme;
export default memo(function Ranking() {
    const [mvRanking, setMvRanking] = useState([])

    const [state, setState] = useState({
        index: 0,
        value: '',
    });

    useEffect(() => {
        getMvRanking(state.value).then(res => {
            setMvRanking(res?.data || mvRanking)
        })
    }, [state]);
    const keywordClick = (item, index) => {
        if (index === 0) setState({ index: 0, value: '' });
        else setState({ index, value: item });
    };

    const getCurrWeekDays = () => {
        let date = [];
        let weekOfDay = parseInt(moment().format('d')); // 计算今天是这周第几天 周日为一周中的第一天
        let start = moment().subtract(weekOfDay, 'days').format('MM.DD'); // 周一日期
        let end = moment()
            .add(7 - weekOfDay - 1, 'days')
            .format('MM.DD'); // 周日日期
        date.push(start);
        date.push(end);
        return date;
    };
    const navList = ['总榜', '内地', '港台', '欧美', '韩国', '日本'];
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
                        {getCurrWeekDays()[0]} - {getCurrWeekDays()[1]}
                    </p>
                </div>
            </div>
            <div className="rank-content">
                <div className="rank-nav">
                    {navList.map((item, index) => {
                        return (
                            <span
                                key={item}
                                className={
                                    index === state.index
                                        ? 'active'
                                        : 'link'
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
                                key={item.id}
                                {...cover_props}
                            />
                        );
                    })}
                </div>
            </div>
        </MvRankingWrapper>
    );
});
