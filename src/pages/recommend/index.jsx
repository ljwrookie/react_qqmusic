import React, { memo } from 'react';

import { RecmdMain } from './style';
import TopBanners from './c-cpns/top-banners';
import HotRecommend from './c-cpns/hot-recommend';
import PrivateContent from './c-cpns/private-content';
import NewSongs from './c-cpns/new-songs';
import MvRecommend from './c-cpns/mv-recommend';

export default memo(function Recommend() {
    return (
        <RecmdMain>
            <TopBanners />
            <HotRecommend />
            <PrivateContent />
            <NewSongs />
            <MvRecommend />
        </RecmdMain>
    );
});
