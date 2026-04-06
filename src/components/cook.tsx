import { Link } from "@tanstack/react-router";
import RecipeCard from "./recipe-card";
import { Button } from "./ui/button";
import { useQuery } from "@tanstack/react-query";
import { getAllRecipes } from "../data/api";

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
  // const {} = useQuery({
  //   queryKey: ['home-recipes'],
  //   queryFn: getAllRecipes
  // })


  
  return (
    <section>
      <div className="flex items-center justify-center flex-col gap-10">
        <h1 className="text-5xl font-bold text-center text-slate-800">
          What to <span className="text-emerald-500">cook</span>?
        </h1>
        <div className="flex items-center justify-center flex-wrap max-w-lg gap-2">
          {mealTypes.map((type) => (
            <Button
              key={type}
              className="bg-slate-200 text-slate-700 rounded-full px-5 py-2 cursor-pointer hover:text-white!"
            >
              {type}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
        <RecipeCard
        id={1}
          key={index}
          difficulty="Easy"
          name="Macaroni Pizza"
          reviewCount={100}
          image="/assets/step-1.jpg"
        />
      ))}
      </div>
      <Button asChild size="lg" className="my-7 ml-auto">
        <Link to="/recipes">All Recipes</Link>
      </Button>
    </section>
  );
}
