import Image from "next/image";
import enter from "../../../public/enter_icon.svg";

export default function ToppingListItem() {
  return (
    <div className="flex items-center gap-4 px-5 py-3">
      <Image src={enter} alt="enter" width={24} height={24} />
      <span className="grow text-xl font-semibold">그래놀라</span>
      <span className="text-[#A3A3A3]">100g</span>
    </div>
  );
}
