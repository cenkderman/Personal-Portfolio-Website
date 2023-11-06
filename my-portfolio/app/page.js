import Image from "next/image";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Work } from "./sections/Work";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-36 p-10 bg-mountains bg-no-repeat bg-bottom bg-fixed">
      <Hero />
      <Work />
    </main>
  );
}
