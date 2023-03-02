import { TfiMenu } from "react-icons/tfi";

const Navbar = ()=>{
    return(
       <nav className="bg-[#2B2B2B] text-white flex justify-between h-10 items-center px-5">
        <div className="font-bold text-lg">
            <h1>Logo</h1>
        </div>
        <div >
        <TfiMenu size={20}/>
        </div>
       </nav>
    )
}
export default Navbar;