import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "../../components/Pricing";
import Close from "@/components/Close";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing - FindLead.ai | Sales Intelligence Platform',
    description: 'Choose the perfect plan for your business. FindLead.ai offers flexible pricing for sales teams, from free tiers to enterprise managed services.',
};

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-[#EFE34B]">
            <Navbar />
            <PricingSection />
            <Footer />
        </main>
    );
}
