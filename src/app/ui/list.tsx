"use client";

import type {PostProps} from "./listitem";

import {usePathname} from "next/navigation";

export default function List({post}: {post: PostProps}) {
  const pathName = usePathname();

  return (
    <li
      className={`grid h-[64px] gap-2 rounded-md font-semibold ${Number(pathName.slice(1)) === post.id ? "bg-yellow-400 text-black" : "bg-gray-600"} px-4 py-2 text-sm hover:bg-yellow-400 hover:text-black`}
    >
      <p className="truncate">{post.title}</p>
      <div className="flex items-center justify-between truncate opacity-50">
        <p>{post.by}</p>
        <p>Visit website {">>"}</p>
      </div>
    </li>
  );
}
