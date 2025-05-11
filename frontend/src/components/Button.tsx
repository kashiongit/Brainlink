<<<<<<< HEAD
import  { ReactElement } from "react";
=======
 import  { ReactElement } from "react";
>>>>>>> 749edaba65c36461a4cd3e66bc8f0b014bee515e

interface ButtonProps {
    variant: "primary" | "secondary";
    text: String;
    startIcon: ReactElement;
<<<<<<< HEAD
    onClick?: () => void;
=======
>>>>>>> 749edaba65c36461a4cd3e66bc8f0b014bee515e
}
const variantClasses = {
    "primary" : "bg-purple text-white px-2 py-2  borderRadius-md",
    "secondary" : " bg-purple  text-white  px-2 py-2 ",

};

const defaultStyles = "px-2 py-2 rounded-md font-light flex justify-center items-center";

const Button = ({ variant, text , startIcon, onClick }: ButtonProps) => {
    return (
        <button className={  variantClasses[variant] + " " + defaultStyles}>
         <div className="pr-2">
            {startIcon}
         </div>
           {text}
        </button>
    );
};

export default Button;
