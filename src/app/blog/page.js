import advancedBlogs from "@/data/advancedBlogs";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Arbaz Murme | Blog",
  description:
    "Deep dives into MERN architecture, frontend performance, backend systems, and production-ready development practices.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Arbaz Murme | Blog",
    description:
      "Read advanced articles on MERN architecture, performance, deployment, and modern web engineering.",
    url: "/blog",
    type: "website",
    images: [
      {
        url: "/arbazmurme.webp",
        width: 1200,
        height: 630,
        alt: "Arbaz Murme blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arbaz Murme | Blog",
    description:
      "Advanced articles on MERN architecture, performance, deployment, and modern web engineering.",
    images: ["/arbazmurme.webp"],
  },
};

const blogList = advancedBlogs.map((post) => ({
  slug: post.slug,
  title: post.title,
  shortDescription: post.shortDescription,
  category: post.category,
  tags: post.tags,
  createdAt: post.createdAt,
  readingTime: post.readingTime,
  featuredImage: post.featuredImage,
}));

export default function BlogPage() {
  const categoryCount = new Set(blogList.map((post) => post.category)).size;

  return <BlogClient posts={blogList} categoryCount={categoryCount} />;
}
