import { createFileRoute, Link } from "@tanstack/react-router";
import { getAllCuisines, getAllRecipes } from "../data/api";
import Sidebar from "../components/sidebar";
import RecipeCard from "../components/recipe-card";
import z from "zod";
import { zodValidator } from "@tanstack/zod-adapter";
import { getPagination } from "../lib/utils";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../components/ui/empty";
import { Button } from "../components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Pizza } from "@hugeicons/core-free-icons";
// import { Button } from "../components/ui/button";

const recipesSearchParams = z.object({
  page: z.number().nonoptional().default(1),
  mealType: z.string().default("all").optional(),
});

export const Route = createFileRoute("/recipes/")({
  component: RouteComponent,
  validateSearch: zodValidator(recipesSearchParams),
  beforeLoad: () => {
    return {
      getAllCuisines,
      getAllRecipes,
    };
  },
  loaderDeps: ({ search }) => {
    return {
      page: search.page ?? 1,
      mealType: search.mealType,
    };
  },
  loader: async ({ context, deps }) => {
    const recipes = await context.getAllRecipes(deps.page, deps.mealType);

    return {
      recipes,
    };
  },
});

function RouteComponent() {
  const { recipes } = Route.useLoaderData();
  const { page } = Route.useSearch();
  const length = recipes.recipes.length;
  const pagination = getPagination(page, recipes.total);
  console.log(recipes.recipes);
  return (
    <main className="mt-10 flex gap-10 items-start justify-center">
      <Sidebar />
      <section className="flex-1">
        <div className="flex items-center justify-between">
          <h1 className="page-header">Recipe catalogue ({length})</h1>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.recipes && recipes.recipes.length > 0 ? (
            recipes.recipes.map((recipe) => (
              <RecipeCard
                id={recipe.id}
                key={recipe.name}
                name={recipe.name}
                image={recipe.image}
                reviewCount={recipe.reviewCount}
                difficulty={recipe.difficulty}
              />
            ))
          ) : (
            <Empty className="mx-auto">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <HugeiconsIcon icon={Pizza} />
                </EmptyMedia>
                <EmptyTitle>No Recipes</EmptyTitle>
                <EmptyDescription>No recipes for this page</EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button asChild>
                  <Link
                    to="."
                    search={(prev) => {
                      return {
                        ...prev,
                        page: 1,
                      };
                    }}
                  >
                    Go to page 1
                  </Link>
                </Button>
              </EmptyContent>
            </Empty>
          )}
        </div>
        <div className="mt-10 flex gap-3 items-center">
          {pagination.map((item, i) => {
            if (item === "...") {
              return <span key={i}>...</span>;
            }

            return (
              <Link
                key={i}
                to="."
                search={(prev) => ({
                  ...prev,
                  page: typeof item === "number" ? item : undefined,
                })}
                className={`${item === page ? "font-bold" : ""} bg-white text-emerald-700 p-1 px-5 rounded-full cursor-pointer inline-flex items-center`}
              >
                {item}
              </Link>
            );
          })}
          <Link
            to="."
            className="bg-white text-emerald-700 p-1 px-5 rounded-full cursor-pointer inline-flex items-center"
            search={(prevSearch) => {
              return {
                ...prevSearch,
                page: Math.min((page ?? 1) + 1, recipes?.total as number),
              };
            }}
          >
            {">"}
          </Link>
        </div>
      </section>
    </main>
  );
}
