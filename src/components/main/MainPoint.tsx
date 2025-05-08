import Image from "next/image";
import { ReactNode } from "react";

type MainPointProps = {
  count: number;
  src: string;
  children: ReactNode;
};

const MainPoint = ({ count, src, children }: MainPointProps) => {
  return (
    <div className="mb-24">
      <div className="mx-auto mb-6 w-fit rounded-full border-2 border-[#00B0FB] px-4 py-2 text-center font-bold text-[#00B0FB]">
        Point {count < 10 ? `0${count}` : count}.
      </div>
      <Image src={src} width={820} height={461} alt="Main point image" />
      <div className="mt-8 flex flex-col md:flex-row">{children}</div>
    </div>
  );
};

type MainPointTitleProps = {
  children: ReactNode;
};

const MainPointTitle = ({ children }: MainPointTitleProps) => {
  return (
    <div className="flex-1">
      <h3 className="font-bold md:text-lg">{children}</h3>
    </div>
  );
};

type MainPointDescProps = {
  children: ReactNode;
};

const MainPointDesc = ({ children }: MainPointDescProps) => {
  return (
    <div className="flex-1">
      <p className="text-sm text-[#F2F2F2]">{children}</p>
    </div>
  );
};

MainPoint.Title = MainPointTitle;
MainPoint.Desc = MainPointDesc;

export default MainPoint;
