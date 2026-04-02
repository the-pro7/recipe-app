import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="flex items-center gap-4 justify-around bg-slate-900 text-white mt-10 rounded-lg p-10 relative overflow-clip">
      <img src="/assets/fish.svg" alt="Fish" className="absolute w-15 h-15 top-0 right-0 rotate-45 translate-x-6"/>
      <img src="/assets/watermelon.svg" alt="Watermelon" className="absolute w-15 h-15 top-0 left-0 rotate-45 -translate-x-3"/>
      <div>
        <h1 className="font-black tracking-wide text-4xl">FoodLearn</h1>
        <span className="text-slate-400 font-semibold">
          <Link to="." href="https://www.github.com/the-pro7">
            Emmanuel Ameyaw
          </Link>
        </span>
      </div>
      <div className="inline-flex gap-3 items-center">
        <p>&copy; 2026 FoodLearn. All rights reserved.</p>
        <p>Powered by: Tanstack Router</p>
      </div>
      <div className="flex outline p-2 rounded-full h-fit">
        <input
          type="email"
          placeholder="Sign up for newsletter..."
          className="text-sm focus-within:outline-transparent focus-within:border-0 active:outline-transparent active:border-0"
        />
        <Button className="cursor-pointer" size="sm">
          Signup
        </Button>
      </div>
    </div>
  );
}
