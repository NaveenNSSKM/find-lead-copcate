import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-100 py-6">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-8">

                {/* Top Section: Logo and Links */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">

                    {/* Logo (Left on Mobile & Desktop) */}
                    <div className="w-full md:w-auto flex justify-start">
                        <Image
                            src="/images/logo.png"
                            alt="FindLead.ai"
                            width={100}
                            height={40}
                            className="h-6 w-auto object-contain"
                        />
                    </div>

                    {/* Links (Center on Mobile, Right on Desktop) */}
                    <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-8 gap-y-4 text-sm text-gray-500 font-medium w-full md:w-auto">
                        <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors whitespace-nowrap">
                            Privacy Policy
                        </Link>
                        <Link href="/acceptable-use" className="hover:text-gray-900 transition-colors whitespace-nowrap">
                            Terms of Service
                        </Link>
                      
                    </div>

                </div>

                {/* Bottom Section: Copyright (Centered on All Viewports) */}
                <div className="w-full text-center text-sm text-gray-400">
                    © 2026. All rights reserved.
                </div>

            </div>
        </footer>
    );
}
