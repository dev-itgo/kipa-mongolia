import CONSULT_ITEM from "@/data/consult";
import { Checkbox, CheckboxProps } from "flowbite-react";

type ConsultCheckboxItemProps = CheckboxProps & {
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
  ...props
}: ConsultCheckboxItemProps) => {
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
      <Checkbox id={id} {...props} className="shrink-0" />
      <label htmlFor={id} className="shrink-0 text-sm">
        {label}
      </label>
      {isEtc && (
        <input
          name="etcText23"
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

type ConsultCheckboxProps = {
  value: string[];
  onChange: (value: string, checked: boolean, etcText?: string) => void;
};

const ConsultCheckbox = ({ value, onChange }: ConsultCheckboxProps) => {
  // 기타 항목의 현재 텍스트 추출
  const etcValue = value.find((val) => val.startsWith("기타: "));
  const currentEtcText = etcValue ? etcValue.replace("기타: ", "") : "";
  return (
    <div className="mb-4 grid grid-cols-2 gap-y-2">
      <div className="col-span-2 mb-2">
        <p className="">
          <span className="font-bold">상담희망분야 (2,3순위)</span>{" "}
          <span className="font-[#f2f2f2] text-[10px]">(선택)</span>
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
          onChange={(e) => {
            if (item.isEtc) {
              const etcInput = document.querySelector(
                'input[name="etcText23"]',
              ) as HTMLInputElement;
              onChange(item.label, e.target.checked, etcInput?.value);
            } else {
              onChange(item.label, e.target.checked);
            }
          }}
        />
      ))}
    </div>
  );
};

export default ConsultCheckbox;
