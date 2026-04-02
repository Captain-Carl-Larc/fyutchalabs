import React from 'react';
import { ExternalLink } from 'lucide-react';

// MOCK DATA - Structured to match your Supabase 'projects' table
const MOCK_PROJECTS = [
  {
    id: '1',
    slug: 'fintech-dashboard',
    title: 'Fintech Dashboard Redesign',
    description: 'A complete overhaul of a legacy financial platform, focusing on data visualization, user experience, and real-time transaction speeds.',
    cover_image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tech_stack: ['Next.js', 'Tailwind CSS', 'Supabase', 'Recharts'],
    project_url: 'https://example.com'
  },
  {
    id: '2',
    slug: 'ecommerce-mobile-app',
    title: 'E-Commerce Mobile App',
    description: 'A high-converting iOS and Android application for a boutique fashion retailer, featuring AR try-ons and seamless checkout.',
    cover_image_url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop',
    tech_stack: ['React Native', 'Node.js', 'Stripe', 'GraphQL'],
    project_url: 'https://example.com'
  },
  {
    id: '3',
    slug: 'saas-landing-page',
    title: 'B2B SaaS Landing Page',
    description: 'A high-performance marketing website designed to maximize lead generation and clearly communicate complex software features.',
    cover_image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    tech_stack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Sanity CMS'],
    project_url: 'https://example.com'
  },
  {
    id: '4',
    slug: 'healthcare-portal',
    title: 'Patient Management Portal',
    description: 'A HIPAA-compliant web application allowing patients to easily book appointments, view test results, and message their doctors.',
    cover_image_url: 'https://images.unsplash.com/photo-1576091160550-2173ff94031d?q=80&w=2070&auto=format&fit=crop',
    tech_stack: ['React', 'TypeScript', 'PostgreSQL', 'Express'],
    project_url: 'https://example.com'
  }
];

export default function ProjectsPage() {
  return (
    <main className="bg-white pb-24 min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-50 pt-24 md:pt-32 pb-16 md:pb-24 border-slate-100 border-b">
        <div className="mx-auto px-4 md:px-6 text-center container">
          <h1 className="mb-6 font-extrabold text-slate-900 text-4xl md:text-5xl lg:text-6xl text-balance tracking-tight">
            Our Work
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 text-lg text-balance">
            A selection of our recent projects. We partner with ambitious brands to build digital products that drive real business results.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto px-4 md:px-6 container">
          {/* Changed to 3 columns on large screens and reduced the gap slightly */}
          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
            {MOCK_PROJECTS.map((project) => (
              <article 
                key={project.id} 
                className="group relative flex flex-col justify-between items-start"
              >
                {/* Changed aspect-[4/3] to aspect-video (16:9) to reduce height */}
                <div className="relative bg-slate-100 shadow-sm group-hover:shadow-md mb-6 border border-slate-200/60 rounded-2xl w-full aspect-video overflow-hidden transition-all duration-300">
                  <img
                    src={project.cover_image_url}
                    alt={`Screenshot of ${project.title}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:opacity-0 transition-opacity" />
                </div>

                {/* Project Info */}
                <div className="w-full">
                  {/* Tech Stack Pills */}
                  <div className="z-10 relative flex flex-wrap gap-2 mb-4">
                    {project.tech_stack.map((tech) => (
                      <span 
                        key={tech}
                        className="inline-flex items-center bg-slate-50 px-2.5 py-0.5 border border-slate-200 rounded-full font-medium text-slate-600 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title and Link */}
                  <h2 className="mb-3 font-bold text-slate-900 group-hover:text-slate-700 text-2xl transition-colors">
                    {/* Link: Now opens the external project URL in a new tab */}
                    <a href={project.project_url} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {project.title}
                    </a>
                  </h2>
                  
                  <p className="mb-6 text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="inline-flex items-center font-semibold text-slate-900 text-sm">
                    Visit live site
                    <ExternalLink className="ml-1 w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}