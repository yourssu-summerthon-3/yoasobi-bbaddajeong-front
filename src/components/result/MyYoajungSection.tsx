import ToppingListItem from "./ToppingListItem";

type ToppingItem = {
  label: string;
  subLabel: string;
};
interface MyYoajungSectionProps {
  menu: string;
  grams: string;
  toppings?: ToppingItem[];
}

export default function MyYoajungSection({
  menu,
  grams,
  toppings,
}: MyYoajungSectionProps) {
  return (
    <section className="px-6 py-4">
      <h2 className="text-2xl font-extrabold">나의 요아정</h2>
      <div className="mt-3 border-y-2 border-[#F63F5D]">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-xl font-semibold">{menu}</span>
          <span className="text-[#A3A3A3]">{grams}</span>
        </div>
        {toppings.map((topping) => (
          <ToppingListItem
            key={topping.label}
            label={topping.label}
            subLabel={topping.subLabel}
          />
        ))}
      </div>
    </section>
  );
}
