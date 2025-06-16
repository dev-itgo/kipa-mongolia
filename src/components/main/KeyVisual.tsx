import KeyVisualSwiper from "./KeyVisualSwiper";
import { FaLocationDot } from "react-icons/fa6";

const KeyVisual = () => {
  return (
    <section className="relative aspect-[4/3] md:aspect-[8/3]">
      <KeyVisualSwiper />
      <div className="absolute top-28 right-0 -bottom-18 left-0 z-10 flex items-end bg-gradient-to-b from-transparent to-black md:bottom-0">
        <div className="container-2xl">
          <h2 className="mb-2 text-2xl leading-6 font-bold break-keep md:text-[34px] md:leading-10">
            Солонгосын алдартнуудын сонгодог шилдэг эмч нар Улаанбаатарт ирнэ!
          </h2>
          <p>
            2025 оны 6-р сарын 29-нд (Ням гараг),{" "}
            <FaLocationDot className="inline-block align-[-2px]" />{" "}
            <a
              href="https://maps.app.goo.gl/h2yHPUbJRG1jBisS9"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline"
            >
              Blue Sky зочид буудал
            </a>{" "}
            Jade танхимд
          </p>
          <ul className="mt-4 flex gap-2 md:mt-8">
            <li className="rounded bg-[#141414] px-2 py-1.5">
              Мэргэжлийн орчуулга
            </li>
            <li className="rounded bg-[#141414] px-2 py-1.5">
              1:1 Үнэгүй зөвлөгөө
            </li>
            <li className="rounded bg-[#141414] px-2 py-1.5">
              Онцгой урамшуулал
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KeyVisual;
