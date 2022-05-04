import { Navigate, useRoutes } from 'react-router-dom';
import React from 'react';
const Discover = React.lazy((_) => import('../pages/discover'));
const Ranking = React.lazy((_) =>
    import('../pages/discover/c-pages/ranking')
);
const Singer = React.lazy((_) =>
    import('../pages/discover/c-pages/singer')
);
const New = React.lazy((_) => import('../pages/discover/c-pages/new'));
const MvCommend = React.lazy((_) =>
    import('../pages/mv/c-pages/recommend')
);
const MvRanking = React.lazy((_) => import('../pages/mv/c-pages/ranking'));
const MvList = React.lazy((_) => import('../pages/mv/c-pages/mv-list'));
const Download = React.lazy((_) => import('../pages/download'));
const Like = React.lazy((_) => import('../pages/like'));
const LocalSong = React.lazy((_) => import('../pages/local-song'));
const Mv = React.lazy((_) => import('../pages/mv'));
const Radio = React.lazy((_) => import('../pages/radio'));
const Recommend = React.lazy((_) => import('../pages/recommend'));
const Recent = React.lazy((_) => import('../pages/recent'));
const Player = React.lazy((_) => import('../pages/player'));

const Playlist = React.lazy((_) => import('../pages/playlist'));
const PlaylistDetail = React.lazy((_) =>
    import('../pages/playlist/c-pages/all-songs')
);
const PlaylistComment = React.lazy((_) =>
    import('../pages/playlist/c-pages/comment')
);
const PlaylistSubscriber = React.lazy((_) =>
    import('../pages/playlist/c-pages/subscriber')
);
const MvPlayer = React.lazy((_) => import('../pages/mv-player'));
const Search = React.lazy((_) => import('../pages/search'));
const SearchSong = React.lazy((_) =>
    import('../pages/search/c-pages/song')
);
const SearchMv = React.lazy((_) => import('../pages/search/c-pages/mv'));
const SearchAlbum = React.lazy((_) =>
    import('../pages/search/c-pages/album')
);
const SearchSinger = React.lazy((_) =>
    import('../pages/search/c-pages/singer')
);
const DiscoverNewSong = React.lazy((_) =>
    import('../pages/discover/c-pages/new/c-pages/songs')
);
const DiscoverNewAlbum = React.lazy((_) =>
    import('../pages/discover/c-pages/new/c-pages/albums')
);
const HomePage = React.lazy((_) => import('../pages/user/c-pages/home-page'));
const Love = React.lazy((_) => import('../pages/user/c-pages/home-page/love'));
const CreatePlaylist = React.lazy((_) => import('../pages/user/c-pages/home-page/create-playlist'));
const CollectionPlaylist = React.lazy((_) => import('../pages/user/c-pages/home-page/collection-playlist'));
const Follow = React.lazy((_) => import('../pages/user/c-pages/follow'));
const Followed = React.lazy((_) => import('../pages/user/c-pages/followed'));
// import { element } from 'prop-types';

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
const GetRoutes = () => {
    const routes = useRoutes([
        {
            path: '/discover',
            element: <Discover />,
            children: [
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
                    children: [
                        {
                            path: 'songs',
                            element: <DiscoverNewSong />,
                        },
                        {
                            path: 'album',
                            element: <DiscoverNewAlbum />,
                        },
                        {
                            path: '',
                            element: <Navigate to="/discover/new/songs" />,
                        },
                    ],
                },
                {
                    path: '',
                    element: <Navigate to="/discover/new" />,
                },
            ],
        },
        {
            path: '/download',
            element: <Download />,
        },
        {
            path: '/like',
            element: <Like />,
        },
        {
            path: '/localsong',
            element: <LocalSong />,
        },
        {
            path: '/mv',
            element: <Mv />,
            children: [
                {
                    path: 'recommend',
                    element: <MvCommend />,
                },
                {
                    path: 'ranking',
                    element: <MvRanking />,
                },
                {
                    path: 'list',
                    element: <MvList />,
                },
                {
                    path: '',
                    element: <Navigate to="/mv/recommend" />,
                },
            ],
        },
        {
            path: '/radio',
            element: <Radio />,
        },
        {
            path: '/recommend',
            element: <Recommend />,
        },
        {
            path: '/recent',
            element: <Recent />,
        },
        {
            path: '/player',
            element: <Player />,
        },
        {
            path: '/playlist',
            element: <Playlist />,

            children: [
                {
                    path: 'detail',
                    element: <PlaylistDetail />,
                },
                {
                    path: 'comment',
                    element: <PlaylistComment />,
                },
                {
                    path: 'subscriber',
                    element: <PlaylistSubscriber />,
                },
                {
                    path: '',
                    element: <Navigate to="/playlist/detail" />,
                },
            ],
        },
        {
            path: '/mvplayer',
            element: <MvPlayer />,
        },

        {
            path: '/search',
            element: <Search />,
            children: [
                {
                    path: 'song',
                    element: <SearchSong />,
                },
                {
                    path: 'mv',
                    element: <SearchMv />,
                },
                {
                    path: 'album',
                    element: <SearchAlbum />,
                },
                {
                    path: 'singer',
                    element: <SearchSinger />,
                },
                {
                    path: '',
                    element: <Navigate to="/search/song" />,
                },
            ],
        },
        {
            path: '/userdetail',
            element: <HomePage />,
            children: [
                {
                    path: 'love',
                    element: <Love />,
                },
                {
                    path: 'createplaylist',
                    element: <CreatePlaylist />,
                },
                {
                    path: 'collectionplaylist',
                    element: <CollectionPlaylist />,
                },
                {
                    path: '',
                    element: <Navigate to="/userdetail/love" />,
                }
            ]
        },
        {
            path: '/userdetail/follow',
            element: <Follow />,
        },
        {
            path: '/userdetail/followed',
            element: <Followed />,
        },
        
        {
            path: '/',
            element: <Navigate to="/recommend" />,
        },
    ]);
    return routes;
};
export default GetRoutes;
