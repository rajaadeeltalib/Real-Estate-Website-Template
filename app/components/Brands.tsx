import Image from "next/image"
import Brand1 from "@/public/brand1.png"
import Brand2 from "@/public/brand2.png"
import Brand3 from "@/public/brand3.png"
import Brand4 from "@/public/brand4.png"
import Brand5 from "@/public/brand5.png"

const Brands = () => {
  return (
    
        <div className="flex gap-4 h-[100px] items-center overflow-x-auto">
        <div className="h-20 grid place-content-center">
            <Image className="min-w-[6rem]" src={Brand1} alt="Brand Logo 1" />
        </div>
        <div className="h-20 grid place-content-center">
            <Image className="min-w-[6rem]" src={Brand2} alt="Brand Logo 2" />
        </div>
        <div className="h-20 grid place-content-center">
            <Image className="min-w-[6rem]" src={Brand3} alt="Brand Logo 3" />
        </div>
        <div className="h-20 grid place-content-center">
            <Image className="min-w-[6rem]" src={Brand4} alt="Brand Logo 4" />
        </div>
        <div className="h-20 grid place-content-center">
            <Image className="min-w-[6rem]" src={Brand5} alt="Brand Logo 5" />
        </div>
        </div>
    
  )
}

export default Brands