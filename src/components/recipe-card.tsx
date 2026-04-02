import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChefHat, Eye } from "@hugeicons/core-free-icons";
import { Link } from "@tanstack/react-router";
import { cn } from "../lib/utils";

interface RecipeCardProps {
  title: string;
  reviewCount: number;
  difficulty: "easy" | "medium" | "hard";
  image: string;
}

const difficultyColors = {
  easy: "bg-green-400",
  medium: "bg-yellow-400",
  hard: "bg-red-400",
};

export default function RecipeCard({
  title,
  reviewCount,
  difficulty,
  image,
}: RecipeCardProps) {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl text-slate-800 font-semibold">{title}</h1>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <img src={image} alt={title} className="rounded-lg w-full h-full" />
          <div className="flex flex-wrap justify-between left-0 right-0 absolute top-0 m-3">
            <span className="inline-flex bg-white px-4 py-1 rounded-full">
              <HugeiconsIcon icon={Eye} />
              {reviewCount}+ Reviews
            </span>
            <span
              className={cn(
                `capitalize font-semibold bg-white px-4 shadow-md py-1 rounded-full text-${difficultyColors[difficulty].split("-")[1]}-900`,
                difficultyColors[difficulty],
              )}
            >
              {difficulty}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          size="lg"
          className="w-full bg-emerald-500 hover:bg-emerald-800"
        >
          <Link
            to="."
            className="inline-flex gap-2 items-center justify-between w-full"
          >
            <span>See full recipe</span>
            <span className="w-7 h-7 aspect-square bg-white flex items-center justify-center rounded-full">
              <HugeiconsIcon icon={ChefHat} className="text-slate-900" />
            </span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
