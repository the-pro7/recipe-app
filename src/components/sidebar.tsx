import { getRouteApi } from "@tanstack/react-router";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export default function Sidebar() {
  const { useNavigate, useSearch } = getRouteApi("/recipes/");
  const { mealType } = useSearch();
  const navigate = useNavigate();

  const mealTypes = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snack",
    "Snacks",
    "Dessert",
    "Side Dish",
    "Appetizer",
    "Beverage",
  ];

  return (
    <aside className="text-slate-800 rounded-lg shadow-lg max-w-lg! bg-white py-4 pl-4 pr-10 max-h-225 sticky top-5">
      <h2 className="text-2xl font-semibold">Recipes Filter</h2>
      <div>
        <h3 className="tracking-wider font-medium text-slate-800 mt-1">Meal Types</h3>
        <RadioGroup
          defaultValue={mealType}
          onValueChange={(value) => {
            navigate({
              to: ".",
              search: (prev) => {
                return {
                  ...prev,
                  mealType: value,
                };
              },
            });
          }}
          className="mt-4"
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all">All Recipes</Label>
          </div>
          {mealTypes.map((mealType) => (
            <div key={mealType} className="flex items-center gap-3">
              <RadioGroupItem value={mealType} id={`option-${mealType}`} />
              <Label htmlFor={`option-${mealType}`}>{mealType}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </aside>
  );
}
