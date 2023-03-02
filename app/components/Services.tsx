import Image from "next/image"
import ServiceImage1 from "@/public/service1.png"
import ServiceImage2 from "@/public/service2.png"
import ServiceImage3 from "@/public/service3.png"

const Services = () => {
    return (
        <div className="p-5">
            <div className="flex flex-col gap-2 text-center">
                <h2 className="text-xl font-semibold text-[#242527]">Our Excellent Services</h2>
                <p className="text-base text-gray-500">Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services</p>
            </div>
            <div className="flex mt-4 gap-5 overflow-x-auto">
                <div className="flex flex-col gap-2 min-w-[260px]">
                    <div>
                        <Image className="shadow-md" src={ServiceImage1} alt="Service Image 1" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#242527]">Industrial</h3>
                    <p className="text-base text-gray-500">Industrial development is our main line of business. We do Factory Construction, Warehouse and others</p>
                </div>
                <div className="flex flex-col gap-2 min-w-[260px]">
                    <div>
                        <Image className="shadow-md" src={ServiceImage2} alt="Service Image 2" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#242527]">Commercial</h3>
                    <p className="text-base text-gray-500">Our experience building in the Commercial field includes Showrooms, Supermalls and Office Buildings</p>
                </div>
                <div className="flex flex-col gap-2 min-w-[260px]">
                    <div>
                        <Image className="shadow-md" src={ServiceImage3} alt="Service Image 3" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#242527]">Resedential</h3>
                    <p className="text-base text-gray-500">Residential development is the beginning that has shaped us to this day. Our development includes Houses & Apartments</p>
                </div>
            </div>
            
        </div>
    )
}

export default Services