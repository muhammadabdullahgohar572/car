import Service from "../img/controlar/service"
import { Slickk } from "./slick"

export  const About1=()=>{
    return(
        <>
    <div className="relative bg-black">
        {/* Image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6bmlIucVIfLAFFsZQ6A51YM3JwBOCMoryw&s"
          alt="Connect us"
          className="w-full h-[10%] opacity-25 bg-black"
        />

        {/* Text */}
        <div className=" text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2">
          <h1 className="text-lg sm:text-4xl font-bold">About Us</h1>
        </div>
      </div>


<Slickk/>

{/* Service Component */}
<Service />
        </>
    )
}