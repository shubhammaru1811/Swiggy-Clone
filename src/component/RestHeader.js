import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function RestHeader() {
    const counter = useSelector(state=>state.cartslice.count);
    console.log(counter);
    
    return(
        <div className=" w-[80%] mx-auto py-4 px-8 bg-gray-200 text-4xl flex justify-between items-center">
            <div>
                <p className="text-orange-600 font-semibold font-serif">Swiggy</p>
            </div>
            <div>
                <Link to="/Checkout">
                <p>Cart {`(${counter})`}</p></Link>
            </div>
        </div>
    )
}