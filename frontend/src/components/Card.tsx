//  import { ReactElement } from "react";
 import ShareIcon from "../icons/ShareIcon";
 import ThreebarsIcon from "../icons/ThreebarsIcon";
interface CardProps {



    
    title : String; 
    description : String;
    Link : string;
    type : "twitter" | "youtube";
   

}

 function Card  ( { title, description, Link, type} : CardProps){
    return (
        <div>
            <div className="bg-grey-200 p-2   rounded-md  border-gray-200 max-w-72 min-h-72 min-w-72 border">
             <div className="  flex justify-between ">  
                <div className="p-2 pr-2 flex   items-center ">
                   <div className="pr-2  text-gray-500">
                         <ShareIcon/>
                   </div>
                   <div className="pr-2 text-sm">
                         {title}
                   </div>
               
        
                </div>
                <div className="p-4  pr-2  flex justify-center items-center">
                   <div className="pr-2  text-gray-500 " >
                        <ThreebarsIcon/>
                   </div>
                   
                </div>
             </div>
            <div className="py-4 ">
                {type ==="twitter" &&  <blockquote className="twitter-tweet">
                    <a href={Link.replace("x.com", "twitter.com")}></a> 
                </blockquote> 
                } 

                {type ==="youtube" &&  <iframe className="w-full" src={Link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
                }
               

            </div>
            <div className="text-black bg-white p-4  rounded-md  border-gray-200  text-xs w-full">
                {description }
            </div>
            <div className="pr-2 pt-8 text-gray-500 flex  justify-end ">
                        <a href={Link} target="_blank">
                             <ShareIcon/> 
                        </a>
            </div>
            
         </div>
        </div>);

}

export default Card;