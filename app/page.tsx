import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intelligence from "@/components/Intelligence";

// Dynamically import below-the-fold components to improve initial load performance
const Features = dynamic(() => import("@/components/Features"));
const Capabilities = dynamic(() => import("@/components/Capabilities"));
const Segments = dynamic(() => import("@/components/Segments"));
const Growth = dynamic(() => import("@/components/Growth"));
const Close = dynamic(() => import("@/components/Close"));
const Footer = dynamic(() => import("@/components/Footer"));

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
