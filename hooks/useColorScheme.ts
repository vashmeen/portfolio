import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useColorScheme = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [hasMountedInBrowser, setHasMountedInBrowser] = useState(false);
  useEffect(() => {
    setHasMountedInBrowser(true);
  }, []);

  const toggleTheme = () => {
    if (!hasMountedInBrowser) return;
    if (theme === "system") setTheme("light");
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("system");
  };

  return { theme: theme ?? "system", resolvedTheme, toggleTheme, setTheme, hasMountedInBrowser };
};

export default useColorScheme;
