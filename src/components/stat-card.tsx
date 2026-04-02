import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { cn } from "../lib/utils";

export default function StatCard({
  icon,
  title,
  description,
  showCase
}: {
  icon: IconSvgElement;
  title: string;
  description: string;
  showCase?: boolean;
}) {
  return (
    <div className={cn("flex gap-3 items-center bg-white p-2 rounded-md cursor-pointer", showCase ? "shadow-md" : "")}>
      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
        <HugeiconsIcon icon={icon} className="text-amber-700" />
      </div>
      <div>
        <span className="text-slate-500 text-sm">{title}</span>
        <p className="font-bold text-slate-900">{description}</p>
      </div>
    </div>
  );
}
