import { Link } from "@tanstack/react-router";
import RecipeCard from "./recipe-card";
import { Button } from "./ui/button";
import { useQuery } from "@tanstack/react-query";
import { getRecipesByMealType } from "../data/api";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const mealTypes = [
  "All Types",
  "Breakfast",
  "Lunch",
  "Snack",
  "Dinner",
  "Dessert",
  "Side Dish",
  "Appetizer",
  "Beverage",
];

export default function Cook() {
  const [mealType, setMealType] = useState<string>(() => {
    return (localStorage.getItem("meal-type") as string) || "all";
  });

  useEffect(() => {
    save(mealType);
  }, [mealType]);

  const {
    data: recipes,
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["home-recipes", mealType],
    queryFn: () => getRecipesByMealType(mealType),
  });

  return (
    <section className="mt-10 md:mt-0">
      <div className="flex items-center justify-center flex-col gap-10">
        <h1 className="text-5xl font-bold text-center text-slate-800">
          What to <span className="text-emerald-500">cook</span>?
        </h1>
        <div className="flex items-center justify-center flex-wrap max-w-lg gap-2">
          {mealTypes.map((type) => (
            <Button
              key={type}
              onClick={() => {
                if (type === "All Types") {
                  setMealType("all");
                  return;
                }

                setMealType(type.toLowerCase());
              }}
              className={cn(
                "bg-slate-200 text-slate-700 rounded-full px-5 py-2 cursor-pointer hover:text-white!",
                mealType === type.toLowerCase() ||
                  (mealType === "all" && type === "All Types")
                  ? "bg-blue-500 text-white scale-105"
                  : null,
              )}
            >
              {type}
            </Button>
          ))}
        </div>
      </div>
      {error ? (
        <div className="mt-5 text-center text-3xl font-semibold text-slate-800">
          <h1>Can't display tasty treats rights now :(</h1>
          <Button onClick={() => refetch()}>Retry</Button>
        </div>
      ) : (
        <>
          {isLoading ? (
            <h1 className="mt-5 text-center text-3xl font-semibold text-slate-800">
              Tasty treats coming up...
            </h1>
          ) : (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {recipes?.recipes.map((recipe, _) => (
                <RecipeCard
                  id={recipe.id}
                  key={recipe.id}
                  difficulty={recipe.difficulty}
                  name={recipe.name}
                  reviewCount={recipe.reviewCount}
                  image={recipe.image}
                />
              ))}
            </div>
          )}
        </>
      )}
      <Button asChild size="lg" className="my-7 ml-auto">
        <Link to="/recipes">All Recipes</Link>
      </Button>
    </section>
  );
}

function save(mealType: string) {
  localStorage.setItem("meal-type", mealType);
}
