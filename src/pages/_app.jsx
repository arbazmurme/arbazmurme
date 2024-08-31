import "@/styles/globals.css"; // Ensure this path is correct
import { ThemeProvider } from "../components/brn/ThemeContext"; // Adjust path as needed
import Sidebar from "@/components/Sidebar";
import Template from "../components/PageTransition/template";
function MyApp({ Component, pageProps }) {
  return (
    <Template>
      <ThemeProvider>
        <Sidebar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Template>
  );
}

export default MyApp;
