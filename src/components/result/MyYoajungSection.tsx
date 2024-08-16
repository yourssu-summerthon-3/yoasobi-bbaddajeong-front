import ToppingListItem from "./ToppingListItem";

export default function MyYoajungSection() {
  return (
    <section className="px-6 py-4">
      <h2 className="text-2xl font-extrabold">나의 요아정</h2>
      <div className="mt-3 border-y-2 border-[#F63F5D]">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-xl font-semibold">요거트 아이스크림</span>
          <span className="text-[#A3A3A3]">1인 150g</span>
        </div>
        <ToppingListItem />
      </div>
    </section>
  );
}
