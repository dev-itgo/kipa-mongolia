import React from "react";
import { FormData } from "../main/AppForm";

type ConsultFormDataProps = {
  formData: FormData;
};

const ConsultFormData = ({ formData }: ConsultFormDataProps) => {
  return (
    <div className="rounded-lg bg-[#181818] p-6">
      <h2 className="mb-4 text-xl font-bold">Бүртгэлийн мэдээлэл</h2>
      <div className="space-y-4">
        <div>
          <span className="font-bold">Зөвлөгөө авах цаг:</span>{" "}
          <span className="rounded-full bg-gray-700 px-3 py-1 text-sm">
            {formData.time}
          </span>
        </div>
        <div>
          <span className="font-bold">Овог нэр:</span> {formData.name}
        </div>
        <div>
          <span className="font-bold">Төрсөн он/сар/өдөр:</span>{" "}
          {formData.birth}
        </div>
        <div>
          <span className="font-bold">Утас:</span> {formData.contact}
        </div>
        <div>
          <span className="font-bold">Яаралтай үед холбогдох мэдээлэл:</span>{" "}
          {formData.contact2}
        </div>
        {formData.consult1 && (
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="font-bold">Зөвлөгөө авах чиглэл (1 дүгээрт):</span>{" "}
            <span className="rounded-full bg-gray-700 px-3 py-1 text-sm">
              {formData.consult1 === "Бусад: " && formData.etcText1
                ? `${formData.consult1}${formData.etcText1}`
                : formData.consult1}
            </span>
          </div>
        )}
        {formData.consult23 && formData.consult23.length > 0 && (
          <div>
            <span className="font-bold">
              Зөвлөгөө авах чиглэл(2,3 дугаарт):
            </span>{" "}
            <div className="mt-2 flex flex-wrap gap-2">
              {formData.consult23.map((area, index) => (
                <span
                  key={index}
                  className="rounded-full bg-gray-700 px-3 py-1 text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultFormData;
