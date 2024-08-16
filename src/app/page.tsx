"use client";

import { useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { ddag } from "./layout";

type Coordinates = {
  latitude: number;
  longitude: number;
};

export default function Home() {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState<Coordinates>();

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoordinates({ latitude, longitude });
      },
      (error) => {
        alert(`위치를 가져오는데 실패했습니다: ${error.message}`);
      },
    );
  };

  return (
    <div
      className={
        "flex h-screen w-full flex-col items-center bg-frame-image bg-cover"
      }
    >
      <h1
        className={`${ddag.variable} mt-60 font-ddag text-4xl tracking-[2.88px]`}
      >
        요아소비빠따정
      </h1>
      <div className="mt-24 flex h-14 w-80 items-center gap-2 rounded-2xl bg-[#F4F6F7] px-4 py-2 text-[#929BA5]">
        <FiMapPin className="h-6 w-6" />
        <input
          className="flex-grow bg-transparent"
          placeholder="현재 위치를 알려주세요"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button
        className="mt-4 flex h-11 w-80 items-center justify-center gap-2 rounded-2xl border-2 border-[#929BA5] px-4 py-2"
        onClick={getCurrentLocation}
      >
        <FaLocationCrosshairs />
        현재 위치로 찾기
      </button>
      {coordinates && (
        <span className="text-xs">
          {coordinates.latitude}, {coordinates.longitude}
        </span>
      )}
    </div>
  );
}
