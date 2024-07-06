import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_CDN_URL } from "../Utils/constant";
import noImage from "../img/noImage.jpg";
export default function SearchCard({
	profile_path,
	backdrop_path,
	poster_path,
	title,
	orginal_name,
	name,
	media_type,
	id
}) {
	return (
		<Link to={`/${media_type}/${id}`} className="hover:text-black text-zinc-600 border-b-2 border-zinc-100 hover:bg-zinc-300 duration-300 font-semibold flex gap-4  items- w-full p-2 ">
			<div className="w-1/4 rounded-md overflow-hidden ">
				<img
					className="w-full h-28 object-cover "
					src={
						profile_path || backdrop_path
							? `${IMAGE_CDN_URL}${profile_path || backdrop_path}`
							: noImage
					}
					alt=""
				/>
			</div>

			<span>{title || orginal_name || name}</span>
		</Link>
	);
}
