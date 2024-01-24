import List from "./list";

export interface PostProps {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url?: string;
}

export async function ListItem({id}: {id: number}) {
  const post = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
  ).then((resp) => resp.json() as Promise<PostProps>);

  return <List post={post} />;
}

export function ListItemLoading() {
  return (
    <div
      className="flex h-[64px] animate-pulse gap-2 space-y-4 divide-y divide-gray-200 rounded border border-gray-200 px-4 py-2 shadow dark:divide-gray-700 dark:border-gray-700"
      role="status"
    >
      <div className="flex flex-col items-center justify-between">
        <div className="h-2.5 w-60 rounded-full bg-gray-300 dark:bg-gray-600" />
        <div className="flex w-full justify-between">
          <div className="h-2.5 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
          <div className="h-2.5 w-20 rounded-full bg-gray-300 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
}
