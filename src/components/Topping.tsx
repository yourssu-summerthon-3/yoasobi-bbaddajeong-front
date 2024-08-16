"use client";
import { useState } from "react";

const items = [
  { label: "벌집꿀", subLabel: "100g" },
  { label: "그래놀라", subLabel: "100g" },
  { label: "초코링", subLabel: "100g" },
  { label: "망고", subLabel: "100g" },
  { label: "블루베리", subLabel: "100g" },
  { label: "바나나", subLabel: "100g" },
  { label: "복숭아", subLabel: "100g" },
  { label: "샤인머스캣", subLabel: "100g" },
  { label: "멜론", subLabel: "100g" },
];

export default function ItemSelector() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelection = (label: string) => {
    if (selectedItems.includes(label)) {
      setSelectedItems(selectedItems.filter((item) => item !== label));
    } else {
      setSelectedItems([...selectedItems, label]);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleSelection(item.label)}
            className="flex items-center justify-between w-full p-3 mb-2 bg-white rounded-md "
          >
            <div className="flex flex-col text-left">
              <span className="text-lg font-bold">{item.label}</span>
              <span className="text-gray-500">{item.subLabel}</span>
            </div>
            <div
              className={`w-6 h-6 rounded-full border-2 ${
                selectedItems.includes(item.label)
                  ? "bg-red-500 border-black"
                  : "bg-black"
              }`}
            />
          </button>
          {index === 2 || index === 8 ? (
            <div className="mt-5 w-full h-0.5 bg-[#F63F5D]"></div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
