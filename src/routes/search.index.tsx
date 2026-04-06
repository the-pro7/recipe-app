import { Search, SearchIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import z from "zod";
import { searchRecipes } from "../data/api";
import RecipeCard from "../components/recipe-card";
import { Badge } from "../components/ui/badge";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../components/ui/empty";
import { Button } from "../components/ui/button";

const searchQuerySchema = z.object({
  q: z.string().nonoptional(),
});

export const Route = createFileRoute("/search/")({
  component: RouteComponent,
  beforeLoad: () => {
    return {
      searchRecipes,
    };
  },
  validateSearch: zodValidator(searchQuerySchema),
  loaderDeps: ({ search }) => {
    return {
      q: search.q,
    };
  },
  loader: async ({ deps, context }) => {
    const recipes = await context.searchRecipes(deps.q);

    return {
      recipes,
    };
  },
});

function RouteComponent() {
  const { q } = Route.useSearch();
  const { recipes } = Route.useLoaderData();

  return (
    <main>
      <div className=" my-10 max-w-lg mx-auto flex gap-3 items-center p-2 rounded-full bg-slate-200 ml-auto">
        <HugeiconsIcon icon={SearchIcon} className="text-slate-800" />
        <input
          type="search"
          name="search"
          id="search"
          className="text-xl font-light w-full"
          value={q}
          // onChange={(e) => setSearch(e.target.value)}
          placeholder="Search recipes..."
        />
      </div>
      <div className="flex justify-between items-center my-5">
        <h1 className="text-4xl font-bold tracking-wide text-slate-800">
          Results for "{q}"
        </h1>
        <Badge className="p-3 text-sm text-slate-800" variant="outline">
          Results {recipes.recipes.length}
        </Badge>
      </div>
      {recipes.recipes.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 outline">
          {recipes.recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              difficulty={recipe.difficulty}
              name={recipe.name}
              image={recipe.image}
              reviewCount={recipe.reviewCount}
            />
          ))}
        </div>
      ) : (
        <Empty className="w-full mx-auto">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <HugeiconsIcon icon={Search} />
            </EmptyMedia>
            <EmptyTitle className="text-5xl font-bold text-slate-800">
              Oopsie! Recipe not found
            </EmptyTitle>
            <EmptyDescription className="text-slate-800 font-light text-xl">
              Looks like your delicious recipe hasn't been added! Care to add
              it?
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button className="cursor-pointer">Add yours</Button>
          </EmptyContent>
        </Empty>
      )}
    </main>
  );
}
