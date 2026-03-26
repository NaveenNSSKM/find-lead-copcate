"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ContactPage() {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

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
                .insert([
                    {
                        firstname: formData.firstName,
                        lastname: formData.lastName,
                        email: formData.email,
                        subject: formData.subject,
                        message: formData.message
                    }
                ]);

            if (error) throw error;

            setFormStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Submission Error:', error);
            setFormStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#EFE34B] selection:bg-[#121212] selection:text-white overflow-hidden">
            <Navbar />

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-white opacity-40 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-black opacity-[0.05] blur-[120px] rounded-full"></div>
            </div>

            {/* Hero Section */}
            <div className="relative pt-32 pb-12 md:pt-48 md:pb-24 px-6 md:px-12 z-10">
                <div className="max-w-[1440px] mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >
                        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black mb-6 text-[#121212] tracking-tighter leading-none">
                            LET'S <span className="text-[#121212] opacity-40 italic font-medium">TALK.</span>
                        </h1>
                        <p className="text-black/70 text-lg md:text-xl max-w-2xl leading-relaxed font-bold">
                            Have questions about our platform or want to see a live demo? 
                            Our team is here to help you accelerate your business growth.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="relative pb-24 px-6 md:px-12 max-w-[1440px] mx-auto z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left: Contact Info (4 cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white p-8 md:p-10 rounded-[40px] relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="0.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            
                            <h2 className="text-xs font-black mb-10 text-black uppercase tracking-[0.4em]">Connect With Us</h2>
                            <div className="space-y-10 relative z-10">
                                <ContactInfoItem 
                                    title="Phone" 
                                    value="+1 (555) 000-0000" 
                                    icon={<PhoneIcon />}
                                />
                                <ContactInfoItem 
                                    title="Email" 
                                    value="hello@findlead.ai" 
                                    icon={<EmailIcon />}
                                />
                                <ContactInfoItem 
                                    title="Office" 
                                    value="123 Innovation Way, Suite 100 SF, CA 94103" 
                                    icon={<MapPinIcon />}
                                />
                            </div>

                            <div className="mt-16 pt-10 border-t border-gray-100">
                                <h3 className="text-[10px] font-black mb-6 text-black uppercase tracking-widest">Follow Our Journey</h3>
                                <div className="flex gap-4">
                                    <SocialLink icon={<LinkedinIcon />} name="LinkedIn" />
                                    <SocialLink icon={<InstagramIcon />} name="Instagram" />
                                    <SocialLink icon={<YoutubeIcon />} name="YouTube" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-[#121212] p-8 rounded-[32px] text-white shadow-2xl"
                        >
                            <h4 className="font-black text-xl mb-2">Want a fast response?</h4>
                            <p className="font-medium opacity-60 mb-6">Our average response time is under 2 hours during business hours.</p>
                            <button className="flex items-center gap-2 font-black uppercase text-xs tracking-widest group text-[#EFE34B]">
                                Start Live Chat 
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </motion.div>
                    </div>

                    {/* Right: Contact Form (8 cols) */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-8 bg-white/90 backdrop-blur-xl border border-white rounded-[32px] md:rounded-[48px] p-6 sm:p-10 md:p-16 shadow-[0_30px_70px_rgba(0,0,0,0.08)] relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EFE34B] to-transparent"></div>
                        
                        <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <FormGroup 
                                    label="First Name" 
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={(e) => handleInput(e, 'firstName')}
                                    onFocus={() => setFocusedField('firstName')} 
                                    onBlur={() => setFocusedField(null)}
                                    isFocused={focusedField === 'firstName'}
                                    required
                                />
                                <FormGroup 
                                    label="Last Name" 
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={(e) => handleInput(e, 'lastName')}
                                    onFocus={() => setFocusedField('lastName')} 
                                    onBlur={() => setFocusedField(null)}
                                    isFocused={focusedField === 'lastName'}
                                    required
                                />
                            </div>
                            <FormGroup 
                                label="Email Address" 
                                type="email" 
                                id="email"
                                value={formData.email}
                                onChange={(e) => handleInput(e, 'email')}
                                onFocus={() => setFocusedField('email')} 
                                onBlur={() => setFocusedField(null)}
                                isFocused={focusedField === 'email'}
                                required
                            />
                            <FormGroup 
                                label="Subject" 
                                id="subject"
                                value={formData.subject}
                                onChange={(e) => handleInput(e, 'subject')}
                                onFocus={() => setFocusedField('subject')} 
                                onBlur={() => setFocusedField(null)}
                                isFocused={focusedField === 'subject'}
                                required
                            />
                            <div className="group relative">
                                <label className="absolute left-0 -top-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#121212]">Message</label>
                                <textarea 
                                    rows={4} 
                                    value={formData.message}
                                    onChange={(e) => handleInput(e, 'message')}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-[#121212] transition-all text-[#121212] placeholder-black/20 resize-none text-lg font-medium"
                                    placeholder="Tell us about your project..."
                                    required
                                ></textarea>
                            </div>
                            
                            <motion.button 
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.01, backgroundColor: '#000' }}
                                whileTap={{ scale: 0.99 }}
                                className={`w-full bg-[#121212] text-white py-6 rounded-[24px] font-black text-lg transition-colors shadow-2xl group flex items-center justify-center gap-4 uppercase tracking-[0.2em] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                <svg className="transition-transform group-hover:translate-x-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </motion.button>

                            <AnimatePresence>
                                {formStatus === 'success' && (
                                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center font-bold text-green-600">Message sent successfully!</motion.p>
                                )}
                                {formStatus === 'error' && (
                                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center font-bold text-red-600">There was an error sending your message. Please try again.</motion.p>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Global Presence Section - Reimagined */}
            <section className="relative py-24 px-6 md:px-12 bg-transparent overflow-hidden">
                <div className="max-w-[1440px] mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="bg-white rounded-[32px] sm:rounded-[40px] md:rounded-[60px] min-h-[500px] md:min-h-[700px] overflow-hidden border border-white relative flex flex-col md:flex-row items-center p-6 sm:p-12 md:p-20 gap-10 md:gap-16 shadow-[0_40px_80px_rgba(0,0,0,0.06)]"
                    >
                        {/* Map Overlay */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply">
                            <div className="absolute inset-0 bg-[#EFE34B]/20 blur-[150px] rounded-full"></div>
                        </div>

                        <div className="relative z-10 w-full md:w-1/3 text-center md:text-left">
                            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#121212] uppercase mb-6 tracking-tighter leading-[0.9]">Global <br/><span className="text-[#121212] opacity-50">Presence</span></h3>
                        </div>

                        <div className="relative w-full md:w-2/3 aspect-square md:aspect-video flex items-center justify-center">
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1.2 }} className="relative w-full h-full">
                                <Image src="/images/world-map.jpg" alt="World Map" fill className="object-contain opacity-80 grayscale contrast-125 rounded-3xl" />
                                <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 1000 500">
                                    <motion.path d="M 215 170 Q 350 100 480 150" fill="none" stroke="#121212" strokeWidth="1" strokeDasharray="4 4" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.3 }} transition={{ delay: 1.2, duration: 1.5 }} />
                                    <motion.path d="M 480 150 Q 615 200 750 220" fill="none" stroke="#121212" strokeWidth="1" strokeDasharray="4 4" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.3 }} transition={{ delay: 1.8, duration: 1.5 }} />
                                </svg>
                                <PulseHub x="21.5%" y="34%" name="San Francisco" delay={1} />
                                <PulseHub x="48%" y="30%" name="London" delay={1.4} />
                                <PulseHub x="75%" y="44%" name="Singapore" delay={1.8} />
                                <PulseHub x="71%" y="39%" name="Mumbai" delay={2.2} />
                                <PulseHub x="86%" y="71%" name="Sydney" delay={2.6} />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function ContactInfoItem({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
    return (
        <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-14 h-14 bg-[#EFE34B] border border-[#EFE34B]/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#121212] group-hover:text-white transition-all duration-500 text-[#121212]">
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-black text-black/40 uppercase tracking-[0.2em] mb-1 group-hover:text-[#121212] transition-colors">{title}</p>
                <p className="text-lg font-bold text-[#121212] tracking-tight group-hover:translate-x-1 transition-transform duration-500">{value}</p>
            </div>
        </div>
    );
}

function FormGroup({ label, id, value, onChange, type = "text", onFocus, onBlur, isFocused, required }: { label: string, id: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, type?: string, onFocus: () => void, onBlur: () => void, isFocused: boolean, required?: boolean }) {
    return (
        <div className="relative group">
            <label className="absolute left-0 -top-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#121212]">
                {label}
            </label>
            <input 
                type={type} 
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-[#121212] transition-all text-[#121212] placeholder-black/20 text-lg font-medium" 
                placeholder={`Your ${label}...`} 
                required={required}
            />
        </div>
    );
}

function SocialLink({ icon, name }: { icon: React.ReactNode, name: string }) {
    return (
        <a href="#" className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-[#121212] hover:bg-[#121212] hover:text-white transition-all duration-300 hover:-translate-y-1">
            <span className="sr-only">{name}</span>
            {icon}
        </a>
    );
}

function PulseHub({ x, y, name, delay }: { x: string, y: string, name: string, delay: number }) {
    return (
        <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay, duration: 0.5, type: 'spring' }} className="absolute z-20" style={{ left: x, top: y }}>
            <div className="relative flex items-center justify-center">
                <span className="absolute w-10 h-10 bg-[#121212] rounded-full animate-ping opacity-10"></span>
                <span className="absolute w-6 h-6 bg-[#121212] rounded-full opacity-10"></span>
                <span className="relative w-3 h-3 bg-[#121212] rounded-full border-2 border-white shadow-lg"></span>
                <motion.div initial={{ opacity: 0, y: 5 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: delay + 0.3 }} className="absolute top-10 whitespace-nowrap bg-[#121212] text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-2xl">
                    {name}
                </motion.div>
            </div>
        </motion.div>
    );
}

const PhoneIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const EmailIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>;
const MapPinIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const LinkedinIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const InstagramIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const YoutubeIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>;
