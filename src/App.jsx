import React, { memo, Suspense } from 'react';
import { Provider } from 'react-redux';

import GetRoutes from './route';

import store from './store';
import { AppWrapper, BackTopWrapper, LoginWrapper } from './appStyle';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from './components/app-header';
import Login from './pages/login';
import AppPlayerBar from './pages/player/app-player-bar';
// import PlayerBar from './components/playerbar';
import AppSidernav from './components/app-sidernav';
import { BackTop, Skeleton } from 'antd';

// const loginContext = React.createContext(false);

export default memo(function App() {
    //使用router路由表

    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppWrapper>
                    <div className="app_main">
                        <div className="app_left">
                            <AppSidernav />
                        </div>
                        <div className="app_right">
                            <div className="app-top">
                                <AppHeader />
                            </div>
                            <div className="w1100">
                                <Suspense
                                    fallback={
                                        <div>
                                            <Skeleton active />
                                            <Skeleton active />
                                            <Skeleton active />
                                            <Skeleton active />
                                            <Skeleton active />
                                            <Skeleton active />
                                        </div>
                                    }
                                >
                                    <GetRoutes />
                                </Suspense>
                            </div>
                            <AppPlayerBar/>
                        </div>
                    </div>
                </AppWrapper>
                <LoginWrapper>
                    <Login />
                </LoginWrapper>
                <BackTopWrapper>
                    <BackTop>
                        <div className="back_top">UP</div>
                    </BackTop>
                </BackTopWrapper>
            </BrowserRouter>
        </Provider>
    );
});
