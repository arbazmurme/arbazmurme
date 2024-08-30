import '@/styles/globals.css'; // Ensure this path is correct
import { ThemeProvider } from '../components/brn/ThemeContext'; // Adjust path as needed

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
