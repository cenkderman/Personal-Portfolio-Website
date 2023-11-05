import Image from "next/image";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Hero } from "./sections/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 bg-mountains bg-no-repeat bg-bottom bg-fixed">
      <Hero />
    </main>
  );
}
