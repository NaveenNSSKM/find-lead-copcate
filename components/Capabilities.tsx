import Image from 'next/image';

export default function Capabilities() {
    return (
        <section id="capabilities" className="py-24 bg-[#F8F9FB]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-semibold text-black">Fast. Accessible. Built to Scale.</h2>
                </div>

                <div className="grid lg:grid-cols-[2fr_1fr] gap-6 lg:grid-rows-2">
                    <div className="bg-white p-8 rounded-[2rem] lg:row-span-2 flex flex-col justify-center border border-gray-100 shadow-soft overflow-hidden group">
                        <h3 className="text-2xl font-heading font-semibold mb-4 text-black">3-Step Campaign Launch</h3>
                        <p className="text-gray-500 text-lg mb-10">Define objective, sequence your drips, and launch. It’s the simplest GTM engine ever built for SMBs.</p>
                        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-black">
                            <Image
                                src="/images/digital-tablet-online-learning.jpg"
                                alt="Campaign Launch Dashboard"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 66vw"
                            />
                        </div>

                    </div>

                    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-soft flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-heading font-semibold mb-3 text-black">Strategy-Led Outreach</h3>
                            <p className="text-gray-500">Stop guessing. Our agent asks clarifying questions to perfect your targeting JSON.</p>
                        </div>
                        <div className="relative w-full h-[180px] mt-6 rounded-xl overflow-hidden">
                            <Image
                                src="/images/outreachs.png"
                                alt="Strategy-Led Outreach"
                                fill
                                className="object-contain"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                            />
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-soft hover:border-accent-primary transition-colors cursor-default flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-heading font-semibold mb-3 text-black">Smart Rotation Logic</h3>
                            <p className="text-gray-500">Use &quot;Sticky Sender&quot; logic to ensure follow-ups always come from the same address for consistency.</p>
                        </div>
                        <div className="relative w-full h-[180px] mt-6 rounded-xl overflow-hidden">
                            <Image
                                src="/images/smarter rotation.svg"
                                alt="Smart Rotation Logic"
                                fill
                                className="object-contain"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
