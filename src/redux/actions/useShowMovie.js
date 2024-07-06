import axiosInstance from "../../Utils/axiosInstance";
import { addMovie, removeMovie } from "../reducers/movies";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axiosInstances from "../../Utils/axiosInstance";
import { useLocation } from "react-router-dom";

function useShowMovie(id) {
    const dispatch = useDispatch();
    const { pathname } = useLocation()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const movieDetails = await axiosInstance.get(`movie/${id}?language=en-US`);
                const externalIds = await axiosInstance.get(`movie/${id}/external_ids`);
                const recommendations = await axiosInstance.get(
                    `movie/${id}/recommendations?language=en-US&page=1`
                );
                const similarMovies = await axiosInstance.get(
                    `movie/${id}/similar?language=en-US&page=1`
                );
                const translated = await axiosInstances.get(
                    `movie/${id}/translations`
                )
                const trailers = await axiosInstance.get(`movie/${id}/videos?language=en-US`);
                const watchProviders = await axiosInstance.get(`movie/${id}/watch/providers`);

                dispatch(addMovie({
                    movieDetails: movieDetails?.data,
                    externalIds: externalIds?.data,
                    recommendations: recommendations?.data?.results,
                    similarMovies: similarMovies?.data?.results,
                    trailers: trailers?.data?.results.find(item => item.type === 'Trailer'),
                    watchProviders: watchProviders?.data?.results.IN,
                    translatedLangauage: translated?.data?.translations

                }));
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };
      fetchData();
      
      return ()=>{
          dispatch(removeMovie())
      }

    }, [pathname]);
}

export default useShowMovie;
