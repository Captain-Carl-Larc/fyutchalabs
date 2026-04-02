import React from 'react';
import { Target, Zap, Users, ShieldCheck, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="mx-auto px-4 md:px-6 text-center container">
          <h1 className="font-extrabold text-slate-900 text-4xl md:text-5xl lg:text-6xl text-balance tracking-tight">
            Driven by data, obsessed with design.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-slate-600 text-lg md:text-xl text-balance leading-relaxed">
            We are a team of digital craftsmen helping businesses scale through high-performance web development, strategic design, and tailored marketing solutions.
          </p>
        </div>
      </section>

      {/* Our Story / Intro Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto px-4 md:px-6 container">
          <div className="items-center gap-12 grid md:grid-cols-2">
            <div className="relative bg-slate-100 rounded-2xl aspect-square md:aspect-[4/3 overflow-hidden">
              {/* NOTE: Swap with next/image in your project */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Our team collaborating"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="max-w-lg">
              <h2 className="mb-6 font-bold text-slate-900 text-3xl">
                Built on the belief that digital experiences should be frictionless.
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between stunning aesthetics and robust engineering, we partner with ambitious brands to solve complex business problems.
                </p>
                <p>
                  We don't just build websites; we engineer digital platforms that drive measurable growth, optimize operations, and elevate your brand's authority in the market.
                </p>
              </div>
              
              <div className="gap-6 grid grid-cols-2 mt-8 pt-8 border-slate-100 border-t">
                <div>
                  <div className="font-extrabold text-slate-900 text-3xl">50+</div>
                  <div className="mt-1 font-medium text-slate-500 text-sm">Projects Delivered</div>
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-3xl">98%</div>
                  <div className="mt-1 font-medium text-slate-500 text-sm">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-900 py-16 md:py-24 text-slate-50">
        <div className="mx-auto px-4 md:px-6 container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 font-bold text-white text-3xl md:text-4xl">Our Core Values</h2>
            <p className="text-slate-400 text-lg">
              The principles that guide our work, our decisions, and our partnerships.
            </p>
          </div>

          <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-4">
            {/* Value 1 */}
            <div className="bg-slate-800/50 p-6 border border-slate-700/50 rounded-2xl">
              <div className="flex justify-center items-center bg-slate-700 mb-6 rounded-lg w-12 h-12 text-white">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="mb-3 font-semibold text-white text-xl">Results-Driven</h3>
              <p className="text-slate-400 leading-relaxed">
                We focus on metrics that matter. If it doesn't move the needle for your business, we don't build it.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-slate-800/50 p-6 border border-slate-700/50 rounded-2xl">
              <div className="flex justify-center items-center bg-slate-700 mb-6 rounded-lg w-12 h-12 text-white">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="mb-3 font-semibold text-white text-xl">Performance First</h3>
              <p className="text-slate-400 leading-relaxed">
                Speed is a feature. We engineer for maximum performance to ensure seamless user experiences and superior SEO.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-slate-800/50 p-6 border border-slate-700/50 rounded-2xl">
              <div className="flex justify-center items-center bg-slate-700 mb-6 rounded-lg w-12 h-12 text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="mb-3 font-semibold text-white text-xl">Radical Transparency</h3>
              <p className="text-slate-400 leading-relaxed">
                No black-box processes. We keep you informed with clear communication, honest timelines, and straightforward pricing.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-slate-800/50 p-6 border border-slate-700/50 rounded-2xl">
              <div className="flex justify-center items-center bg-slate-700 mb-6 rounded-lg w-12 h-12 text-white">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="mb-3 font-semibold text-white text-xl">True Partnership</h3>
              <p className="text-slate-400 leading-relaxed">
                We view ourselves as an extension of your team. Your success is inherently tied to our own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto px-4 md:px-6 text-center container">
          <div className="bg-slate-50 mx-auto p-8 md:p-12 border border-slate-100 rounded-3xl max-w-2xl">
            <h2 className="mb-4 font-bold text-slate-900 text-3xl md:text-4xl">
              Let's build something great.
            </h2>
            <p className="mb-8 text-slate-600 text-lg">
              Ready to take your digital presence to the next level? Get in touch with our team today.
            </p>
            <a 
              href="/contact" 
              className="inline-flex justify-center items-center bg-slate-900 hover:bg-slate-800 shadow px-8 rounded-md h-12 font-medium text-white text-sm transition-colors"
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}