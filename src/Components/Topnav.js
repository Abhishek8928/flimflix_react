import axios from "../Utils/axiosInstance";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";
function Topnav() {
	const [searchText, setSearchText] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const getSearchResult = async () => {
		try {
			const { data } = await axios(`/search/multi?query=${searchText}`);
			setSearchResult(data.results);
		} catch (error) {
			console.log("error while fetching", error.message)
		}
	};

	useEffect(() => {
		getSearchResult();
	}, [searchText]);
	return (
		<div className="relative flex text-zinc-400   justify-center items-center h-[10%] ">
			<div className="relative w-1/2 ">
				<input
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					className="py-4 px-6 w-full text-base outline-none rounded-lg bg-[rgba(0,0,0,0.4)]"
					type=""
					placeholder="search anything ..."
				/>
				{
					<i
						onClick={() => setSearchText("")}
						className={`ri-${searchText.length ? "close-large" : "search-2"
							}-line absolute translate-y-[-50%] top-1/2 right-[2%]`}
					></i>
				}

				<div className="search-result absolute z-[60] rounded mt-4 bg-zinc-200  top-[100%] w-full max-h-96 overflow-auto ">
					{searchResult.map((item, index) => (
						<SearchCard key={item.id || index} {...item} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Topnav;
