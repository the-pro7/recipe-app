import { Button } from './ui/button'
import { Link } from '@tanstack/react-router'

export default function Hero() {
  return (
     <section className="mt-25">
      <div className="grid gap-2 *:col-span-1 isolate">
        <h1 className="text-7xl font-black leading-22">
          Let's make your next{" "}
          <span className="px-2 text-amber-500 tracking-wider w-fit">
            meal
          </span>
        </h1>
        <div className="relative overflow-clip">
          <img
            src="/assets/main-bg.jpg"
            alt="Woman cooking in kitchen"
            className="object-cover rounded-3xl brightness-50 sm:ml-50 -z-100 transition-transform hover:scale-101"
          />
        </div>
        <div className="sm:max-w-[10em] sm:-my-55 flex sm:flex-col sm:gap-3 z-999">
          <Button asChild size="lg" className="w-full">
            <Link to="/recipes">All Recipes</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-blue-600!"
          >
            <Link to="/cuisines">Cuisines</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
