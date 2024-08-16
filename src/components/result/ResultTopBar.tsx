"use client";

import { ddag } from "@/app/layout";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

export default function ResultTopBar() {
  const router = useRouter();

  return (
    <nav className="flex h-16 items-center gap-1 px-5 py-2">
      <button className="p-2" onClick={() => router.back()}>
        <IoArrowBack className="h-6 w-6" />
      </button>
      <span className={`${ddag.variable} font-ddag text-2xl`}>주문하기</span>
    </nav>
  );
}
