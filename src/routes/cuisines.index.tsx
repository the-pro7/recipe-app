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
import { getRecipesByCuisine } from "../data/api";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../components/ui/empty";
import { HugeiconsIcon } from "@hugeicons/react";
import { Pizza, Refresh01FreeIcons } from "@hugeicons/core-free-icons";

const searchParamsSchema = z.object({
  cuisine: z.string().optional().default("Asian"),
});

export const Route = createFileRoute("/cuisines/")({
  component: RouteComponent,
  errorComponent: ({ reset, error }) => (
    <div className="min-h-100 flex flex-col gap-3 items-center justify-center">
      <h1 className="text-4xl font-semibold">Error: {error.message}</h1>
      <Button onClick={reset}>
        <HugeiconsIcon icon={Refresh01FreeIcons} />
        Retry
      </Button>
    </div>
  ),
  validateSearch: zodValidator(searchParamsSchema),
  loaderDeps: ({ search }) => {
    return {
      cuisine: search.cuisine,
    };
  },
  loader: async ({ deps }) => {
    const recipes = await getRecipesByCuisine(deps.cuisine);

    return {
      recipes,
    };
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
  const navigate = Route.useNavigate();
  const { cuisine } = Route.useSearch();
  const { recipes } = Route.useLoaderData();

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
        <h3 className="text-3xl font-bold text-slate-800">{cuisine}</h3>
        <Select
          onValueChange={(value) => {
            navigate({
              from: Route.fullPath,
              to: ".",
              search: (prev) => ({ ...prev, cuisine: value }),
            });
          }}
          defaultValue={cuisine}
        >
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
        {recipes.recipes && recipes.recipes.length > 0 ? (
          recipes.recipes.map((recipe) => (
            <RecipeCard
              id={recipe.id}
              key={recipe.id}
              name={recipe.name}
              difficulty={recipe.difficulty}
              reviewCount={recipe.reviewCount}
              image={recipe.image}
            />
          ))
        ) : (
          <Empty className="bg-slate-200 rounded-lg p-4 flex flex-col mx-auto my-5">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <HugeiconsIcon icon={Pizza} />
              </EmptyMedia>
              <EmptyTitle>No Recipe Found</EmptyTitle>
              <EmptyDescription>
                Try selecting a different cuisine or check back later.
              </EmptyDescription>
            </EmptyHeader>
            {/* <EmptyContent>
              <Button>Add data</Button>
            </EmptyContent> */}
          </Empty>
        )}
      </div>
      {/* <Button className="mt-5 mx-auto cursor-pointer" size="lg">
        Load more
      </Button> */}
    </main>
  );
}
