"use client";
import BannerCarousel from "@/components/BannerCarousel";
import MenuSelector from "@/components/Base";
import ItemSelector from "@/components/Topping";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ping from "../../../public/ping.svg";
import { ddag } from "../utils/fonts";

interface Item {
  label: string;
  subLabel: string;
}

export default function Home() {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [selectedGrams, setSelectedGrams] = useState<any>({});
  const [selectedToppings, setSelectedToppings] = useState<Item[]>([]);
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const address = queryParams.get("address");

    if (address) {
      setLocation(address);
    }
  }, []);

  const handleSelectionChange = (menu: string, grams: any) => {
    setSelectedMenu(menu);
    console.log(menu);
    setSelectedGrams(grams);
    console.log(grams);
  };

  const handleToppingSelectionChange = (toppings: Item[]) => {
    setSelectedToppings(toppings);
    console.log("토핑", toppings);
  };

  const handleComplete = () => {
    if (selectedMenu) {
      const query = {
        address: location,
        menu: selectedMenu,
        grams: JSON.stringify(selectedGrams),
        toppings: JSON.stringify(selectedToppings),
      };
      router.push(`/result?${new URLSearchParams(query).toString()}`);
    } else {
      alert("메뉴를 선택해주세요.");
    }
  };

  return (
    <div className="h-screen p-4">
      <header
        className={`${ddag.variable} ali mb-4 mt-6 font-ddag text-2xl text-gray-800`}
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
        <Image
          src={ping}
          alt="아이콘"
          width={24}
          height={24}
          className="ml-auto"
        />
      </div>

      <div className="mt-4 text-[24px] font-bold">나는 이게 조합</div>
      <BannerCarousel />
      <div className="mt-4 text-[24px] font-bold">나는 이런 조합</div>
      <div className="mt-2 h-0.5 w-full bg-[#F63F5D]"></div>
      <MenuSelector onSelectionChange={handleSelectionChange} />
      <div className="mt-5 h-0.5 w-full bg-[#F63F5D]"></div>
      <ItemSelector onSelectionChange={handleToppingSelectionChange} />
      <div className="mt-6 flex w-full justify-center">
        <button
          className="h-[60px] w-[335px] rounded-[16px] bg-[#F63F5D] text-center text-[20px] text-white"
          onClick={handleComplete}
        >
          완료
        </button>
      </div>
    </div>
  );
}
