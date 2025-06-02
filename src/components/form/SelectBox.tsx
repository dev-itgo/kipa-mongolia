import React from "react";

type SelectBoxProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
};

const timeOptions = [
  "오전 9시",
  "오전 10시",
  "오전 11시",
  "오전 12시",
  "오후 1시",
  "오후 2시",
  "오후 3시",
  "오후 4시",
  "오후 5시",
  "오후 6시",
  "오후 7시",
  "오후 8시",
];

const SelectBox = ({
  label,
  name,
  required,
  error,
  defaultValue,
  ...props
}: SelectBoxProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="mb-2 block">
        <span className="font-bold">{label}</span>{" "}
        {required && <span className="font-[#f2f2f2] text-[10px]">(필수)</span>}
      </label>
      <select
        {...props}
        id={name}
        className={`block h-10 w-full bg-[#181818] px-3 text-[16px] focus:ring-blue-500 ${
          error ? "border border-red-500" : ""
        }`}
        required={required}
        defaultValue={defaultValue}
      >
        <option value="">시간을 선택해주세요. (여러개 가능)</option>
        {timeOptions.map((time) => (
          <option key={time} value={time}>
            6월 29일(일) / {time}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default SelectBox;
