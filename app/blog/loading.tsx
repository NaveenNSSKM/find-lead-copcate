import React from 'react';

export default function Loading() {
    return (
        <main className="min-h-screen bg-[#EFE34B] flex flex-col pt-32 px-6 md:px-12 max-w-[1440px] mx-auto animate-pulse">
            <div className="h-16 w-64 bg-black/10 rounded-2xl mb-12"></div>

            <div className="flex gap-3 mb-16">
                <div className="h-10 w-20 bg-black/10 rounded-full"></div>
                <div className="h-10 w-24 bg-black/10 rounded-full"></div>
                <div className="h-10 w-28 bg-black/10 rounded-full"></div>
            </div>

            <div className="bg-white/50 rounded-[40px] h-[500px] w-full mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/50 rounded-[40px] h-[400px]"></div>
                <div className="bg-white/50 rounded-[40px] h-[400px]"></div>
                <div className="bg-white/50 rounded-[40px] h-[400px]"></div>
            </div>
        </main>
    );
}
