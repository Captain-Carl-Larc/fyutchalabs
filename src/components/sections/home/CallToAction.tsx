import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section 
      aria-labelledby="cta-heading" 
      className="relative bg-slate-900 py-20 md:py-28 overflow-hidden"
    >
      {/* Optional subtle background glow/gradient for depth */}
      <div 
        className="top-0 left-1/2 absolute bg-slate-800/50 blur-3xl rounded-full w-full max-w-3xl h-full -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="z-10 relative mx-auto px-4 md:px-6 container">
        <div className="mx-auto max-w-3xl text-center">
          
          <h2 
            id="cta-heading" 
            className="font-bold text-white text-3xl sm:text-4xl md:text-5xl text-balance tracking-tight"
          >
            Ready to transform your digital presence?
          </h2>
          
          <p className="mx-auto mt-6 max-w-xl text-slate-300 text-lg text-balance leading-relaxed">
            Let's discuss how we can help your business scale with a modern, high-performance website and data-driven marketing.
          </p>
          
          <div className="flex sm:flex-row flex-col justify-center items-center gap-4 mt-10">
            <a 
              href="/contact" 
              className="inline-flex justify-center items-center bg-white hover:bg-slate-100 disabled:opacity-50 shadow-lg px-8 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 w-full sm:w-auto h-12 font-bold text-slate-900 text-sm hover:scale-105 transition-all disabled:pointer-events-none"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}