import Image from "next/image"
import Icon1 from "@/public/icon1.png"
import Icon2 from "@/public/icon2.png"
import Icon3 from "@/public/icon3.png"
import Icon4 from "@/public/icon4.png"
import Icon5 from "@/public/icon5.png"

const FeaturesCards = () => {
  return (
    <div >
    <div className="mt-10 flex flex-col min-w-[260px] p-5 items-center">
        <div>
            <Image src={Icon1} alt="Service Image 1" />
        </div>
        <h3 className="text-lg mt-2 font-semibold text-[#242527] text-center">Experienced</h3>
        <p className="text-base mb-4 text-gray-500 text-center">Our experience of 25 years of building and making achievements in the world of development</p>
        <div>
            <Image src={Icon2} alt="Service Image 2" />
        </div>
        <h3 className="text-lg mt-2 font-semibold text-[#242527] text-center">Competitive Price</h3>
        <p className="text-base mb-4 text-gray-500 text-center">The prices we offer you are very competitive without reducing the quality of the company's work in the slightest</p>
        <div>
            <Image src={Icon3} alt="Service Image 3" />
        </div>
        <h3 className="text-lg mt-2 font-semibold text-[#242527] text-center">On Time</h3>
        <p className="text-base mb-4 text-gray-500 text-center">We prioritize the quality of our work and finish it on time</p>
        <div>
            <Image src={Icon4} alt="Service Image 4" />
        </div>
        <h3 className="text-lg mt-2 font-semibold text-[#242527] text-center">Best Materials</h3>
        <p className="text-base mb-4 text-gray-500 text-center">The material determines the building itself so we recommend that you use the best & quality materials in its class.</p>
        
    </div>
    </div>
  )
}

export default FeaturesCards;