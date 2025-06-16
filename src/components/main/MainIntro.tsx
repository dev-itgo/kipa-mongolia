import Image from "next/image";
import React from "react";

const MainIntro = () => {
  return (
    <div className="mb-20">
      <Image
        src="/kipa-intro.jpg"
        width={820}
        height={461}
        alt="KIPA 소개"
        className="mb-14 w-full"
      />
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <h3 className="text-xl font-bold md:text-2xl">KIPA ТАНИЛЦУУЛГА</h3>
        <p className="font-[#f2f2f2] md:w-[68%] md:text-[16px]">
          KIPA бол Япон, Вьетнам, Монгол болон K-Beauty сонирхосон бусад улс
          орнуудад зохион байгуулагддаг олон улсын эрүүл мэнд, гоо сайхны
          зөвлөгөөний өдөрлөг юм. <br />
          <br />
          Солонгосын гоо сайхны мэс засал, арьсны эмчилгээ зэрэг төрөл бүрийн
          салбарын эмч нар гадаад улс оронд биечлэн очиж, үйлчлүүлэгч бүртэй 1:1
          хувийн зөвлөгөө өгдөг. Зөвхөн тайлбар өгөхөөс илүү, таны санаа зовоож
          буй асуудалд тохирсон мэс ажилбар, эмчилгээний талаар санал болгож,
          эмчилгээний үе шат, түгээмэл асуултууд, үр дүнгийн талаар ч газар дээр
          нь бүрэн мэдээлэл авна. <br />
          <br />
          Зөвлөгөөний өдөрлөгийн дараа ч KIPA нь эмчилгээний захиалга, виз,
          нислэг, буудлын мэдээллээс эхлэн эмнэлгийн танилцуулах үйлчилгээ,
          орчуулагчийн дэмжлэг, эмчилгээний дараах нөхөн сэргээлт хүртэл бүх үе
          шатанд системтэйгээр дэмжинэ.
          <br />
          Хэрэв та Солонгосын эмчилгээтэй анх удаа танилцаж байгаа эсвэл өмнө нь
          ойлгоход бэрх байсан бол KIPA танд итгэлтэйгээр эхлэх боломжийг
          олгоно. <br />
          <span className="text-[#00B0FB]">
            Солонгос руу явахгүйгээр Солонгос эмчтэй уулзах боломж — KIPA
            зөвлөгөөний өдөрлөгөөс эхлээрэй.
          </span>
        </p>
      </div>
      <div className="mt-14 flex flex-col items-center bg-[#1C1C1C] px-2 py-8 text-center">
        <h5 className="text-[16px] font-bold md:text-lg">
          Beauty Beyond Borders – Хил хязгаарыг давсан гоо сайхан
        </h5>
        <span className="my-4 h-[12px] w-1 -skew-x-12 bg-[#CECECE]"></span>
        <blockquote className="max-w-[580px] font-[#f2f2f2] md:text-[16px]">
          “Beauty Beyond Borders” гэсэн уриа нь газарзүйн болон соёлын хил
          хязгаарыг даван дэлхийн хүмүүст гоо сайхны үнэ цэнийг хуваалцах хүсэл
          тэмүүллийг эрэлхийлдэг.
        </blockquote>
      </div>
    </div>
  );
};

export default MainIntro;
