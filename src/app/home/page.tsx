import Image from "next/image";
import ping from "../../../public/ping.svg";
import { ddag } from "../layout";
import BannerCarousel from "@/components/BannerCarousel";
import MenuSelector from "@/components/Base";
import Topping from "@/components/Topping";

export default function Home() {
  return (
    <div className="h-screen p-4">
      <header
        className={`${ddag.variable} ali font-ddag text-gray-800 text-2xl mb-4 mt-6`}
      >
        요아소비빠따정
      </header>

      <div className="flex items-center justify-between w-[353px] h-[56px] bg-[#F4F6F7] rounded-[16px] p-2">
        <input
          type="text"
          className="bg-[#F4F6F7] w-full h-full rounded-[16px] p-2 outline-none text-gray-800"
        />
        <Image
          src={ping}
          alt="아이콘"
          width={24}
          height={24}
          className="ml-auto"
        />
      </div>

      <div className="text-[24px] font-bold mt-4">
        나는 이게 조합
      </div>
      <BannerCarousel />
      <div className="text-[24px] font-bold mt-4">
        나는 이런 조합
      </div>
      <div className="mt-2 w-full h-0.5 bg-[#F63F5D]"></div>
      <MenuSelector />
      <div className="mt-5 w-full h-0.5 bg-[#F63F5D]"></div>
      <Topping />
      <div className="flex justify-center w-full mt-6">
      <button className="bg-[#F63F5D] w-[335px] h-[60px] text-white text-center  rounded-[16px] text-[20px]">
      완료
    </button>
    </div>
    </div>
  );
}
