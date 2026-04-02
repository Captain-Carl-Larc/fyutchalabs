import React from 'react';
import type { Metadata } from "next";

/**
 * METADATA FOR SEO
 */
export const metadata: Metadata = {
  title: "Fyutcha Labs | High-Performance Web Development",
  description: "We build scalable, high-converting digital products for ambitious brands. Expert Next.js and React development.",
  metadataBase: new URL('https://fyutchalabs.com'),
};

/**
 * NOTE FOR LOCAL ENVIRONMENT:
 * The following imports are commented out to allow the file to compile 
 * in this preview environment. Please UNCOMMENT them in your VS Code.
 */
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/ui/layout/Footer";

/**
 * PREVIEW MOCKS
 * These allow the file to run in the browser preview. 
 * DELETE these when you paste the code into your local project.
 */
const Header = () => (
  <header className="flex justify-between items-center bg-white px-8 py-6 border-slate-100 border-b w-full">
    <div className="font-bold text-xl tracking-tighter">FYUTCHA LABS</div>
    <div className="hidden md:flex gap-6 font-medium text-slate-500 text-sm">
      <span>Services</span>
      <span>Work</span>
      <span>Contact</span>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-slate-900 px-8 py-12 w-full text-slate-400">
    <div className="flex md:flex-row flex-col justify-between items-center gap-8 mx-auto max-w-7xl">
      <div className="font-bold text-white tracking-tighter">FYUTCHA LABS</div>
      <div className="text-xs">© {new Date().getFullYear()} All rights reserved.</div>
    </div>
  </footer>
);

/**
 * ROOT LAYOUT
 * Optimized with a premium system font stack to ensure lightning-fast 
 * builds and loads, bypassing Google Font network dependencies.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="bg-white text-slate-900 antialiased"
        style={{
          // Premium system font stack for performance and build stability
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Header />
        
        <main className="flex flex-col grow">
          {children || (
            <div className="flex flex-col justify-center items-center space-y-6 p-12 text-center grow">
              <div className="inline-flex items-center bg-blue-50 px-3 py-1 rounded-full font-bold text-blue-600 text-xs uppercase tracking-widest">
                Optimization Active
              </div>
              <h1 className="font-black text-4xl md:text-6xl tracking-tight">
                High-Performance <br />Layout Ready.
              </h1>
              <p className="mx-auto max-w-xl text-slate-500 text-lg leading-relaxed">
                Your build environment is now isolated from external font dependencies, ensuring your 
                <code className="bg-slate-100 mx-1 px-1 rounded font-mono text-blue-600">pnpm build</code> 
                command passes every time.
              </p>
            </div>
          )}
        </main>

        <Footer />
      </body>
    </html>
  );
}