import React, { memo, useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSingerListAction } from '../../store/actionCreators';
import SingerListItem from '@/components/singer-item';
import {
    singerAreaList,
    singerTypeList,
    singInitial,
} from '@/common/local-data';
import { DiscoverSingerWrapper, NoPicName } from './style';
export default memo(function Singer() {
    const [area, setArea] = useState('全部');
    const [areaCode, setAreaCode] = useState(-1);
    const [type, setType] = useState('全部');
    const [typeCode, setTypeCode] = useState(-1);
    const [init, setInit] = useState('全部');
    const [initCode, setInitCode] = useState(-1);
    const { allSingerList } = useSelector(
        (state) => ({
            allSingerList: state.getIn(['discover', 'allSingerList']),
        }),
        shallowEqual
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSingerListAction(typeCode, areaCode, initCode, 100));
    }, [dispatch, areaCode, typeCode, initCode]);
    const areaList = Object.keys(singerAreaList);
    const typeList = Object.keys(singerTypeList);
    const initial = ['全部', ...singInitial, '#'];
    const changeArea = (e) => {
        setArea(e.target.innerText);
        setAreaCode(singerAreaList[e.target.innerText]);
    };
    const changeType = (e) => {
        setType(e.target.innerText);
        setTypeCode(singerTypeList[e.target.innerText]);
    };
    const changeInit = (e) => {
        setInit(e.target.innerText);
        let value = -1;
        if (e.target.innerText === '全部') {
            value = -1;
        } else if (e.target.innerText === '#') {
            value = 0;
        } else {
            value = e.target.innerText.toLowerCase();
        }
        setInitCode(value);
    };
    const navigate = useNavigate();
    const clickItem = (keywords) => {
        return () => {
            // window.location.href = `/search/song?keywords=${keywords}`;
            navigate(`/search/song?keywords=${keywords}`);
        };
    };
    return (
        <div style={{minHeight:'80vh'}}>
            <DiscoverSingerWrapper>
                <div className="area">
                    {areaList.map((item) => {
                        return (
                            <span
                                key={item}
                                className={
                                    item === area ? 'active' : 'area_item'
                                }
                                onClick={changeArea}
                            >
                                {item}
                            </span>
                        );
                    })}
                </div>
                <div className="type">
                    {typeList.map((item) => {
                        return (
                            <span
                                key={item}
                                className={
                                    item === type ? 'active' : 'type_item'
                                }
                                onClick={changeType}
                            >
                                {item}
                            </span>
                        );
                    })}
                </div>
                <div className="initial">
                    {initial.map((item) => {
                        return (
                            <em
                                key={item}
                                className={
                                    item === init ? 'active' : 'init_item'
                                }
                                onClick={changeInit}
                            >
                                {item}
                            </em>
                        );
                    })}
                </div>
            </DiscoverSingerWrapper>
            {allSingerList &&
                allSingerList.splice(0, 10).map((item) => {
                    return <SingerListItem info={item} key={item.id} />;
                })}
            <NoPicName>
                {allSingerList &&
                    allSingerList.map((item) => {
                        return (
                            <span
                                key={item.id}
                                onClick={clickItem(item.name)}
                            >
                                {item.name}
                            </span>
                        );
                    })}
            </NoPicName>
        </div>
    );
});
