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
        
        {/* Inlined Font-Face for zero-latency discovery */}
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'Clash Display';
            src: url('https://cdn.fontshare.com/wf/VFMK2COV3DN37JR7JQ4CAOJPZ7KWKNY7/ODD5YJNDLHZZB2MIT3DPVH4EIHAMZ34D/BSY64LPTT3OPLVKAZKL3AHKRWZ3D74AC.woff2') format('woff2');
            font-weight: 400;
            font-display: swap;
            font-style: normal;
          }
          @font-face {
            font-family: 'Clash Display';
            src: url('https://cdn.fontshare.com/wf/2GQIT54GKQY3JRFTSHS4ARTRNRQISSAA/3CIP5EBHRRHE5FVQU3VFROPUERNDSTDF/JTSL5QESUXATU47LCPUNHZQBDDIWDOSW.woff2') format('woff2');
            font-weight: 500;
            font-display: swap;
            font-style: normal;
          }
          @font-face {
            font-family: 'Clash Display';
            src: url('https://cdn.fontshare.com/wf/FPDAZ2S6SW4QMSRIIKNNGTPM6VIXYMKO/5HNPQ453FRLIQWV2FNOBUU3FKTDZQVSG/Z3MGHFHX6DCTLQ55LJYRJ5MDCZPMFZU6.woff2') format('woff2');
            font-weight: 600;
            font-display: swap;
            font-style: normal;
          }
          @font-face {
            font-family: 'Clash Display';
            src: url('https://cdn.fontshare.com/wf/BFBSY7LX5W2U2EROCLVVTQP4VS7S4PC3/IIUX4FGTMD2LK2VWD3RVTAS4SSMUN7B5/53RZKGODFYDW3QHTIL7IPOWTBCSUEZK7.woff2') format('woff2');
            font-weight: 700;
            font-display: swap;
            font-style: normal;
          }
        `}} />

        {/* Preload critical fonts to eliminate render-blocking delay */}
        <link rel="preload" href="https://cdn.fontshare.com/wf/BFBSY7LX5W2U2EROCLVVTQP4VS7S4PC3/IIUX4FGTMD2LK2VWD3RVTAS4SSMUN7B5/53RZKGODFYDW3QHTIL7IPOWTBCSUEZK7.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body
        className="antialiased bg-white text-[#121212] overflow-x-hidden min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
