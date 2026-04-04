import { Heart, Star } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "../lib/utils";

interface TestimonialProps {
  rating?: number;
  testimonial: string;
  imageUrl: string;
  username: string;
transformStyles?: string;
}



export default function Testimonial({
  imageUrl,
  rating = 5,
  username,
  testimonial,
  transformStyles
}: TestimonialProps) {
  return (
    <div className={cn("group bg-white rounded-md p-3 flex flex-col gap-3 max-w-xs absolute shadow-lg", transformStyles)}>
      <div className="bg-slate-100 rounded-sm p-2">
        <span className="inline-flex gap-2">
            {[...Array(rating)].map((_, index) => (
                <HugeiconsIcon key={index} icon={Star} className="text-yellow-500 text-xs"/>
            ))}
        </span>
        <p className="text-slate-700 font-semibold text-sm">"{testimonial}"</p>
      </div>
      <div className="flex gap-2 items-center">
        <img src={imageUrl} alt={username} className="w-10 h-10 rounded-full object-cover" />
        <span className="text-slate-800 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          {username}
        </span>
        <span className="ml-auto">
          <HugeiconsIcon icon={Heart} className="text-red-500"/>
        </span>
      </div>
    </div>
  );
}
