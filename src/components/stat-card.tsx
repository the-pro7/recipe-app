import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { cn } from "../lib/utils";

export default function StatCard({
  icon,
  title,
  description,
  showCase,
  noBg,
}: {
  icon: IconSvgElement;
  title: string;
  description: string;
  showCase?: boolean;
  noBg?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex gap-3 items-center bg-white p-2 rounded-md cursor-pointer",
        showCase ? "shadow-md" : "",
        noBg && "bg-none bg-transparent",
      )}
    >
      <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
        <HugeiconsIcon icon={icon} className="text-amber-700" />
      </div>
      <div>
        <span className="text-slate-500 text-sm capitalize">{title}</span>
        <p className="font-bold text-slate-900">{description}</p>
      </div>
    </div>
  );
}
