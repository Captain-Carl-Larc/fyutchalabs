import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// 1. HARDCODED DATA (Single Source of Truth for your services)
export const SERVICES_DATA = {
  'web-development': {
    title: 'Web Development',
    short_description: 'Custom, high-performance websites built with modern frameworks.',
    full_description: 'We build fast, secure, and scalable web applications tailored to your business needs. Our development process focuses on clean code, modern architecture, and exceptional user experiences. We leverage the latest technologies like Next.js and React to ensure your digital presence is future-proof.',
    features: ['Strategic Planning & Consultation', 'Custom Development & Implementation', 'Rigorous Testing & QA', 'Ongoing Support & Maintenance']
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    short_description: 'Intuitive, user-centered interfaces that engage visitors and drive conversions.',
    full_description: 'We craft beautiful, conversion-focused interfaces that your users will love. By combining user psychology with modern design principles, we ensure your digital product is not just pretty, but highly effective at achieving your business goals.',
    features: ['User Research & Personas', 'Wireframing & Prototyping', 'High-Fidelity UI Design', 'Usability Testing']
  },
  'seo-optimization': {
    title: 'SEO & Growth',
    short_description: 'Data-driven search engine optimization strategies to increase organic traffic.',
    full_description: 'We help you dominate search results and attract high-intent traffic. Our SEO strategies go beyond basic keywords, focusing on technical SEO, content authority, and user experience to ensure sustainable, long-term growth.',
    features: ['Technical SEO Audits', 'Keyword Strategy & Mapping', 'On-Page Optimization', 'Performance Tracking & Reporting']
  },
  'app-development': {
    title: 'App Development',
    short_description: 'Cross-platform mobile applications designed for seamless experiences.',
    full_description: 'Take your business mobile with high-performance iOS and Android applications. We build cross-platform apps that feel native, run fast, and provide your users with a flawless experience on any device.',
    features: ['Cross-Platform Architecture', 'Native API Integrations', 'App Store Deployment', 'Post-Launch Support']
  }
};

// 2. THIS IS THE MAGIC FOR PERFORMANCE (SSG)
// Next.js will read this at build time and generate static HTML for every service.
export function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // --- STEP-BY-STEP SLUG FETCHING ---
  
  // 1. Wait for the URL parameters to resolve (Required in Next.js 15)
  const resolvedParams = await params;
  
  // 2. Extract the exact slug from the URL (e.g., "web-development")
  const currentSlug = resolvedParams.slug;
  
  // 3. Look up the matching service in our hardcoded SERVICES_DATA object
  const service = SERVICES_DATA[currentSlug as keyof typeof SERVICES_DATA];

  // If the slug doesn't exist in our object, trigger a fallback UI automatically
  if (!service) {
    return (
      <div className="flex flex-col justify-center items-center mx-auto px-4 py-32 min-h-[60vh] text-center container">
        <h1 className="mb-4 font-bold text-slate-900 text-4xl">Service Not Found</h1>
        <p className="mb-8 text-slate-600">The service you are looking for does not exist.</p>
        <a href="/services" className="font-medium text-slate-900 hover:underline">
          &larr; Back to Services
        </a>
      </div>
    );
  }

  return (
    <main className="bg-white">
      {/* Service Hero */}
      <section className="bg-slate-900 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="mx-auto px-4 md:px-6 container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-slate-800 mb-6 px-3 py-1 border border-slate-700 rounded-full font-medium text-slate-300 text-sm">
              Our Services
            </div>
            <h1 className="mb-6 font-extrabold text-white text-4xl md:text-5xl lg:text-6xl text-balance tracking-tight">
              {service.title}
            </h1>
            <p className="max-w-2xl text-slate-300 text-xl text-balance leading-relaxed">
              {service.short_description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto px-4 md:px-6 container">
          <div className="gap-12 lg:gap-8 grid lg:grid-cols-3">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 font-bold text-slate-900 text-3xl">Overview</h2>
              <p className="mb-10 text-slate-600 text-lg leading-relaxed">
                {service.full_description}
              </p>

              <h3 className="mb-6 font-bold text-slate-900 text-2xl">What's Included?</h3>
              <ul className="space-y-4 mb-8">
                {service.features.map((item, i) => (
                  <li key={i} className="flex items-start bg-slate-50 p-4 border border-slate-100 rounded-xl">
                    <CheckCircle2 className="mr-4 w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sticky Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="top-24 sticky bg-slate-50 shadow-sm p-8 border border-slate-200 rounded-2xl">
                <h3 className="mb-4 font-bold text-slate-900 text-xl">Ready to get started?</h3>
                <p className="mb-6 text-slate-600">
                  Let's discuss how our {service.title} expertise can help your business grow and scale.
                </p>
                <a
                  href={`/contact?service=${currentSlug}`} 
                  className="inline-flex justify-center items-center bg-slate-900 hover:bg-slate-800 shadow px-6 rounded-md w-full h-12 font-medium text-white text-sm transition-colors"
                >
                  Request a Proposal
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}