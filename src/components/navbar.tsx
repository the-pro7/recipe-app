import { Link } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Book,
  Heart,
  Home,
  Pizza,
  SearchIcon,
} from "@hugeicons/core-free-icons";
import SearchBox from "./search-box";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center gap-4 rounded-md group relative">
      <h1 className="h-12 w-12 aspect-square rounded-full bg-blue-500 text-white flex items-center justify-center">
        <Link to="/" className="text-2xl font-black">
          FL
        </Link>
      </h1>
      <ul
        className={cn(
          "lg:flex-row flex lg:items-center lg:gap-4 lg:ml-6 absolute lg:static lg:top-0 top-17 shadow-xl left-0 right-0 w-full bg-white lg:bg-transparent lg:shadow-none flex-col rounded-sm lg:rounded-none overflow-clip transition-all opacity-100 z-999",
          menuOpen
            ? null
            : "-translate-y-100 opacity-0 lg:translate-y-0 lg:opacity-100",
        )}
      >
        <li>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            <HugeiconsIcon icon={Home} />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/cuisines"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            <HugeiconsIcon icon={Pizza} />
            Cuisines
          </Link>
        </li>
        <li>
          <Link
            to="/recipes"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            <HugeiconsIcon icon={Book} />
            Recipes
          </Link>
        </li>
        <li>
          <Link
            to="/favorites"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            <HugeiconsIcon icon={Heart} />
            Favorites
            <Badge>NEW</Badge>
          </Link>
        </li>
        <div className="absolute right-0 m-10 hidden md:block lg:hidden">
          <img
            src="/assets/watermelon.svg"
            className="w-80 h-80 -rotate-30 translate-y-1"
            alt="A big red tomato"
          />
        </div>
      </ul>
      <SearchBox />
      {/* hamburger */}
      <div
        className="flex flex-col gap-1 w-10 h-10 items-center justify-center cursor-pointer group/hamburger lg:hidden"
        onClick={() => setMenuOpen((p) => !p)}
      >
        <div className={cn("bread", menuOpen && "rotate-45 translate-y-2")} />
        <div
          className={cn("bread transition-opacity", menuOpen && "opacity-0")}
        />
        <div className={cn("bread", menuOpen && "-rotate-45 -translate-y-2")} />
      </div>
    </nav>
  );
}
