// app/layout.jsx

import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: 'Arbaz Murme | Portfolio',
  description: 'Explore the portfolio of Arbaz Murme, a skilled React JS Developer, showcasing projects in web development, design, and more.',
  openGraph: {
    title: 'Arbaz Murme | Portfolio',
    description: 'Discover the creative and technical work of Arbaz Murme in this online portfolio, featuring web development projects and design work.',
    url: 'https://arbazmurme.vercel.app/',
    images: [
      {
        url: '/home-bg.png',
        width: 800,
        height: 600,
        alt: 'Portfolio Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arbaz Murme | Portfolio',
    description: 'View the portfolio of Arbaz Murme, a talented React JS Developer, and explore his projects and designs.',
    images: ['/home-bg.png'],
  },
};

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
