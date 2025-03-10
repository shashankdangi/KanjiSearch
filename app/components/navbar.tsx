"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const router = usePathname();
  const [mode, setMode] = useState("dark");
  const { setTheme } = useTheme();

  const handleSwitch = (checked: boolean) => {
    const newMode = checked ? "dark" : "light";
    setMode(newMode === "dark" ? "dark" : "light");
  };

  useEffect(() => {
    setTheme(mode);
  }, [mode, setTheme]);
  return (
    <div className="flex justify-between border-b-2 p-3 items-center ">
      <h1>
        <Link
          href="/"
          className="hover:cursor-pointer font-extrabold text-2xl ml-3"
        >
          KanjiSearch
        </Link>
      </h1>

      {/* conditional SearchBar */}
      {router !== "/" && <SearchBar variable="kanji" />}

      <span className="flex items-center gap-2">
        <Switch
          className="dark-mode-switch hover:cursor-pointer "
          onCheckedChange={handleSwitch}
          defaultChecked
        />
        {mode === "light" ? <Sun /> : <Moon />}
      </span>
    </div>
  );
};

export default Navbar;
