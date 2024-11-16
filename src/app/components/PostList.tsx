"use client";
import React from "react";
import Link from "next/link";

import {ListItemLoading} from "../ui/listitem";
import List from "../ui/list";
import {usePostContext} from "../context/PostContext";

function PostList() {
  const {posts, loading} = usePostContext();
  const postTotal = Array.from({length: 10});

  return (
    <aside className="h-full overflow-y-scroll">
      <ul className="flex flex-col gap-4 p-4">
        {loading ? (
          <div className="flex flex-col gap-4">
            {postTotal.map((_) => (
              <ListItemLoading key={crypto.randomUUID()} />
            ))}
          </div>
        ) : (
          posts.map((post) => (
            <Link key={post.id} href={`/${post.id}`}>
              <List post={post} />
            </Link>
          ))
        )}
      </ul>
    </aside>
  );
}

export default PostList;
