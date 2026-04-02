import React from 'react';
import { ArrowRight, Code2, LayoutTemplate, LineChart, Smartphone } from 'lucide-react';

// MOCK DATA - Will be replaced by Supabase fetch
const services = [
  { slug: 'web-development', title: 'Web Development', description: 'Custom, high-performance websites built with modern frameworks.', icon: Code2 },
  { slug: 'ui-ux-design', title: 'UI/UX Design', description: 'Intuitive, user-centered interfaces that engage visitors.', icon: LayoutTemplate },
  { slug: 'seo-optimization', title: 'SEO & Growth', description: 'Data-driven search engine optimization strategies.', icon: LineChart },
  { slug: 'app-development', title: 'App Development', description: 'Cross-platform mobile applications for iOS and Android.', icon: Smartphone },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 pt-24 md:pt-32 pb-16 md:pb-24 border-slate-100 border-b">
        <div className="mx-auto px-4 md:px-6 text-center container">
          <h1 className="mb-6 font-extrabold text-slate-900 text-4xl md:text-5xl lg:text-6xl text-balance tracking-tight">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 text-lg text-balance">
            Comprehensive digital solutions engineered to elevate your brand, streamline your operations, and drive revenue.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto px-4 md:px-6 container">
          <div className="gap-8 grid md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <a 
                  key={service.slug} 
                  href={`/services/${service.slug}`}
                  className="group flex sm:flex-row flex-col gap-6 bg-white shadow-sm hover:shadow-md p-8 border border-slate-200 hover:border-slate-300 rounded-2xl transition-all"
                >
                  <div className="shrink-0">
                    <div className="inline-flex justify-center items-center bg-slate-100 group-hover:bg-slate-900 rounded-xl w-14 h-14 text-slate-900 group-hover:text-white transition-colors">
                      <Icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <h2 className="mb-2 font-bold text-slate-900 group-hover:text-slate-700 text-2xl transition-colors">
                      {service.title}
                    </h2>
                    <p className="mb-4 text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center mt-auto font-semibold text-slate-900 text-sm">
                      Explore service 
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}