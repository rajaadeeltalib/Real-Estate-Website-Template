import Image from "next/image"
import Project1 from "@/public/project1.png"
import Project2 from "@/public/project2.png"
import Project3 from "@/public/project3.png"
import Project4 from "@/public/project4.png"

const Collection = () => {
  return (
    <div>
        <div className="p-5">
            <div className="flex flex-col gap-2 ">
            <h1 className="text-xl font-bold text-[#242527]">Our Collection <br/>Best Projects  </h1>
                
            </div>
            
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-[320px] md:max-w-[1200px]">                    
                        <div><Image className="shadow-md" src={Project1} alt="Project 1" /></div>
                        <div><Image className="shadow-md" src={Project2} alt="Project 2" /></div>
                        <div><Image className="shadow-md" src={Project3} alt="Project 3" /></div>
                        <div><Image className="shadow-md" src={Project4} alt="Project 4" /></div>               
                                          
                    </div>
                    </div>
                    
    </div>
  )
}

export default Collection