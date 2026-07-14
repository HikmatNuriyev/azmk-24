"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import style from "./themeToggle.module.scss";

export default function ThemeToggle({ variant = "default" }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";

    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <button
      className={`${style.toggle} ${variant === "topbar" ? style.topbar : ""}`}
      onClick={toggleTheme}
      aria-label="Tema dəyiş"
      type="button"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}