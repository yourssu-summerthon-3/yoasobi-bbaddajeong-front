"use client";

import CheapestYoajungSection from "@/components/result/CheapestYoajungSection";
import MyYoajungSection, {
  ToppingItem,
} from "@/components/result/MyYoajungSection";
import ResultTopBar from "@/components/result/ResultTopBar";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Result() {
  const searchParams = useSearchParams();

  const address = searchParams.get("address") ?? "";
  const menu = searchParams.get("menu") ?? "";
  const grams = searchParams.get("grams") ?? "";
  const toppings = searchParams.get("toppings") ?? "[]";

  useEffect(() => {
    const toppingLabels = JSON.parse(toppings).map(
      (ele: ToppingItem) => ele.label,
    );
    const toppingQueries = toppingLabels
      .map(
        (topping: string) =>
          `toppings=${encodeURIComponent(ToppingType[topping])}`,
      )
      .join("&");

    const fetchData = async () => {
      const response = await axios.get(
        "https://api.yoajung.yourssu.com/stores",
        {
          params: {
            address,
            menu: BaseFlavor[menu],
            grams: BaseSize[JSON.parse(grams)],
            toppings: toppingQueries,
          },
        },
      );
      console.log(Response);
    };
    fetchData();
  }, []);

  console.log("address", address);
  console.log("menu", menu);
  console.log("grams", grams);
  console.log("toppings", toppings);

  return (
    <div className="flex h-screen flex-col">
      <ResultTopBar />
      {/* @ts-ignore */}
      <MyYoajungSection
        menu={menu}
        grams={JSON.parse(grams)}
        toppings={JSON.parse(toppings)}
      />
      <CheapestYoajungSection />
    </div>
  );
}
