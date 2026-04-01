import { Link } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react"
import { Heart } from "@hugeicons/core-free-icons";

export default function Navbar() {
  return (
    <nav className="bg-white/60 sticky top-10 flex items-baseline gap-4 outline shadow-md p-3 rounded-md backdrop-blur-2xl">
        <h1>
            <Link to="/" className="text-2xl font-black">FoodLearn</Link>
        </h1>
        <ul className="inline-flex items-center gap-4 ml-6">
            <li>
                <Link to="/" className="[&.active]:font-bold">Home</Link>
            </li>
            <li>
                <Link to="/cuisine" className="[&.active]:font-bold">Cuisines</Link>
            </li>
        </ul>
        <div className="ml-auto">
            <Link to="/favorites" className="cursor-pointer" type="button" title="Favorites">
                <HugeiconsIcon icon={Heart}/>
            </Link>
        </div>
    </nav>
  )
}
