import React, { useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { IMAGE_CDN_URL, TV_MOVIE_CATEGORY_PEOPLE } from "../Utils/constant";
import useShowPerson from "../redux/actions/useShowperson";
import SimilarRecom from "./Similar&Recom";
import Dropdown from "./Dropdown";

function ShowPerson() {
  const navigate = useNavigate();
	const { id } = useParams();
	useShowPerson(id);
	const person = useSelector((store) => store.person.info);
  const [selectedCategory, setSelectedCategory]  = useState("tv")
	if (!person) {
		return <Loading />;
	}
	const {
		combinedCredits,
		externalIds,
		
		personDetails,
		
	} = person;
  
  function setCategoryState(payload) {
    setSelectedCategory(payload);
  }
	return (
		<>
            
			<div className="px-[10%] flex gap-8 py-[2%] min-h-screen w-screen bg-[#1F1E24] relative ">
				<div className="w-1/4 ">
          <Link>
            <i onClick={()=> navigate(-1)} className=" ri-arrow-left-line absolute text-2xl  top-[2%] left-[4%] pb-2 text-white mr-2"></i>
          
          
          </Link>
          

					<img className="rounded "
						src={
							personDetails.profile_path
								? `${IMAGE_CDN_URL}${personDetails.profile_path}`
								: null
						}
						alt=""
					/>
          
          <hr className="h-2 my-4" />
          
          <nav className="text-zinc-400 text-xl flex gap-6  justify-start">
            {
              personDetails.homepage && <a target="_blank"  href={personDetails.homepage}>
                <i className="ri-external-link-line"></i>
              </a>
            }
            {/* {personDetails.imdb_id && (
              <a target="_blank" href={`https://www.imdb.com/name/${externalIds.imdb_id}/`}>
                imdb
              </a>
            )} */}

            {externalIds.wikidata_id && (
              <a
              
                target="_blank"
                href={`https://www.wikidata.org/wiki/${externalIds.wikidata_id}`}
              >
                <i className="ri-xbox-fill"></i>
              </a>
            )}
            
            {externalIds.twitter_id && (
              <a
                target="_blank"
                href={`https://x.com/${externalIds.twitter_id}`}
              >
                <i class="ri-twitter-x-fill"></i>
              </a>
            )
              
            }
            
            {externalIds.instagram_id && (
              <a
                target="_blank"
                href={`https://www.instagram.com/${externalIds.instagram_id}`}
              >
                <i class="ri-instagram-line"></i>
              </a>
            )

            }
            
            
          
            {externalIds.facebook_id && (
              <a
                target="_blank"
                href={`https://www.facebook.com/${externalIds.facebook_id}`}
              >
                <i class="ri-facebook-fill"></i>
              </a>
            )

            }
          </nav>
          
          
          
          <div className="py-6">
          
          
          <p className="pb-4 text-white  text-base flex flex-col">
              <span className="text-zinc-400 text-lg ">Know For</span>
              <span >{personDetails?.known_for_department}</span>
          
          </p>
          
          
            <p className="pb-4 text-white  text-base flex flex-col">
              <span className="text-zinc-400 text-lg ">Gender</span>
              <span >{personDetails?.gender ? "Male" : "female" }</span>

            </p>
            
            <p className="pb-4 text-white  text-base flex flex-col">
              <span className="text-zinc-400 text-lg ">Birthday</span>
              <span >{personDetails?.birthday}</span>

            </p>
            
            <p className="pb-4 text-white  text-base flex flex-col">
              <span className="text-zinc-400 text-lg ">Death date</span>
              <span >{personDetails?.deathday ? personDetails?.deathday : "Still Alive"}</span>

            </p>
            
            <p className="pb-4 text-white  text-base flex flex-col">
              <span className="text-zinc-400 text-lg ">Place of Birth</span>
              <span >{personDetails?.place_of_birth}</span>

            </p>
          
          </div>
          
				</div>
        
        
        
        
        <div className="w-3/4  ">
        
          <h1 className="text-6xl font-bold text-zinc-100">{
            
            personDetails.name ||
            personDetails.title ||
            personDetails.original_name ||
            personDetails.original_title}</h1>
          
          <h2 className="text-white text-xl py-4">Biography </h2>
          <p className="text-zinc-400 text-base ">{personDetails.biography}</p>
          
          <h2 className="text-white text-xl py-4">Summary </h2>
          {
            <SimilarRecom data = {combinedCredits.cast}  />
          }
          
          <div className="w-full ">
            <div className=" flex justify-between mb-6">
              <h2 className="text-white text-lg cursor-pointer">
                Tv & Movie
              </h2>

              <div>
                <Dropdown selectedValue={selectedCategory} handler={setCategoryState} config={TV_MOVIE_CATEGORY_PEOPLE} />
                
              </div>
              
            </div>
              <SimilarRecom data={person[selectedCategory + "Credits"].cast} />
          
          
          </div>
          
          
        </div>
			</div>
		</>
	);
}

export default ShowPerson;
