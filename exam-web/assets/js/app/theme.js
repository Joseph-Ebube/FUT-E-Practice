// assets/js/core/theme.js

export function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  
  // 1. Define the check function
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // 2. Determine initial state: Saved preference > System preference > Default light
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (systemPrefersDark) {
    applyTheme('dark');
    localStorage.setItem("theme", "dark");
  } else {
    applyTheme('light');
  }

  // 3. Attach the Event Listener
  if (themeToggle) {
    // Remove old listeners to prevent stacking
    themeToggle.onclick = () => {
      const isCurrentlyDark = document.documentElement.classList.contains("dark");
      const newTheme = isCurrentlyDark ? 'light' : 'dark';
      
      applyTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      console.log(`Theme changed to: ${newTheme}`);
    };
  } else {
    console.error("Theme toggle button not found in DOM!");
  }
}