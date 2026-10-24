//ye component ek restaurant ke menu ko dikhata hai jaise ki recommended,main course,starters,beverages etc...,aur map() fun se baki sb restaurants ko bhi dikhata hai(i mean pehle kfc ka menu,fir dominos,burger king, sahyog restaurant etc..).

import { useState,useEffect } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import { Link } from "react-router-dom";

export default function RestaurantMenu(){

    let {id} = useParams();
    // console.log(id);
    
    const [RestData,setRestData] = useState([]);
    const [selected,setSelected]=useState(null);

     useEffect(()=>{
    
            async function fetchData() {
                const proxyServer = "https://cors-anywhere.herokuapp.com/";
                let swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.30080&lng=73.20430&restaurantId=${id}`;
                const response = await fetch(proxyServer+swiggyAPI);
                const data = await response.json();
                // console.log(data);
                const cardsArray = data?.data?.cards||[];
                const menuCardObj = cardsArray.find((c)=>c?.groupedCard?.cardGroupMap?.REGULAR?.cards);

                const tempData=menuCardObj?.groupedCard?.cardGroupMap?.REGULAR?.cards||[];
                // console.log(tempData);
                const filterData= tempData.filter((items)=>'title'in items?.card?.card);
                // const filterData = tempData.filter((items)=>items?.card?.card?.itemCards && items.card.card.itemCards.length>0)
                // console.log(filterData);
                
                // const filterData = tempData.filter((items)=> 'title' in items?.card?.card);
                // console.log("status: ",response.status);
                // console.log("ok: ",response.ok);
                // const text = await response.text();
                // console.log("response: ",text);
                setRestData(filterData);
            }
            fetchData();
        },[])
        
    return (
        <div>
            <div>
                <Link to={`/city/vadodara/${id}/search`}>
                <p className="bg-gray-200 w-[80%] mx-auto mt-10 text-center py-3 text-xl font-semibold border rounded-xl border-none">Search for dishes</p>
                </Link>
            </div>

            <div className="w-[80%] mt-10 mb-20 mx-auto ">
                <button className={`text-2xl py-2 px-4 border rounded-2xl mr-2 font-bold border-white ${selected==='veg'?"bg-green-600 text-white":"bg-gray-200"}`} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
                <button className={`text-2xl py-2 px-4 border rounded-2xl font-bold border-white ${selected==='NonVeg'?"bg-red-600 text-white":"bg-gray-200"}`} onClick={()=>setSelected(selected==='NonVeg'?null:'NonVeg')}>NonVeg</button>
            </div>

            <div className="w-[80%] mx-auto">
             {
             RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodselected={selected}></MenuCard>)
           }
         </div>
         </div>
    )
}
    //  useEffect(()=>{
    
    //         async function fetchData() {
    //             const proxyServer = "https://cors-anywhere.herokuapp.com/";
    //             let swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.30080&lng=73.20430&restaurantId=${id}`;
    //             const response = await fetch(proxyServer+swiggyAPI);
    //             const data = await response.json();
    //             const tempData=data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    //             const filterData = tempData.filter((items)=> 'title' in items?.card?.card);
    //             setRestData(filterData);
    //             console.log("tempdata",tempData);
    //             console.log("filterdata",filterData);

                
    //         }
    //         fetchData();
    //     },[])



    //     // return (
    //     //     <div className="w-[80%] mx-auto">
                
    //     //         {
    //     //             RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card}></MenuCard>)
                
    //     //         }
    //     //         <h1>Hiiii</h1>
    //     //     </div>
    //     // )

    //     //id kaise work kar rahi hai useParams me 
    // }
