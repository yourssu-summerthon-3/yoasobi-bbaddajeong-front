"use client";
import BannerCarousel from "@/components/BannerCarousel";
import BaseFlavorSelect from "@/components/home/BaseFlavorSelect";
import ToppingSelect, { ToppingItem } from "@/components/home/ToppingSelect";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import ping from "../../../public/ping.svg";
import 기본 from "../../../public/기본.svg";
import 체리쉘 from "../../../public/체리쉘.svg";
import 초코쉘 from "../../../public/초코쉘.svg";
import { BaseFlavor, BaseSize } from "../types/common";
import { ddag } from "../utils/fonts";

interface Item {
  label: string;
  subLabel: string;
}

const ToppingList: ToppingItem[] = [
  { name: "벌집꿀", size: "50g" },
  { name: "그래놀라", size: "50g" },
  { name: "초코링", size: "30g" },
  { name: "망고", size: "1/2개" },
  { name: "블루베리", size: "50g" },
  { name: "바나나", size: "1개" },
  { name: "복숭아", size: "100g" },
  { name: "샤인머스캣", size: "100g" },
  { name: "멜론", size: "100g" },
];

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const address = searchParams.get("address") ?? "";

  const [location, setLocation] = useState(address);

  const handleSelectFlavor = (flavor: keyof typeof BaseFlavor) => {
    console.log("Selected: ", flavor);
  };

  const handleSelectSize = (size: keyof typeof BaseSize) => {
    console.log("Selected: ", size);
  };

  const handleSelectTopping = (toppings: ToppingItem[]) => {
    console.log("Selected: ", toppings);
  };

  const handleClickComplete = () => {};

  return (
    <div className="p-4">
      <header
        className={`${ddag.variable} mb-4 mt-6 font-ddag text-2xl text-gray-800`}
      >
        요아소비빠따정
      </header>

      <div className="flex h-[56px] w-[353px] items-center justify-between rounded-[16px] bg-[#F4F6F7] p-2">
        <input
          type="text"
          className="h-full w-full rounded-[16px] bg-[#F4F6F7] p-2 text-gray-800 outline-none"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Image src={ping} alt="아이콘" width={24} height={24} />
      </div>

      <div className="mt-4 text-2xl font-bold">나는 이게 조합</div>
      <BannerCarousel />
      <div className="mt-4 text-2xl font-bold">나는 이런 조합</div>
      <div className="mt-2 h-0.5 w-full bg-[#F63F5D]"></div>
      <BaseFlavorSelect
        onSelectFlavor={handleSelectFlavor}
        onSelectSize={handleSelectSize}
      >
        <BaseFlavorSelect.Option flavor="요거트아이스크림" imgSrc={기본} />
        <BaseFlavorSelect.Option flavor="초코쉘" imgSrc={초코쉘} />
        <BaseFlavorSelect.Option flavor="체리쉘" imgSrc={체리쉘} />
      </BaseFlavorSelect>
      <div className="h-0.5 w-full bg-[#F63F5D]"></div>
      <ToppingSelect onSelectTopping={handleSelectTopping}>
        {ToppingList.map((topping, index) => (
          <div key={topping.name}>
            <ToppingSelect.Option topping={topping} />
            {index === 2 || index === 8 ? (
              <div className="my-2 h-0.5 w-full bg-[#F63F5D]" />
            ) : null}
          </div>
        ))}
      </ToppingSelect>
      <button
        type="button"
        className="mt-6 h-[60px] w-full rounded-2xl bg-[#F63F5D] text-xl font-semibold text-white"
      >
        완료
      </button>
    </div>
  );
}
