import React from "react";
import { Link } from "react-router-dom";

function Sidenav() {
	return (
		<div className="w-[18%] h-full p-6 border-r-[1px] border-zinc-400">
			<h1 className="text-2xl font-bold flex gap-2">
				<i className="ri-tv-fill text-[#6556CD]"></i>
				<span className="text-zinc-100">FilmFlix</span>
			</h1>

			<nav className="flex flex-col gap-3 text-lg text-zinc-400">
				<h2 className="text-white text-xl font-semibold mt-8 mb-6">
					New Feeds
				</h2>
				<Link to="/trending" className="p-3 rounded-lg duration-300 hover:bg-[#6556CD] hover:text-white ">
					<i className="ri-fire-fill"></i> Trending
				</Link>
				<Link to="/popular" className="p-3 duration-300 rounded-lg hover:bg-[#6556CD] hover:text-white ">
					<i className="mr-1 ri-bard-fill"></i> Popular
				</Link>
				<Link to="/movies" className="p-3 duration-300 rounded-lg hover:bg-[#6556CD] hover:text-white ">
          <i className="mr-1 ri-movie-2-fill"></i> Movies
				</Link>
				<Link to="/tvshows" className="p-3 duration-300 rounded-lg hover:bg-[#6556CD] hover:text-white ">
          <i className="mr-1 ri-tv-2-fill"></i> Tv Shows
				</Link>
				<Link to="/people" className="p-3 duration-300 rounded-lg hover:bg-[#6556CD] hover:text-white ">
          <i className="mr-1 ri-user-fill"></i> People
				</Link>
			</nav>
      
      <hr className="mt-6" />
      
      <nav className="flex flex-col gap-3 text-lg text-zinc-400">
        <h2 className="text-white text-xl font-semibold mt-8 mb-6">
          Website Information
        </h2>
        <Link className="p-3 rounded-lg duration-300 hover:bg-[#6556CD] hover:text-white ">
          <i className="mr-1 ri-information-fill"></i> About
        </Link>
        <Link className="p-3 duration-300 rounded-lg hover:bg-[#6556CD] hover:text-white ">
          <i className="mr-1 ri-phone-fill"></i> Contact Us
        </Link>
        
        
      </nav>
		</div>
	);
}

export default Sidenav;
