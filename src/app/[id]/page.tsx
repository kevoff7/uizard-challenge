import type {PostProps} from "@/app/ui/listitem";
import type {Metadata} from "next";

import NotFound from "../not-found";

export const metadata: Metadata = {
  title: "Uizard Random Hacerknews Reader",
};

export default async function IdPage({params: {id}}: {params: {id: string}}) {
  const post = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
  ).then((rep) => rep.json() as Promise<PostProps> | undefined);

  if (post == null) {
    return <NotFound />;
  }

  return <iframe className="h-full w-full" src={post.url} title={post.title} />;
}
