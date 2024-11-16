"use client";
import type {PostProps} from "../ui/listitem";

import {createContext, useContext, useEffect, useState} from "react";

interface Posts {
  posts: PostProps[];
  loading: boolean;
  fetchPosts: () => Promise<void>;
}

const PostContext = createContext({} as Posts);

export function PostProvider({children}: {children: React.ReactNode}) {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const ids = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
        .then((res) => res.json() as Promise<number[]>)
        .then((data) => data.sort(() => (Math.random() >= 0.5 ? 1 : -1)).slice(0, 10));

      const fetchedPosts = await Promise.all(
        ids.map(async (id) => {
          return (await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
          ).then((res) => res.json())) as PostProps;
        }),
      );

      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{posts, loading, fetchPosts}}>{children}</PostContext.Provider>
  );
}

export const usePostContext = () => useContext(PostContext);
