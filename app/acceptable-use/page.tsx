'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AcceptableUsePolicy() {
  const [mode, setMode] = useState<'legal' | 'simple'>('legal')

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-20 mt-16 md:mt-24">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-[#121212]">
          Terms of Service
        </h1>

        <p className="text-gray-500 mb-10">
          Last Updated: Dec 3, 2025
        </p>

        {/* Toggle */}
        <div className="flex gap-3 mb-12">
          <button
            onClick={() => setMode('legal')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              mode === 'legal'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Legal Version
          </button>

          <button
            onClick={() => setMode('simple')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              mode === 'simple'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Simple Version
          </button>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700">
          {mode === 'legal' ? (
            <>
              {/* IMAGE 1 CONTENT */}
              <p>
                <strong>IMPORTANT:</strong> Please read this Terms of Service
                Agreement before clicking the “accept” button, and/or using
                the Foo Monk, LLC (“Findlead”) software-as-a-service product,
                application programming interface, or other services that
                accompany or are provided in connection with this Agreement.
              </p>

              <p>
                Subscriber should review Findlead’s{' '}
                <a
                  href="#"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Technical Parameters Addendum
                </a>
                , which is hereby incorporated by reference and may be updated
                from time-to-time in Findlead’s sole discretion, together with
                the Terms of Service Agreement (the “Agreement”), in detail to
                understand the specific ways in which the Findlead Service
                reports certain data back to Subscriber, as well as certain
                dependencies on the functionality of the Findlead Service.
              </p>

              <p>
                By clicking the “Agree” button, and/or using the Findlead
                Service in any way, you and the entity that you represent
                (“Subscriber”) unconditionally consent to be bound by and
                become a party to this Agreement with Findlead, and represent
                and warrant that Subscriber has the authority to bind such
                entity to these terms.
              </p>

              <p>
                If Subscriber does not unconditionally agree to all of the
                terms of this Agreement, use of the Findlead Service is
                strictly prohibited.
              </p>

              <p>
                Please note that Findlead may modify or amend this Agreement
                at any time. When Findlead modifies or amends this Agreement,
                Findlead will update the last updated date above, and may send
                an email to the last email address provided by Subscriber.
              </p>

              {/* IMAGE 2 CONTENT – CONTINUATION */}
              <p>
                Findlead may require Subscriber to provide consent to the
                updated Agreement in a specified manner before any further
                use of the Findlead Service is permitted. If Subscriber does
                not agree to any change(s) after receiving notice of such
                change(s), Subscriber must stop using the Findlead Service.
                Otherwise, Subscriber’s continued use of the Findlead
                Service constitutes acceptance of such change(s). Please
                regularly check this Agreement.
              </p>

              <h2>Section 12 (Arbitration Agreement)</h2>

              <p>
                Section 12 (Arbitration Agreement) contains provisions that
                govern how disputes between Subscriber and Findlead are
                resolved. Among other things, Section 12 includes an
                agreement to arbitrate which requires, with limited
                exceptions, that all disputes between Subscriber and
                Findlead shall be resolved by binding and final arbitration.
              </p>

              <p>
                Section 12 also contains a class action and jury trial
                waiver. Please read Section 12 (Arbitration Agreement)
                carefully.
              </p>

              <h2>Automatic Renewal</h2>

              <p>
                If Subscriber purchases any feature or functionality of the
                Findlead Service for a term (the{' '}
                <strong>“Initial Order Term”</strong>), the subscription will
                be automatically renewed for additional periods of the same
                duration as the Initial Order Term at Findlead’s then-current
                fees unless Subscriber opts out of automatic renewal in
                accordance with Section 5.1(c).
              </p>
            </>
          ) : (
            <>
              {/* SIMPLE VERSION */}
              <p>
                These Terms explain the rules for using Findlead. Please read
                them carefully before using the service.
              </p>

              <ul>
                <li>You must accept these Terms to use Findlead</li>
                <li>Findlead may update the Terms from time to time</li>
                <li>Continuing to use the service means you accept changes</li>
                <li>Disputes are resolved through arbitration, not court</li>
                <li>Subscriptions renew automatically unless cancelled</li>
              </ul>

              <p>
                If you do not agree with these Terms, please stop using
                Findlead immediately.
              </p>
            </>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
