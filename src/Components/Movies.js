import Dropdown from "./Dropdown";
import {
    MOVIES_CATEGORY
} from "../Utils/constant";
import Topnav from "./Topnav";
import { useEffect, useState } from "react";
import axiosInstances from "../Utils/axiosInstance";
import Loading from "./Loading";
import Cards from "./Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import CardShimmer from "./CardShimmer";
import useTitle from "../Utils/useTitle";
function Movies() {
    const [moviesCategory, setMoviesCategory] = useState("now_playing");
    const [pageCount, setPageCount] = useState(1);
    const [movies, setMovies] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const navigate = useNavigate();
    
    useTitle("Movies")
    const getMovies = async () => {
        const { data } = await axiosInstances(`movie/${moviesCategory}?language=en-US&page=${pageCount}`);

        if (data.results.length > 0) {
            setPageCount((prev) => prev + 1);
            setMovies((previous) => [...previous, ...data.results]);
        } else {
            setHasMore(false);
        }
    };

    function refreshHandler() {
        if (movies.length === 0) {
            //initial calling
            getMovies();
        } else {
            // wheneever my state change it will be called
            setMovies([]);
            setPageCount(1);
            getMovies();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [moviesCategory]);

    function setMoviesState(payload) {
        setMoviesCategory(payload);
    }
    return movies.length > 0 ? (
        <>
            <div className="relative w-screen min-h-screen py-6  box-border bg-[#1F1E24]">
                <Topnav />

                <div className="py-[1%] px-[4%] flex justify-between">
                    <h2
                        onClick={() => navigate(-1)}
                        className="text-white text-lg cursor-pointer"
                    >
                        {" "}
                        <i className=" ri-arrow-left-line text-white mr-2"></i>Movies
                    </h2>

                    <div>
                        <Dropdown selectedValue={moviesCategory} handler={setMoviesState} config={MOVIES_CATEGORY} />
                    </div>
                </div>

                <div className="card-wrapper  px-[4%]">
                    <InfiniteScroll
                        hasMore={hasMore}
                        loader={<CardShimmer />}
                        dataLength={movies.length}
                        next={getMovies}
                    >
                        <Cards type="movie"  data={movies} />
                    </InfiniteScroll>
                </div>
            </div>
        </>
    ) : (
        <Loading />
    );
}

export default Movies;
