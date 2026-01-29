import Image from 'next/image';

export default function Close() {
    return (
        <footer className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <div className="bg-accent-primary text-black p-12 md:p-24 rounded-[3rem] relative overflow-hidden shadow-2xl">
                    {/* Abstract shapes in background */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/30 rounded-full blur-xl"></div>
                    <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-400/50 rounded-full blur-2xl translate-x-1/3 -translate-y-1/2"></div>

                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 relative z-10 leading-tight">
                        Ready to transform your cold outreach into warm conversations?
                    </h2>
                    <p className="text-xl md:text-2xl opacity-80 mb-12 font-medium relative z-10 max-w-2xl mx-auto">
                        Stop burning domains. Start booking meetings.
                    </p>
                    <a href="#" className="bg-black text-white px-10 py-5 rounded-full font-bold text-xl inline-block hover:-translate-y-1 hover:shadow-xl transition-all relative z-10">
                        Claim Your Lifetime Deal Now
                    </a>

                    
                </div>
            </div>
        </footer>
    );
}
