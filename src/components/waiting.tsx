import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export default function Waiting() {
  return (
    <section className="mt-15 flex justify-around items-center relative">
    <span className="absolute top-0 left-0 -rotate-35 text-slate-500 translate-x-10 translate-y-10 animate-pulse">yum, yum!</span>
      <div className="flex flex-col gap-6 max-w-xl">
        <h1 className="text-7xl font-black text-slate-800">
          What are <span className="text-blue-500">you</span> waiting for? 😋
        </h1>
        <p className="text-xl text-slate-500 font-semibold">We've got the best recipes waiting for you!</p>
        <Button size="lg" className="w-fit">
          <Link to="/recipes">Take me there</Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img src="/assets/step-1.jpg" alt="Gallery images"  className="gallery-image"/>
        <img src="/assets/step-2.jpg" alt="Gallery images"  className="gallery-image"/>
        <img src="/assets/step-3.jpg" alt="Gallery images"  className="gallery-image"/>
        <img src="/assets/step-4.jpg" alt="Gallery images"  className="gallery-image"/>
      </div>
    </section>
  );
}
