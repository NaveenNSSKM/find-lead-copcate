import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-100 py-6">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left Side: Brand & Copyright */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-gray-500">
                    <Image
                        src="/images/logo.png"
                        alt="FindLead.ai"
                        width={100}
                        height={40}
                        className="h-6 w-auto object-contain"
                    />
                    <span>© 2025. All rights reserved.</span>
                </div>

                {/* Right Side: Links */}
                <div className="flex items-center gap-8 text-sm text-gray-500 font-medium">
                    <Link href="#" className="hover:text-gray-900 transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="#" className="hover:text-gray-900 transition-colors">
                        Terms of Service
                    </Link>
                </div>

            </div>
        </footer>
    );
}
