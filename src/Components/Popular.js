import Dropdown from "./Dropdown";
import {
	TRENDING_CATEGORY,
	TIME_WINDOW,
	POPULAR_CATEGORY,
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
function Popular() {
	const [popularCategory, setpopularCategory] = useState("tv");
	const [pageCount, setPageCount] = useState(1);
	const [popular, setpopular] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const navigate = useNavigate();
	
	useTitle("popular")
	const getpopular = async () => {
		const { data } = await axiosInstances(
			`${popularCategory}/popular?language=en-US&page=${pageCount}`
		);

		if (data.results.length > 0) {
			setPageCount((prev) => prev + 1);
			setpopular((previous) => [...previous, ...data.results]);
		} else {
			setHasMore(false);
		}
	};

	function refreshHandler() {
		if (popular.length === 0) {
			//initial calling
			getpopular();
		} else {
			// wheneever my state change it will be called
			setpopular([]);
			setPageCount(1);
			getpopular();
		}
	}

	useEffect(() => {
		refreshHandler();
	}, [popularCategory]);

	function setpopularState(payload) {
		setpopularCategory(payload);
	}

	return popular.length > 0 ? (
		<>
			<div className="relative w-screen min-h-screen py-6  box-border bg-[#1F1E24]">
				<Topnav />

				<div className="py-[1%] px-[4%] flex justify-between">
					<h2
						onClick={() => navigate(-1)}
						className="text-white text-lg cursor-pointer"
					>
						{" "}
						<i className=" ri-arrow-left-line text-white mr-2"></i>popular
					</h2>

					<div>
						<Dropdown selectedValue={popularCategory} handler={setpopularState} config={POPULAR_CATEGORY} />
					</div>
				</div>

				<div className="card-wrapper px-[4%]">
					<InfiniteScroll
						hasMore={hasMore}
						loader={<CardShimmer />}
						dataLength={popular.length}
						next={getpopular}
					>
						<Cards data={popular} />
					</InfiniteScroll>
				</div>
			</div>
		</>
	) : (
		<Loading />
	);
}

export default Popular;
