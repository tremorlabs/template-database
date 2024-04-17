import { GlobalPresence } from "@/components/ui/GlobalPresence";
import Hero from "@/components/ui/Hero";
import LogoCloud from "@/components/ui/LogoCloud";
import { Navigation } from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="flex flex-col">
        <Hero />
        <LogoCloud />
        <GlobalPresence />
      </main>
    </div>
  );
}
