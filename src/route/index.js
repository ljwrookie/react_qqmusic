import { Navigate, useRoutes } from 'react-router-dom';
import Discover from '../pages/discover';
import SongList from '../pages/discover/c-pages/songlist';
import DjRadio from '../pages/discover/c-pages/djradio';
import Ranking from '../pages/discover/c-pages/ranking';
import Singer from '../pages/discover/c-pages/singer';
import New from '../pages/discover/c-pages/new';
import Download from '../pages/download';
import Like from '../pages/like';
import LocalSong from '../pages/local-song';
import Mv from '../pages/mv';
import Radio from '../pages/radio';
import Recommend from '../pages/recommend';
import Recent from '../pages/recent';
import Player from '../pages/player';
import { element } from 'prop-types';

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
const GetRoutes = () => {
    const routes = useRoutes([
        {
            path: '/discover',
            element: <Discover />,
            children: [
                {
                    path: 'songlist',
                    element: <SongList />,
                },
                {
                    path: 'djradio',
                    element: <DjRadio />,
                },
                {
                    path: 'ranking',
                    element: <Ranking />,
                },
                {
                    path: 'singer',
                    element: <Singer />,
                },
                {
                    path: 'new',
                    element: <New />,
                },
                {
                    path: '',
                    element: <Navigate to="/discover/songlist" />,
                },
            ],
        },
        {
            path: '/download/*',
            element: <Download />,
        },
        {
            path: '/like/*',
            element: <Like />,
        },
        {
            path: '/localsong/*',
            element: <LocalSong />,
        },
        {
            path: '/mv/*',
            element: <Mv />,
        },
        {
            path: '/radio/*',
            element: <Radio />,
        },
        {
            path: '/recommend/*',
            element: <Recommend />,
        },
        {
            path: '/recent/*',
            element: <Recent />,
        },
        {
            path: '/player',
            element: <Player />,
        },
        {
            path: '/',
            element: <Navigate to="/recommend" />,
        },
    ]);
    return routes;
};
export default GetRoutes;
