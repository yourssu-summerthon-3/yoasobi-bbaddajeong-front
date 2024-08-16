import { FaAngleRight } from "react-icons/fa6";

export default function YoajungListItem() {
  return (
    <div className="flex items-center gap-5 px-5 py-4">
      <span className="flex h-[30px] w-[30px] items-center justify-center rounded bg-[#F63F5D] text-xl font-semibold text-white">
        1
      </span>
      <span className="grow text-xl font-semibold">사당점</span>
      <span className="text-xl font-semibold">18,350원</span>
      <FaAngleRight />
    </div>
  );
}
