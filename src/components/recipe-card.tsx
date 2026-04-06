import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChefHat, Eye } from "@hugeicons/core-free-icons";
import { Link } from "@tanstack/react-router";
import { cn } from "../lib/utils";

interface RecipeCardProps {
  id: number;
  name: string;
  reviewCount: number;
  difficulty: "Easy" | "Medium" | "Hard";
  image: string;
}

const difficultyColors = {
  easy: "bg-green-400",
  medium: "bg-yellow-400",
  hard: "bg-red-400",
};

export default function RecipeCard({
  id,
  name,
  reviewCount,
  difficulty,
  image,
}: RecipeCardProps) {
  return (
    <Card title={name}>
      <CardHeader>
        <h1 className="text-2xl text-slate-800 font-semibold">
          {name.slice(0, 15)}
          {name.length > 15 ? "..." : ""}
        </h1>
      </CardHeader>
      <CardContent>
        <div className="relative isolate">
          <img
            src={image}
            alt={name}
            className="rounded-lg w-full h-full object-cover"
          />
          <div className="flex flex-wrap gap-1 justify-between left-0 right-0 absolute top-0 m-3">
            <span className="inline-flex bg-white gap-1 px-2 py-1 rounded-full">
              <HugeiconsIcon icon={Eye} />
              {reviewCount}+ Reviews
            </span>
            <span
              className={cn(
                `capitalize font-semibold bg-white px-4 shadow-md py-1 rounded-full text-${difficultyColors[difficulty.toLowerCase() as keyof typeof difficultyColors].split("-")[1]}-900`,
                difficultyColors[
                  difficulty.toLowerCase() as keyof typeof difficultyColors
                ],
              )}
            >
              {difficulty}
            </span>
            <div className="absolute inset-0 w-fill h-full -z-100"/>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          size="lg"
          className="w-full bg-emerald-500 hover:bg-emerald-800"
        >
          <Link
            to="/recipes/$id"
            params={{ id: String(id) }}
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
