import { GroceryGreedCart } from "../utils/Groceries";
import { GroceryCart } from "./GroceryCart";

export function GroceryOptions(){


     return(
        <>
        <div className="w-[80%] container mx-auto mt-20">
            <h1 className=" font-bold text-2xl ">Shop groceries on Instamart</h1>
        <div className="flex flex-nowrapwrap overflow-x-auto gap-5 container mx-auto mt-5 ">
           
        {
            GroceryGreedCart.map((groceryData)=><GroceryCart key={groceryData.id} groceryData={groceryData}></GroceryCart>)
        }
        </div>
        </div>
        </>
     )
}