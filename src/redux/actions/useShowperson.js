import axiosInstance from "../../Utils/axiosInstance";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axiosInstances from "../../Utils/axiosInstance";
import { useLocation } from "react-router-dom";
import { addPerson, removePerson } from "../reducers/person";

function useShowPerson(id) {
    const dispatch = useDispatch();
    const { pathname } = useLocation()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const personDetails = await axiosInstance.get(`person/${id}?language=en-US`);
                const externalIds = await axiosInstance.get(`person/${id}/external_ids`);
                const combinedCredits = await axiosInstance.get(`person/${id}/combined_credits?language=en-US`);
                const movieCredits = await axiosInstance.get(
                    `person/${id}/movie_credits?language=en-US&page=1`
                );
                const tvCredits = await axiosInstances.get(
                    `person/${id}/tv_credits?language=en-US`
                )


                dispatch(addPerson({
                    personDetails: personDetails?.data,
                    externalIds: externalIds?.data,
                    combinedCredits: combinedCredits?.data,
                    tvCredits: tvCredits?.data,
                    movieCredits: movieCredits?.data

                }));
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };
        fetchData();

        return () => {
            dispatch(removePerson())
        }

    }, [pathname]);
}

export default useShowPerson;
