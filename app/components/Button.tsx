const Button = ({ handleClick, disabled, text, type }) => {
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
