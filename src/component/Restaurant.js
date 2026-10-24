import { useEffect, useState } from "react";
import RestCart from "./RestCart";
import Shimmer from "./Shimmer";

export default function Restaurant(){
     const [RestData, setRestData] = useState([]);

    useEffect(()=>{

        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.30080&lng=73.20430&is-seo-homepage-enabled=true"
            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response.json();
            setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           
            
        }
        fetchData();
    },[])
// Shimmer effect(jab data na hua ho tb duplicate cards dikhne ke liye)

    if(RestData.length==0)
        return <Shimmer></Shimmer>
    

    return (
        <>
        <div className="flex flex-wrap w-[80%] container mt-20 mb-20 mx-auto gap-5 ">
           {
            RestData.map((RestInfo)=><RestCart key={RestInfo.info.id} RestInfo={RestInfo}></RestCart>)
           }
        </div>
        </>
    )
}
