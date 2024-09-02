// app/layout.jsx

import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import Sidebar from "../components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Sidebar />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
