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
          ? "text-primary-dark bg-accent-green"
          : "text-disabled-gray bg-muted-white border border-muted-white-border"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
