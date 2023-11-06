import Image from "next/image";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Work } from "./sections/Work";
import { Services } from "./sections/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-60 p-10 bg-mountains bg-no-repeat bg-bottom bg-fixed">
      <Hero />
      <Work />
      <Services />
    </main>
  );
}
