import { Navigate, useRoutes} from "react-router-dom";
import Discover from "../pages/discover";
import Download from "../pages/download";
import Like from "../pages/like";
import LocalSong from "../pages/local-song";
import Mv from "../pages/mv";
import Radio from "../pages/radio";
import Recommend from "../pages/recommend";
import Recent from "../pages/recent";

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
const GetRoutes = ()=>{
    const routes =  useRoutes([
        {
            path: '/discover/*',
            element: <Discover/>,
        },
        {
            path: '/download/*',
            element: <Download/>
        },
        {
            path: '/like/*',
            element: <Like/>
        },
        {
            path: '/localsong/*',
            element: <LocalSong/>
        },
        {
            path: '/mv/*',
            element: <Mv/>
        },
        {
            path: '/radio/*',
            element: <Radio/>
        },
        {
            path: '/recommend/*',
            element: <Recommend/>
        },
        {
            path: '/recent/*',
            element: <Recent/>
        },
        {
            path: '/',
            element: <Navigate to="/recommend"/>
        },
    ])
    return routes
}
export default GetRoutes