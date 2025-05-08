import React from "react";

type TextInputProps = {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  error?: string;
};

const TextInputBox = ({
  type,
  label,
  name,
  placeholder,
  required,
  error,
}: TextInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="mb-2 block">
        <span className="font-bold">{label}</span>{" "}
        {required && <span className="font-[#f2f2f2] text-[10px]">(필수)</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`block h-12 w-full bg-[#181818] px-4 focus:ring-blue-500 ${
          error ? "border border-red-500" : ""
        }`}
        required={required}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TextInputBox;
