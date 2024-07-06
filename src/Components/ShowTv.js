

import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { IMAGE_CDN_URL } from "../Utils/constant";
import SimilarRecom from "./Similar&Recom";
import useShowTv from "../redux/actions/useShowTv";
import SeasonCard from "./SeasonCard";

function ShowTv() {
  const { id } = useParams();
  const tv = useSelector((store) => store.tv.info);
  const navigate = useNavigate();
  const { pathname } = useLocation(); // provide only endpoint
  useShowTv(id);

  

  if (!tv) {
    return <Loading />;
  }

  const { externalIds, tvDetails, trailers, translatedLangauage, recommendations, similarMovies, watchProviders } = tv;
  const { imdb_id, wikidata_id } = externalIds;

  const { homepage, backdrop_path, poster_path } = tvDetails;
  return (
    <>

      <div
        style={{
          backgroundImage: `url(${IMAGE_CDN_URL}${tvDetails?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-screen  relative min-h-screen "
      >
        <div className="absolute z-10 w-screen h-full bg-gradient-to-r from-black"></div>

        {/* part - 1 */}

        <div className="px-[10%] py-[1%] relative z-30">
          <div className=" text-zinc-400 text-xl flex justify-start gap-6 items-center ">
            <i
              onClick={() => navigate(-1)}
              className=" ri-arrow-left-line text-white mr-2"
            ></i>

            <a target="_blank" href={homepage}>
              <i className="ri-external-link-line"></i>
            </a>
            {imdb_id && (
              <a target="_blank" href={`https://www.imdb.com/title/${imdb_id}/`}>
                IMDB
              </a>
            )}

            {wikidata_id && (
              <a
                target="_blank"
                href={`https://www.wikidata.org/wiki/${wikidata_id}`}
              >
                <i className="ri-xbox-fill"></i>
              </a>
            )}
          </div>

          <div className="w-full flex py-12 gap-12">
            <div className="w-80 object-cover">
              <img
                className="w-full h-full rounded"
                src={`${IMAGE_CDN_URL}${poster_path || backdrop_path}`}
                alt=""
              />
            </div>

            <div className="content flex-1">
              <h1 className="text-6xl font-bold text-zinc-100">
                {tvDetails.original_name ||
                 tvDetails.title ||
                  tvDetails.name ||
                  tvDetails.original_title}

                <span className="text-base text-zinc-400">
                  {" "}
                  ({tvDetails.first_air_date.split("-")[0]})
                </span>
              </h1>

              <p className="text-orange-400  text-lg my-4">
                {tvDetails?.genres.map((genres) => genres?.name).join(" , ")}
              </p>

              <div className="flex justify-between w-1/2">

                <span className="text-zinc-400">
                  <i className="ri-calendar-line text-white mr-2"></i>
                  {tvDetails?.first_air_date}
                </span>


                <span className="text-zinc-400">
                  <i className="ri-time-line text-white mr-2"></i>
                  {tvDetails?.number_of_episodes } total episode
                </span>

                <span className=" text-zinc-400"> <i className="ri-star-fill text-white"></i> {tvDetails?.vote_average} rating </span>

              </div>


              <h2 className="text-xl text-white py-4">Overview</h2>
              <p className="text-zinc-200 text-base">{tvDetails.overview}</p>
              <h2 className="text-xl text-white py-4">Movie Translated</h2>

              <p className="text-zinc-200 text-base">
                {translatedLangauage?.map((lang) => lang.name).join(" , ")}
              </p>


              {
                trailers && <Link to={`${pathname}/trailer`} className="bg-[#6556CD] text-white mt-5 px-5 py-3 inline-block rounded-md"><i className="ri-play-large-fill "></i> Play Trailer</Link>
              }
            </div>
          </div>




          {/* watch provider */}

          {

            watchProviders?.flatrate && <div className="w-1/2 text-white flex gap-4 py-4 items-center">
              {
                (
                  <>
                    <h2 className="w-38">Available on Platform</h2>
                    <div className="flex gap-4">
                      {
                        watchProviders?.flatrate.map(provider => {
                          return (
                            <img key={provider?.id} className="w-16 rounded-md" alt={provider?.provider_name} title={provider?.provider_name} src={IMAGE_CDN_URL + provider?.logo_path}></img>
                          )
                        })
                      }


                    </div>


                  </>
                )
              }

            </div>

          }


          {


            watchProviders?.buy && <div className="w-1/2 text-white flex gap-4 py-4 items-center">
              {

                <>
                  <h2 className="w-36">Available on Buy</h2>
                  <div className="flex gap-4">
                    {
                      watchProviders?.buy.map(provider => {
                        return (
                          <img key={provider?.id} className="w-16 rounded-md" alt={provider?.provider_name} title={provider?.provider_name} src={IMAGE_CDN_URL + provider?.logo_path}></img>
                        )
                      })
                    }


                  </div>


                </>

              }

            </div>
          }


          {
            watchProviders?.rent && <div className="w-1/2 text-white flex gap-4 py-4 items-center">
              {
                <>
                  <h2 className="w-36 ">Available on Rent</h2>
                  <div className="flex gap-4">
                    {
                      watchProviders?.rent.map(provider => {
                        return (
                          <img key={provider?.id} className="w-16 rounded-md" alt={provider?.provider_name} title={provider?.provider_name} src={IMAGE_CDN_URL + provider?.logo_path}></img>
                        )
                      })
                    }


                  </div>


                </>

              }

            </div>
          }
          
          {/* seasons */}

{
            <div className="">
              <h1 className="text-white text-2xl my-4">Seasons</h1>
              {/* render either recommendations or similarMovies */}

              <SeasonCard data={tvDetails.seasons} />


            </div>
}


          {/* recommendations Tv */}

          {


            <div className="">
              <h1 className="text-white text-2xl my-4">{recommendations.length ? "Recommendations Tv" : "Similar Tv"}</h1>
              {/* render either recommendations or similarMovies */}

              <SimilarRecom data={recommendations.length ? recommendations : similarMovies} />


            </div>

          }

        </div>
        <Outlet />
      </div>


    </>
  );
}

export default ShowTv
