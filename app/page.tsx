import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intelligence from "@/components/Intelligence";
import Features from "@/components/Features";
import Capabilities from "@/components/Capabilities";
import Segments from "@/components/Segments";
import Growth from "@/components/Growth";
import Close from "@/components/Close";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Intelligence />
      <Features />
      <Capabilities />
      <Segments />
      <Growth />
      <Close />
      <Footer />
    </main>
  );
}
