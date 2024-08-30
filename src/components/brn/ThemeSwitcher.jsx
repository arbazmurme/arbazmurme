import { useTheme } from '../brn/ThemeContext'; // Adjust path as needed
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  // Toggle dark mode class on body
  if (typeof window !== 'undefined') {
    document.body.className = theme === 'dark' ? 'dark-mode' : '';
  }

  return (
      <button
        onClick={toggleTheme}
        className="flex items-center p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
      >
        {theme === 'light' ? (
          <SunIcon className="w-6 h-6 text-yellow-500" />
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-400" />
        )}
        <span className="sr-only">{theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}</span>
      </button>
  );
};

export default ThemeSwitcher;
