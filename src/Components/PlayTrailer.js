
import React from 'react'
import useTitle from '../Utils/useTitle';
import ReactPlayer from 'react-player/youtube'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PlayTrailer() {
  useTitle(`Trailer`)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const key = pathname.includes('movie') ? 'movie' : 'tv';
  
  const trailerData = useSelector(store => store[key].info.trailers);
  
  return (
    <div className='bg-[rgba(0,0,0,0.8)] flex justify-center items-center w-screen h-full fixed top-0 z-[100]'>
    <Link className='absolute text-2xl right-[2%] top-[2%]'>
    
        <i
          onClick={() => navigate(-1)}
          className=" ri-close-large-fill text-white mr-2"
        ></i>
    
    </Link>
      
    
    
      <ReactPlayer controls={true} playing="true" width="1400px" height="600px" url={`https://www.youtube.com/watch?v=${trailerData.key}`} />
    </div>
  )
}

export default PlayTrailer;
