import Image from "next/image"
import Bigbuilding from "@/public/bigbuilding.png"
import Profile from "@/public/profile.png"
import Arrow from "@/public/arrow.png"
import Building1 from "@/public/building1.png"

const Team = () => {
    return (
        <div className="p-5">
        <div className="bg-[url('/bigbuilding.png')] h-[340px] bg-no-repeat bg-cover flex justify-center items-end mb-40">
        <div className="black-grad h-[250px] w-[250px] relative top-20 flex flex-col items-center gap-2 p-5 ">
        <div>
        <Image src={Profile} alt="Profile" ></Image>
        </div>
        <h3 className="text-white text-lg">Dianne Russell</h3>
        <p className="text-white text-base text-center">More than 20 years of experience in the fieldarchitecture and has
worked on project up to 100+</p>
        </div>
        </div>
        <h2 className="text-lg font-bold">Meet and talk with <br />our best architecture</h2>
        <p className="text-gray-400 text-base ">All our teams are professional and competent in their fields and will help you realize your dream building with the excellent result.</p>
        <div className="flex justify-between mt-4">
            <button className="blue-grad text-white font-semibold shadow-lg px-2 py-1">See all team</button>
            <button className="flex items-center gap-2 font-bold">How it works <Image src={Arrow} alt="Arrow"></Image></button>
            </div>
            <div className="mt-10 p-2 shadow-xl">
                <Image src={Building1} alt="Building 1"></Image>
        </div>
        <h2 className="text-lg font-bold mt-5">Our Story <br />Who we are</h2>
        <p className="text-gray-400 text-base mt-5">Established in 1992, PT. Wahana Cipta operates as a General Contracting company with a footprint that we have planted throughout Indonesia. Initially, we focused on construction in the field of residential housing development in Jakarta. 
As the company grows, now we are present as a reliable...</p>
        <div className="flex justify-between mt-4">
            <button className="blue-grad text-white font-semibold shadow-lg px-2 py-1">See More</button>
            
            </div>
        </div>



    )
}

export default Team