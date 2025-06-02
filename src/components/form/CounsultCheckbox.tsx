import { Checkbox, CheckboxProps } from "flowbite-react";

type ConsultCheckboxItemProps = CheckboxProps & {
  label: string;
  error?: string;
  isEtc?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
    etcText?: string,
  ) => void;
};

type CounsultItem = {
  label: string;
  id: string;
  name: string;
  isEtc?: boolean;
};

const CONSULT_ITEM: CounsultItem[] = [
  {
    label: "눈성형 / 코성형",
    id: "eye-nose",
    name: "eyeNose",
  },
  {
    label: "산부인과 (여성성형)",
    id: "woman",
    name: "woman",
  },
  {
    label: "비뇨기과 (남성성형)",
    id: "man",
    name: "man",
  },
  {
    label: "안면거상",
    id: "lifting",
    name: "lifting",
  },
  {
    label: "윤곽수술",
    id: "faceline",
    name: "faceline",
  },
  {
    label: "피부과",
    id: "skin",
    name: "skin",
  },
  {
    label: "기타: ",
    id: "etc",
    name: "etc",
    isEtc: true,
  },
];

const ConsultCheckboxItem = ({
  id,
  label,
  error,
  isEtc,
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
          name="etcText"
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
  return (
    <div className="mb-4 grid grid-cols-2 gap-y-2">
      <div className="col-span-2 mb-2">
        <p className="">
          <span className="font-bold">상담희망분야</span>{" "}
          <span className="font-[#f2f2f2] text-[10px]">(필수)</span>
        </p>
      </div>
      {CONSULT_ITEM.map((item) => (
        <ConsultCheckboxItem
          key={item.id}
          {...item}
          checked={value.includes(item.label)}
          onChange={(e) => {
            if (item.isEtc) {
              const etcInput = document.querySelector(
                'input[name="etcText"]',
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
