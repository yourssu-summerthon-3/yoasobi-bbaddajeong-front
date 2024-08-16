"use client";

import CheapestYoajungSection from "@/components/result/CheapestYoajungSection";
import MyYoajungSection from "@/components/result/MyYoajungSection";
import ResultTopBar from "@/components/result/ResultTopBar";
import { useSearchParams } from "next/navigation";

export default function Result() {
  const searchParams = useSearchParams();

  const menu = searchParams.get("menu") ?? "";
  const grams = searchParams.get("grams") ?? "";
  const toppings = searchParams.get("toppings") ?? [];

  console.log("menu", menu);
  console.log("grams", grams);
  console.log("toppings", toppings);

  return (
    <div className="flex h-screen flex-col">
      <ResultTopBar />
      <MyYoajungSection
        menu={menu}
        grams={JSON.parse(grams)}
        toppings={JSON.parse(toppings)}
      />
      <CheapestYoajungSection />
    </div>
  );
}
