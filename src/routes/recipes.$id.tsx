import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "../components/ui/badge";
import { difficultyColors } from "../components/recipe-card";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Chef,
  Clock,
  Dumbbell,
  Heart,
  Pizza,
  Refresh01FreeIcons,
  Star,
} from "@hugeicons/core-free-icons";
import StatCard from "../components/stat-card";
import SingleRecipeSkeleton from "./-recipe-page-components/single-recipe-skeleton";
import { getRecipeById } from "../data/api";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/recipes/$id")({
  component: RouteComponent,
  pendingComponent: () => <SingleRecipeSkeleton />,
  errorComponent: ({ reset, error }) => (
    <div className="min-h-100 flex flex-col gap-3 items-center justify-center">
      <h1 className="text-4xl font-semibold">Error: {error.message}</h1>
      <Button onClick={reset}>
        <HugeiconsIcon icon={Refresh01FreeIcons} />
        Retry
      </Button>
    </div>
  ),
  beforeLoad: () => {
    return {
      getRecipeById,
    };
  },
  loader: async ({ params, context }) => {
    const recipe = await context.getRecipeById(Number(params.id));

    return {
      recipe,
    };
  },
});

function RouteComponent() {
  // const { id } = Route.useParams();
  const { recipe } = Route.useLoaderData();

  // const splitName = recipe.name.split(" ");

  return (
    <section className="my-10 relative">
      <div className="shadow-sm outline p-10 rounded-lg flex justify-between relative">
        <div>
          <h1 className="flex flex-col gap-5">
            <span className="capitalize font-light text-3xl">Let's cook</span>
            <span className="text-7xl max-w-xl font-bold">{recipe.name}</span>
          </h1>
          <div className="flex gap-3 items-center my-10 *:outline-current">
            <Badge
              className={
                difficultyColors[
                  recipe.difficulty.toLowerCase() as keyof typeof difficultyColors
                ]
              }
            >
              {recipe.difficulty}
            </Badge>
            <Badge className="bg-stone-200 text-stone-800">
              {recipe.reviewCount} + Reviews
            </Badge>
            <Badge className="bg-purple-200 text-purple-800">
              {recipe.cuisine}
            </Badge>
          </div>
        </div>
        <div className="w-80 h-80 aspect-square mr-10 overflow-clip rounded-full outline-10 outline-double outline-emerald-500 outline-offset-10">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="object-cover"
          />
        </div>
        <button
          title="Add to favorite recipes"
          className="cursor-pointer bg-white rounded-full w-10 h-10 flex items-center justify-center absolute top-0 right-0 m-5"
        >
          <HugeiconsIcon icon={Heart} />
        </button>
      </div>
      <div className="flex gap-4 justify-between mt-10">
        {/* Recipe stats*/}
        <div className="flex flex-wrap gap-4 *:w-full *:md:w-fit my-5">
          <StatCard
            description={`${recipe.cookTimeMinutes} Minutes`}
            icon={Chef}
            title="Cook time"
            noBg
          />
          <StatCard
            description={`${recipe.prepTimeMinutes} Minutes`}
            icon={Clock}
            title="Prep time"
            noBg
          />
          <StatCard
            description={recipe.cuisine}
            icon={Pizza}
            title="Cuisine"
            noBg
          />
          <StatCard
            description={`${recipe.servings} People`}
            icon={Pizza}
            title="Servings"
            noBg
          />
          <StatCard
            description={`${recipe.difficulty} Level`}
            icon={Dumbbell}
            title="Difficulty"
            noBg
          />
          <StatCard
            description={`${recipe.reviewCount} Reviews`}
            icon={Star}
            title="Reviews"
            noBg
          />
        </div>
        {/* Chef */}
        <div className="sticky top-10 w-60 h-60 aspect-square rounded-md bg-emerald-400 grid *:col-span-1">
          <div className="self-end m-5">
            <span className="font-light text-white/90">Recipe by</span>
            <h3 className="font-semibold">Chef Emile Rodriguez</h3>
          </div>
        </div>
      </div>
      {/* More details */}
      <div className="flex flex-col gap-7">
        {/* Tags */}
        <div className="flex flex-col gap-3">
          <h4>Tags</h4>
          <div className="flex gap-2">
            {recipe.tags.map((t) => (
              <Link
                to="/recipes"
                search={{ mealType: t }}
                className="text-emerald-600 font-semibold"
                key={t}
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
        {/* Ingredients */}
        <div className="bg-white p-5 rounded-md max-w-max">
          <h4 className="text-slate-800 font-semibold text-2xl mb-5">
            Ingredients
          </h4>
          <ul className="list-none m-0 p-0 flex flex-col gap-2 max-h-40 flex-wrap">
            {recipe.ingredients.map((r) => (
              <li className="text-gray-800 text-lg font-semibold" key={r}>
                {r}
              </li>
            ))}
          </ul>
        </div>
        {/* Cooking Instructions */}
        <div className="flex flex-col">
          <h4 className="text-slate-800 text-2xl font-semibold">
            Cooking <span className="text-emerald-600">Instructions</span>{" "}
          </h4>
          <div className="flex gap-4 flex-col mt-5">
            {recipe.instructions.map((instruction, i) => (
              <div
                key={`instruction-${i}`}
                className="flex gap-3 bg-slate-100 p-4 rounded-md max-w-xl"
              >
                <span className="text-3xl text-emerald-300 font-semibold">
                  0{i + 1}
                </span>
                <p className="text-xl text-slate-600 max-w-xl">{instruction}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
