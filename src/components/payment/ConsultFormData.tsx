import React from "react";
import { FormData } from "../main/AppForm";

type ConsultFormDataProps = {
  formData: FormData;
};

const ConsultFormData = ({ formData }: ConsultFormDataProps) => {
  return (
    <div className="rounded-lg bg-[#181818] p-6">
      <h2 className="mb-4 text-xl font-bold">신청 정보</h2>
      <div className="space-y-4">
        <div>
          <span className="font-bold">상담 요청 시간:</span>{" "}
          <span className="rounded-full bg-gray-700 px-3 py-1 text-sm">
            {formData.time}
          </span>
        </div>
        <div>
          <span className="font-bold">이름:</span> {formData.name}
        </div>
        <div>
          <span className="font-bold">생년월일:</span> {formData.birth}
        </div>
        <div>
          <span className="font-bold">연락처:</span> {formData.contact}
        </div>
        <div>
          <span className="font-bold">비상연락망:</span> {formData.contact2}
        </div>
        <div>
          <span className="font-bold">상담 요청 분야 (1순위):</span>{" "}
          <span className="rounded-full bg-gray-700 px-3 py-1 text-sm">
            {formData.consult1 === "기타: " && formData.etcText1
              ? `${formData.consult1}${formData.etcText1}`
              : formData.consult1}
          </span>
        </div>
        <div>
          <span className="font-bold">상담 요청 분야 (2,3순위):</span>{" "}
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
      </div>
    </div>
  );
};

export default ConsultFormData;
