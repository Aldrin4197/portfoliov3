import { useEffect, useState } from "react";

function Toggle() {
  const LIGHT_THEME = "light";
  const DARK_THEME = "sunset"; // Your custom dark theme

  // Check localStorage first, otherwise use DARK_THEME
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || DARK_THEME;
  });

  // Apply theme to <html> on change
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle logic
  const toggleTheme = () => {
    const newTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    setTheme(newTheme);
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        onChange={toggleTheme}
        checked={theme === DARK_THEME}
      />

      {/* Light Mode Icon */}
      <svg
        className="swap-off h-6 w-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64,17...Z" />
      </svg>

      {/* Dark Mode Icon */}
      <svg
        className="swap-on h-6 w-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64,13...Z" />
      </svg>
    </label>
  );
}

export default Toggle;
