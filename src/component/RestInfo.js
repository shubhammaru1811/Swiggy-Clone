//ye component restaurant ke info ko dikhata hai jaise ki restaurant ka name,price,rating,description aur image..

import { useState } from "react"
import {addItems,IncrementItems,DecrementItems} from "../Stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function RestInfo({restData}) {

    

    const dispatch = useDispatch();
    const items = useSelector(state=>state.cartslice.items);
    
    const element = items.find(item=>item.id===restData.id);
    const count = element?element.quantity:0;


    function handleAdditems(){
        
        dispatch(addItems(restData));
    }

    function handleIncrementitems(){
        
        dispatch(IncrementItems(restData));
    }

    function handleDecrementitems() {
        
        dispatch(DecrementItems(restData));
    }



    return(
        <>
        <div className="flex w-full justify-between mb-8">
        <div className="w-[70%]">
            <p className="text-2xl font-semibold text-gray-700">{restData?.name}</p>
            <p className="text-xl">{"₹"+restData?.price/100}</p>
            <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating} </span>
            <span>({restData?.ratings?.aggregatedRating?.ratingCountV2})</span>
            <p>{restData?.description}</p>
        </div>
        <div className="w-[20%] relative  h-42">
            <img className="h-36 w-60 object-cover " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.imageId}></img>
            {
                count===0?( <button className="absolute bottom-0 left-20  rounded-xl text-green-600 px-6 py-2 bg-white shadow-md border border-white text-2xl" onClick={()=>handleAdditems()}>ADD</button>):(
                    <div className="flex gap-2 text-2xl  text-green-600 px-6 py-3 shadow-md border border-white absolute bottom-0 left-20  rounded-xl bg-white ">
                        <button onClick={()=>handleDecrementitems()}>-</button>
                        <span>{count}</span>
                        <button onClick={()=>handleIncrementitems()}>+</button>
                    </div>
                )
            }
           
        </div>
        </div>
        <hr className="mb-4 mt-2"></hr>
        </>
    )
}
 
//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.30080&lng=73.20430&restaurantId=68031&catalog_qa=undefined&submitAction=ENTER

//https://cors-anywhere.herokuapp.com/corsdemo