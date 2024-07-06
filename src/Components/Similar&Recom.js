

import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { IMAGE_CDN_URL } from '../Utils/constant';
import noImage from "../img/noImage.jpg"
function SimilarRecom({data}) {
    
    const {pathname}  = useLocation();
    
  return (

            <div className='flex justify-start gap-4 overflow-x-scroll '>
            
            
                {
                    data?.map((item, index) => (

                        <Link className='w-60 flex-shrink-0' key={item?.id || index} to={`/${item.media_type === "tv" ? "tv" : "movie"}/${item?.id}`}>

                            <div className='w-full mb-4'>

                                <img className='w-full   h-40 rounded-lg object-cover' src={
                                    item?.backdrop || item.poster_path || item.profile_path
                                        ? `${IMAGE_CDN_URL}${item.backdrop_path || item.poster_path || item.profile_path}`
                                        : noImage
                                } alt="" />

                                <h1 className='py-2 text-white'>{item.name || item.title || item.original_name || item.original_name}</h1>

                            </div>

                        </Link>


                    ))
                }
            </div>
        

  )
}

export default SimilarRecom;
