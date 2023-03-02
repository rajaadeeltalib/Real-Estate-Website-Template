import Image from "next/image"
import Logo1 from "@/public/logo1.svg"
import Logo2 from "@/public/logo2.svg"
import Logo3 from "@/public/logo3.svg"
import Logo4 from "@/public/logo4.svg"

const Footer = () => {
  return (
    <div className="black-grad">
       <div className="mx-auto max-w-[1280px] p-5 flex flex-col md:flex-row gap-[40px] md:[140px] py-20">
       <div className="flex flex-col gap-4 max-w-[550px]">
       <h1 className="text-white font-bold">LOGO</h1>
        <p className="text-white">is a general contractor company based in Jakarta. More than 25 years of experience in building and carving out Indonesia's development.</p>
        </div>
        <div className="flex justify-self-start gap-2 ">
        <Image src={Logo1} alt="Logo 1"></Image>
        <Image src={Logo2} alt="Logo 2"></Image>
        <Image src={Logo3} alt="Logo 3"></Image>
        <Image src={Logo4} alt="Logo 4"></Image>
        </div>
        <div className="flex text-white mt-10 gap-8">
           <div className="flex flex-col gap-4 ">
           <h3 className="text-lg font-semibold">Company</h3>
            <p className="text-md hover:border-b-2 cursor-pointer">About</p>
            <p className="text-md hover:border-b-2 cursor-pointer">How it works</p>
            <p className="text-md hover:border-b-2 cursor-pointer">Terms</p>
            <p className="text-md hover:border-b-2 cursor-pointer">Privacy Policy</p>
           </div>
           <div className="flex flex-col gap-4 ">
           <h3 className="text-lg font-semibold">More</h3>
            <p className="text-md hover:border-b-2 cursor-pointer">Documentation</p>
            <p className="text-md hover:border-b-2 cursor-pointer">License</p>
            
           </div>            
        </div>   
        </div> 
       
    </div>
  )
}

export default Footer