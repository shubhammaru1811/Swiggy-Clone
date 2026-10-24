
export default function DineCart({Dinedata}){
    
    
    return(
        <>
      <div className="flex-none">
  <div className="relative">
    <img className="w-81.5 h-47.5 rounded-2xl object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" +Dinedata?.info?.mediaFiles[0]?.url} alt={Dinedata?.info?.name}/>

    {/* Gradient */}
    <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-black/80 to-transparent"></div>

    {/* Name */}
    <p className="absolute bottom-5 left-5 z-10 font-bold text-white">
      {Dinedata?.info?.name}
    </p>

    {/* Rating */}
    <p className="absolute bottom-5 right-5 z-10 font-bold text-white">
      {Dinedata?.info?.rating?.value}
    </p>
  </div>
</div>
        </>
    )
}

/**
 <div className="flex-none ">
        <div className="relative">
            <img className="w-81.5 h-47.5 rounded-2xl object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+Dinedata?.info?.mediaFiles[0]?.url}></img>
            <p className="text-white font-bold absolute bottom-5 left-5">{Dinedata?.info?.name}</p>
            <p className="text-white font-bold absolute bottom-5 right-5">{Dinedata?.info?.rating?.value}</p>
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-gray-600"></div>
        </div>
        </div>
 */