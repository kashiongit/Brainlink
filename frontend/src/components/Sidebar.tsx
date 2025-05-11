;
import Sidebaritems from "./Sidebaritems";
import ThreebarIcon from "../icons/ThreebarsIcon";
import { useState } from "react";

const Sidebar = () =>{

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
    setIsExpanded(prev => !prev);
  };
    return(
        <div className="flex">
            <div className=" transition-all delay-1000  mt-4 md:flex  md:w-30  hidden bg-gray-200  h-screen  transition-all duration-300 ease-in-out ${
            isExpanded ? 'w-64' : 'w-30' }` ">
                     <div className="flex items-center justify-center h-16  w-30 cursor-pointer" onClick={toggleSidebar}>
                            <span className="text-xl">{isExpanded ? '☰ Menu' : '☰'}</span>
                    </div> 
                    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'px-4' : 'px-0'}`}>
                       {isExpanded && (
                         <div className=" flex flex-col" onClick={toggleSidebar}>
                            <Sidebaritems text = "whatsapp" startIcon={ <ThreebarIcon/>} />  
                            <Sidebaritems text = "whatsapp" startIcon={ <ThreebarIcon/>} />
                            <Sidebaritems text = "whatsapp" startIcon={ <ThreebarIcon/>} />
                            <Sidebaritems text = "whatsapp" startIcon={ <ThreebarIcon/>} />
                            
                         </div> 
                        )}
                    </div>
        
                        
                        
                    
                    
            </div>
    
    
    
            {/* <div className=" w-63 md:w-full   bg-white-400 h-screen ">
               <div className="  flex  justify-end gap-3  m-4 ">
                  <Card type="youtube" Link="https://www.youtube.com/watch?v=uIMX7Fikd9k" title="how to travel" description = "best way to travel"/>
                  <Card type="twitter" Link="https://twitter.com/An1ket_More/status/1899291767318663456" title="how to travel" description = "best way to travel"/>
        
               </div>
            </div> */}
    
        </div>
    )
}

export default  Sidebar;