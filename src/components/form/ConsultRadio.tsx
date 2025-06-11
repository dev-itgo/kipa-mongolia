import { useEffect, useState } from "react";
import CONSULT_ITEM from "@/data/consult";
import { Radio, RadioProps } from "flowbite-react";

type ConsultRadioItemProps = Omit<RadioProps, "onChange"> & {
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
  onChange,
  ...radioProps
}: ConsultRadioItemProps) => {
  const [isComposing, setIsComposing] = useState(false);
  const [localValue, setLocalValue] = useState(etcValue || "");

  // etcValue가 변경되면 localValue도 업데이트
  useEffect(() => {
    setLocalValue(etcValue || "");
  }, [etcValue]);

  const handleEtcTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);

    if (!isComposing && onChange) {
      const syntheticEvent = {
        target: { checked: true },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent, true, newValue);
    }
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = (
    e: React.CompositionEvent<HTMLInputElement>,
  ) => {
    setIsComposing(false);
    const newValue = e.currentTarget.value;
    setLocalValue(newValue);

    if (onChange) {
      const syntheticEvent = {
        target: { checked: true },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent, true, newValue);
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e, e.target.checked, localValue);
    }
  };

  return (
    <div
      className={`flex items-center gap-1.5 ${isEtc ? "col-span-2" : "col-span-1"}`}
    >
      <Radio
        id={`${id}-radio`}
        {...radioProps}
        className="shrink-0"
        onChange={handleRadioChange}
      />
      <label htmlFor={`${id}-radio`} className="shrink-0 text-sm">
        {label}
      </label>
      {isEtc && (
        <input
          name="etcText1"
          value={localValue}
          className={`ml-2 block h-5 w-full border-b-1 border-neutral-500 text-[16px] focus:ring-blue-500 ${
            error ? "border border-red-500" : ""
          }`}
          onChange={handleEtcTextChange}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
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

  const handleRadioChange = (
    item: (typeof CONSULT_ITEM)[0],
    etcText?: string,
  ) => {
    if (item.isEtc) {
      onChange(item.label, etcText || "");
    } else {
      onChange(item.label);
    }
  };

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
          onChange={(e, selected, etcText) => {
            if (selected) {
              handleRadioChange(item, etcText);
            }
          }}
        />
      ))}
    </div>
  );
};

export default ConsultRadio;
