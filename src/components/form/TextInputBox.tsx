import React from "react";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const TextInputBox = ({
  label,
  name,
  required,
  error,
  ...props
}: TextInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="mb-2 block">
        <span className="font-bold">{label}</span>{" "}
        <span className="font-[#f2f2f2] text-[10px]">
          {required ? "(Заавал)" : "(Сонгох)"}
        </span>
      </label>
      <input
        {...props}
        id={name}
        name={name}
        className={`block h-10 w-full bg-[#181818] px-3 text-[16px] focus:ring-blue-500 ${
          error ? "border border-red-500" : ""
        }`}
        required={required}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TextInputBox;
