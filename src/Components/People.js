
import PersonCard from "./PersonCard";
import Topnav from "./Topnav";
import { useEffect, useState } from "react";
import axiosInstances from "../Utils/axiosInstance";
import Loading from "./Loading";
import Cards from "./Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import CardShimmer from "./CardShimmer";
import useTitle from "../Utils/useTitle";

function People() {
    const [pageCount, setPageCount] = useState(1);
    const [people, setPeople] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const navigate = useNavigate();
    useTitle("People")
    const getPopularPeople = async () => {
        const { data } = await axiosInstances(`/person/popular?language=en-US&page=${pageCount}`);

        if (data.results.length > 0) {
            setPageCount((prev) => prev + 1);
            setPeople((previous) => [...previous, ...data.results]);
        } else {
            setHasMore(false);
        }
    };

    function refreshHandler() {
        if (people.length === 0) {
            //initial calling
            getPopularPeople();
        } else {
            // wheneever my state change it will be called
            setPeople([]);
            setPageCount(1);
            getPopularPeople();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, []);


   

    return people.length > 0 ? (
        <>
            <div className="relative w-screen min-h-screen py-6  box-border bg-[#1F1E24]">
                <Topnav />

                <div className="py-[1%] px-[4%] flex justify-between">
                    <h2
                        onClick={() => navigate(-1)}
                        className="text-white text-lg cursor-pointer"
                    >
                        {" "}
                        <i className=" ri-arrow-left-line text-white mr-2"></i>People
                    </h2>

                   
                </div>

                <div className="card-wrapper px-[4%]">
                    <InfiniteScroll
                        hasMore={hasMore}
                        loader={<CardShimmer />}
                        dataLength={people.length}
                        next={getPopularPeople}
                    >
                        <PersonCard data={people} />
                    </InfiniteScroll>
                </div>
            </div>
        </>
    ) : (
        <Loading />
    );
}

export default People;
