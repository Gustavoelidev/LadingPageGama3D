import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/service";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  );
}
