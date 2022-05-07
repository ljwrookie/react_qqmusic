import React, { memo, useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getNewAlbumAction } from '@/pages/discover/store/actionCreators';
import ThemeCover from '@/components/theme-cover';
import { SwitchArea, CardWrapper } from './style';
export default memo(function DiscoverNewAlbum() {
    const [area, setArea] = useState('全部');
    const [currentCode, setCurrentCode] = useState('ALL');
    const catLink = {
        全部: 'ALL',
        华语: 'ZH',
        欧美: 'EA',
        韩国: 'KR',
        日本: 'JP',
    };
    const catkeys = Object.keys(catLink);
    const { newAlbumList } = useSelector(
        (state) => ({
            newAlbumList: state.getIn(['discover', 'newAlbumList']),
        }),
        shallowEqual
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewAlbumAction(currentCode));
    }, [dispatch, currentCode]);
    const changeArea = (e) => {
        // e.target.className = e.target.className + ' active';
        // console.log(e.target.value);
        // console.log(e.target.innerText);
        setArea(e.target.innerText);
        setCurrentCode(catLink[e.target.innerText]);
    };
    return (
        <div style={{minHeight: '80vh'}}>
            <SwitchArea>
                {catkeys.map((item) => {
                    return (
                        <span
                            key={item}
                            className={area === item ? 'active' : 'area'}
                            onClick={changeArea}
                        >
                            {item}
                        </span>
                    );
                })}
            </SwitchArea>
            <CardWrapper>
                {newAlbumList &&
                    newAlbumList.map((item) => {
                        return (
                            // <div className="card">
                            <ThemeCover
                                key={item.id}
                                name={item.name}
                                singer={item.artist.name}
                                img_url={item.picUrl}
                                width={200}
                                height={200}
                            />
                            // </div>
                        );
                    })}
            </CardWrapper>
        </div>
    );
});
