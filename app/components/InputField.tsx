import Image from "next/image";

const InputField = ({ prefix, type, placeholder, props, showError, error }) => {
  return (
    <div>
      <div className="bg-[#FFFFFF1A] rounded flex items-center gap-2 p-2.5">
        {prefix && <Image src={prefix} width={20} height={20} alt="preffix" />}
        <input
          placeholder={placeholder}
          type={type}
          autoComplete="new-field"
          {...props}
          className="outline-none bg-transparent w-full text-[#FFFFF6] placeholder:text-[#9D9D95] font-volksansTest"
        />
      </div>
      {showError && (
        <p className="text-xs text-red-500 mt-1 font-volksansTest">{error}</p>
      )}
    </div>
  );
};

export default InputField;
