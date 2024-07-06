import Dropdown from "./Dropdown";
import { TRENDING_CATEGORY, TIME_WINDOW } from "../Utils/constant";
import Topnav from "./Topnav";
import { useEffect, useState } from "react";
import axiosInstances from "../Utils/axiosInstance";
import Loading from "./Loading";
import Cards from "./Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import CardShimmer from "./CardShimmer";
import useTitle from "../Utils/useTitle";
function Trending() {
	const [trendingCategory, setTrendingCategory] = useState("all");
	const [timeWindow, setTimeWindow] = useState("day");
	const [pageCount, setPageCount] = useState(1);
	const [trending, setTrending] = useState([]);
	const [hasMore, setHasMore] = useState(true);
    const navigate =  useNavigate();
	
	useTitle("trending")
	const getTrending = async () => {
		const { data } = await axiosInstances(
			`trending/${trendingCategory}/${timeWindow}?language=en-US&page=${pageCount}`
		);

		if (data.results.length > 0) {
			setPageCount((prev) => prev + 1);
			setTrending((previous) => [...previous, ...data.results]);
		} else {
			setHasMore(false);
		}
	};

	function refreshHandler() {
		if (trending.length === 0) {
            //initial calling
			getTrending();
		} else {
            // wheneever my state change it will be called
			setTrending([]);
			setPageCount(1);
			getTrending();
		}
	}

	useEffect(() => {
		refreshHandler();
	}, [trendingCategory, timeWindow]);

	function setTrendingState(payload) {
		setTrendingCategory(payload);
	}

	function setTimeState(payload) {
		setTimeWindow(payload);
	}

	return trending.length > 0 ? (
		<>
			<div className="relative w-screen min-h-screen py-6  box-border bg-[#1F1E24]">
				<Topnav />

				<div className="py-[1%] px-[4%] flex justify-between">
                    <h2 onClick={() => navigate(-1)} className="text-white text-lg cursor-pointer">
						{" "}
						<i className=" ri-arrow-left-line text-white mr-2"></i>Trending
					</h2>

					<div>
						<Dropdown selectedValue = {trendingCategory}  handler={setTrendingState} config={TRENDING_CATEGORY} />
                        <Dropdown selectedValue={timeWindow} handler={setTimeState} config={TIME_WINDOW} />
					</div>
				</div>

				<div className="card-wrapper px-[4%]">
					<InfiniteScroll
						hasMore={hasMore}
						loader={<CardShimmer />}
						dataLength={trending.length}
						next={getTrending}
					>
						<Cards data={trending} />
					</InfiniteScroll>
				</div>
			</div>
		</>
	) : (
		<Loading />
	);
}

export default Trending;
