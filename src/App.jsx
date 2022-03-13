import React, { memo } from 'react';
import { Provider } from 'react-redux';

import GetRoutes from './route';
import '@/assets/css/appmain.css';
import store from './store';

import { BrowserRouter } from 'react-router-dom';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import AppSidernav from './components/app-sidernav';

export default memo(function App() {
    //使用router路由表

    return (
        <Provider store={store}>
        <BrowserRouter>
            <div className="app_main">
                <div className="app_left">
                    <AppSidernav />
                </div>
                <div className="app_right">
                    <AppHeader />
                    <div className="w1100">
                        <GetRoutes />
                    </div>
                    <AppFooter />
                </div>
            </div>
        </BrowserRouter>
         </Provider>
    );
});
