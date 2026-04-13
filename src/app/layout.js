import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import Sidebar from "../components/Sidebar";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://arbazmurme.vercel.app"),
  title: {
    default: "Arbaz Murme | Portfolio",
    template: "%s",
  },
  description:
    "Explore the portfolio of Arbaz Murme, a skilled React JS Developer, showcasing projects in web development, design, and more, arbazmurme, arbaj murme. arbaz murme, arbaz murame.",
  keywords:
    "Arbaz Murme, arbaj murme, arbazmurme, React JS Developer, portfolio, Web Development, JavaScript, HTML, CSS, Solapur it company vacancy, Companies in Solapur MIDC, Mnc company in Solapur, Avo Automation Solapur, Solapur IT company news, Solapur it company salary, Solapur it company list, Solapur it company vacancy,it park in solapur.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Arbaz Murme | Portfolio",
    description:
      "Discover the creative and technical work of Arbaz Murme in this online portfolio, featuring web development projects and design work.",
    url: "/",
    siteName: "Arbaz Murme Portfolio",
    images: [
      {
        url: "/arbazmurme.webp",
        width: 1200,
        height: 630,
        alt: "Arbaz Murme portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arbaz Murme | Portfolio",
    description:
      "View the portfolio of Arbaz Murme, a talented React JS Developer, and explore his projects and designs.",
    images: ["/arbazmurme.webp"],
  },
  verification: {
    google: "cEwTHdp8IYoodDwoa8Ks5lVDRMssdeZMYN7KZJzaG8Y",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GJ855RZWML"
        />
        <Script
          id="ga-setup"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GJ855RZWML');
            `,
          }}
        />
        <ThemeProvider>
          <Sidebar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
