import CodeExample from "@/components/ui/CodeExample";
import Footer from "@/components/ui/Footer";
import { GlobalDatabase } from "@/components/ui/GlobalDatabase";
import Hero from "@/components/ui/Hero";
import LogoCloud from "@/components/ui/LogoCloud";
import { Navigation } from "@/components/ui/Navbar";
import Cta from "@/components/ui/Cta";
import Features from "@/components/ui/Features";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col overflow-hidden">
        <Hero />
        <LogoCloud />
        <GlobalDatabase />
        <CodeExample />
        <Features />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
