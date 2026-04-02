"use client";

import React, { useState, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, MapPin, Phone, ArrowRight, Loader2 } from 'lucide-react';

// 1. Define our form validation schema using Zod
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

// Infer the TypeScript type from our schema
type ContactFormValues = z.infer<typeof contactSchema>;

// 2. The actual form component
function ContactFormContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    // Add 'as any' right here to bypass the version type mismatch!
    resolver: zodResolver(contactSchema as any),
    defaultValues: {
      service: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('service') || '' : '',
    },
  });

  // Handle form submission
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // TODO: Replace this timeout with your actual Supabase / API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form data ready to send to DB:', data);
      
      // Redirect to the thank you page on success
      if (typeof window !== 'undefined') {
        window.location.href = '/thank-you';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block mb-2 font-medium text-slate-700 text-sm">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className={`w-full rounded-md border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 ${
            errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-300'
          }`}
          placeholder="John Doe"
        />
        {errors.name && <p className="mt-2 text-red-600 text-sm">{errors.name.message}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block mb-2 font-medium text-slate-700 text-sm">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className={`w-full rounded-md border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 ${
            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300'
          }`}
          placeholder="john@company.com"
        />
        {errors.email && <p className="mt-2 text-red-600 text-sm">{errors.email.message}</p>}
      </div>

      {/* Service Selection Field */}
      <div>
        <label htmlFor="service" className="block mb-2 font-medium text-slate-700 text-sm">
          What are you looking for?
        </label>
        <select
          {...register('service')}
          id="service"
          className="bg-white px-4 py-3 border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 w-full text-slate-900 text-sm transition-all"
        >
          <option value="">Select a service (Optional)</option>
          <option value="web-development">Web Development</option>
          <option value="ui-ux-design">UI/UX Design</option>
          <option value="seo-optimization">SEO & Growth</option>
          <option value="app-development">App Development</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block mb-2 font-medium text-slate-700 text-sm">
          Project Details <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className={`w-full rounded-md border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 resize-none ${
            errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-300'
          }`}
          placeholder="Tell us about your goals, timeline, and budget..."
        />
        {errors.message && <p className="mt-2 text-red-600 text-sm">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex justify-center items-center bg-slate-900 hover:bg-slate-800 disabled:opacity-70 shadow px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 w-full h-12 font-medium text-white text-sm transition-colors disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="ml-2 w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}

// 3. The Main Page Component
export default function ContactPage() {
  return (
    <main className="bg-slate-50 py-16 md:py-24 min-h-screen">
      <div className="mx-auto px-4 md:px-6 max-w-6xl container">
        
        {/* Page Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h1 className="mb-4 font-extrabold text-slate-900 text-4xl md:text-5xl text-balance tracking-tight">
            Let's get your project started.
          </h1>
          <p className="text-slate-600 text-lg text-balance">
            For the fastest response, reach out via WhatsApp or give us a call. Alternatively, fill out the form for a detailed inquiry.
          </p>
        </div>

        <div className="items-start gap-12 lg:gap-8 grid lg:grid-cols-5">
          
          {/* Left Column: Fast Contact Options */}
          <div className="space-y-4 lg:col-span-2">
            
            {/* Primary Action: WhatsApp Card */}
            <a 
              href="https://wa.me/1234567890?text=Hi%20Fyutcha%20Labs!%20I'd%20like%20to%20discuss%20a%20project." 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex justify-between items-center bg-[#25D366] shadow-[#25D366]/20 shadow-lg hover:shadow-[#25D366]/30 p-4 sm:p-5 rounded-xl overflow-hidden text-white transition-all hover:-translate-y-1"
            >
              <div className="z-10 relative flex items-center gap-3">
                {/* Genuine WhatsApp SVG Icon - Scaled down to 24px */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="drop-shadow-sm shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <div>
                  <h3 className="font-bold text-base tracking-tight">Chat on WhatsApp</h3>
                  <p className="font-medium text-green-100 text-xs">Average response: 5 mins</p>
                </div>
              </div>
              <ArrowRight className="z-10 relative opacity-80 group-hover:opacity-100 ml-2 w-4 h-4 transition-all group-hover:translate-x-1 shrink-0" />
              {/* Decorative background glow */}
              <div className="-top-8 -right-8 absolute bg-white/20 group-hover:bg-white/30 blur-2xl rounded-full w-24 h-24 transition-colors" />
            </a>

            {/* Secondary Action: Call Card */}
            <a 
              href="tel:+1234567890" 
              className="group relative flex justify-between items-center bg-slate-900 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 p-4 sm:p-5 rounded-xl overflow-hidden text-white transition-all hover:-translate-y-1"
            >
              <div className="z-10 relative flex items-center gap-3">
                <div className="bg-slate-800 p-2 rounded-full shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-base tracking-tight">Call Us Directly</h3>
                  <p className="font-medium text-slate-400 text-xs">+1 (555) 123-4567</p>
                </div>
              </div>
              <ArrowRight className="z-10 relative opacity-60 group-hover:opacity-100 ml-2 w-4 h-4 transition-all group-hover:translate-x-1 shrink-0" />
            </a>

            {/* Tertiary / Physical Info */}
            <div className="flex flex-col gap-3 bg-white shadow-sm p-4 sm:p-5 border border-slate-200 rounded-xl">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="bg-slate-50 p-2 border border-slate-100 rounded-lg shrink-0">
                  <Mail className="w-4 h-4 text-slate-500" />
                </div>
                <a href="mailto:hello@fyutchalabs.com" className="font-medium hover:text-slate-900 text-sm break-all transition-colors">
                  hello@fyutchalabs.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="bg-slate-50 p-2 border border-slate-100 rounded-lg shrink-0">
                  <MapPin className="w-4 h-4 text-slate-500" />
                </div>
                <span className="font-medium text-sm">123 Innovation Drive, NY 10001</span>
              </div>
            </div>

          </div>

          {/* Right Column: The Detailed Form */}
          <div className="lg:col-span-3 bg-white shadow-slate-200/20 shadow-xl p-8 md:p-10 border border-slate-200 rounded-3xl">
            <div className="mb-8 pb-8 border-slate-100 border-b">
              <h2 className="mb-2 font-bold text-slate-900 text-2xl">Or send a detailed inquiry</h2>
              <p className="text-slate-500">Fill out the fields below and we'll reply via email within 24 hours.</p>
            </div>
            
            {/* Wrap the form in Suspense because we use useSearchParams() */}
            <Suspense fallback={<div className="flex justify-center items-center py-20"><Loader2 className="w-8 h-8 text-slate-400 animate-spin" /></div>}>
              <ContactFormContent />
            </Suspense>
          </div>

        </div>
      </div>
    </main>
  );
}