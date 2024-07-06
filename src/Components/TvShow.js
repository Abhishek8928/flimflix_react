import Dropdown from "./Dropdown";
import {
    TV_SERIES_CATEORY
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
import SeasonCard from "./SeasonCard";
function TvShows() {
    const [tvShowCategory, setTvShowCategory] = useState("airing_today");
    const [pageCount, setPageCount] = useState(1);
    const [tvShow, setTvShow] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const navigate = useNavigate();
    useTitle("Tv Shows")
    const getTvShow = async () => {
        const { data } = await axiosInstances(`tv/${tvShowCategory}?language=en-US&page=${pageCount}`);

        if (data.results.length > 0) {
            setPageCount((prev) => prev + 1);
            setTvShow((previous) => [...previous, ...data.results]);
        } else {
            setHasMore(false);
        }
    };

    function refreshHandler() {
        if (tvShow.length === 0) {
            //initial calling
            getTvShow();
        } else {
            // wheneever my state change it will be called
            setTvShow([]);
            setPageCount(1);
            getTvShow();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [tvShowCategory]);

    function setTvShowState(payload) {
        setTvShowCategory(payload);
    }

    
    return tvShow.length > 0 ? (
        <>
            <div className="relative w-screen min-h-screen py-6  box-border bg-[#1F1E24]">
                <Topnav />

                <div className="py-[1%] px-[4%] flex justify-between">
                    <h2
                        onClick={() => navigate(-1)}
                        className="text-white text-lg cursor-pointer"
                    >
                        {" "}
                        <i className=" ri-arrow-left-line text-white mr-2"></i>Tv Shows
                    </h2>

                    <div>
                        <Dropdown selectedValue={tvShowCategory} handler={setTvShowState} config={TV_SERIES_CATEORY} />
                    </div>
                </div>

                <div className="card-wrapper px-[4%]">
                    <InfiniteScroll
                        hasMore={hasMore}
                        loader={<CardShimmer />}
                        dataLength={tvShow.length}
                        next={getTvShow}
                    >
                        <Cards data={tvShow} />
                    </InfiniteScroll>
                </div>
            </div>
        </>
    ) : (
        <Loading />
    );
}

export default TvShows;
