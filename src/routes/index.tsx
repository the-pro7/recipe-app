import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Chef } from "@hugeicons/core-free-icons";
import Cook from "../components/cook";
import Favorite from "../components/favorite";
import { pickedRecipeStats } from "../data/static";
import StatCard from "../components/stat-card";
import Waiting from "../components/waiting";
import Testimonial from "../components/testimonial";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  loader: async () => {

  }
});

export const cuisines = [
  "Asian",
  "Italian",
  "Mexican",
  "Indian",
  "French",
  "Japanese",
  "Mediterranean",
  "Thai",
  "Spanish",
  "American",
];

function RouteComponent() {
  return (
    <main>
      <section className="mb-15 md:my-10 flex flex-col md:flex-row items-center justify-between md:h-[70vh]">
        <div className="flex items-center flex-col justify-center my-5 md:block md:my-0">
          <h1 className="text-6xl font-bold max-w-xl leading-15 text-slate-800">
            Cooking made fun and easy: Unleash your inner chef
          </h1>
          <p className="self-start text-xl font-light max-w-md mt-5">
            Discover over{" "}
            <span className="text-blue-500 font-semibold">100+</span> delicious
            recipes from all around the world, tailored to your taste and
            dietary preferences.
          </p>
          <div className="flex flex-col gap-5">
            <Button size="lg" asChild className="mt-10 w-fit">
              <Link to="/recipes" className="inline-flex items-center gap-2">
                <HugeiconsIcon
                  icon={Chef}
                  className="animate-pulse delay-500"
                />
                Let's Cook!
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <Testimonial
            imageUrl="/assets/chef-2.jpg"
            transformStyles="top-13 -left-8 -translate-x-1/5"
            testimonial="This website has transformed my cooking experience! The recipes are easy to follow and the variety is amazing. Highly recommend!"
            username="Marc Espinoza"
          />
          <img src="/assets/hero-no-bg.png" alt="Vegetarian Stir-Fry image" />
          <Testimonial
            imageUrl="/assets/chef-1.jpg"
            transformStyles="-bottom-10 left-1/2 translate-x-1/5"
            testimonial="Best recipe website out there. They have several dishes with easy to follow instructions"
            username="Keanu Reeves"
          />
        </div>
      </section>
      {/* Cook */}
      <Cook />
      <Favorite />
      {/* Stats */}
      <div className="mt-5 flex justify-center">
        <div className="flex flex-wrap gap-4 items-center self-center">
          {pickedRecipeStats.map((item) => (
            <StatCard
              key={item.title}
              description={item.description}
              title={item.title}
              icon={item.icon}
              showCase
            />
          ))}
        </div>
      </div>
      {/* Cuisine Display */}
      {/* <CuisineDisplay /> */}
      {/* Waiting */}
      <Waiting />
    </main>
  );
}
