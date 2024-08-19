import { BaseFlavor, BaseSize } from "@/app/types/common";
import * as Select from "@radix-ui/react-select";
import Image from "next/image";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface SelectContextType {
  selectedFlavor: keyof typeof BaseFlavor | null;
  handleSelectFlavor: (option: keyof typeof BaseFlavor) => void;
  selectedSize: keyof typeof BaseSize;
  handleSelectSize: (option: keyof typeof BaseSize) => void;
}

const BaseFlavorSelectContext = createContext<SelectContextType | null>(null);

interface BaseFlavorSelectProps {
  children: ReactNode;
  onSelectFlavor: (flavor: keyof typeof BaseFlavor) => void;
  onSelectSize: (size: keyof typeof BaseSize) => void;
}

interface BaseFlavorOptionProps {
  flavor: keyof typeof BaseFlavor;
  imgSrc: string;
}

const BaseFlavorSelect = ({
  children,
  onSelectFlavor,
  onSelectSize,
}: BaseFlavorSelectProps) => {
  const [selectedFlavor, setSelectedFlavor] = useState<
    keyof typeof BaseFlavor | null
  >(null);
  const [selectedSize, setSelectedSize] =
    useState<keyof typeof BaseSize>("1인 150g");

  const handleSelectFlavor = (flavor: keyof typeof BaseFlavor) => {
    setSelectedFlavor(flavor);
    onSelectFlavor(flavor);
  };

  const handleSelectSize = (size: keyof typeof BaseSize) => {
    setSelectedSize(size);
    onSelectSize(size);
  };

  return (
    <BaseFlavorSelectContext.Provider
      value={{
        selectedFlavor,
        handleSelectFlavor,
        selectedSize,
        handleSelectSize,
      }}
    >
      <div className="flex flex-col gap-2 py-3">{children}</div>
    </BaseFlavorSelectContext.Provider>
  );
};

const SelectItem = React.forwardRef<HTMLDivElement, Select.SelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={`cursor-pointer select-none rounded-md p-2 text-[#A3A3A3] transition-all hover:bg-[#F63F5D] hover:text-white data-[highlighted]:outline-none`}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  },
);

const BaseFlavorOption = ({ flavor, imgSrc }: BaseFlavorOptionProps) => {
  const context = useContext(BaseFlavorSelectContext);

  if (!context) {
    throw new Error("Cannot use BaseFlavorOption outside of BaseFlavorSelect");
  }

  const { selectedFlavor, handleSelectFlavor, selectedSize, handleSelectSize } =
    context;
  const isSelectedFlavor = selectedFlavor === flavor;

  return (
    <div
      className={`flex cursor-pointer items-center gap-5 rounded-[20px] border border-[#F63F5D] py-3 pl-5 ${isSelectedFlavor && "bg-[#F63F5D] text-white"}`}
      onClick={() => handleSelectFlavor(flavor)}
    >
      <Image src={imgSrc} alt={flavor} className="h-[50px] w-[50px]" />
      <div className="flex flex-col justify-center">
        <span className="text-xl font-semibold">{flavor}</span>
        <Select.Root value={selectedSize} onValueChange={handleSelectSize}>
          <Select.Trigger asChild>
            <span
              className={`cursor-pointer underline underline-offset-4 ${isSelectedFlavor ? "text-white" : "text-[#A3A3A3]"}`}
            >
              <Select.Value aria-label={selectedSize}>
                {selectedSize}
              </Select.Value>
            </span>
          </Select.Trigger>
          <Select.Content
            className="mt-2 rounded-lg border border-[#F63F5D] bg-white shadow-lg"
            position="popper"
          >
            {Object.keys(BaseSize).map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
};

BaseFlavorSelect.Option = BaseFlavorOption;

export default BaseFlavorSelect;
