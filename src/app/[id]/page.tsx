import type {PostProps} from "@/app/ui/listitem";

export default async function IdPage({params: {id}}: {params: {id: string}}) {
  const post = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
  ).then((rep) => rep.json() as Promise<PostProps>);

  return <iframe className="h-full w-full" src={post.url} title={post.title} />;
}
