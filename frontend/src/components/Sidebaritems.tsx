
// import ThreebarIcon from "../icons/ThreebarsIcon";
// import Button from "./Button";
import { useState } from "react";
import { ReactElement } from "react";
interface SidebaritemsProps{
         
    text: String;
    startIcon: ReactElement;
    // onClick?: () => void;
}
const Sidebaritems =( { text, startIcon} : SidebaritemsProps)=>{
    const [isExpanded, setIsExpanded] = useState(false);
    return ( 
        <div  onClick={() => setIsExpanded(!isExpanded)} className="flex px-2 py-2  m-1 rounded-md items-center  border-black justify-end   hover:bg-purple-600  md:w-64 w-30 p-4 bg-purple-300" >
           <div>{startIcon}</div>
           <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'w-auto opacity-100 ml-2' : 'w-20 opacity-0'}`}>
                 {isExpanded && <span>{text}</span>}
           </div>
        </div>
     )

}

export default Sidebaritems;