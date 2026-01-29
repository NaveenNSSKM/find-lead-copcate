'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Pricing() {
    const [showComparison, setShowComparison] = useState(false);
    const [isAnnual, setIsAnnual] = useState(true);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(3); // Default to 3rd question expanded
    const [selectedCategory, setSelectedCategory] = useState('Pricing');
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <>
            <section className="pt-32 pb-24 px-6 relative bg-[#EFE34B]">
                <div className="max-w-[1440px] mx-auto ">
                    <div className="text-center mb-16 px-4 md:px-0">
                        <div className="inline-flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 bg-[#FFFDF5] border border-[#E6D84B] text-[#5A3908] px-8 py-4 md:px-6 md:py-2 rounded-[1.5rem] md:rounded-full mb-8 shadow-sm max-w-full">
                            {/* Mobile View */}
                            <div className="flex items-center gap-2 md:hidden">
                                <span className="text-orange-500 text-sm">⚡</span>
                                <span className="font-bold text-base">Limited Time Offer</span>
                            </div>
                            <span className="md:hidden text-center text-[#5A3908]/80 font-medium text-sm">
                                Early Adopter One-Time Pricing
                            </span>

                            {/* Desktop View */}
                            <span className="hidden md:inline-flex items-center gap-2 font-bold text-sm">
                                <span>⚡</span> Limited Time: Early Adopter One-Time Pricing
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 tracking-tight text-black leading-[1.1]">
                            Own Your Sales Pipeline. Forever.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
                            Stop paying monthly for "volume" you don't use. Grab a <span className="font-bold text-black">Lifetime Deal</span> on the AI Research Agent that finds your perfect leads and books your meetings while you sleep.
                        </p>
                    </div>

                    {/* 3 Cards Grid - One-Time Pricing */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16 px-4 md:px-0 mt-[170px]">

                        {/* Card 1: Professional */}
                        <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-between h-auto min-h-[650px] relative overflow-hidden ring-1 ring-gray-200 hover:shadow-xl transition-shadow duration-300 w-full max-w-[400px] mx-auto lg:max-w-none">
                            {/* Professional Plan Image - Top Right Corner */}
                            <div className="absolute top-0 right-0 z-0 pointer-events-none">
                                <Image
                                    src="/images/Free.png"
                                    alt="Corner Decoration"
                                    width={140}
                                    height={140}
                                    className="object-contain  -translate-y-2"
                                />
                            </div>

                            <div className="relative z-10 w-full">
                                <h3 className="text-4xl font-heading font-bold mb-2">Professional</h3>
                                <p className="text-sm font-semibold text-gray-500 mb-6">Solo Founders</p>

                                <div className="mb-2">
                                    <span className="text-6xl font-bold tracking-tight text-gray-900">$199</span>
                                </div>
                                <p className="text-xs font-medium text-gray-400 mb-8">One-Time Payment</p>

                                <div className="h-[1px] bg-gray-100 w-full mb-8"></div>

                                <ul className="space-y-4">

                                    <ListItem text="1 User Seat" />
                                    <ListItem text="100 Leads" />
                                    <ListItem text="8,000 Emails" />
                                    <ListItem text="1,000 Credits" />
                                    <ListItem text="Included" />
                                    <ListItem text="Included" />
                                    <ListItem text="—" />
                                    <ListItem text="—" />
                                    <ListItem text="Standard" />
                                </ul>

                            </div>

                            <button className="w-full py-4 rounded-xl border-2 border-gray-200 text-gray-600 font-bold text-lg hover:text-black hover:border-black transition-all mt-8">
                                Get Started
                            </button>
                        </div>

                        {/* Card 2: Growth (Best Value) - Dark Theme */}
                        <div className="relative z-20 lg:-translate-y-4 w-full max-w-[400px] mx-auto lg:max-w-none">
                            {/* Best Value Badge - Top Center */}
                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-30">
                                <span className="bg-[#efe34b] text-black text-sm font-extrabold px-6 py-2 rounded-full uppercase tracking-wider border-0.5 border-[#2B2B2B] shadow-[0_4px_10px_rgba(0,0,0,0.3)] cursor-default whitespace-nowrap">
                                    Best Value
                                </span>
                            </div>

                            <div className="bg-[#2B2B2B] text-white rounded-[2rem] p-8 flex flex-col justify-between h-auto min-h-[700px] relative shadow-2xl overflow-hidden border border-gray-700">
                                {/* Purple Texture Background */}
                                <div className="absolute top-0 right-0 w-full h-[220px] opacity-100 z-0"></div>

                                {/* Growth Plan Image - Top Right Corner */}
                                <div className="absolute top-0 right-0 z-0 pointer-events-none">
                                    <Image
                                        src="/images/Professional.png"
                                        alt="Corner Decoration"
                                        width={160}
                                        height={160}
                                        className="object-contain  opacity-90"
                                    />
                                </div>

                                <div className="relative z-10 w-full">
                                    <h3 className="text-4xl font-heading font-bold text-[#EFE34B] mb-2">Growth</h3>
                                    <p className="text-sm font-medium text-gray-200 mb-6">Small GTM Teams</p>

                                    <div className="mb-2">
                                        <span className="text-7xl font-bold tracking-tight">$349</span>
                                    </div>
                                    <p className="text-xs font-medium text-gray-400 mb-8">One-Time Payment</p>

                                    <div className="h-[1px] bg-gray-700 w-full mb-8"></div>

                                    <ul className="space-y-4">
                                        <ListItemDark text="2 User Seats" />
                                        <ListItemDark text="500 Leads" />
                                        <ListItemDark text="20,000 Emails" />
                                        <ListItemDark text="5,000 Credits" />
                                        <ListItemDark text="Included" />
                                        <ListItemDark text="Included" />
                                        <ListItemDark text="Remove Branding" />
                                        <ListItemDark text="CRM Integrations" />
                                        <ListItemDark text="Standard" />
                                    </ul>

                                </div>

                                <button className="w-full py-4 rounded-xl bg-[#0066FF] text-white font-bold text-lg hover:bg-blue-600 transition-all mt-8 shadow-lg shadow-blue-900/50 hover:shadow-blue-900/80">
                                    Claim Lifetime Deal
                                </button>
                            </div>
                        </div>

                        {/* Card 3: Agency */}
                        <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-between h-auto min-h-[650px] relative overflow-hidden ring-1 ring-gray-200 hover:shadow-xl transition-shadow duration-300 w-full max-w-[400px] mx-auto md:col-span-2 lg:col-span-1 lg:max-w-none">
                            {/* Agency Plan Image - Top Right Corner */}
                            <div className="absolute top-0 right-0 z-0 pointer-events-none">
                                <Image
                                    src="/images/Basic.png"
                                    alt="Corner Decoration"
                                    width={140}
                                    height={140}
                                    className="object-contain"
                                />
                            </div>

                            <div className="relative z-10 w-full">
                                <h3 className="text-4xl font-heading font-bold mb-2">Agency</h3>
                                <p className="text-sm font-semibold text-gray-500 mb-6">Lead Gen Agencies</p>

                                <div className="mb-2">
                                    <span className="text-6xl font-bold tracking-tight text-gray-900">$899</span>
                                </div>
                                <p className="text-xs font-medium text-gray-400 mb-8">One-Time Payment</p>

                                <div className="h-[1px] bg-gray-100 w-full mb-8"></div>

                                <ul className="space-y-4">
                                    <ListItem text="5 User Seats" />
                                    <ListItem text="1,500 Leads" />
                                    <ListItem text="60,000 Emails" />
                                    <ListItem text="15,000 Credits" />
                                    <ListItem text="Included" />
                                    <ListItem text="Included" />
                                    <ListItem text="Remove Branding" />
                                    <ListItem text="API Access" />
                                    <ListItem text="Priority Support" />
                                </ul>

                            </div>

                            <button className="w-full py-4 rounded-xl border-2 border-gray-200 text-gray-600 font-bold text-lg hover:text-black hover:border-black transition-all mt-8">
                                Contact for Agency
                            </button>
                        </div>

                    </div>

                    {/* Bottom Compare Button */}
                    <div className="text-center pb-12">
                        <button
                            onClick={() => setShowComparison(true)}
                            className="bg-[#007AFF] text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 mx-auto hover:bg-blue-600 transition-colors shadow-lg"
                        >
                            Compare Plans
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1L6 6L11 1" /></svg>
                        </button>
                    </div>

                    {/* Comparison Modal/Table */}
                    {showComparison && (
                        <div className="fixed inset-0 z-50 bg-black/80 mt-[50px] backdrop-blur-sm overflow-y-auto" onClick={() => setShowComparison(false)}>
                            <div className="flex min-h-full items-center justify-center p-4 md:p-8">
                                <div className="bg-[#111] rounded-3xl shadow-2xl w-full  relative overflow-hidden ring-1 ring-white/10" onClick={e => e.stopPropagation()}>
                                    <div className="p-6 md:p-8 flex justify-between items-center bg-[#111] border-b border-gray-800">
                                        <h2 className="text-2xl font-heading font-bold text-white"></h2>
                                        <button
                                            onClick={() => setShowComparison(false)}
                                            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                        </button>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">

                                            {/* Card 1: Enlight App */}
                                            <div className="bg-white rounded-[1.5rem] p-6 h-full">
                                                <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center mb-4 border border-yellow-100">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E6B000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                                </div>
                                                <h3 className="text-xl font-bold mb-4 text-black tracking-tight">The Findlead Enrich App</h3>
                                                <ul className="space-y-4">
                                                    <li className="flex items-start gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#EFE34B] mt-2 flex-shrink-0"></span>
                                                        <p className="text-gray-600 text-[15px] leading-relaxed">
                                                            <span className="font-bold text-gray-900 block mb-1">Verified Leads:</span>
                                                            We don't just give you data; we verify it. Every lead is bounce-checked to protect your sender reputation.
                                                        </p>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#EFE34B] mt-2 flex-shrink-0"></span>
                                                        <p className="text-gray-600 text-[15px] leading-relaxed">
                                                            <span className="font-bold text-gray-900 block mb-1">AI Lead Scoring:</span>
                                                            Our algorithm automatically ranks your leads from A to D based on their likelihood to convert.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Card 2: Outreach Engine */}
                                            <div className="bg-white rounded-[1.5rem] p-6 h-full">
                                                <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center mb-4 border border-yellow-100">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E6B000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                </div>
                                                <h3 className="text-xl font-bold mb-4 text-black tracking-tight">The AI Outreach Engine</h3>
                                                <ul className="space-y-4">
                                                    <li className="flex items-start gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#EFE34B] mt-2 flex-shrink-0"></span>
                                                        <p className="text-gray-600 text-[15px] leading-relaxed">
                                                            <span className="font-bold text-gray-900 block mb-1">Sequential Drips:</span>
                                                            Build multi-step sequences that feel human. If they don't reply to email #1, the AI adjusts the tone for email #2.
                                                        </p>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#EFE34B] mt-2 flex-shrink-0"></span>
                                                        <p className="text-gray-600 text-[15px] leading-relaxed">
                                                            <span className="font-bold text-gray-900 block mb-1">Sentiment-Powered Inbox:</span>
                                                            Our AI highlights only positive replies so you can jump into conversations that matter.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Card 3: Strategic AI Agent */}
                                            <div className="bg-white rounded-[1.5rem] p-6 h-full">
                                                <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center mb-4 border border-yellow-100">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E6B000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>
                                                </div>
                                                <h3 className="text-xl font-bold mb-4 text-black tracking-tight">The Strategic AI Agent</h3>
                                                <ul className="space-y-4">
                                                    <li className="flex items-start gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#EFE34B] mt-2 flex-shrink-0"></span>
                                                        <p className="text-gray-600 text-[15px] leading-relaxed">
                                                            <span className="font-bold text-gray-900 block mb-1">Research Agent:</span>
                                                            Finds funding news, job changes, and intent signals to craft hyper-personalized intros.
                                                        </p>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#EFE34B] mt-2 flex-shrink-0"></span>
                                                        <p className="text-gray-600 text-[15px] leading-relaxed">
                                                            <span className="font-bold text-gray-900 block mb-1">Campaign Agent (Growth & Agency):</span>
                                                            Give it a goal, and it builds the full strategy from ICP to sequences.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </section>

            {/* Platform Capabilities Section - Black Background */}
            <section className="bg-black py-20 px-6">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Feature Cards (Controlled Scroll) */}
                        <div className="relative h-[400px] overflow-hidden">
                            <div
                                className="flex flex-col gap-6 transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateY(-${(activeFeature * 424)}px)` }} // 400px height + 24px gap = ~424px shift per card approx
                            >
                                {/* Feature Card 1 */}
                                <div className="bg-white rounded-[1.5rem] p-6 shadow-lg h-[400px] flex flex-col justify-center flex-shrink-0 box-border">
                                    <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 border border-yellow-100">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E6B000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-6 text-black tracking-tight">The Findlead Enrich App</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-4">
                                            <span className="w-2 h-2 rounded-full bg-[#EFE34B] mt-2 flex-shrink-0"></span>
                                            <p className="text-gray-600 text-base leading-relaxed">
                                                <span className="font-bold text-gray-900 block mb-1">Verified Leads:</span>
                                                We don't just give you data; we verify it. Every lead is bounce-checked to protect your sender reputation.
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <span className="w-2 h-2 rounded-full bg-[#EFE34B] mt-2 flex-shrink-0"></span>
                                            <p className="text-gray-600 text-base leading-relaxed">
                                                <span className="font-bold text-gray-900 block mb-1">AI Lead Scoring:</span>
                                                Our algorithm automatically ranks your leads from A to D based on their likelihood to convert.
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                {/* Feature Card 2 */}
                                <div className="bg-white rounded-[1.5rem] p-6 shadow-lg h-[400px] flex flex-col justify-center flex-shrink-0 box-border">
                                    <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 border border-yellow-100">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E6B000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-6 text-black tracking-tight">The AI Outreach Engine</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-4">
                                            <span className="w-2 h-2 rounded-full bg-[#EFE34B] mt-2 flex-shrink-0"></span>
                                            <p className="text-gray-600 text-base leading-relaxed">
                                                <span className="font-bold text-gray-900 block mb-1">Sequential Drips:</span>
                                                Build multi-step sequences that feel human. If they don't reply to email #1, the AI adjusts the tone for email #2.
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <span className="w-2 h-2 rounded-full bg-[#EFE34B] mt-2 flex-shrink-0"></span>
                                            <p className="text-gray-600 text-base leading-relaxed">
                                                <span className="font-bold text-gray-900 block mb-1">Sentiment-Powered Inbox:</span>
                                                Our AI highlights only positive replies so you can jump into conversations that matter.
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                {/* Feature Card 3 */}
                                <div className="bg-white rounded-[1.5rem] p-6 shadow-lg h-[400px] flex flex-col justify-center flex-shrink-0 box-border">
                                    <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 border border-yellow-100">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E6B000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-6 text-black tracking-tight">The Strategic AI Agent</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-4">
                                            <span className="w-2 h-2 rounded-full bg-[#EFE34B] mt-2 flex-shrink-0"></span>
                                            <p className="text-gray-600 text-base leading-relaxed">
                                                <span className="font-bold text-gray-900 block mb-1">Research Agent:</span>
                                                Finds funding news, job changes, and intent signals to craft hyper-personalized intros.
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <span className="w-2 h-2 rounded-full bg-[#EFE34B] mt-2 flex-shrink-0"></span>
                                            <p className="text-gray-600 text-base leading-relaxed">
                                                <span className="font-bold text-gray-900 block mb-1">Campaign Agent (Growth & Agency):</span>
                                                Give it a goal, and it builds the full strategy from ICP to sequences.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Interactive Interactive Headings */}
                        <div className="text-white pl-0 lg:pl-12 flex flex-col justify-center h-full">
                            <p className="text-[#EFE34B] font-bold text-sm mb-8 uppercase tracking-wider">PLATFORM CAPABILITIES</p>

                            <div className="flex flex-col gap-8">
                                <button
                                    onClick={() => setActiveFeature(0)}
                                    className={`text-left transition-all duration-300 group ${activeFeature === 0 ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                                >
                                    <h3 className={`text-3xl md:text-4xl font-heading font-bold mb-2 ${activeFeature === 0 ? 'text-white' : 'text-gray-300'}`}>
                                        The Findlead Enrich App
                                    </h3>
                                    <div className={`h-1 bg-[#EFE34B] transition-all duration-300 ${activeFeature === 0 ? 'w-24' : 'w-0'}`}></div>
                                </button>

                                <button
                                    onClick={() => setActiveFeature(1)}
                                    className={`text-left transition-all duration-300 group ${activeFeature === 1 ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                                >
                                    <h3 className={`text-3xl md:text-4xl font-heading font-bold mb-2 ${activeFeature === 1 ? 'text-white' : 'text-gray-300'}`}>
                                        The AI Outreach Engine
                                    </h3>
                                    <div className={`h-1 bg-[#EFE34B] transition-all duration-300 ${activeFeature === 1 ? 'w-24' : 'w-0'}`}></div>
                                </button>

                                <button
                                    onClick={() => setActiveFeature(2)}
                                    className={`text-left transition-all duration-300 group ${activeFeature === 2 ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                                >
                                    <h3 className={`text-3xl md:text-4xl font-heading font-bold mb-2 ${activeFeature === 2 ? 'text-white' : 'text-gray-300'}`}>
                                        The Strategic AI Agent
                                    </h3>
                                    <div className={`h-1 bg-[#EFE34B] transition-all duration-300 ${activeFeature === 2 ? 'w-24' : 'w-0'}`}></div>
                                </button>
                            </div>

                            <div className="mt-12">
                                <button className="bg-[#EFE34B] text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors shadow-lg flex items-center gap-2">
                                    See it for Free
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M1 15L15 1M15 1H5M15 1V11" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Findlead? Comparison Section */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-[1440px] mx-auto">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-black">Why Findlead?</h2>

                    <div className="bg-[#111] rounded-[2rem] overflow-hidden shadow-2xl p-4 md:p-4 max-w-5xl mx-auto">
                        <div className="w-full">
                            {/* Grid Header - Desktop Only */}
                            <div className="hidden md:grid grid-cols-12 border-b border-gray-800 text-sm tracking-wider uppercase font-semibold text-gray-500">
                                <div className="col-span-4 p-6 flex items-center">Feature</div>
                                <div className="col-span-4 p-6 flex items-center justify-center text-center">Traditional Tools</div>
                                <div className="col-span-4 p-6 flex items-center justify-center text-center text-[#EFE34B]">Findlead (The Sniper)</div>
                            </div>

                            {/* Row 1: Cost */}
                            <div className="grid grid-cols-2 md:grid-cols-12 border-b border-gray-800 text-sm md:text-base group hover:bg-white/5 transition-colors">
                                <div className="col-span-2 md:col-span-4 p-4 md:p-6 font-bold text-white flex items-center justify-center md:justify-start bg-white/5 md:bg-transparent tracking-wide">
                                    Cost
                                </div>
                                <div className="col-span-1 md:col-span-4 p-4 md:p-6 text-gray-400 flex flex-col md:flex-row items-center justify-center text-center border-r md:border-r-0 border-gray-800">
                                    <span className="md:hidden text-[10px] uppercase tracking-wider text-gray-600 mb-2 font-bold">Traditional</span>
                                    $99 - $300/Month
                                </div>
                                <div className="col-span-1 md:col-span-4 p-4 md:p-6 text-[#EFE34B] font-bold flex flex-col md:flex-row items-center justify-center text-center">
                                    <span className="md:hidden text-[10px] uppercase tracking-wider text-[#EFE34B]/50 mb-2 font-bold">Findlead</span>
                                    One-Time Payment
                                    <svg className="ml-2 w-5 h-5 hidden md:block" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                </div>
                            </div>

                            {/* Row 2: Strategy */}
                            <div className="grid grid-cols-2 md:grid-cols-12 border-b border-gray-800 text-sm md:text-base group hover:bg-white/5 transition-colors">
                                <div className="col-span-2 md:col-span-4 p-4 md:p-6 font-bold text-white flex items-center justify-center md:justify-start bg-white/5 md:bg-transparent tracking-wide">
                                    Strategy
                                </div>
                                <div className="col-span-1 md:col-span-4 p-4 md:p-6 text-gray-400 flex flex-col md:flex-row items-center justify-center text-center border-r md:border-r-0 border-gray-800">
                                    <span className="md:hidden text-[10px] uppercase tracking-wider text-gray-600 mb-2 font-bold">Traditional</span>
                                    Spray and Pray
                                </div>
                                <div className="col-span-1 md:col-span-4 p-4 md:p-6 text-white font-bold flex flex-col md:flex-row items-center justify-center text-center">
                                    <span className="md:hidden text-[10px] uppercase tracking-wider text-[#EFE34B]/50 mb-2 font-bold">Findlead</span>
                                    AI-Driven Research
                                </div>
                            </div>

                            {/* Row 3: Domain Safety */}
                            <div className="grid grid-cols-2 md:grid-cols-12 border-b border-gray-800 text-sm md:text-base group hover:bg-white/5 transition-colors">
                                <div className="col-span-2 md:col-span-4 p-4 md:p-6 font-bold text-white flex items-center justify-center md:justify-start bg-white/5 md:bg-transparent tracking-wide">
                                    Domain Safety
                                </div>
                                <div className="col-span-1 md:col-span-4 p-4 md:p-6 text-gray-400 flex flex-col md:flex-row items-center justify-center text-center border-r md:border-r-0 border-gray-800">
                                    <span className="md:hidden text-[10px] uppercase tracking-wider text-gray-600 mb-2 font-bold">Traditional</span>
                                    High Risk of Burn
                                </div>
                                <div className="col-span-1 md:col-span-4 p-4 md:p-6 text-white font-bold flex flex-col md:flex-row items-center justify-center text-center">
                                    <span className="md:hidden text-[10px] uppercase tracking-wider text-[#EFE34B]/50 mb-2 font-bold">Findlead</span>
                                    Low Volume, High Quality
                                </div>
                            </div>

                            {/* Row 4: Data Quality */}
                            <div className="grid grid-cols-2 md:grid-cols-12 text-sm md:text-base group hover:bg-white/5 transition-colors">
                                <div className="col-span-2 md:col-span-4 p-4 md:p-6 font-bold text-white flex items-center justify-center md:justify-start bg-white/5 md:bg-transparent tracking-wide">
                                    Data Quality
                                </div>
                                <div className="col-span-1 md:col-span-4 p-4 md:p-6 text-gray-400 flex flex-col md:flex-row items-center justify-center text-center border-r md:border-r-0 border-gray-800">
                                    <span className="md:hidden text-[10px] uppercase tracking-wider text-gray-600 mb-2 font-bold">Traditional</span>
                                    Stale Databases
                                </div>
                                <div className="col-span-1 md:col-span-4 p-4 md:p-6 text-[#EFE34B] font-bold flex flex-col md:flex-row items-center justify-center text-center">
                                    <span className="md:hidden text-[10px] uppercase tracking-wider text-[#EFE34B]/50 mb-2 font-bold">Findlead</span>
                                    Real-Time Enrichment
                                    <svg className="ml-2 w-5 h-5 hidden md:block" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            {/* FAQ Section */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-[800px] mx-auto">
                    <h2 className="text-4xl font-heading font-bold text-[#111] mb-12 text-center">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        {/* FAQ Item 1 */}
                        <div className={`border-b border-gray-100 transition-all duration-300 ${expandedFaq === 0 ? 'pb-6' : 'pb-0'}`}>
                            <button
                                onClick={() => setExpandedFaq(expandedFaq === 0 ? null : 0)}
                                className="w-full text-left py-6 flex items-center justify-between group hover:bg-gray-50/50 rounded-lg px-2 transition-colors -mx-2"
                            >
                                <span className="font-heading font-medium text-lg text-[#111]">Is there a monthly fee hidden anywhere?</span>
                                <span className={`w-8 h-8 flex items-center justify-center transition-transform duration-300 ${expandedFaq === 0 ? 'rotate-45' : 'group-hover:rotate-90'}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
                                </span>
                            </button>
                            <div className={`grid transition-all duration-300 ease-in-out ${expandedFaq === 0 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="px-2 text-gray-500 leading-relaxed text-base">
                                        No. This is a Lifetime Deal. Pay once, own the software forever. You only pay for additional credits if you want to scale beyond your tier.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Item 2 */}
                        <div className={`border-b border-gray-100 transition-all duration-300 ${expandedFaq === 1 ? 'pb-6' : 'pb-0'}`}>
                            <button
                                onClick={() => setExpandedFaq(expandedFaq === 1 ? null : 1)}
                                className="w-full text-left py-6 flex items-center justify-between group hover:bg-gray-50/50 rounded-lg px-2 transition-colors -mx-2"
                            >
                                <span className="font-heading font-medium text-lg text-[#111]">Does it integrate with my CRM?</span>
                                <span className={`w-8 h-8 flex items-center justify-center transition-transform duration-300 ${expandedFaq === 1 ? 'rotate-45' : 'group-hover:rotate-90'}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
                                </span>
                            </button>
                            <div className={`grid transition-all duration-300 ease-in-out ${expandedFaq === 1 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="px-2 text-gray-500 leading-relaxed text-base">
                                        Yes, our Growth and Agency plans offer seamless integration with HubSpot, Pipedrive, and more via Zapier/Make.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Item 3 */}
                        <div className={`border-b border-gray-100 transition-all duration-300 ${expandedFaq === 2 ? 'pb-6' : 'pb-0'}`}>
                            <button
                                onClick={() => setExpandedFaq(expandedFaq === 2 ? null : 2)}
                                className="w-full text-left py-6 flex items-center justify-between group hover:bg-gray-50/50 rounded-lg px-2 transition-colors -mx-2"
                            >
                                <span className="font-heading font-medium text-lg text-[#111]">What is the 14-day Guarantee?</span>
                                <span className={`w-8 h-8 flex items-center justify-center transition-transform duration-300 ${expandedFaq === 2 ? 'rotate-45' : 'group-hover:rotate-90'}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
                                </span>
                            </button>
                            <div className={`grid transition-all duration-300 ease-in-out ${expandedFaq === 2 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="px-2 text-gray-500 leading-relaxed text-base">
                                        If you don't feel like a Sales Sniper within 14 days, we’ll refund 100% of your investment. No questions asked.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Ready to Transform */}
            <section className="bg-[#EFE34B] py-16 px-6">
                <div className="max-w-[1100px] mx-auto">
                    <div
                        className="bg-white rounded-3xl px-12 py-16 relative overflow-hidden cta-hover-group"
                    >
                        {/* Left Clapping Hands */}
                        <div className="absolute bottom-0 left-4 md:left-8 flex gap-4 md:gap-8 opacity-50 md:opacity-100 scale-75 md:scale-100 origin-bottom-left transition-all">
                            <Image
                                src="/images/left-clap-1.png"
                                alt="Clapping hands"
                                width={80}
                                height={80}
                                style={{ width: 'auto', height: 'auto' }}
                                className="object-contain animate-clap-1 w-16 md:w-20"
                            />
                            <Image
                                src="/images/left-clap-2.png"
                                alt="Clapping hands"
                                width={80}
                                height={80}
                                style={{ width: 'auto', height: 'auto' }}
                                className="object-contain animate-clap-2 w-16 md:w-20"
                            />
                        </div>

                        {/* Right Clapping Hands */}
                        <div className="absolute bottom-0 right-4 md:right-8 flex gap-4 md:gap-8 opacity-50 md:opacity-100 scale-75 md:scale-100 origin-bottom-right transition-all">
                            <Image
                                src="/images/right-clap-3.png"
                                alt="Clapping hands"
                                width={80}
                                height={80}
                                style={{ width: 'auto', height: 'auto' }}
                                className="object-contain animate-clap-3 w-16 md:w-20"
                            />
                            <Image
                                src="/images/right-clap-4.png"
                                alt="Clapping hands"
                                width={80}
                                height={80}
                                style={{ width: 'auto', height: 'auto' }}
                                className="object-contain animate-clap-4 w-16 md:w-20"
                            />
                        </div>

                        {/* Content */}
                        <div className="text-center relative z-10">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 max-w-3xl mx-auto leading-tight">
                                Ready to transform the way you find online leads once and for all?
                            </h2>
                            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2 mx-auto shadow-lg">
                                Sign up for free
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 15L15 1M15 1H5M15 1V11" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accelerate Growth Section */}
            <section
                className="py-24 px-6 relative overflow-hidden"
                style={{
                    backgroundImage: 'url(/images/bg-subscribe.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#111' // Fallback color
                }
                }
            >
                <div className="max-w-[1100px] mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading tracking-wide text-white uppercase mb-2">
                                ACCELERATE YOUR
                            </h2>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-wide text-[#EFE34B] uppercase">
                                BUSINESS GROWTH.
                            </h2>
                        </div>

                        {/* Right Form */}
                        <div className="lg:pl-12">
                            <label className="block text-white text-sm mb-2 pl-4">Email*</label>
                            <div className="flex bg-[#222] rounded-full p-1 border border-gray-600 max-w-lg">
                                <input
                                    type="email"
                                    placeholder="What's your work email?"
                                    className="flex-1 bg-transparent text-white px-6 py-3 outline-none placeholder-gray-400 rounded-l-full"
                                />
                                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap">
                                    Contact Us
                                </button>
                            </div>
                            <p className="text-gray-400 text-xs mt-3 pl-4">
                                Free leads | Credit cards not required
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

function ListItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 4L3.5 6.5L9 1" /></svg>
            </div>
            <span className="text-sm font-medium text-gray-600">{text}</span>
        </li>
    );
}

function ListItemDark({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#444] flex items-center justify-center shrink-0 border border-gray-600">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 4L3.5 6.5L9 1" /></svg>
            </div>
            <span className="text-sm font-medium text-gray-300">{text}</span>
        </li>
    );
}

// Comparison Table Components
function ComparisonSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h3 className="text-lg font-bold mb-4 pl-4 border-l-4 border-[#EFE34B]">{title}</h3>
            <div className="divide-y divide-gray-100">
                {children}
            </div>
        </div>
    );
}

function ComparisonRow({ feature, free, basic, pro, managed, highlighted }: { feature: string; free: string | boolean; basic: string | boolean; pro: string | boolean; managed: string | boolean; highlighted?: boolean }) {
    const renderCell = (value: string | boolean) => {
        if (value === true) {
            return (
                <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-500"><path d="M20 6L9 17L4 12" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
            );
        } else if (value === false) {
            return (
                <div className="flex justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-300"><path d="M18 6L6 18M6 6l12 12" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
            );
        }
        return <span className="text-gray-900 font-medium">{value}</span>;
    };

    return (
        <div className="grid grid-cols-5 gap-4 py-4 items-center text-center hover:bg-gray-50 transition-colors">
            <div className="text-left pl-4 font-medium text-gray-600">{feature}</div>
            <div>{renderCell(free)}</div>
            <div>{renderCell(basic)}</div>
            <div className={`${highlighted ? 'bg-[#FCF9CB]/30 -mx-2 rounded' : ''}`}>{renderCell(pro)}</div>
            <div>{renderCell(managed)}</div>
        </div>
    );
}

// 3-Column Comparison Components for the new design
function ComparisonSection3Col({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h3 className="text-base font-bold mb-3 text-gray-700">{title}</h3>
            <div className="divide-y divide-gray-100">
                {children}
            </div>
        </div>
    );
}

function ComparisonRow3Col({ feature, basic, standard, advance, highlighted }: { feature: string; basic: string | boolean; standard: string | boolean; advance: string | boolean; highlighted?: boolean }) {
    const renderCell = (value: string | boolean, isHighlighted: boolean = false) => {
        if (value === true) {
            return (
                <div className="flex justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
            );
        } else if (value === false) {
            return (
                <div className="flex justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
            );
        }
        return <span className="text-gray-800 font-medium text-sm">{value}</span>;
    };

    return (
        <div className="grid grid-cols-4 gap-4 py-3 items-center text-center hover:bg-gray-50 transition-colors">
            <div className="text-left text-sm font-medium text-gray-700">{feature}</div>
            <div>{renderCell(basic)}</div>
            <div className="bg-[#FCF9CB]/40 -mx-2 px-2 py-1 rounded">{renderCell(standard, true)}</div>
            <div>{renderCell(advance)}</div>
        </div>
    );
}
