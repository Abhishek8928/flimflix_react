

import {createBrowserRouter} from "react-router-dom"
import Home from "../Components/Home"
import App from "../App";
import Trending from "../Components/Trending"
import Popular from "../Components/Popular"
import Movies from "../Components/Movies";
import TvShows from "../Components/TvShow";
import People from "../Components/People";
import ShowMovie from "../Components/ShowMovie";
import ShowTv from "../Components/ShowTv";
import PlayTrailer from "../Components/PlayTrailer";
import NotFound from "../Components/NotFound";
import ShowPerson from "../Components/ShowPerson";


const Routes = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home />
            }
        ]
    },
    {
        path: "/trending",
        element: <Trending />,
    },
    {
        path: "/popular",
        element: <Popular/>,
    },
    {
        path: "/movies",
        element: <Movies />,
    },
    {
        path: "/tvshows",
        element: <TvShows />,
    },
    {
        path: "/people",
        element: <People />,
    },
    {
        path: "/person/:id",
        element: <ShowPerson />,
    },
    {
        path: "/tv/:id",
        element: <ShowTv />,
        
            children: [
                {
                    path: "/tv/:id/trailer",
                    element: <PlayTrailer />,
                }
            ]
        
    },
    {
        path: "/movie/:id",
        element: <ShowMovie />,
        children:[
            {
                path: "/movie/:id/trailer",
                element: <PlayTrailer/>,
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    },
])

export default Routes;