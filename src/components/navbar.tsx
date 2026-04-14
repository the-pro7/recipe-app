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

export default function Navbar() {
  return (
    <nav className="flex items-center gap-4 rounded-md">
      <h1 className="h-15 w-15 aspect-square rounded-full  bg-blue-500 text-white flex items-center justify-center">
        <Link to="/" className="text-3xl font-black">
          FL
        </Link>
      </h1>
      <ul className="md:inline-flex items-center gap-4 ml-6 hidden">
        <li>
          <Link to="/" className="nav-link">
            <HugeiconsIcon icon={Home} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/cuisines" className="nav-link">
            <HugeiconsIcon icon={Pizza} />
            Cuisines
          </Link>
        </li>
        <li>
          <Link to="/recipes" className="nav-link">
            <HugeiconsIcon icon={Book} />
            Recipes
          </Link>
        </li>
        <li>
          <Link to="/favorites" className="nav-link">
            <HugeiconsIcon icon={Heart} />
            Favorites
            <Badge>NEW</Badge>
          </Link>
        </li>
      </ul>
      <SearchBox />
    </nav>
  );
}
