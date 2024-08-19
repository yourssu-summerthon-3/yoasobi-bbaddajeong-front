import { ToppingType } from "@/app/types/common";
import { createContext, ReactNode, useContext, useState } from "react";

export interface ToppingItem {
  name: keyof typeof ToppingType;
  size: string;
}

interface ToppingSelectContextType {
  selectedToppings: ToppingItem[];
  toggleTopping: (topping: ToppingItem) => void;
}

const ToppingSelectContext = createContext<ToppingSelectContextType | null>(
  null,
);

interface ToppingSelectProps {
  children: ReactNode;
  onSelectTopping: (toppings: ToppingItem[]) => void;
}

interface ToppingOptionProps {
  topping: ToppingItem;
}

const ToppingSelect = ({ children, onSelectTopping }: ToppingSelectProps) => {
  const [selectedToppings, setSelectedToppings] = useState<ToppingItem[]>([]);

  const toggleTopping = (topping: ToppingItem) => {
    setSelectedToppings((prev) => {
      const newToppings = prev.some((t) => t.name === topping.name)
        ? prev.filter((t) => t.name !== topping.name)
        : [...prev, topping];

      onSelectTopping(newToppings);

      return newToppings;
    });
  };

  return (
    <ToppingSelectContext.Provider value={{ selectedToppings, toggleTopping }}>
      <div className="flex flex-col py-3">{children}</div>
    </ToppingSelectContext.Provider>
  );
};

const ToppingOption = ({ topping }: ToppingOptionProps) => {
  const context = useContext(ToppingSelectContext);

  if (!context) {
    throw new Error("Cannot use ToppingOption outside of ToppingSelect");
  }

  const { selectedToppings, toggleTopping } = context;
  const isSelected = selectedToppings.some((t) => t.name === topping.name);

  return (
    <div
      className="flex cursor-pointer items-center justify-between px-6 py-3"
      onClick={() => toggleTopping(topping)}
    >
      <div className="flex flex-col justify-center gap-2">
        <span className="text-xl font-semibold">{topping.name}</span>
        <span className="text-[#A3A3A3]">{topping.size}</span>
      </div>
      <div
        className={`mr-5 box-border h-[30px] w-[30px] rounded-full border-8 border-black ${isSelected ? "bg-[#F63F5D]" : "bg-black"}`}
      />
    </div>
  );
};

ToppingSelect.Option = ToppingOption;

export default ToppingSelect;
