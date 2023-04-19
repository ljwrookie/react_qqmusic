import React, { memo, useEffect, useState } from 'react';

import {
    getNewAlbum
} from '@/service/discover'
import ThemeCover from '@/components/theme-cover';
import { SwitchArea, CardWrapper } from './style';
export default memo(function DiscoverNewAlbum() {
    const [area, setArea] = useState('全部');
    const [newAlbumList, setNewAlbumList] = useState([])
    const [currentCode, setCurrentCode] = useState('ALL');
    const catLink = {
        全部: 'ALL',
        华语: 'ZH',
        欧美: 'EA',
        韩国: 'KR',
        日本: 'JP',
    };
    const catKeys = Object.keys(catLink);
    
    useEffect(() => {
        getNewAlbum(currentCode).then(res => {
            res && res.albums && setNewAlbumList(res.albums)
        })
    }, [currentCode]);
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
                {catKeys.map((item) => {
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
