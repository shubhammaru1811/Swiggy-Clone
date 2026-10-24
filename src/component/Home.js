import { DineOption } from "./DineOption";
import { FoodOption } from "./foodOptions";
import { GroceryOptions } from "./groceryOptions";
import Header from "./Header";


export default function Home(){
    return (
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOptions></GroceryOptions>
        <DineOption></DineOption>
</>
    )
}