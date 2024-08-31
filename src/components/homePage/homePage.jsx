// pages/index.jsx
import Head from "next/head";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 w-full text-center">
      {/* Welcome Section */}
      <section className="mt-12">
        <h1 className="text-4xl font-bold">Welcome to My Home</h1>
        <p className="mt-4 text-lg max-w-2xl">
          I'm a developer passionate about creating amazing web applications.
          Explore my work, learn more about me, and get in touch!
        </p>
      </section>
    </main>
  );
}
