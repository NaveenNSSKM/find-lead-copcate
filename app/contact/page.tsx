"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabase';

// --- Styled Icons Recreated from Image ---

const IconPaperPlaneBadge = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" fill="#121212" />
    </svg>
);

const IconSpeechBubbleFloating = () => (
    <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
        <div className="absolute inset-0 bg-[#FFDE00] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 border-[6px] md:border-[8px] border-[#FFDE00] rounded-full bg-white flex items-center justify-center shadow-lg">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-[#121212] rounded-full flex items-center justify-center relative">
                <div className="flex gap-1">
                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-full"></div>
                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-full"></div>
                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#121212] rotate-45 rounded-sm"></div>
            </div>
        </div>
        <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="3" strokeLinecap="round" className="w-4 h-4 md:w-5 md:h-5">
                <line x1="12" y1="5" x2="12" y2="2"/><line x1="19" y1="8" x2="21" y2="6"/>
            </svg>
        </div>
    </div>
);

const IconYellowCircle = ({ children }: { children: React.ReactNode }) => (
    <div className="w-12 h-12 bg-[#FFDE00] rounded-full flex items-center justify-center text-[#121212] shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
        {children}
    </div>
);

const IconUser = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconEmail = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const IconTag = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>;
const IconPencil = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>;
const IconCloud = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c3.037 0 5.5-2.463 5.5-5.5 0-2.798-2.083-5.11-4.785-5.465C17.355 5.21 14.883 3 12 3 9.117 3 6.645 5.21 5.785 8.035 3.083 8.39 1 10.702 1 13.5c0 3.037 2.463 5.5 5.5 5.5h11z"/><polyline points="17 12 12 7 7 12"/><line x1="12" y1="7" x2="12" y2="17"/></svg>;
const IconMap = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const IconPhone = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;

const IconPaperPlaneSubmit = () => (
    <div className="w-12 h-12 bg-[#FFDE00] rounded-full flex items-center justify-center text-[#121212] border-[2.5px] border-[#121212]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" /></svg>
    </div>
);

// --- Main Component ---

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error' | 'sending'>('idle');
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        subject: '',
        message: ''
    });

    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const testimonials = [
        {
            quote: "Their creativity, communication and commitment are unmatched.",
            highlight: "Highly recommended!",
            author: "Sarah Johnson, CEO at BrightCo"
        },
        {
            quote: "Transformed our lead generation process with incredible results.",
            highlight: "Simply brilliant!",
            author: "Michael Chen, Marketing Director at TechFlow"
        },
        {
            quote: "The team is professional, fast, and extremely easy to work with.",
            highlight: "Best in the business!",
            author: "Elena Rodriguez, Founder of SparkStudio"
        },
        {
            quote: "Incredible attention to detail and a very collaborative approach.",
            highlight: "Exceeded all expectations!",
            author: "David Wilson, Product Lead at Innovate"
        },
        {
            quote: "Our engagement increased by 40% after the first month of working together.",
            highlight: "Massive growth!",
            author: "Sophia Kim, Growth Manager at ScaleUp"
        }
    ];

    useEffect(() => {
        if (formStatus === 'success') {
            const timer = setTimeout(() => {
                setFormStatus('idle');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [formStatus]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus('sending');

        try {
            const { error } = await supabase
                .from('form')
                .insert([{
                    firstname: formData.firstName,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                }]);

            // Artificial delay to let the paper plane animation finish
            await new Promise(resolve => setTimeout(resolve, 1500));

            if (error) throw error;
            setFormStatus('success');
            setFormData({ firstName: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Submission Error:', error);
            setFormStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#FFDE00] selection:bg-[#121212] selection:text-white overflow-x-hidden font-sans">
            <Navbar />

            {/* Content Container */}
            <div className="relative pt-32 pb-16 px-4 md:px-12 max-w-[1440px] mx-auto z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-16 lg:gap-24 items-start">
                    
                    {/* Left Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12 md:space-y-14 relative"
                    >
                        {/* Header Section */}
                        <div className="space-y-8 relative z-10">
                            <div className="flex justify-start">
                                <div className="inline-flex items-center gap-2.5 bg-white px-4 py-2 rounded-full shadow-sm">
                                    <IconPaperPlaneBadge />
                                    <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-[#121212]">We'd love to hear from you!</span>
                                </div>
                            </div>

                            <div className="relative">
                                <h1 className="text-[64px] sm:text-[72px] md:text-[96px] font-black text-[#121212] leading-[0.8] md:leading-[0.85] tracking-tighter">
                                    Contact <br/>Us
                                </h1>
                                <motion.div 
                                    className="absolute left-6 md:left-8 bottom-[-10px] md:bottom-[-15px] w-[130px] md:w-[170px] pointer-events-none"
                                    animate={{ rotate: [-2, -1, -2], y: [0, -2, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-sm">
                                        <motion.path 
                                            d="M10 35 C 40 30, 120 10, 190 5 M180 10 C 140 15, 60 25, 20 38 M30 35 C 70 30, 150 15, 195 10" 
                                            stroke="white" 
                                            strokeWidth="3" 
                                            strokeLinecap="round" 
                                            opacity="0.9"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
                                        />
                                    </svg>
                                </motion.div>
                            </div>

                            <div className="absolute right-[-10px] sm:right-[-20px] md:right-[20px] lg:right-[-120px] top-[140px] md:top-[220px] lg:top-[120px] w-[160px] sm:w-[200px] md:w-[280px] lg:w-[380px] pointer-events-none z-0">
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1 }}
                                    className="relative w-full aspect-[4/3]"
                                >
                                    <Image 
                                        src="/images/arrow-contact.png" 
                                        alt="Paper plane decoration" 
                                        fill
                                        priority
                                        className="object-contain"
                                    />
                                </motion.div>
                            </div>

                            <p className="relative z-10 text-[#121212] text-lg md:text-xl font-bold max-w-sm leading-tight">
                                Have a question, suggestion, or just want to say hello? We're here and happy to help you.
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-4 max-w-[420px] relative z-10">
                            <ContactInfoCard title="Email Us" value="hello@yourbrand.com" icon={<IconEmail />} />
                            <ContactInfoCard title="Call Us" value="+1 (234) 567-8900" icon={<IconPhone />} />
                            <ContactInfoCard title="Visit Us" value="123 Yellow Street, Bright City, YC 12345" icon={<IconMap />} />
                        </div>

                        {/* Hand-drawn Footer */}
                        <div className="pt-10 relative">
                            <div className="absolute -top-8 -left-4 opacity-30">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="2"/><line x1="5" y1="12" x2="2" y2="12"/><line x1="19" y1="8" x2="21" y2="6"/></svg>
                            </div>
                            <span className="text-3xl md:text-4xl font-black italic text-[#121212] leading-none block tracking-tight">
                                Let's create something amazing together!
                            </span>
                            <div className="absolute top-2 right-[-20px] md:right-[-30px]">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="3" className="rotate-12 opacity-40 md:opacity-50"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                            </div>
                            <div className="mt-4 ml-6 md:ml-12">
                                <svg width="100" height="12" viewBox="0 0 120 12" fill="none" className="opacity-20 md:opacity-30">
                                    <path d="M2 10 L 40 2 L 80 10 L 118 2" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    {/* Right Column: Unique Animated Form */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative pt-8 lg:pt-10"
                    >
                        <AnimatePresence mode="wait">
                            {formStatus === 'success' ? (
                                <motion.div 
                                    key="success"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="bg-white p-10 md:p-16 rounded-[40px] md:rounded-[70px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-black/5 text-center flex flex-col items-center justify-center min-h-[500px]"
                                >
                                    <motion.div 
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                        className="w-24 h-24 bg-[#FFDE00] rounded-full flex items-center justify-center mb-8 shadow-[0_20px_40px_rgba(255,222,0,0.4)]"
                                    >
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </motion.div>
                                    <motion.h2 
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-4xl font-black text-[#121212] mb-4 tracking-tight"
                                    >
                                        Mission Launched!
                                    </motion.h2>
                                    <motion.p 
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-gray-500 font-bold max-w-[280px] mx-auto leading-relaxed"
                                    >
                                        We've received your coordinates. Our team will contact you shortly.
                                    </motion.p>
                                    <motion.button 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        onClick={() => setFormStatus('idle')}
                                        className="mt-10 text-[#121212] font-black text-xs uppercase tracking-[0.3em] hover:underline decoration-4 underline-offset-8"
                                    >
                                        Send Another Signal
                                    </motion.button>
                                </motion.div>
                            ) : formStatus === 'sending' ? (
                                <motion.div 
                                    key="sending"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="bg-white p-10 md:p-16 rounded-[40px] md:rounded-[70px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-black/5 flex flex-col items-center justify-center min-h-[500px] overflow-hidden"
                                >
                                    <motion.div 
                                        animate={{ 
                                            x: [0, 400], 
                                            y: [0, -400],
                                            rotate: [0, -45],
                                            scale: [1, 0.2],
                                            opacity: [1, 0]
                                        }}
                                        transition={{ duration: 1.5, ease: "easeIn" }}
                                        className="text-[#FFDE00]"
                                    >
                                        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                                        </svg>
                                    </motion.div>
                                    <motion.p 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="mt-8 text-[#121212] font-black uppercase tracking-[0.4em] text-xs"
                                    >
                                        Launching...
                                    </motion.p>
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="form"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="bg-white rounded-[32px] md:rounded-[48px] p-8 md:p-12 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] relative"
                                >
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                                        <IconSpeechBubbleFloating />
                                    </div>
                                    <div className="text-center mb-10 pt-8">
                                        <h2 className="text-2xl md:text-3xl font-black text-[#121212] tracking-tight mb-2">Send us a Message</h2>
                                        <p className="text-gray-400 font-bold text-sm">We usually reply within <span className="text-[#FFDE00] bg-[#121212] px-3 py-0.5 rounded-lg text-xs md:text-sm">24 hours.</span></p>
                                    </div>
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <FormGroup label="Your Name" placeholder="Enter your name" icon={<IconUser />} value={formData.firstName} onChange={(e) => handleInput(e, 'firstName')} />
                                        <FormGroup label="Email Address" placeholder="Enter your email" type="email" icon={<IconEmail />} value={formData.email} onChange={(e) => handleInput(e, 'email')} />
                                        <FormGroup label="Subject" placeholder="What is this about?" icon={<IconTag />} value={formData.subject} onChange={(e) => handleInput(e, 'subject')} />
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#121212] ml-2">Your Message</label>
                                            <div className="relative group">
                                                <div className="absolute left-5 top-5">
                                                    <IconYellowCircle><IconPencil /></IconYellowCircle>
                                                </div>
                                                <textarea 
                                                    rows={5}
                                                    placeholder="Type your message here..."
                                                    value={formData.message}
                                                    onChange={(e) => handleInput(e, 'message')}
                                                    className="w-full bg-[#F8F8F8] border-none rounded-[28px] py-6 pl-20 pr-8 outline-none focus:ring-4 focus:ring-[#FFDE00]/30 text-[#121212] font-bold text-base placeholder:text-gray-300 resize-none transition-all"
                                                ></textarea>
                                            </div>
                                        </div>

                                        <button 
                                            type="submit" 
                                            disabled={isSubmitting} 
                                            className="w-full h-20 bg-[#121212] group relative overflow-hidden rounded-[24px] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,222,0,0.2)] active:scale-[0.98] border border-white/5"
                                        >
                                            {/* Background Shimmer Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFDE00]/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                            
                                            <div className="relative z-10 flex items-center justify-between px-10">
                                                <div className="flex flex-col items-start text-left">
                                                    <span className="text-[#FFDE00] text-[10px] font-black uppercase tracking-[0.3em] opacity-50 mb-1">System Ready</span>
                                                    <span className="text-white text-xl font-black uppercase tracking-tight">Launch Project</span>
                                                </div>
                                                
                                                <div className="flex items-center gap-4">
                                                    <div className="w-[1px] h-8 bg-white/10 group-hover:bg-[#FFDE00]/30 transition-colors"></div>
                                                    <motion.div 
                                                        whileHover={{ x: 5, y: -5, scale: 1.1 }}
                                                        className="text-[#FFDE00] drop-shadow-[0_0_8px_rgba(255,222,0,0.5)]"
                                                    >
                                                        <IconPaperPlaneSubmit />
                                                    </motion.div>
                                                </div>
                                            </div>

                                            {/* Bottom Progress Bar Decoration */}
                                            <div className="absolute bottom-0 left-0 h-[2px] bg-[#FFDE00] w-0 group-hover:w-full transition-all duration-700 shadow-[0_0_10px_#FFDE00]"></div>
                                        </button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
            {/* TESTIMONIAL & PARTNERS BAR - STATIC CAROUSEL STYLE */}
            <section className="bg-[#FFDE00] pb-24 px-4 md:px-12">
                <div className="max-w-[1440px] mx-auto">
                    <div className="bg-[#0A0A0A] rounded-[40px] md:rounded-[70px] p-8 md:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.5)]">
                        {/* Subtle Corner Glows */}
                        <div className="absolute top-[-30%] left-[-10%] w-[50%] h-[100%] bg-[#FFDE00]/10 blur-[120px] rounded-full opacity-50"></div>
                        <div className="absolute bottom-[-30%] right-[-10%] w-[50%] h-[100%] bg-[#FFDE00]/10 blur-[120px] rounded-full opacity-50"></div>

                        {/* 1. Left: Functional Testimonial Carousel */}
                        <div className="max-w-md relative z-10 w-full text-center lg:text-left min-h-[160px] flex flex-col justify-center">
                            <div className="mb-4 opacity-80 flex justify-center lg:justify-start">
                                <svg width="28" height="20" viewBox="0 0 40 30" fill="#FFDE00">
                                    <path d="M0 15C0 6.71573 6.71573 0 15 0H18V12H12C10.3431 12 9 13.3431 9 15V18H18V30H0V15Z"/>
                                    <path d="M22 15C22 6.71573 28.7157 0 37 0H40V12H34C32.3431 12 31 13.3431 31 15V18H40V30H22V15Z"/>
                                </svg>
                            </div>
                            <div className="relative overflow-hidden h-[100px] md:h-[120px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={testimonialIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="absolute inset-0"
                                    >
                                        <div className="space-y-1 mb-4">
                                            <p className="text-lg md:text-xl font-bold text-white leading-tight opacity-95">
                                                {testimonials[testimonialIndex].quote}
                                            </p>
                                            <div className="relative inline-block">
                                                <p className="text-lg md:text-xl font-bold text-white leading-tight opacity-95">
                                                    {testimonials[testimonialIndex].highlight}
                                                </p>
                                                <div className="absolute bottom-[-2px] left-0 w-full h-[2.5px] bg-[#FFDE00] rounded-full opacity-70"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center lg:justify-start gap-4">
                                            <span className="text-white/40 font-bold text-xs tracking-tight">
                                                — {testimonials[testimonialIndex].author}
                                            </span>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* 2. Middle: Carousel Controls */}
                        <div className="flex items-center gap-8 relative z-10">
                            {/* Left Divider */}
                            <div className="hidden xl:block w-[1px] h-20 bg-white/5"></div>
                            
                            <div className="flex items-center gap-6">
                                <button 
                                    onClick={() => setTestimonialIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#FFDE00]/50 hover:text-white transition-all active:scale-95"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                                </button>
                                <div className="flex items-center gap-2.5">
                                    {testimonials.map((_, idx) => (
                                        <div 
                                            key={idx}
                                            className={`rounded-full transition-all duration-300 ${
                                                idx === testimonialIndex 
                                                ? "w-2.5 h-2.5 bg-[#FFDE00] shadow-[0_0_10px_rgba(255,222,0,0.4)]" 
                                                : "w-1.5 h-1.5 bg-white/10"
                                            }`}
                                        ></div>
                                    ))}
                                </div>
                                <button 
                                    onClick={() => setTestimonialIndex(prev => (prev + 1) % testimonials.length)}
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#FFDE00]/50 hover:text-white transition-all active:scale-95"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </button>
                            </div>

                            {/* Right Divider */}
                            <div className="hidden xl:block w-[1px] h-20 bg-white/5"></div>
                        </div>

                        {/* 3. Right: Compact Company Logos - Single Line */}
                        <div className="flex flex-row items-center justify-center gap-3 md:gap-5 lg:gap-8 relative z-10 w-full lg:w-auto overflow-hidden">
                            <div className="flex flex-row items-center gap-4 md:gap-6 lg:gap-8">
                                <PartnerLogo name="Spotify" />
                                <PartnerLogo name="Slack" />
                                <PartnerLogo name="Notion" />
                                <PartnerLogo name="Discord" />
                                <PartnerLogo name="Twitch" />
                                <PartnerLogo name="Zoom" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PREMIUM WORLD MAP SECTION - IMAGE ONLY */}
            <section className="bg-[#FFDE00] pb-32 px-4 md:px-12 relative z-10">
                <div className="max-w-[1440px] mx-auto">
                    <div className="relative group">
                        {/* Image Map Container */}
                        <div className="bg-[#0A0A0A] p-4 rounded-[40px] md:rounded-[60px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border border-white/5 overflow-hidden h-[450px] md:h-[650px] relative">
                            {/* The World Map Image Optimized */}
                            <Image 
                                src="/images/world-map.jpg" 
                                alt="Our Global Presence"
                                fill
                                className="object-cover opacity-80 grayscale-[0.1] rounded-[32px] md:rounded-[50px] transition-all duration-700 hover:grayscale-0"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function PartnerLogo({ name }: { name: string }) {
    const renderLogo = () => {
        switch (name.toLowerCase()) {
            case 'spotify':
                return (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-white">
                        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.508 17.308c-.216.354-.672.468-1.026.252-2.856-1.74-6.456-2.136-10.704-1.164-.408.096-.816-.156-.912-.564-.096-.408.156-.816.564-.912 4.644-1.056 8.64-.6 11.82 1.344.354.204.456.66.258 1.044zm1.476-3.264c-.276.444-.852.588-1.296.312-3.264-2.004-8.244-2.592-12.108-1.416-.492.144-1.02-.132-1.176-.624-.144-.492.132-1.02.624-1.176 4.416-1.344 9.9-.684 13.656 1.62.432.264.576.84.3 1.284zm.132-3.408C15.156 8.232 8.616 8.016 4.824 9.168c-.612.18-1.26-.168-1.44-.768-.18-.6.168-1.26.768-1.44 4.344-1.32 11.556-1.068 16.14 1.656.54.324.72.102.396.642-.312.54-.102.72-.642.396z"/>
                    </svg>
                );
            case 'slack':
                return (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-white">
                        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.958 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.52 2.521h-2.522V8.834zM17.687 8.834a2.528 2.528 0 0 1-2.521 2.521 2.527 2.527 0 0 1-2.521-2.521V2.522A2.527 2.527 0 0 1 15.166 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.166 18.958a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.522v-2.52h2.521zM15.166 17.688a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.312A2.528 2.528 0 0 1 24 15.167a2.528 2.528 0 0 1-2.522 2.521h-6.312z"/>
                    </svg>
                );
            case 'notion':
                return (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-white">
                        <path d="M4.459 4.211c.524-.31 1.156-.456 1.765-.456h12.04c.348 0 .685.082.99.239.305.157.562.383.743.655.18.272.285.589.303.918.018.329-.05.656-.195.948l-2.493 5.029c-.087.176-.133.369-.133.565s.046.389.133.565l2.493 5.029c.145.292.213.619.195.948-.018.329-.123.646-.303.918-.181.272-.438.498-.743.655-.305.157-.642.239-.99.239H6.224c-.609 0-1.241-.146-1.765-.456-.524-.31-.93-.769-1.164-1.314-.234-.545-.285-1.156-.146-1.733.139-.577.452-1.092.894-1.474l4.632-4.01c.218-.189.344-.459.344-.743s-.126-.554-.344-.743L4.143 8.732c-.442-.382-.755-.897-.894-1.474-.139-.577-.088-1.188.146-1.733.234-.545.64-1.004 1.164-1.314z"/>
                    </svg>
                );
            case 'discord':
                return (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-white">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.666 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                );
            case 'twitch':
                return (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-white">
                        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                    </svg>
                );
            case 'zoom':
                return (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-white">
                        <path d="M13.232 15.65h-1.465l-1.054-1.545a11.9 11.9 0 0 1-.532-.862h-.032c-.01 0-.05.138-.119.41l-.226.856-.16.541H8.17l1.09-3.237h1.433l1.11 1.625c.16.236.27.42.334.551h.032c.01-.013.06-.184.148-.512l.27-1.004.162-.66h1.47l-1.088 3.237zm4.61-3.237l-1.576 3.237h-1.498l1.577-3.237h1.497zm-6.136-1.33l1.523 3.125h1.536l-1.523-3.125h-1.536z"/>
                    </svg>
                );
            default:
                return <div className="w-4 h-4 md:w-5 md:h-5 bg-white/10 rounded-full"></div>;
        }
    };

    return (
        <div className="flex flex-col items-center gap-1.5 group cursor-pointer shrink-0">
            <div className="w-10 h-10 md:w-13 md:h-13 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FFDE00]/30 transition-all bg-white/5 relative overflow-hidden">
                <div className="opacity-40 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0">
                    {renderLogo()}
                </div>
            </div>
            <span className="text-[7px] md:text-[8px] text-white/30 font-black uppercase tracking-widest group-hover:text-white transition-colors">{name}</span>
        </div>
    );
}



function ContactInfoCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
    return (
        <div className="bg-white p-5 rounded-[28px] flex items-center gap-5 shadow-sm border border-white/20 group hover:shadow-lg transition-all duration-300">
            <IconYellowCircle>{icon}</IconYellowCircle>
            <div>
                <h4 className="text-sm font-black text-[#121212] mb-0.5">{title}</h4>
                <p className="text-sm font-medium text-gray-500">{value}</p>
            </div>
        </div>
    );
}

interface FormGroupProps {
    label: string;
    placeholder: string;
    icon: React.ReactNode;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormGroup({ label, placeholder, icon, type = "text", value, onChange }: FormGroupProps) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#121212] ml-2">{label}</label>
            <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2">
                    <IconYellowCircle>{icon}</IconYellowCircle>
                </div>
                <input 
                    type={type} 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full bg-[#F8F8F8] border-none rounded-[28px] py-6 pl-20 pr-8 outline-none focus:ring-4 focus:ring-[#FFDE00]/30 text-[#121212] font-bold text-base placeholder:text-gray-300 transition-all"
                />
            </div>
        </div>
    );
}
