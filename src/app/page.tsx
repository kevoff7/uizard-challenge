import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Uizard Random Hacerknews Reader",
};

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center ">
      <p className="text-lg font-semibold">{"<-"} Click on a post from the list to get started!</p>
    </div>
  );
}
