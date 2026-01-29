import Image from 'next/image';

export default function Segments() {
    return (
        <section id="segments" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-semibold text-black">Why Use Findlead?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 md:gap-6 font-sans">

                    {/* Box 1 - Startups (Blue/Purple) */}
                    <div className="relative p-6 rounded-[1.5rem] flex flex-col justify-center h-[200px] shadow-sm overflow-hidden group">
                        <Image
                            src="/images/bg-card-blue.png"
                            alt="Startups Background"
                            fill
                            className="object-cover z-0"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />

                        <div className="relative z-10">
                            <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md mb-3">
                                <Image src="/images/ui-eye.png" alt="Startups" width={20} height={20} className="object-contain invert brightness-0 w-5 h-5" />
                            </div>
                            <h3 className="text-lg text-white font-bold mb-1">Startups</h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                                Rapidly test ICPs and iterate messaging with AI agility.
                            </p>
                        </div>
                    </div>

                    {/* Box 2 - Founders (Light Blue) */}
                    <div className="relative p-6 rounded-[1.5rem] flex flex-col justify-center h-[200px] shadow-sm overflow-hidden group">
                        <Image
                            src="/images/bg-card-light-blue.png"
                            alt="Founders Background"
                            fill
                            className="object-cover z-0"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />

                        <div className="relative z-10">
                            <div className="bg-black/10 w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-md mb-3">
                                <Image src="/images/icon-5.png" alt="Founders" width={20} height={20} className="object-contain opacity-80 w-5 h-5" />
                            </div>
                            <h3 className="text-lg text-white font-bold mb-1">Founders</h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                                A &quot;Sales Team in a Box&quot; for the time-poor, results-driven leader.
                            </p>
                        </div>
                    </div>

                    {/* Box 3 - Agencies (Dark Blue) */}
                    <div className="relative p-6 rounded-[1.5rem] md:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-span-2 flex flex-col justify-end min-h-[200px] lg:min-h-auto shadow-sm overflow-hidden group">
                        <Image
                            src="/images/bg-card-dark-blue.png"
                            alt="Agencies Background"
                            fill
                            className="object-cover z-0"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                        />

                        <div className="relative z-10 mt-auto">
                            <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-md mb-3">
                                <Image src="/images/icon-3.png" alt="Agencies Icon" width={20} height={20} className="object-contain invert brightness-0 w-5 h-5" />
                            </div>
                            <h3 className="text-lg text-white font-bold mb-1">Agencies</h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                                High-volume deliverability with multi-client sender management.
                            </p>
                        </div>
                    </div>

                    {/* Box 4 - Anti-Spam Playbook (Yellow) */}
                    <div className="relative p-6 rounded-[1.5rem] md:col-span-2 lg:col-span-2 lg:row-start-2 flex flex-col justify-center shadow-sm overflow-hidden h-[200px]">
                        <Image
                            src="/images/bg-card-yellow.png"
                            alt="Playbook Background"
                            fill
                            className="object-cover z-0"
                            sizes="(max-width: 1024px) 100vw, 66vw"
                        />

                        <div className="relative z-10 max-w-xl">
                            <div className="bg-white/30 w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-md mb-3">
                                <Image src="/images/ui-play.png" alt="Playbook" width={20} height={20} className="object-contain invert brightness-0 w-5 h-5" />
                            </div>
                            <h3 className="text-lg text-white font-bold mb-1">The Anti-Spam Playbook</h3>
                            <p className="text-white text-sm leading-relaxed font-medium">
                                Google and Yahoo are blocking bulk senders. We help you send smarter, not louder, ensuring your domain stays safe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
