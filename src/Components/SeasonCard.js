


import React from 'react'
import { IMAGE_CDN_URL } from '../Utils/constant'
import noImage from "../img/noImage.jpg"

function SeasonCard({ data }) {
    return (
        <div className='flex flex-row flex-wrap justify-start gap-4 items-center'>
            {

                data?.map((item, index) => {
                    

                    return (
                        <div className='w-[22%] mb-8' key={item?.id || index} >

                           

                                <div className='w-full h-40'>
                                    <img className='w-full h-full wrounded  rounded-lg object-cover' src={
                                        item?.backdrop || item.poster_path || item.profile_path
                                            ? `${IMAGE_CDN_URL}${item.backdrop_path || item.poster_path || item.profile_path}`
                                            : noImage
                                    } alt="" />
                                
                                
                                

                                <h1 className='py-2 text-white'>{item.name || item.title || item.original_name || item.original_name}</h1>

                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default SeasonCard;
