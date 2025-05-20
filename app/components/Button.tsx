import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick?: () => void;
  disabled?: boolean;
  text: string;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  handleClick = () => {},
  disabled = false,
  text,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`rounded font-medium leading-5 px-5 w-full min-h-[48px] font-volksansTest ${
        !disabled
          ? "text-[#030303] bg-[#B5FF4D]"
          : "text-[#666662] bg-[#FFFFFF1A] border border-[#FFFFFF33]"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
