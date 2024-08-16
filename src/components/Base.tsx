"use client";
import { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import 기본 from "../../public/기본.svg";
import 초코쉘 from "../../public/초코쉘.svg";
import 체리쉘 from "../../public/체리쉘.svg";

interface MenuButtonProps {
  label: string;
  subLabel: string;
  imgSrc: StaticImageData;
  isSelected: boolean;
  onClick: () => void;
  onSelectGram: (gram: string) => void;
  selectedGram: string;
}

function Base({
  label,
  subLabel,
  imgSrc,
  isSelected,
  onClick,
  onSelectGram,
  selectedGram,
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
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <div
              className={`underline text-sm cursor-pointer ${
                isSelected ? "text-white" : "text-gray-500"
              }`}
            >
              {selectedGram}
            </div>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="bg-white p-2 rounded shadow-lg text-lg">
              {["1인 150g", "2인 300g", "3인 450g", "4인 600g"].map((gram) => (
                <DropdownMenu.Item
                  key={gram}
                  className="cursor-pointer p-2 text-[15px] hover:bg-gray-200"
                  onSelect={() => onSelectGram(gram)}
                >
                  {gram}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </button>
  );
}

export default function MenuSelector() {
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedGrams, setSelectedGrams] = useState({
    요거트아이스크림: "1인 150g",
    초코쉘: "1인 150g",
    체리쉘: "1인 150g",
  });

  const handleSelectGram = (item: string, gram: string) => {
    setSelectedGrams((prev) => ({
      ...prev,
      [item]: gram,
    }));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mt-4">
      <Base
        label="요거트아이스크림"
        subLabel={selectedGrams["요거트아이스크림"]}
        imgSrc={기본}
        isSelected={selected === "요거트아이스크림"}
        onClick={() => setSelected("요거트아이스크림")}
        onSelectGram={(gram) => handleSelectGram("요거트아이스크림", gram)}
        selectedGram={selectedGrams["요거트아이스크림"]}
      />
      <Base
        label="초코쉘"
        subLabel={selectedGrams["초코쉘"]}
        imgSrc={초코쉘}
        isSelected={selected === "초코쉘"}
        onClick={() => setSelected("초코쉘")}
        onSelectGram={(gram) => handleSelectGram("초코쉘", gram)}
        selectedGram={selectedGrams["초코쉘"]}
      />
      <Base
        label="체리쉘"
        subLabel={selectedGrams["체리쉘"]}
        imgSrc={체리쉘}
        isSelected={selected === "체리쉘"}
        onClick={() => setSelected("체리쉘")}
        onSelectGram={(gram) => handleSelectGram("체리쉘", gram)}
        selectedGram={selectedGrams["체리쉘"]}
      />
    </div>
  );
}
