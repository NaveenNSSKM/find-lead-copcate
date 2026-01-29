'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[100] h-20 flex items-center transition-all duration-300 ${isScrolled ? 'bg-white border-b border-gray-100 shadow-sm' : 'bg-transparent'}`}>
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full flex justify-between items-center">

                    {/* Left Side: Logo + Menu items */}
                    <div className="flex items-center gap-12">
                        {/* Logo + Mobile Toggle */}
                        <div className="flex items-center gap-4">
                            <Link href="#" className="flex items-center">
                                <Image
                                    src="/images/logo.png"
                                    alt="FindLead.ai"
                                    width={100}
                                    height={40}
                                    className="h-6 w-auto object-contain"
                                    priority
                                />
                            </Link>

                            {/* Mobile Hamburger Toggle */}
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 p-1"
                            >
                                <span className="block w-6 h-[2px] bg-[#00358E] rounded-full"></span>
                                <span className="block w-6 h-[2px] bg-[#00358E] rounded-full"></span>
                                <span className="block w-6 h-[2px] bg-[#00358E] rounded-full"></span>
                            </button>
                        </div>

                        {/* Desktop Navigation moved next to Logo */}
                        <div className="hidden lg:flex gap-8 items-center font-semibold text-sm text-[#121212]">
                            <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
                            <Link href="#" className="hover:text-gray-600 transition-colors">Product</Link>
                            <Link href="/pricing" className="hover:text-gray-600 transition-colors">Pricing</Link>
                            <Link href="#" className="hover:text-gray-600 transition-colors">Blog</Link>
                            <Link href="#" className="hover:text-gray-600 transition-colors">Contact</Link>
                        </div>
                    </div>

                    {/* Right: CTA Button */}
                    <div className="flex items-center">
                        <Link href="#" className="bg-[#EFE34B] text-black px-5 py-2 md:px-7 md:py-3 rounded-lg font-bold text-sm hover:bg-yellow-400 transition-colors shadow-sm whitespace-nowrap">
                            Sign up now
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[200] bg-white text-[#0B1B32] lg:hidden animate-in fade-in slide-in-from-right duration-200">
                    <div className="p-6 h-full flex flex-col">
                        <div className="flex justify-between items-center mb-8">
                            <Link href="#" onClick={() => setIsMenuOpen(false)}>
                                <Image
                                    src="/images/logo.png"
                                    alt="FindLead.ai"
                                    width={140}
                                    height={36}
                                    className="h-7 w-auto object-contain"
                                />
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 text-gray-800"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 text-xl font-bold px-2">

                            <div className="border-b border-gray-100 pb-4">
                                <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            </div>
                            <div className="border-b border-gray-100 pb-4">Product</div>
                            <div className="border-b border-gray-100 pb-4">Pricing</div>
                            <div className="border-b border-gray-100 pb-4">Blog</div>
                            <div className="pb-4">Contact</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
