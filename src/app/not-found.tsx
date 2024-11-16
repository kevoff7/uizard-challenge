import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="border p-2" href="/">
        Return Home
      </Link>
    </div>
  );
}
