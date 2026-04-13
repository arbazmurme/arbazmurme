"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  ClockIcon,
  TagIcon,
  MagnifyingGlassIcon as SearchIcon,
} from "@heroicons/react/24/outline";

function BlogCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:border-transparent"
    >
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-[#ffb400] via-purple-500 to-pink-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-[1px] -z-10 rounded-2xl bg-gray-900/95" />

      <Link
        href={`/blog/${post.slug}`}
        className="block relative h-48 overflow-hidden"
      >
        <Image
          src={post.featuredImage?.url}
          alt={post.featuredImage?.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />

        <span className="absolute top-4 left-4 rounded-full bg-[#ffb400] px-3 py-1 text-xs font-bold text-black shadow-lg">
          {post.category}
        </span>
        <span className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-xs text-white backdrop-blur-sm">
          <ClockIcon className="h-3 w-3" />
          {post.readingTime}
        </span>
      </Link>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <CalendarIcon className="h-3 w-3" />
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h2 className="mb-3 line-clamp-2 text-xl font-bold text-white transition group-hover:text-[#ffb400]">
            {post.title}
          </h2>
        </Link>

        <p className="mb-4 line-clamp-3 text-sm text-gray-400">
          {post.shortDescription}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-300"
            >
              <TagIcon className="h-3 w-3 text-[#ffb400]" />
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="group/link inline-flex items-center text-sm font-medium text-[#ffb400] transition-colors hover:text-white"
        >
          Read article
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}

export default function BlogClient({ posts, categoryCount }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(posts.map((post) => post.category))];

  const filteredPosts = posts.filter((post) => {
    const normalizedSearch = searchTerm.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(normalizedSearch) ||
      post.shortDescription.toLowerCase().includes(normalizedSearch) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(normalizedSearch));

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 text-center">
          <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#ffb400]/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative z-10">
            <h1 className="mb-4 text-5xl font-extrabold text-white md:text-6xl">
              Advanced <span className="text-[#ffb400] drop-shadow-lg">Blogs</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Deep dive into MERN architecture, performance, and deployment.
            </p>

            <div className="mt-8 flex justify-center gap-6 text-sm">
              <div>
                <span className="text-xl font-bold text-[#ffb400]">
                  {posts.length}
                </span>
                <span className="ml-2 text-gray-400">Articles</span>
              </div>
              <div>
                <span className="text-xl font-bold text-[#ffb400]">
                  {categoryCount}
                </span>
                <span className="ml-2 text-gray-400">Categories</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="relative w-full max-w-md flex-1">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full border border-gray-700 bg-white/5 py-3 pr-4 pl-12 text-white transition placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ffb400]/50"
            />
            <SearchIcon className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "scale-105 bg-[#ffb400] text-black shadow-lg shadow-[#ffb400]/30"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-gray-400">No articles found.</div>
        )}
      </div>
    </div>
  );
}
