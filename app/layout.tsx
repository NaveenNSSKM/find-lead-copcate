import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FindLead.ai - Hook Your Perfect 100",
  description: "Findlead uses a Strategic AI Agent to research high-intent leads and write handcrafted drips.",
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${openSans.variable}`}>
       <head>
        {/* Preconnect to Fontshare to reduce latency for font files */}
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        
        {/* Preload critical fonts to eliminate render-blocking delay */}
        <link 
          rel="preload" 
          href="https://cdn.fontshare.com/wf/BFBSY7LX5W2U2EROCLVVTQP4VS7S4PC3/IIUX4FGTMD2LK2VWD3RVTAS4SSMUN7B5/53RZKGODFYDW3QHTIL7IPOWTBCSUEZK7.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="preload" 
          href="https://cdn.fontshare.com/wf/VFMK2COV3DN37JR7JQ4CAOJPZ7KWKNY7/ODD5YJNDLHZZB2MIT3DPVH4EIHAMZ34D/BSY64LPTT3OPLVKAZKL3AHKRWZ3D74AC.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
      </head>
      <body
        className="antialiased bg-white text-[#121212] overflow-x-hidden min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
