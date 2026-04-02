import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      aria-labelledby="hero-heading" 
      className="relative flex justify-center items-center bg-white pt-24 md:pt-32 lg:pt-40 pb-32 md:pb-40 lg:pb-48 w-full min-h-screen overflow-hidden"
    >
      {/* Background subtle grid pattern for visual depth */}
      <div 
        className="z-0 absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size:[4rem_4rem] [radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
        aria-hidden="true"
      />

      <div className="z-10 relative flex flex-col items-center mx-auto px-4 md:px-6 text-center container">
        
        {/* Eyebrow / Badge */}
        {/* <div className="inline-flex items-center bg-slate-50 hover:bg-slate-100 mb-8 px-3 py-1 border border-slate-200 rounded-full font-medium text-slate-800 text-sm transition-colors">
          <Sparkles className="mr-2 w-4 h-4 text-amber-500" aria-hidden="true" />
          <span>Elevating digital experiences</span>
        </div> */}

        {/* Main Headline - Using text-balance to prevent awkward orphans */}
        <h1 
          id="hero-heading"
          className="max-w-4xl font-extrabold text-slate-950 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-balance tracking-tight"
        >
          We build high-performance websites that drive growth.
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-slate-600 text-lg md:text-xl text-balance leading-relaxed">
          Stop losing customers to slow, outdated digital experiences. We design, build, and optimize scalable web solutions tailored for your business.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex sm:flex-row flex-col justify-center items-center gap-4 mt-10 w-full sm:w-auto">
          {/* Primary CTA */}
          <a 
            href="/contact" 
            className="inline-flex justify-center items-center bg-slate-900 hover:bg-slate-800 disabled:opacity-50 shadow px-8 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 w-full sm:w-auto h-12 font-medium text-white text-sm transition-colors disabled:pointer-events-none"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
          </a>
          
          {/* Secondary CTA */}
          <a 
            href="/projects" 
            className="inline-flex justify-center items-center bg-white hover:bg-slate-100 disabled:opacity-50 shadow-sm px-8 border border-slate-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 w-full sm:w-auto h-12 font-medium text-slate-950 hover:text-slate-900 text-sm transition-colors disabled:pointer-events-none"
          >
            View Our Work
          </a>
        </div>

        {/* Optional: Trust Indicators / Social Proof */}
        <div className="mt-16 pt-8 border-slate-100 border-t w-full max-w-3xl">
          <p className="mb-6 font-medium text-slate-500 text-sm uppercase tracking-wider">
            Trusted by innovative teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale">
            {/* Placeholder logos - replace with actual SVGs later */}
            <div className="font-serif font-bold text-xl">Acme Corp</div>
            <div className="font-bold text-xl tracking-tighter">GlobalTech</div>
            <div className="font-bold text-xl italic">Innovate.io</div>
            <div className="font-bold text-xl">Nexus</div>
          </div>
        </div>

      </div>
    </section>
  );
}