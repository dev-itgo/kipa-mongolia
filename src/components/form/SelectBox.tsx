import React from "react";

type SelectBoxProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
};

// Generate time options in 15-minute intervals from 10:00 AM to 8:45 PM
const generateTimeOptions = () => {
  const options = [];
  const startHour = 10;
  const endHour = 20;
  const endMinute = 45;

  for (let hour = startHour; hour <= endHour; hour++) {
    const maxMinute = hour === endHour ? endMinute : 45;

    for (let minute = 0; minute <= maxMinute; minute += 15) {
      const nextMinute = minute + 15;
      const nextHour = nextMinute >= 60 ? hour + 1 : hour;
      const adjustedNextMinute =
        nextMinute >= 60 ? nextMinute - 60 : nextMinute;

      // Skip if we exceed the end time
      if (
        nextHour > endHour ||
        (nextHour === endHour && adjustedNextMinute > endMinute)
      ) {
        break;
      }

      const formatTime = (
        h: number,
        m: number,
        includePeriod: boolean = true,
      ) => {
        const period = h < 12 ? "AM" : "PM";
        const displayHour = h > 12 ? h - 12 : h === 0 ? 12 : h;
        return includePeriod
          ? `${period} ${displayHour}:${m.toString().padStart(2, "0")}`
          : `${displayHour}:${m.toString().padStart(2, "0")}`;
      };

      const startPeriod = hour < 12 ? "AM" : "PM";
      const endPeriod = nextHour < 12 ? "AM" : "PM";

      const startTime = formatTime(hour, minute, true);
      const endTime = formatTime(
        nextHour,
        adjustedNextMinute,
        startPeriod !== endPeriod,
      );

      options.push(`${startTime}~${endTime}`);
    }
  }

  return options;
};

const timeOptions = generateTimeOptions();

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
        <option value="">시간을 선택해주세요.</option>
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
