import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// Mock data aligned with your Supabase `projects` table schema
const featuredProjects = [
  {
    id: '1',
    title: 'Fintech Dashboard Redesign',
    slug: 'fintech-dashboard',
    description: 'A complete overhaul of a legacy financial platform, focusing on data visualization, user experience, and real-time transaction speeds.',
    cover_image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tech_stack: ['Next.js', 'Tailwind CSS', 'Supabase', 'Recharts'],
  },
  {
    id: '2',
    title: 'E-Commerce Mobile App',
    slug: 'ecommerce-mobile-app',
    description: 'A high-converting iOS and Android application for a boutique fashion retailer, featuring AR try-ons and seamless checkout.',
    cover_image_url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop',
    tech_stack: ['React Native', 'Node.js', 'Stripe', 'GraphQL'],
  }
];

export default function ProjectsPreview() {
  return (
    <section 
      aria-labelledby="projects-heading" 
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto px-4 md:px-6 container">
        
        {/* Section Header */}
        <div className="flex md:flex-row flex-col justify-between md:items-end gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <h2 
              id="projects-heading" 
              className="font-bold text-slate-950 text-3xl sm:text-4xl tracking-tight"
            >
              Featured Work
            </h2>
            <p className="mt-4 text-slate-600 text-lg text-balance">
              A selection of our recent projects. We partner with ambitious brands to build digital products that drive real business results.
            </p>
          </div>
          
          {/* Desktop "View All" Link */}
          <a 
            href="/projects" 
            className="hidden md:inline-flex items-center font-medium text-slate-900 hover:text-slate-600 text-sm transition-colors"
          >
            View all projects
            <ArrowUpRight className="ml-1 w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="gap-8 lg:gap-12 grid md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article 
              key={project.id} 
              className="group relative flex flex-col justify-between items-start"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative bg-slate-100 mb-6 rounded-2xl w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] overflow-hidden">
                {/* NOTE: In your Next.js project, replace <img> with <Image> from 'next/image'
                  e.g., <Image src={project.cover_image_url} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                */}
                <img
                  src={project.cover_image_url}
                  alt={`Screenshot of ${project.title}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Subtle overlay for better text contrast if you ever put text over images */}
                <div className="absolute inset-0 bg-slate-900/5 group-hover:opacity-0 transition-opacity" />
              </div>

              {/* Project Info */}
              <div className="w-full">
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech_stack.map((tech) => (
                    <span 
                      key={tech}
                      className="inline-flex items-center bg-slate-50 px-2.5 py-0.5 border border-slate-200 rounded-full font-medium text-slate-600 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="mb-3 font-semibold text-slate-950 group-hover:text-slate-700 text-2xl transition-colors">
                  <a href={`/projects/${project.slug}`}>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {project.title}
                  </a>
                </h3>
                
                <p className="text-slate-600 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile "View All" Button */}
        <div className="md:hidden mt-12">
          <a 
            href="/projects" 
            className="inline-flex justify-center items-center bg-white hover:bg-slate-100 shadow-sm px-8 border border-slate-200 rounded-md w-full h-11 font-medium text-slate-950 hover:text-slate-900 text-sm transition-colors"
          >
            View all projects
          </a>
        </div>

      </div>
    </section>
  );
}