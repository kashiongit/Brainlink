import  { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    text: String;
    startIcon: ReactElement;
    onClick?: () => void;
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
