import { Link } from "react-router-dom";
import { CATEGORY, IMAGE_CDN_URL } from "../Utils/constant";

import React from "react";

export default function HorizontalCard({ handler, trending }) {
	return (
		<div>
			<div className="w-full p-10">
				<div className="flex justify-between items-center">
					<h3 className="font-semibold text-lg text-zinc-400 ">Trending</h3>
					<select
						onChange={(e) => handler(e.target.value)}
						className="w-1/6 py-2 px-2 rounded"
						name=""
						id=""
					>
						{CATEGORY.map((item,index) => (
							<option key={index || item.identifier} value={item?.identifier}>
								{item?.name}
							</option>
						))}
					</select>
				</div>

				<div className="mt-6 gap-4 flex overflow-x-auto">
					{trending.map((item,index) => (
						<>
							<Link key={index || item?.id} to={`/${item?.media_type}/${item?.id}`} className="  w-[20%] flex-shrink-0  rounded-t">

								<div className="w-full rounded-t overflow-hidden ">
									<img className="w-full "
										src={`${IMAGE_CDN_URL}${item.backdrop_path || item.poster_path
											}`}
										alt=""
									/>
								</div>

								<div className="p-2">
									<span className="text-white text-sm">{item.name || item.title || item.orginal_title}</span>
									<p className="text-xs py-2 text-zinc-400">{item.overview.slice(0, 60)}...<span className="text-zinc-600">more</span>
									</p>
								</div>

							</Link>
						</>
					))}
				</div>
			</div>
		</div>
	);
}
