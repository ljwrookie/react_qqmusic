import React, { memo } from 'react';
import { FooterWrapper } from './style';
import AppPlayerBar from '@/pages/player/app-player-bar';

export default memo(function AppFooter() {
    return (
        <FooterWrapper>
            <AppPlayerBar />
        </FooterWrapper>
    );
});
