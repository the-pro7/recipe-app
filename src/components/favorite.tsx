import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";


export default function Favorite() {
  return (
    <section className="mt-10 bg-slate-900 rounded-md p-10">
      <div className="flex items-center justify-between">
        <div>
          <span className="bg-white text-slate-900 rounded-full px-7 py-1 tracking-wider font-semibold">
            Easy
          </span>
          <p className="text-2xl font-light text-white mt-5">
            Our <span>Pick</span>
          </p>
          <h1 className="text-6xl font-black text-white">
            Classic Margherita{" "}
            <span className="text-emerald-700 tracking-wide text-8xl">
              Pizza
            </span>
          </h1>
          <Button
            asChild
            className="bg-white text-slate-900 mt-6 hover:bg-white/50"
            size="lg"
          >
            <Link to=".">How can I make this?</Link>
          </Button>
        </div>
        <div>
          <img
            src="/assets/pizza-no-bg.png"
            className="object-cover"
            alt="Pizza with some ingredients"
          />
        </div>
      </div>
     
    </section>
  );
}
