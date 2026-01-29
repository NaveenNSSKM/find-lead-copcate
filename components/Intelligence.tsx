import Image from 'next/image';

export default function Intelligence() {
    return (
        <section id="intelligence" className="py-24 bg-[#F8F9FB]">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-12 leading-tight text-black">
                        Strategic Intelligence. <br />
                        <span className="text-gray-400">Not Just Automation.</span>
                    </h2>
                    <ul className="space-y-8">
                        {[
                            { icon: '/images/icon-1.png', title: 'Define Your Strategy First', desc: 'Our AI Agent acts as your Co-Pilot, refining your ICP before a single email is sent.', color: 'bg-red-100 text-red-600' },
                            { icon: '/images/icon-2.png', title: 'Precision Lead Scoring', desc: 'Every prospect is validated and ranked by our proprietary AI algorithm so you know exactly who to prioritize.', color: 'bg-blue-100 text-blue-600' },
                            { icon: '/images/icon-3.png', title: 'Multi-Sender Health Monitoring', desc: 'Intelligently rotate between senders with real-time health indicators to maximize deliverability.', color: 'bg-green-100 text-green-600' },
                            { icon: '/images/icon-4.png', title: 'Sentiment-Powered Inbox', desc: 'AI tags every reply as "Positive" or "Negative," so you can close deals while the bot filters the noise.', color: 'bg-purple-100 text-purple-600' }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-6 group">
                                <div className={`flex-shrink-0 w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <Image src={item.icon} alt={item.title} width={32} height={32} className="object-contain w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-lg mb-2 text-black">{item.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Visual Side - Dashboard Image */}
                <div className="relative">
                    <div className="absolute inset-0 bg-yellow-400 blur-[80px] opacity-20 rounded-full"></div>
                    <Image
                        src="/images/dash.png"
                        alt="Strategic Intelligence Dashboard"
                        width={800}
                        height={600}
                        className="relative z-10 w-full h-auto drop-shadow-2xl rounded-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
