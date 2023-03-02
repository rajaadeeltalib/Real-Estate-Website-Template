import Image from "next/image"
import Paint1 from "@/public/paint1.png"
import Paint2 from "@/public/paint2.png"
import Paint3 from "@/public/paint3.png"

const News = () => {
    return (
        <div className="p-5">
            <div className="flex flex-col gap-2 ">
                <h1 className="text-xl font-bold text-[#242527]">News & Update</h1>

            </div>
            <div className="flex mt-4 gap-5 overflow-x-auto">
                <div className="flex flex-col gap-2 min-w-[260px]">
                    <div>
                        <Image className="shadow-md" src={Paint1} alt="Service Image 1" />
                    </div>
                    <div className="flex gap-4">
                        <h2 className="text-lg font-bold text-[#242527] ">12 <br /><span className="text-base">  Jan</span></h2>
                        <h3 className="text-lg font-semibold text-[#242527]">Elements of Content in   <br /> Epoxy Paint</h3>
                    </div>
                    <p className="text-base text-gray-500">Epoxy paint and epoxy floor
                        contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type o
                        f resin... <span className="text-blue-500">Read more</span></p>
                </div>
                <div className="flex flex-col gap-2 min-w-[260px]">
                    <div>
                        <Image className="shadow-md" src={Paint1} alt="Service Image 1" />
                    </div>
                    <div className="flex gap-4">
                        <h2 className="text-lg font-bold text-[#242527] ">12 <br /><span className="text-base">  Jan</span></h2>
                        <h3 className="text-lg font-semibold text-[#242527]">Elements of Content in   <br /> Epoxy Paint</h3>
                    </div>
                    <p className="text-base text-gray-500">Epoxy paint and epoxy floor
                        contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type o
                        f resin... <span className="text-blue-500">Read more</span></p>
                </div>
                <div className="flex flex-col gap-2 min-w-[260px]">
                    <div>
                        <Image className="shadow-md" src={Paint1} alt="Service Image 1" />
                    </div>
                    <div className="flex gap-4">
                        <h2 className="text-lg font-bold text-[#242527] ">12 <br /><span className="text-base">  Jan</span></h2>
                        <h3 className="text-lg font-semibold text-[#242527]">Elements of Content in   <br /> Epoxy Paint</h3>
                    </div>
                    <p className="text-base text-gray-500">Epoxy paint and epoxy floor
                        contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type o
                        f resin... <span className="text-blue-500">Read more</span></p>
                </div>
            </div>

        </div>
    )
}

export default News