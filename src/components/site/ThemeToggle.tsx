import { Sun1, Moon } from "iconsax-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggle}
      className={
        "grid h-10 w-10 place-items-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-accent/30 " +
        className
      }
    >
      {isDark ? (
        <Sun1 size={18} variant="Bold" color="#F4C430" />
      ) : (
        <Moon size={18} variant="Bold" color="#003262" />
      )}
    </button>
  );
}