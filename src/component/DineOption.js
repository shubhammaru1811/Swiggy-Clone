import { dineoutRestaurants } from "../utils/DineData";
import DineCart from "./DineCart";
export function DineOption(){
    return (
        <>
        <div className="w-[80%] container mx-auto mt-20 mb-20">
            <p className="mb-5 font-bold text-2xl">Discover best restaurants on Dineout</p>
            <div className="flex gap-5 flex-nowrap overflow-x-auto">
                {
            dineoutRestaurants.map((Dinedata)=><DineCart key={Dinedata.info.id} Dinedata={Dinedata}></DineCart>)
                }
            </div>
        </div>
        </>
    )
}

// Dinedata={Dinedata} isme first vala '=' ke pehle vala 'Dinedata' and jis file me props bhej rahe hai uss file me name same hona chahiye 