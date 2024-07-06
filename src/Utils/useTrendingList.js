import { useEffect, useState } from "react";
import axiosInstances from "./axiosInstance";





function useTrendingList(selectedCategory){
   
    const [trendingList, setTredingList] = useState(null);

    const trendingItem = async () => {
        const { data } = await axiosInstances(`trending/${selectedCategory}/day?language=en-US`);
       
        setTredingList(data?.results);
    };


    useEffect(() => {
        trendingItem();
    }, [selectedCategory]);
    
    return trendingList;
}

export default useTrendingList;