import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Carrot } from "@hugeicons/core-free-icons";
import Cook from "../components/cook";
import Favorite from "../components/favorite";
import { pickedRecipeStats } from "../data/static";
import StatCard from "../components/stat-card";
import Waiting from "../components/waiting";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

const cuisines = [
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

const colors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-gray-500",
];

function RouteComponent() {
  return (
    <main>
      <section className="mt-10 flex justify-between">
        <div>
          <h1 className="text-7xl font-black max-w-xl text-slate-800">
            Let's make your next <span className="text-blue-500">meal</span>
          </h1>
          <p className="text-slate-600 max-w-md wrap-break-word text-xl mt-5">
            All your meal recipes in one place, with concise and easy to follow
            instructions no matter the level of difficulty of the dish.
          </p>
          <div className="flex flex-col gap-5">
            <Button size="lg" asChild className="mt-10 w-fit">
              <Link to="/recipes" className="inline-flex items-center gap-2">
                <HugeiconsIcon
                  icon={Carrot}
                  className="animate-pulse delay-500"
                />
                Get Started
              </Link>
            </Button>
            <p className="font-semibold text-lg text-slate-800">
              Got a specific cuisine in mind?
            </p>
            <div className="inline-flex gap-4 max-w-md overflow-x-scroll no-scrollbar">
              {cuisines.map((cuisine, index) => (
                <div
                  key={cuisine}
                  className={`${colors[index % colors.length]} w-fit text-white rounded-sm px-3 py-1 cursor-pointer`}
                >
                  <h2 className="text-md font-light">{cuisine}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-100 h-100 aspect-square rounded-full translate-x-1 delay-500 overflow-clip">
            <img
              src="/assets/main-bg.jpg"
              alt="Main background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-50 h-50 aspect-square rounded-full -translate-x-50 -translate-y-50 delay-500 overflow-clip">
            <img src="/assets/secondary-bg.jpg" alt="Secondary background" />
          </div>
        </div>
      </section>
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
      {/* Waiting */}
      <Waiting />
    </main>
  );
}
