import React, { memo, Suspense, useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GetRoutes from './route';

import store from './store';
import { AppWrapper, BackTopWrapper } from './appStyle';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from './components/app-header';
import AppPlayerBar from './pages/player/app-player-bar';
// import PlayerBar from './components/playerbar';
import AppSidernav from './components/app-sidernav';
import { BackTop, Skeleton } from 'antd';

// const loginContext = React.createContext(false);

export default memo(function App() {
    //使用router路由表
    const [theme, setTheme] = useState(
        localStorage.getItem('Dark') === 'false' ? false : true
    );
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider
                    theme={theme ? { mode: 'dark' } : { mode: 'light' }}
                >
                    <AppWrapper>
                        <div className="app_main">
                            <div className="app_left">
                                <AppSidernav />
                            </div>
                            <div className="app_right">
                                <div className="app-top">
                                    <AppHeader theme={[theme, setTheme]} />
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
                                <AppPlayerBar />
                            </div>
                        </div>
                    </AppWrapper>
                    <BackTopWrapper>
                        <BackTop>
                            <div className="back_top">UP</div>
                        </BackTop>
                    </BackTopWrapper>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
});
