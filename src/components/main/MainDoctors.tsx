import { DOCTORS } from "@/data/doctors";
import Image from "next/image";

type MainDoctorsProfileProps = {
  hospital: string;
  name: string;
  surgery: string;
  desc: string;
  src?: string;
};

const MainDoctorsProfile = ({
  hospital,
  name,
  surgery,
  desc,
  src,
}: MainDoctorsProfileProps) => {
  return (
    <figure className="pb-6">
      <div className="aspect-square overflow-hidden rounded-lg bg-slate-300">
        {src && (
          <Image
            src={src}
            width={500}
            height={500}
            alt={name}
            className="w-full"
          />
        )}
      </div>
      <figcaption className="flex flex-col gap-1">
        <p className="mt-3 font-bold text-[#f2f2f2]">{hospital}</p>
        <p className="text-[16px] font-bold">
          {name} {surgery}
        </p>
        <p className="text-sm text-[#f2f2f2]">{desc}</p>
      </figcaption>
    </figure>
  );
};

const MainDoctors = () => {
  return (
    <div className="mb-24">
      <div className="mb-6 text-center">
        <h3 className="mb-3 text-xl font-bold md:text-2xl">의료진 소개</h3>
        <p className="text-[#f2f2f2] md:text-[16px]">
          이 상담회를 특별하게 만드는 한국 상위 1% 의료진
        </p>
      </div>
      <ul className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3">
        {DOCTORS.map((doctor, index) => (
          <li key={`doctor-${index}`}>
            <MainDoctorsProfile {...doctor} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainDoctors;
