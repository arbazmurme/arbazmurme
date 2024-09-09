import Head from "next/head";
import HomePage from "@/components/pages/HomePage";

// app/page.jsx
export default function Home() {
  return (
    <>
      <Head>
        <title>Arbaz Murme | Portfolio</title>
        <meta
          name="description"
          content="Explore the portfolio of Arbaz Murme, a skilled React JS Developer, showcasing projects in web development, design, and more."
        />
        <meta property="og:title" content="Arbaz Murme | Portfolio" />
        <meta
          property="og:description"
          content="Discover the creative and technical work of Arbaz Murme in this online portfolio, featuring web development projects and design work."
        />
        <meta
          property="og:image"
          content="https://arbazmurme.vercel.app/home.png"
        />
        <meta property="og:url" content="https://arbazmurme.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arbaz Murme | Portfolio" />
        <meta
          name="twitter:description"
          content="View the portfolio of Arbaz Murme, a talented React JS Developer, and explore his projects and designs."
        />
        <meta
          name="twitter:image"
          content="https://arbazmurme.vercel.app/home.png"
        />
        <link rel="canonical" href="https://arbazmurme.vercel.app/" />
      </Head>

      <main>
        <HomePage />
      </main>
    </>
  );
}
