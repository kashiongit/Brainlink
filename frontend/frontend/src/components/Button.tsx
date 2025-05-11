 import  { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    text: String;
    startIcon: ReactElement;
}
const variantClasses = {
    "primary" : "bg-purple-600 text-white padding",
    "secondary" : " bg-purple-200 text-purple-600",

};

const defaultStyles = "px-4 py-4 rounded-md font-light";

const Button = ({ variant, text}: ButtonProps) => {
    return (
        <button className={variantClasses[variant] + " " + defaultStyles}>
            {text}
        </button>
    );
};

export default Button;
