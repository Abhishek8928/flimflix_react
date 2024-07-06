import { useEffect, useState } from "react";
import axiosInstances from "./axiosInstance";

function useRandomWallpaper(){
    const [wallpaper, setWallpaper] = useState(null);

    const getWallpaperResult = async () => {
        try {
            const { data } = await axiosInstances("trending/all/day?language=en-US");
            if (data?.results?.length > 0) {
                const wallapaperIndex = Math.floor(
                    Math.random() * data?.results?.length
                );
                setWallpaper(data.results[wallapaperIndex]);
            }
        } catch (error) {
            console.log("error while fetching", error.message);
        }
    };

    useEffect(() => {
         getWallpaperResult();
    }, []);
    
    return wallpaper;
}

export default useRandomWallpaper;