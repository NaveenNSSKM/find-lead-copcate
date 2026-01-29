import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FindLead.ai - Hook Your Perfect 100",
  description: "Findlead uses a Strategic AI Agent to research high-intent leads and write handcrafted drips.",

  icons: {
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f%5B%5D=clash-display@400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${openSans.variable} antialiased bg-white text-[#121212] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
