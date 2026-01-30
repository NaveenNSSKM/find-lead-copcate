
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AcceptableUsePolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 py-20 mt-16 md:mt-24">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-[#121212]">Acceptable Use Policy</h1>

                <div className="prose prose-lg max-w-none text-gray-600 font-sans">
                    <p className="mb-6">Effective Date: {new Date().toLocaleDateString()}</p>

                    <p className="mb-6">
                        This Acceptable Use Policy ("AUP") governs your use of services provided by FindLead.ai. We are committed to ensuring our platform is used responsibly and lawfully.
                    </p>

                    <h2 className="text-2xl font-bold text-[#121212] mt-8 mb-4">1. Prohibited Activities</h2>
                    <p className="mb-6">
                        You agree not to use the FindLead.ai services for any of the following prohibited activities:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Engaging in any illegal activities or promoting illegal acts.</li>
                        <li>Sending unsolicited bulk emails (SPAM) in violation of applicable laws.</li>
                        <li>Infringing upon the intellectual property rights of others.</li>
                        <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Service.</li>
                        <li>Uploading invalid data, viruses, worms, or other software agents.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#121212] mt-8 mb-4">2. Your Responsibilities</h2>
                    <p className="mb-6">
                        You are responsible for your conduct and content while using the Service. You must comply with the following requirements:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Maintain the confidentiality of your account credentials.</li>
                        <li>Ensure that all data you provide is accurate and lawful.</li>
                        <li>Respect the privacy and rights of others.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#121212] mt-8 mb-4">3. Enforcement</h2>
                    <p className="mb-6">
                        We reserve the right to investigate and take appropriate legal action against anyone who, in our sole discretion, violates this provision, including without limitation, suspending or terminating your account and reporting you to the law enforcement authorities.
                    </p>

                    <h2 className="text-2xl font-bold text-[#121212] mt-8 mb-4">4. Updates to Policy</h2>
                    <p className="mb-6">
                        We may update this Acceptable Use Policy from time to time. The updated version will be indicated by an updated "Revised" date and will be effective as soon as it is accessible.
                    </p>

                    <p className="mb-6">
                        Contact us at support@findlead.ai if you have any questions regarding this policy.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
