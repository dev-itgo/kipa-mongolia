import MainPointSwiper from "./MainPointSwiper";
import { MdCallSplit } from "react-icons/md";
import { LOCATIONS_IMAGES_DATA } from "@/data/points";
import MainLocationCopyBtn from "./MainLocationCopyBtn";
import { FaLocationDot } from "react-icons/fa6";

const MainLocation = () => {
  return (
    <div className="mb-20">
      <h3 className="mb-8 text-center text-xl font-bold md:text-2xl">
        Зөвлөгөөн болох газар
      </h3>

      <MainPointSwiper images={LOCATIONS_IMAGES_DATA} />
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.0333340759535!2d106.91603081209055!3d47.91639246641354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969246689ba4db%3A0xf1708610d4e30717!2zQmx1ZSBTa3kg0JfQvtGH0LjQtCDQsdGD0YPQtNCw0Ls!5e0!3m2!1smn!2smn!4v1749607339597!5m2!1smn!2smn"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[360px] w-full md:h-[450px]"
      ></iframe> */}
      <div className="mt-8 flex flex-col md:flex-row">
        <div className="flex-1">
          <h4 className="font-bold md:text-lg">
            <FaLocationDot className="inline-block align-[-2px]" />{" "}
            <a
              href="https://maps.app.goo.gl/h2yHPUbJRG1jBisS9"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Blue Sky зочид буудал
            </a>{" "}
            Jade танхимд
          </h4>
        </div>
        <div className="flex-1">
          <p className="text-sm text-[#f2f2f2] md:text-[16px]">
            Энх Тайваны Өргөн Чөлөө 17 Блю Скай Цамхаг, СБД - 1 хороо,
            Улаанбаатар 14240
          </p>
          <div className="mt-4 flex gap-2">
            <a
              href="https://www.google.com/maps/dir//%D0%AD%D0%BD%D1%85+%D0%A2%D0%B0%D0%B9%D0%B2%D0%B0%D0%BD%D1%8B+%D3%A8%D1%80%D0%B3%D3%A9%D0%BD+%D0%A7%D3%A9%D0%BB%D3%A9%D3%A9+17+Blue+Sky+%D0%97%D0%BE%D1%87%D0%B8%D0%B4+%D0%B1%D1%83%D1%83%D0%B4%D0%B0%D0%BB,+%D0%91%D0%BB%D1%8E+%D0%A1%D0%BA%D0%B0%D0%B9+%D0%A6%D0%B0%D0%BC%D1%85%D0%B0%D0%B3,+%D0%A1%D0%91%D0%94+-+1+%D1%85%D0%BE%D1%80%D0%BE%D0%BE,+%D0%A3%D0%BB%D0%B0%D0%B0%D0%BD%D0%B1%D0%B0%D0%B0%D1%82%D0%B0%D1%80+14240/@47.916439,106.8773258,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x5d969246689ba4db:0xf1708610d4e30717!2m2!1d106.9186111!2d47.9163889?hl=mn&entry=ttu&g_ep=EgoyMDI1MDYwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-black hover:bg-neutral-100"
            >
              <MdCallSplit />
              Газрын зураг харах
            </a>
            <MainLocationCopyBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLocation;
