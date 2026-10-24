export default function FoodCart({foodData}){

   
    
    return (
        <>
        <a href={foodData?.action?.link}>
        <img className="w-40 h-50 object-cover " src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData.imageId}></img>
        </a>
        </>
    )
}

//ye function foodOptions.js file ke sath jayega

//if hum props ko "{}"ke andar nahi likhte to use(props) hum jaha jaha use kr rahe hai jaise ki iss file me, 'foodData.foodData' 2baar likhna padega, our agar "{}" iske andar likhe to sirf ek baar 'foodData' likhenge