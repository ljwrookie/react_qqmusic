import React, { memo, useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getNewAlbumAction } from '../../store/actionCreators';
import ThemeCover from '@/components/theme-cover';
import { SwitchArea } from './style';
export default memo(function DiscoverNewAlbum() {
    const [area, setArea] = useState('全部');
    const catLink = ['全部', '华语', '欧美', '韩国', '日本'];
    const { newAlbumList } = useSelector(
        (state) => ({
            newAlbumList: state.getIn(['discoverNew', 'newAlbumList']),
        }),
        shallowEqual
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewAlbumAction(area));
    }, [dispatch, area]);
    useEffect(() => {
        console.log(newAlbumList);
    });
    return (
        <div>
            <SwitchArea>
                {catLink.map((item) => {
                    return (
                        <span key={item} className="area">
                            {item}
                        </span>
                    );
                })}
            </SwitchArea>
            <div>
                {newAlbumList &&
                    newAlbumList.map((item) => {
                        console.log(item);
                        return (
                            <ThemeCover
                                key={item.id}
                                name={item.name}
                                singer={item.artist.name}
                                img_url={item.picUrl}
                                width={200}
                                height={200}
                            />
                        );
                    })}
            </div>
        </div>
    );
});
