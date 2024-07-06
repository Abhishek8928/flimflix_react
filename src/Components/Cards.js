

import React from 'react'
import { IMAGE_CDN_URL } from '../Utils/constant'
import { Link } from 'react-router-dom'
import noImage from "../img/noImage.jpg"

function Cards({data}) {
  return (
    <div className='flex flex-row flex-wrap justify-between items-center'>
      {
              
              data?.map((item,index)=>{
                return (
      <Link className='w-[22%]' key={item?.id || index} to={`/${item.media_type || 'tv'}/${item?.id}`}>

        <div className='w-full mb-4'>

          <img className='w-full wrounded h-40 rounded-lg object-cover' src={
            item?.backdrop || item.poster_path || item.profile_path
              ? `${IMAGE_CDN_URL}${item.backdrop_path || item.poster_path || item.profile_path}`
              : noImage
          } alt="" />

          <h1 className='py-2 text-white'>{item.name || item.title || item.original_name || item.original_name}</h1>

        </div>

      </Link>
                )
              })
      }
    </div>
  )
}

export default Cards
