import React, { memo } from 'react';
import { AlbumItemWrapper } from './style';
import { getSizeImage } from '../../utils/format-utils';
export default memo(function AlbumListItem(props) {
    const { info } = props;
    const picUrl = info.picUrl;
    const name = info.name;
    const size = info.size;
    const artist = info.artist.name;
    const publishTime = new Date(info.publishTime)
        .toLocaleDateString()
        .replace(/\//g, '-');
    return (
        <AlbumItemWrapper>
            <img alt="封面" src={getSizeImage(picUrl, 60, 60)} />
            <div className="album_name text-nowrap">{name}</div>
            <div className="artist">{artist}</div>
            <div className="publish_time">{publishTime}</div>
            <div className="size">{size}首</div>
        </AlbumItemWrapper>
    );
});
