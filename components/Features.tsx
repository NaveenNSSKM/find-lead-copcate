import Image from 'next/image';

export default function Features() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-heading font-semibold text-black mb-4">The &quot;Sniper&quot; Toolkit</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">Everything you need to execute precise, high-conversion campaigns.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            img: '/images/avatar-1.png',
                            title: 'Hyper-Enriched Data',
                            desc: 'Turn messy CSVs into gold with automated validation and 3rd-party data enrichment.'
                        },
                        {
                            img: '/images/avatar-2.png',
                            title: 'AI Research Agent',
                            desc: 'Your intern is now an AI. It researches funding news, LinkedIn activity, and pain points in seconds.'
                        },
                        {
                            img: '/images/avatar-3.png',
                            title: 'Lead Scoring Pipeline',
                            desc: 'Move from "Lead" to "Qualified" instantly with automated demographic and firmographic scoring.'
                        },
                        {
                            img: '/images/avatar-4.png',
                            title: 'Unified Conversation Hub',
                            desc: 'Manage every reply from every campaign in one sentiment-analyzed dashboard.'
                        }
                    ].map((feature, i) => (
                        <div key={i} className="relative overflow-hidden rounded-[2rem] h-[420px] group hover:-translate-y-2 transition-transform duration-300 bg-gray-100">

                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={feature.img}
                                    alt={feature.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                            </div>

                            {/* Content Area - Positioned Bottom */}
                            <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex flex-col justify-end h-full pointer-events-none">
                                <h3 className="text-xl font-heading font-bold mb-3 text-[#121212] leading-tight drop-shadow-sm">
                                    {feature.title}
                                </h3>
                                <p className="text-[#121212] text-sm opacity-90 leading-relaxed font-medium">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
