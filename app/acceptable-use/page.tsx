'use client'

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function AcceptableUsePolicy() {
  const [mode, setMode] = useState<'simple' | 'legal'>('legal')

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-20 mt-16 md:mt-24">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-[#121212]">
          Acceptable Use Policy
        </h1>

        <p className="text-gray-500 mb-8">
          Last Updated: Dec 3, 2025
        </p>

        {/* Toggle */}
        <div className="flex gap-3 mb-10">
          <button
            onClick={() => setMode('legal')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              mode === 'legal'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Legal Version
          </button>
          <button
            onClick={() => setMode('simple')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              mode === 'simple'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Simple Version
          </button>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">

          {mode === 'legal' ? (
            <>
              <h2>1. Purpose and Scope</h2>
              <p>
                This Acceptable Use Policy ("AUP") governs access to and use of
                the FindLead.ai platform, software, APIs, and related services
                (collectively, the “Service”). This AUP forms part of the Terms
                of Service agreement between FindLead and the Subscriber.
              </p>

              <h2>2. Permitted Use</h2>
              <p>
                You may use the Service solely for lawful business purposes,
                including B2B lead research, sales intelligence, and outreach,
                provided such use complies with all applicable laws and
                regulations.
              </p>

              <h2>3. Prohibited Use</h2>
              <ul>
                <li>Use of the Service for unlawful, deceptive, or fraudulent activities.</li>
                <li>Transmission of spam, phishing, or unsolicited bulk communications.</li>
                <li>Violation of data protection, privacy, or consumer protection laws.</li>
                <li>Uploading malicious code, malware, or harmful software.</li>
                <li>Attempting to reverse engineer, scrape, or abuse platform limits.</li>
                <li>Reselling or sublicensing the Service without authorization.</li>
              </ul>

              <h2>4. Compliance With Laws</h2>
              <p>
                You are solely responsible for ensuring compliance with all
                applicable laws, including but not limited to CAN-SPAM, GDPR,
                DPDP Act (India), PECR, and other regional data protection and
                marketing regulations.
              </p>

              <h2>5. Monitoring and Enforcement</h2>
              <p>
                FindLead reserves the right to monitor usage to ensure
                compliance. We may suspend, restrict, or terminate access if we
                reasonably believe this AUP has been violated.
              </p>

              <h2>6. Suspension and Termination</h2>
              <p>
                Any violation of this AUP may result in immediate suspension or
                termination of your account, without notice, and without refund.
              </p>

              <h2>7. Policy Updates</h2>
              <p>
                We may update this AUP at any time. Continued use of the Service
                after updates constitutes acceptance of the revised policy.
              </p>

              <h2>8. Contact</h2>
              <p>
                Questions regarding this policy should be sent to
                support@findlead.ai.
              </p>
            </>
          ) : (
            <>
              <p>
                This policy explains how you can and cannot use FindLead.ai.
                Please use our platform responsibly and legally.
              </p>

              <h2>What you should not do</h2>
              <ul>
                <li>Send spam or illegal emails</li>
                <li>Upload viruses or harmful files</li>
                <li>Misuse data or violate privacy laws</li>
                <li>Hack, scrape, or abuse the platform</li>
              </ul>

              <h2>Your responsibility</h2>
              <p>
                You are responsible for complying with all laws related to
                outreach, data usage, and privacy in your region.
              </p>

              <h2>What happens if rules are broken</h2>
              <p>
                Accounts may be suspended or terminated if this policy is
                violated.
              </p>
            </>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
