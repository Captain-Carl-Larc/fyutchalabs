import React from 'react';

export default function PrivacyPolicyPage() {
  const lastUpdated = "April 2, 2026";

  return (
    <main className="bg-white min-h-screen">
      {/* Simple Header */}
      <section className="bg-slate-50 pt-24 md:pt-32 pb-12 md:pb-16 border-slate-100 border-b">
        <div className="mx-auto px-4 md:px-6 container">
          <h1 className="font-extrabold text-slate-900 text-3xl md:text-4xl tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-slate-500 text-sm">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-12 md:py-20">
        <div className="mx-auto px-4 md:px-6 max-w-4xl container">
          <div className="space-y-8 max-w-none text-slate-600 leading-relaxed prose prose-slate prose-lg">
            
            <section>
              <h2 className="mb-4 font-bold text-slate-900 text-2xl">1. Introduction</h2>
              <p>
                At Fyutcha Labs ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal data we hold about you. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-bold text-slate-900 text-2xl">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, specifically:</p>
              <ul className="space-y-2 pl-6 list-disc">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and any other details you provide through our contact forms or WhatsApp integration.</li>
                <li><strong>Project Details:</strong> Information regarding your business, budget, and project requirements submitted via our inquiry forms.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, collected via standard server logs and analytical tools.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-bold text-slate-900 text-2xl">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="space-y-2 pl-6 list-disc">
                <li>Respond to your inquiries and schedule discovery calls.</li>
                <li>Provide requested services and manage our business relationship.</li>
                <li>Send relevant marketing communications (if you have opted in).</li>
                <li>Improve our website performance and user experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-bold text-slate-900 text-2xl">4. Data Sharing and Disclosure</h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share information with trusted service providers (such as hosting partners or CRM tools) who assist us in operating our business, provided they agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-bold text-slate-900 text-2xl">5. Cookies and Tracking</h2>
              <p>
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect the functionality of certain parts of the site.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-bold text-slate-900 text-2xl">6. Your Rights</h2>
              <p>
                Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or request the deletion of your information. To exercise these rights, please contact us at the email provided below.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-bold text-slate-900 text-2xl">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="inline-block bg-slate-50 mt-4 p-6 border border-slate-200 rounded-xl">
                <p className="font-bold text-slate-900">Fyutcha Labs</p>
                <p>Email: hello@fyutchalabs.com</p>
                <p>Location: Nairobi,Kenya</p>
              </div>
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}