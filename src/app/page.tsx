import CodeExample from "@/components/ui/CodeExample"
import { GlobalDatabase } from "@/components/ui/GlobalDatabase"
import Hero from "@/components/ui/Hero"
import LogoCloud from "@/components/ui/LogoCloud"
import Cta from "@/components/ui/Cta"
import Features from "@/components/ui/Features"

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Hero />
      <LogoCloud />
      <GlobalDatabase />
      <CodeExample />
      <Features />
      <Cta />
    </main>
  )
}
