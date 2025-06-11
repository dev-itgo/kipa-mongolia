import React from "react";
import CONSULT_ITEM from "@/data/consult";
import { Radio, RadioProps } from "flowbite-react";

type ConsultRadioItemProps = RadioProps & {
  label: string;
  error?: string;
  isEtc?: boolean;
  etcValue?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    selected: boolean,
    etcText?: string,
  ) => void;
};

const ConsultRadioItem = ({
  id,
  label,
  error,
  isEtc,
  etcValue,
  ...props
}: ConsultRadioItemProps) => {
  const handleEtcTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      const syntheticEvent = {
        target: { checked: true },
      } as React.ChangeEvent<HTMLInputElement>;
      props.onChange(syntheticEvent, true, e.target.value);
    }
  };

  return (
    <div
      className={`flex items-center gap-1.5 ${isEtc ? "col-span-2" : "col-span-1"}`}
    >
      <Radio id={`${id}-radio`} {...props} className="shrink-0" />
      <label htmlFor={`${id}-radio`} className="shrink-0 text-sm">
        {label}
      </label>
      {isEtc && (
        <input
          name="etcText1"
          value={etcValue || ""}
          className={`ml-2 block h-5 w-full border-b-1 border-neutral-500 text-[16px] focus:ring-blue-500 ${
            error ? "border border-red-500" : ""
          }`}
          onChange={handleEtcTextChange}
        />
      )}
    </div>
  );
};

type ConsultRadioProps = {
  value: string;
  onChange: (value: string, etcText?: string) => void;
};

const ConsultRadio = ({ value, onChange }: ConsultRadioProps) => {
  // 기타 항목의 현재 텍스트 추출
  const etcValue = value.startsWith("기타: ")
    ? value.replace("기타: ", "")
    : "";

  return (
    <div className="mb-4 grid grid-cols-2 gap-y-2">
      <div className="col-span-2 mb-2">
        <p className="">
          <span className="font-bold">상담희망분야 (1순위)</span>{" "}
          <span className="font-[#f2f2f2] text-[10px]">(필수)</span>
        </p>
      </div>
      {CONSULT_ITEM.map((item) => (
        <ConsultRadioItem
          key={item.id}
          {...item}
          name="consultPriority"
          etcValue={item.isEtc ? etcValue : undefined}
          checked={
            item.isEtc ? value.startsWith(item.label) : value === item.label
          }
          onChange={() => {
            if (item.isEtc) {
              const etcInput = document.querySelector(
                'input[name="etcText1"]',
              ) as HTMLInputElement;
              onChange(item.label, etcInput?.value);
            } else {
              onChange(item.label);
            }
          }}
        />
      ))}
    </div>
  );
};

export default ConsultRadio;
