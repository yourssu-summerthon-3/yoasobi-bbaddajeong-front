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
    console.log("getCurrentLocation");

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
      }
    );
  };

  return (
    <div
      className={
        "bg-frame-image bg-cover w-full h-screen flex flex-col items-center"
      }
    >
      <h1
        className={`${ddag.variable} font-ddag text-4xl tracking-[2.88px] mt-60`}
      >
        요아소비빠따정
      </h1>
      <div className="mt-24 px-4 py-2 bg-[#F4F6F7] rounded-2xl flex items-center gap-2 w-80 h-14 text-[#929BA5]">
        <FiMapPin className="w-6 h-6" />
        <input
          className="bg-transparent flex-grow"
          placeholder="현재 위치를 알려주세요"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button
        className="mt-4 w-80 h-11 px-4 py-2 border-2 border-[#929BA5] rounded-2xl flex items-center justify-center gap-2"
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
