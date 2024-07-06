
import { IMAGE_CDN_URL } from "../Utils/constant";
import { Link } from "react-router-dom";

function Header({ randomWallpaper }) {
	return (
		<div className="h-[60%] text-white relative  w-full ">
			<div className="bg-gradient-to-r absolute w-full h-full z-40 from-black"></div>

			<div
				style={{
					backgroundImage: `url(${IMAGE_CDN_URL}${
						randomWallpaper.backdrop_path || randomWallpaper.poster_path
					})`,
					backgroundSize: "cover",
				}}
				className="w-full absolute h-full z-30"
			></div>

			<div className="p-[10%] absolute w-full h-full z-50">
				<h2 className="text-6xl font-semibold text-white ">
					{randomWallpaper?.title ||
						randomWallpaper?.orginal_name ||
						randomWallpaper?.name}
				</h2>
				<p className="  w-1/2 py-4 text-justify text-zinc-400">
					{randomWallpaper?.overview.slice(0, 200)}...
					<Link to={`${randomWallpaper.media_type}/${randomWallpaper.id}`} className="text-blue-400">more</Link>
				</p>

				<div className="text-zinc-400 flex text-base justify-start gap-4 mb-6">
					<p className=" w-fit  rounded flex items-center gap-2 ">
						<i className=" text-yellow-600  ri-megaphone-fill"></i>{" "}
						{randomWallpaper?.release_date?.toUpperCase()}
					</p>

					<p className=" w-fit rounded flex items-center gap-2 ">
						<i className=" text-yellow-600  ri-movie-2-fill"></i>{" "}
						{randomWallpaper?.media_type?.toUpperCase()}
					</p>
				</div>

				<Link to={`/movie/${randomWallpaper?.id}/trailer`} className="bg-[#6556CD] py-2 px-4 rounded">Watch Tralier</Link>
			</div>
		</div>
	);
}

export default Header;
