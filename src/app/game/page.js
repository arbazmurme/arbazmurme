import SnakeGameSection from "@/components/pages/SnakeGameSection";

export const metadata = {
  title: "Arbaz Murme | Game",
  description:
    "Play an interactive Snake game inside Arbaz Murme's portfolio.",
  alternates: {
    canonical: "/game",
  },
  openGraph: {
    title: "Arbaz Murme | Game",
    description: "Play a built-in Snake game on Arbaz Murme's portfolio.",
    url: "/game",
    type: "website",
    images: [
      {
        url: "/arbazmurme.webp",
        width: 1200,
        height: 630,
        alt: "Arbaz Murme game page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arbaz Murme | Game",
    description: "Play a built-in Snake game on Arbaz Murme's portfolio.",
    images: ["/arbazmurme.webp"],
  },
};

export default function GamePage() {
  return <SnakeGameSection />;
}
