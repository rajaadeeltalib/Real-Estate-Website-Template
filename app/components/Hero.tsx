import Image from 'next/image'
import HeroBuilding from "/public/herobuilding.png"

const Hero = () =>{
    return(
        <div className="black-grad flex flex-col pt-10 px-5 text-white gap-2">
           <h1 className="font-medium text-xl">We Provide <br />Architechtural Design <br /> and Construction</h1>
           <p className="text-[#C4C4C4] text-base">More than 100 building and housing projects that we have built. The building owner chose us over other contractors in Jakarta, because our work is different</p>
           
            <button className=" self-start text-base px-3 py-1.5 mt-2 blue-grad">Discover More</button>
            <div className='flex justify-end -mt-32'><Image src={HeroBuilding} alt="Logo"/></div>
            
        </div>
    )
}
export default Hero;