import { Link } from "react-router-dom";
export default function RestCart({RestInfo}){
console.log(RestInfo?.info?.cloudinaryImageId);

    return (
        <Link to={"/city/vadodara/"+RestInfo?.info?.id}>
        <div className="max-w-70 transform transition duration-200 hover:scale-95 ">
            <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+RestInfo?.info?.cloudinaryImageId}></img>
        <div className="w-[95%] mx-auto mt-3 ">
        <div className="font-bold text-xl  ">{RestInfo?.info?.name}</div>
        <div className="flex gap-2 ">
            <span className="text-lg">{RestInfo?.info?.avgRating}</span>
            <span className="font-semibold text-lg">{RestInfo?.info?.sla?.slaString}</span>
        </div>
        <div className="text-gray-600 text-base mt-1 h-7">{RestInfo?.info?.cuisines.join(" ")}</div>
        </div>
        </div>
        </Link>
    )
}