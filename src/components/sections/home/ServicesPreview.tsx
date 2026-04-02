import React from 'react';
import { LayoutTemplate, Code2, LineChart, Smartphone, ArrowRight } from 'lucide-react';

// Mock data - in production, this could be fetched from Supabase 
// or mapped directly if your core services don't change often.
const services = [
  {
    title: 'Web Development',
    description: 'Custom, high-performance websites built with modern frameworks like Next.js and React.',
    icon: Code2,
    href: '/services/web-development',
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive, user-centered interfaces that engage visitors and drive higher conversion rates.',
    icon: LayoutTemplate,
    href: '/services/ui-ux-design',
  },
  {
    title: 'SEO & Growth',
    description: 'Data-driven search engine optimization strategies to increase your organic visibility and traffic.',
    icon: LineChart,
    href: '/services/seo-optimization',
  },
  {
    title: 'App Development',
    description: 'Cross-platform mobile applications designed to provide seamless experiences on any device.',
    icon: Smartphone,
    href: '/services/app-development',
  }
];

export default function ServicesPreview() {
  return (
    <section 
      aria-labelledby="services-heading" 
      className="bg-slate-50 py-20 md:py-28"
    >
      <div className="mx-auto px-4 md:px-6 container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
          <h2 
            id="services-heading" 
            className="font-bold text-slate-950 text-3xl sm:text-4xl tracking-tight"
          >
            Digital solutions for modern brands
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 text-lg text-balance">
            We offer end-to-end services to help you establish a powerful online presence and scale your business efficiently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="group relative flex flex-col justify-between bg-white shadow-sm hover:shadow-md p-6 border border-slate-200 hover:border-slate-300 rounded-2xl transition-all"
              >
                <div>
                  <div className="inline-flex justify-center items-center bg-slate-100 group-hover:bg-slate-900 mb-4 rounded-lg w-12 h-12 text-slate-900 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-semibold text-slate-950 text-xl">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Link */}
                <a 
                  href={service.href} 
                  className="inline-flex items-center font-medium text-slate-900 hover:text-slate-600 text-sm transition-colors"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more 
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  {/* Invisible overlay link to make the whole card clickable for better UX */}
                  <span className="absolute inset-0" aria-hidden="true" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Optional bottom CTA */}
        <div className="mt-16 text-center">
          <a 
            href="/services" 
            className="inline-flex justify-center items-center bg-slate-900 hover:bg-slate-800 shadow-sm px-8 border border-slate-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 h-11 font-medium text-white hover:text-slate-50 text-sm transition-colors"
          >
            View All Services
          </a>
        </div>

      </div>
    </section>
  );
}