"use client";

import React, { useState, useEffect } from 'react';
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
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        subject: '',
        message: ''
    });

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
        setFormStatus('idle');

        try {
            const { error } = await supabase
                .from('form')
                .insert([{
                    firstname: formData.firstName,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                }]);

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
                                <motion.img 
                                    src="/images/arrow-contact.png" 
                                    alt="Paper plane decoration" 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1 }}
                                    className="w-full h-auto"
                                />
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
                     <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative pt-8 lg:pt-10"
                    >
                        <div className="bg-white rounded-[32px] md:rounded-[48px] p-8 md:p-12 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] relative">
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

                                <button type="submit" disabled={isSubmitting} className="w-full bg-[#121212] text-white py-5 rounded-[28px] flex items-center justify-between px-10 hover:bg-black transition-all group shadow-2xl active:scale-[0.98]">
                                    <span className="text-lg font-black tracking-tight uppercase">Send Message</span>
                                    <motion.div whileHover={{ rotate: 12 }}><IconPaperPlaneSubmit /></motion.div>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
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
