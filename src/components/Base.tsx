"use client";
import { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import 기본 from "../../public/기본.svg";
import 초코쉘 from "../../public/초코쉘.svg";
import 체리쉘 from "../../public/체리쉘.svg";

interface MenuButtonProps {
  label: string;
  subLabel: string;
  imgSrc: StaticImageData;
  isSelected: boolean;
  onClick: () => void;
}

function Base({
  label,
  subLabel,
  imgSrc,
  isSelected,
  onClick,
}: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full p-4 rounded-lg mb-2 transition-colors ${
        isSelected
          ? "bg-[#F63F5D] text-white rounded-[20px]"
          : "bg-white text-black border [border-color:#F63F5D] rounded-[20px]"
      }`}
    >
      <div className="mr-4">
        <Image
          src={imgSrc}
          alt={label}
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className="text-left">
        <div
          className={`text-lg font-semibold ${
            isSelected ? "text-white" : "text-black"
          }`}
        >
          {label}
        </div>
        <div
          className={`underline text-sm ${
            isSelected ? "text-white" : "text-gray-500"
          }`}
        >
          {subLabel}
        </div>
      </div>
    </button>
  );
}

export default function MenuSelector() {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-col items-center w-full max-w-md mt-4">
      <Base
        label="요거트아이스크림"
        subLabel="1인 150g"
        imgSrc={기본}
        isSelected={selected === "요거트아이스크림"}
        onClick={() => setSelected("요거트아이스크림")}
      />
      <Base
        label="초코쉘"
        subLabel="1인 150g"
        imgSrc={초코쉘}
        isSelected={selected === "초코쉘"}
        onClick={() => setSelected("초코쉘")}
      />
      <Base
        label="체리쉘"
        subLabel="1인 150g"
        imgSrc={체리쉘}
        isSelected={selected === "체리쉘"}
        onClick={() => setSelected("체리쉘")}
      />
    </div>
  );
}
