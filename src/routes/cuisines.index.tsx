import { createFileRoute } from "@tanstack/react-router";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import RecipeCard from "../components/recipe-card";
import { Button } from "../components/ui/button";
import z from "zod";
import { zodValidator } from "@tanstack/zod-adapter";

const searchParamsSchema = z.object({
  cuisine: z.string().optional(),
});

export const Route = createFileRoute("/cuisines/")({
  component: RouteComponent,
  validateSearch: zodValidator(searchParamsSchema),
  beforeLoad: async () => {},
  loaderDeps: async ({ search }) => {
    return {
      cuisine: search.cuisine,
    };
  },
  loader: async ({ deps }) => {
    console.log((await deps).cuisine)
  },
});

// Cuisine list from dummyjson.com, we can replace it with an API call in the future
// Source: https://dummyjson.com/recipe/tag/{tag}
const cuisineTags = [
  "Asian",
  "Italian",
  "Mexican",
  "Indian",
  "French",
  "Japanese",
  "Mediterranean",
  "Brazilian",
  "Thai",
  "Spanish",
  "American",
  "Pakistani",
  "Turkish",
  "Russian",
  "Lebanese",
  "Moroccan",
  "Korean",
  "Smoothie",
];

function RouteComponent() {
  return (
    <main className="my-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl text-slate-800 font-black">
          World class cuisines
        </h1>
        <p className="text-lg text-slate-500 font-semibold">
          Find something to learn from our universal catalogue
        </p>
      </div>
      <div className="my-7 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-slate-800">All cuisines</h3>
        <Select>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="Select a cuisine" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Cuisines</SelectLabel>
              {cuisineTags.map((cuisine) => (
                <SelectItem key={cuisine} value={cuisine}>
                  {cuisine}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 30 }).map((_, index) => (
          <RecipeCard
            key={index}
            title="Hot Pepper Soup"
            difficulty="medium"
            reviewCount={300}
            image="/assets/step-4.jpg"
          />
        ))}
      </div>
      <Button className="mt-5 mx-auto cursor-pointer" size="lg">
        Load more
      </Button>
    </main>
  );
}
