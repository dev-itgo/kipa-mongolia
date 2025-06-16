import React from "react";
import CONSULT_ITEM from "@/data/consult";
import { Checkbox, CheckboxProps } from "flowbite-react";

type ConsultCheckboxItemProps = Omit<CheckboxProps, "onChange"> & {
  label: string;
  error?: string;
  isEtc?: boolean;
  etcValue?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
    etcText?: string,
  ) => void;
};

const ConsultCheckboxItem = ({
  id,
  label,
  error,
  isEtc,
  etcValue,
  onChange,
  ...checkboxProps
}: ConsultCheckboxItemProps) => {
  const [isComposing, setIsComposing] = React.useState(false);
  const [localValue, setLocalValue] = React.useState(etcValue || "");

  // etcValue가 변경되면 localValue도 업데이트
  React.useEffect(() => {
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e, e.target.checked, localValue);
    }
  };

  return (
    <div>
      <Checkbox
        id={id}
        {...checkboxProps}
        className="mr-1.5 inline-block align-text-bottom"
        onChange={handleCheckboxChange}
      />
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      {isEtc && (
        <input
          name="etcText23"
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

type ConsultCheckboxProps = {
  value: string[];
  onChange: (value: string, checked: boolean, etcText?: string) => void;
};

const ConsultCheckbox = ({ value, onChange }: ConsultCheckboxProps) => {
  // 기타 항목의 현재 텍스트 추출
  const etcValue = value.find((val) => val.startsWith("Бусад: "));
  const currentEtcText = etcValue ? etcValue.replace("Бусад: ", "") : "";

  const handleCheckboxChange = (
    item: (typeof CONSULT_ITEM)[0],
    checked: boolean,
    etcText?: string,
  ) => {
    onChange(item.label, checked, etcText);
  };

  return (
    <div className="mb-4 flex flex-col gap-y-2">
      <div className="col-span-2 mb-2">
        <p className="">
          <span className="font-bold">Зөвлөгөө авах чиглэл(2,3 дугаарт)</span>{" "}
          <span className="font-[#f2f2f2] text-[10px]">(Заавал)</span>
        </p>
      </div>
      {CONSULT_ITEM.map((item) => (
        <ConsultCheckboxItem
          key={item.id}
          {...item}
          etcValue={item.isEtc ? currentEtcText : undefined}
          checked={
            item.isEtc
              ? value.some((val) => val.startsWith(item.label))
              : value.includes(item.label)
          }
          onChange={(e, checked, etcText) => {
            handleCheckboxChange(item, checked, etcText);
          }}
        />
      ))}
    </div>
  );
};

export default ConsultCheckbox;
