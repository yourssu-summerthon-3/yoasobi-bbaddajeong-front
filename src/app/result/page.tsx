import CheapestYoajungSection from "@/components/result/CheapestYoajungSection";
import MyYoajungSection from "@/components/result/MyYoajungSection";
import ResultTopBar from "@/components/result/ResultTopBar";

export default function Result() {
  return (
    <div className="flex h-screen flex-col">
      <ResultTopBar />
      <MyYoajungSection />
      <CheapestYoajungSection />
    </div>
  );
}
