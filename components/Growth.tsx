export default function Growth() {
    return (
        <section id="growth" className="py-24 bg-[#121212] text-white overflow-hidden relative">
            {/* Abstract Globe Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/20 rounded-full"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#121212_70%)]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-16">10x Your Reply Rate with AI Research</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-12">
                    {[
                        { val: '99%+', label: 'Deliverability through smart rotation' },
                        { val: '20%', label: 'Average positive reply rate for "Sniper" campaigns' },
                        { val: '2 Mins', label: 'Time to research a perfect lead vs. 2 hours manual' },
                        { val: '100%', label: 'Sentiment Accuracy in your Unified Inbox' }
                    ].map((metric, i) => (
                        <div key={i} className="flex flex-col items-center group">
                            <div className="text-4xl md:text-6xl font-heading font-bold text-accent-primary mb-4 group-hover:scale-110 transition-transform">{metric.val}</div>
                            <div className="text-gray-400 text-sm md:text-base font-medium">{metric.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
