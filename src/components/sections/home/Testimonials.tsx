import React from 'react';
import { Star } from 'lucide-react';

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    content: "They completely transformed our online presence. Our conversion rates have doubled since launching the new site, and the backend is incredibly easy for our team to manage.",
    author: "Sarah Jenkins",
    role: "CMO, TechFlow",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 2,
    content: "The level of engineering quality is unmatched. They didn't just build what we asked for; they anticipated our scaling needs and built an architecture that will last us for years.",
    author: "Marcus Chen",
    role: "Founder, RetailOS",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 3,
    content: "Communication was flawless from day one. They delivered the complex web app ahead of schedule, and the SEO improvements started showing results almost immediately.",
    author: "Elena Rodriguez",
    role: "Director of E-Commerce, Veloce",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
  }
];

export default function Testimonials() {
  return (
    <section 
      aria-labelledby="testimonials-heading" 
      className="bg-slate-50 py-20 md:py-28"
    >
      <div className="mx-auto px-4 md:px-6 container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
          <h2 
            id="testimonials-heading" 
            className="font-bold text-slate-950 text-3xl sm:text-4xl text-balance tracking-tight"
          >
            Trusted by teams worldwide
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 text-lg text-balance">
            Don't just take our word for it. Here is what our clients have to say about our work and our partnership.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="gap-8 grid md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="flex flex-col justify-between bg-white shadow-sm p-8 border border-slate-200 rounded-2xl"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex gap-1 mb-6 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-current w-5 h-5" aria-hidden="true" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="mb-8 text-slate-700 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto">
                {/* NOTE: In Next.js, use <Image> instead of <img> 
                    <Image src={testimonial.avatarUrl} alt={testimonial.author} width={48} height={48} className="rounded-full object-cover" />
                */}
                <img 
                  src={testimonial.avatarUrl} 
                  alt={`Avatar of ${testimonial.author}`} 
                  className="rounded-full w-12 h-12 object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-slate-950">
                    {testimonial.author}
                  </div>
                  <div className="text-slate-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}