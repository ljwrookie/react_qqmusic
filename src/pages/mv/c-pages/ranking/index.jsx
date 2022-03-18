import React, { useEffect, useState, memo } from 'react';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { MvRankingWrapper } from './style';
import MvRankCover from '../../../../components/mv-rank-cover';
import { getMvRankingAction } from '../../store/actionCreator';
import { nanoid } from "nanoid";
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
    const navList = ['总榜', '内地', '港台', '欧美', '韩国', '日本']
    return (
        <MvRankingWrapper>
            <div className="rank-title">
                <div className='rank-title-left'>
                    <img className="image" src={require('@/assets/image/mvRanking.png')} alt='MV巅峰榜' />
                </div>
                <div className='rank-title-right'>
                    <p className='rank-name'>巅峰榜.MV</p>
                    <p className='rank-time'>03.14-03.20</p>
                </div>
            </div>
            <div className='rank-content'>
                <div className="rank-nav">
                    {
                        navList.map((item, index) => {
                            return (<NavLink key={nanoid()}
                                style={{color: index=== state.index ? themeColor: '',
                                    borderBottom: index === state.index ? `3px ${themeColor} solid`: ''
                                }}
                                
                                to="#"
                                className="link"
                                onClick={() => keywordClick(item,index)}
                            >
                                {item}
                            </NavLink>)
                        })
                    }

                </div>
                <div className="rank-list">
                    {
                        mvRanking.map((item,index)=>{
                            const cover_props = {
                                index: index+1,
                                info: item,
                                url_name: 'cover',
                                time : item.mv.publishTime,
                                width: 140,
                                height: 80,
                            };
                            return (
                                <MvRankCover className='rank-cover' key={nanoid() } {...cover_props}/>
                            )
                        })
                    }    
                </div>
            </div>
        </MvRankingWrapper>
    )
});
