import Footer from "@/components/ui/Footer";
import { GlobalDatabase } from "@/components/ui/GlobalDatabase";
import Hero from "@/components/ui/Hero";
import LogoCloud from "@/components/ui/LogoCloud";
import { Navigation } from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="flex flex-col overflow-hidden">
        <Hero />
        <LogoCloud />
        <GlobalDatabase />
      </main>
      <Footer />
    </div>
  );
}
