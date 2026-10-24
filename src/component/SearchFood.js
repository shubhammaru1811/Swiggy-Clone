import { useState } from "react"


export default function SearchFood(){
    const [food,setFood] = useState("")
    return(
        
        <div className="w-[80%] mx-auto mt-20">
            <input className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl" placeholder="Search here.." onChange={(e)=>setFood(e.target.value)} ></input>
        </div>
    )
}