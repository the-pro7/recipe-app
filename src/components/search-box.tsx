import { SearchIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks";
import { useNavigate } from "@tanstack/react-router";

export default function SearchBox() {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const debouncedSearchQuery = useDebounce(search);

  useEffect(() => {
    if (debouncedSearchQuery) {
      navigate({
        to: "/search",
        search: {
          q: debouncedSearchQuery,
        },
      });
    }
  });
  return (
    <div className="flex gap-3 items-center p-2 rounded-full bg-slate-200 ml-auto">
      <HugeiconsIcon icon={SearchIcon} className="text-slate-800" />
      <input
        type="search"
        name="search"
        id="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search recipes..."
      />
    </div>
  );
}
