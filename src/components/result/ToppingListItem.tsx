import Image from "next/image";
import enter from "../../../public/enter_icon.svg";

interface ToppingListItemProps {
  label: string;
  subLabel: string;
}

export default function ToppingListItem({
  label,
  subLabel,
}: ToppingListItemProps) {
  return (
    <div className="flex items-center gap-4 px-5 py-3">
      <Image src={enter} alt="enter" width={24} height={24} />
      <span className="grow text-xl font-semibold">{label}</span>
      <span className="text-[#A3A3A3]">{subLabel}</span>
    </div>
  );
}
