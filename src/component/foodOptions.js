import { imageGridCards } from "../utils/FoodData"
import FoodCart from "./FoodCart"
export function FoodOption(){
    return(
        <>
        <div className="w-[80%] container mx-auto ">
            <h1 className="font-bold text-2xl">Order our best food options</h1>
        
        <div className="container mx-auto flex flex-wrap">
             
           { imageGridCards.map((foodData)=><FoodCart key={foodData.id} foodData={foodData} ></FoodCart>)
}
        </div>
        </div>
        </>
    )
}

//ye function app.js ke paas jayega
//imges foodCart.js ke paas se aayegi 
