import React, { memo } from 'react';
import '@/assets/css/appmain.css';

import { BrowserRouter } from 'react-router-dom';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import AppSidernav from './components/app-sidernav';

export default memo(function App() {
    return (
        <BrowserRouter>
            <div className="app_main">
                <div className="app_left">
                    <AppSidernav />
                </div>
                <div className="app_right">
                    <AppHeader />
                    content部分<span className="iconfont">&#xe617;</span>
                    <AppFooter />
                </div>
            </div>
        </BrowserRouter>
    );
});
