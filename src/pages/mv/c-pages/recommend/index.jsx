import React, { memo } from 'react';
import { MvRecommendWrapper } from './style';
import RecommendMv from './c-cpns/recommend-mv';
import NewMv from './c-cpns/new-mv'
import HotMv from './c-cpns/hot-mv'
import ExclusiveMv from './c-cpns/exclusive-mv';
export default memo(function Recommend() {
    
    return (
        <div>
            <MvRecommendWrapper>
                <RecommendMv/>
                <NewMv />
                <HotMv/>
                <ExclusiveMv/>
            </MvRecommendWrapper>
        </div>
    );
});
