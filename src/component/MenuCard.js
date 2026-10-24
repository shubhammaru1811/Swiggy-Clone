// ye kisi ek menu ki ek category ko dikhata hai jaise RECOMMENDED=>paneer tikka, burger,pizza etc..,aur map() fun se baki sb categories ko bhi dikhata hai jaise MAIN COURSE,STARTERS,BEVERAGES etc..,aur ye component RestInfo.js ko call karke restaurant ke info ko dikhata hai jaise ki restaurant ka name,price,rating,description aur image.. 

import { useState } from "react"
import RestInfo from "./RestInfo"

export default function MenuCard({menuItems,foodselected}){
    const [isOpen,setIsOpen]=useState(true);

    //kuch objects me categories ke andar title & itemcards hai unke liye ye vala code(if vala)
    if('categories' in menuItems ){
        return (
            <div className="w-full">
                <p className="text-3xl font-bold">{menuItems.title}</p>
                <div>
                    {
                        menuItems?.categories?.map((items)=><MenuCard key={items?.title} menuItems={items} foodselected={foodselected}></MenuCard>)
                    }
                </div>
            </div>
        )
    }
    if(!isOpen){
        return(
        <div className="w-full">
           <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems?.title}</p>
            <button className="text-3xl mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'}</button>
            </div> 
        </div>)
    }

    if(foodselected==='veg'){
        return(
            <div className="w-full">
          <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems?.title}</p>
            <button className="text-3xl mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'}</button>
            </div>
          <div className="mt-5">
            {
                menuItems?.itemCards?.filter((food)=>'isVeg' in food?.card?.info).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info} ></RestInfo>)
            }
          </div>
        </div>
        )
    }

        if(foodselected==='NonVeg'){
        return(
            <div className="w-full">
          <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems?.title}</p>
            <button className="text-3xl mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'}</button>
            </div>
          <div className="mt-5">
            {
                menuItems?.itemCards?.filter((food)=>!('isVeg' in food?.card?.info)).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info} ></RestInfo>)
            }
          </div>
        </div>
        )
    }

    return (
        <div className="w-full">
          <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems?.title}</p>
            <button className="text-3xl mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'}</button>
            </div>
          <div className="mt-5">
            {
                menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
            }
          </div>
        </div>
    )}
