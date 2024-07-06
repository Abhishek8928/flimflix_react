


import axiosInstance from "../../Utils/axiosInstance";
import {addTv,removeTv} from "../reducers/tv"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axiosInstances from "../../Utils/axiosInstance";
import { useLocation } from "react-router-dom";

function useShowTv(id) {
    const dispatch = useDispatch();
    const { pathname } = useLocation()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const tvDetails = await axiosInstance.get(`tv/${id}?language=en-US`);
                const externalIds = await axiosInstance.get(`tv/${id}/external_ids`);
                const recommendations = await axiosInstance.get(
                    `tv/${id}/recommendations?language=en-US&page=1`
                );
                const similar = await axiosInstance.get(
                    `tv/${id}/similar?language=en-US&page=1`
                );
                const translated = await axiosInstances.get(
                    `tv/${id}/translations`
                )
                const trailers = await axiosInstance.get(`tv/${id}/videos?language=en-US`);
                const watchProviders = await axiosInstance.get(`tv/${id}/watch/providers`);
                
                dispatch(addTv({
                    tvDetails: tvDetails?.data,
                    externalIds: externalIds?.data,
                    recommendations: recommendations?.data?.results,
                    similartvs: similar?.data?.results,
                    trailers: trailers?.data?.results.find(item => item.type === 'Trailer'),
                    watchProviders: watchProviders?.data?.results.IN,
                    translatedLangauage: translated?.data?.translations

                }));
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };
        fetchData();
        
        

        return () => {
            dispatch(removeTv())
        }

    }, [pathname]);
}

export default useShowTv;
