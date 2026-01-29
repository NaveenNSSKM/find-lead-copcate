import Image from "next/image";

export default function Hero() {
    return (
        <header className="relative bg-white overflow-hidden min-h-[800px]">
            {/* MAIN WRAPPER */}
            <div className="relative max-w-[1440px] mx-auto px-8 md:px-16 pt-20 pb-8 flex flex-col lg:flex-row lg:items-start">

                {/* ================= LEFT CONTENT ================= */}
                <div className="relative z-10 flex flex-col items-start pt-12 max-w-[750px]">

                    {/* Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-[2.4rem] font-extrabold text-[#121212] mb-6">
                        <span className="block leading-[1.2]">
                            Hook Your Perfect 100.
                        </span>
                        <span className="block mt-2 leading-[1.2]">
                            Not a Random 10,000.
                        </span>
                    </h1>


                    {/* Subtext */}
                    <p className="text-md md:text-md text-gray-800 leading-tight  max-w-[570px] mb-4">
                        The age of &quot;Spray and Pray&quot; is dead. Findlead uses a Strategic AI Agent to research high-intent leads and write handcrafted drips that actually get replies—without burning your domain.
                    </p>

                    {/* CTA Button */}
                    <div className="relative w-fit mb-1">
                        <button className="bg-[#EFE34B] text-black font-bold text-lg px-10 py-4 rounded-full hover:brightness-95 transition-all shadow-md transform hover:-translate-y-1">
                            Claim Your Sniper Trial
                        </button>
                    </div>

                </div>

                {/* ================= RIGHT VISUAL ================= */}
                <div className="relative w-full h-[400px] mt-12 lg:absolute lg:top-[-180px] lg:right-[140px] lg:w-[34%] lg:h-[800px] lg:mt-0 z-0 pointer-events-none">
                    <Image
                        src="/images/hero-main-01.png"
                        alt="Hooking prospects"
                        fill
                        priority
                        className="object-contain object-top lg:object-right"
                        sizes="(max-width: 1024px) 100vw, 34vw"
                    />
                </div>
            </div>

            {/* ================= TRUSTED BY SECTION (CENTERED BOTTOM) ================= */}
            <div className="w-full relative z-20 pb-12">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col items-center relative">
                    {/* Yellow Arrow - Connecting CTA (Left) to Trusted (Center) */}
                    <div className="absolute top-[-80px]  left-[18%] lg:left-[24%] hidden md:block w-32 h-32">
                        <Image
                            src="/images/ui-arrow.png"
                            alt="Arrow"
                            fill
                            className="rotate-[-14deg] object-contain opacity-90"
                            sizes="128px"
                        />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-black mb-8 text-center relative z-10 mt-4">
                        Trusted by Agile Teams, GTM Agencies, and Founder-Led Startups.
                    </h3>

                    <div className="flex flex-wrap gap-8 md:gap-12 justify-center items-center grayscale opacity-90 scale-90">
                        <Image src="/images/partner-amazon.png" alt="Amazon" width={90} height={35} className="h-8 w-auto object-contain" />
                        <Image src="/images/partner-ad.png" alt="Adobe" width={90} height={35} className="h-7 w-auto object-contain" />

                        <div className="flex items-center gap-1 font-bold text-gray-600 text-lg">
                            <span className="text-red-500 text-2xl">●</span> airtel
                        </div>

                        <Image src="/images/partner-microsoft.png" alt="Microsoft" width={100} height={35} className="h-7 w-auto object-contain" />
                        <Image src="/images/partner-oyo.png" alt="OYO" width={70} height={35} className="h-7 w-auto object-contain" />
                        <Image src="/images/partner-reliance.png" alt="Reliance" width={90} height={35} className="h-8 w-auto object-contain" />
                        <Image src="/images/partner-razorpay.png" alt="Razorpay" width={100} height={35} className="h-6 w-auto object-contain" />
                    </div>
                </div>
            </div>
        </header>
    );
}
