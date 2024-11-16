"use client";

import Link from "next/link";
import {Inter} from "next/font/google";

import PostList from "./components/PostList";
import {PostProvider, usePostContext} from "./context/PostContext";

import "./globals.css";

const inter = Inter({subsets: ["latin"]});

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {fetchPosts} = usePostContext();

  const handleRefresh = () => {
    fetchPosts();
  };

  return (
    <html lang="en">
      <body className={`${inter.className} grid h-screen grid-rows-[60px,1fr]`}>
        <header className="flex items-center  gap-4 bg-yellow-400  font-bold text-black">
          <button
            className="absolute ml-4 rounded-lg bg-black p-2 text-white hover:text-yellow-400"
            type="button"
            onClick={() => handleRefresh()}
          >
            Random
          </button>
          <h1 className="flex-1 text-center text-xl">
            <Link href="/">Uizard Random Hacerknews Reader</Link>
          </h1>
        </header>
        <main className="grid grid-cols-[320px,1fr] overflow-hidden">
          <PostList />
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}

export default function RootLayoutContainer(props: {children: React.ReactNode}) {
  return (
    <PostProvider>
      <RootLayout {...props} />
    </PostProvider>
  );
}
