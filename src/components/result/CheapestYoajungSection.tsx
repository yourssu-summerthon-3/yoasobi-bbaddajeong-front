import YoajungListItem from "./YoajungListItem";

export default function CheapestYoajungSection() {
  return (
    <section className="px-6 py-2">
      <h2 className="text-xl font-semibold">주변에서 가장 싼 지점 바로가기</h2>
      <YoajungListItem />
      <YoajungListItem />
      <div className="px-5 py-2 text-end text-[#F63F5D]">
        누르면 배달의민족 앱으로 이어집니다!
      </div>
    </section>
  );
}
