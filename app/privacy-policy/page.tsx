
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 py-20 mt-16 md:mt-24">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-[#121212]">Privacy Policy</h1>

                <div className="prose prose-lg max-w-none text-gray-600 font-sans">
                    <p className="mb-6">Effective Date: {new Date().toLocaleDateString()}</p>

                    <p className="mb-6">
                        At FindLead.ai, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>

                    <h2 className="text-2xl font-bold text-[#121212] mt-8 mb-4">1. Information We Collect</h2>
                    <p className="mb-6">
                        We collect information that you strictly provide to us when you register, express interest in obtaining information about us or our products and services, participate in activities on the website, or otherwise contact us.
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Personal Data (Name, Email, Job Title)</li>
                        <li>Company Information</li>
                        <li>Usage Data and Analytics</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#121212] mt-8 mb-4">2. How We Use Your Information</h2>
                    <p className="mb-6">
                        We use the information we collect or receive to:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Facilitate account creation and logon process.</li>
                        <li>Send you marketing and promotional communications.</li>
                        <li>Respond to user inquiries/offer support.</li>
                        <li>Improve our services and user experience.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#121212] mt-8 mb-4">3. Sharing Your Information</h2>
                    <p className="mb-6">
                        We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                    </p>

                    <h2 className="text-2xl font-bold text-[#121212] mt-8 mb-4">4. Security of Your Information</h2>
                    <p className="mb-6">
                        We use administrative, technical, and physical security measures to help protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
                    </p>

                    <h2 className="text-2xl font-bold text-[#121212] mt-8 mb-4">5. Contact Us</h2>
                    <p className="mb-6">
                        If you have questions or comments about this policy, you may email us at support@findlead.ai.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
