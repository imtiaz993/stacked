import Image from "next/image";
import { FieldInputProps } from "formik";

interface InputFieldProps {
  prefix?: string;
  type: string;
  placeholder: string;
  props?: FieldInputProps<any>;
  showError?: boolean;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  prefix = "",
  type,
  placeholder,
  props = {},
  showError = false,
  error,
}) => {
  return (
    <div>
      <div className="bg-muted-white rounded flex items-center gap-2 p-2.5">
        {prefix && <Image src={prefix} width={20} height={20} alt="prefix" />}
        <input
          placeholder={placeholder}
          type={type}
          autoComplete="new-field"
          {...props}
          className="outline-none bg-transparent w-full text-light placeholder:text-muted font-volksansTest"
        />
      </div>
      {showError && (
        <p className="text-xs text-red-500 mt-1 font-volksansTest">{error}</p>
      )}
    </div>
  );
};

export default InputField;
