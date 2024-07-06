import Topnav from "./Topnav";
import Header from "./Header";
import { useState } from "react";
import HorizontalCard from "./HorizontalCard";
import Loading from "./Loading";
import useTitle from "../Utils/useTitle";
import useTrendingList from "../Utils/useTrendingList";
import useRandomWallpaper from "../Utils/useRandomWallpaper";
import axiosInstances from "../Utils/axiosInstance";


function Home() {
	useTitle("Home");

	const [selectedCategory, setSelectedCategory] = useState("all");

	const trendingList = useTrendingList(selectedCategory);
	const randomWallpaper = useRandomWallpaper();
	
	

	function setCategory(category) {
		selectedCategory(category);
	}

	return randomWallpaper && trendingList ? (
		<div className="  overflow-x-hidden w-full h-full">
			<Topnav />
			<Header randomWallpaper={randomWallpaper} />
			<HorizontalCard handler={setCategory} trending={trendingList} />
		</div>
	) : (
		<Loading />
	);
}

export default Home;
