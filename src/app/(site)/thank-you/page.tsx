export default function ThankYouPage() {
  return (
    <div className="mx-auto px-4 py-24 md:py-32 text-center container">
      <h1 className="font-bold text-slate-900 text-4xl tracking-tight">Thank You!</h1>
      <p className="mt-4 text-slate-600">We've received your message and will be in touch shortly.</p>
      <a href="/" className="inline-flex mt-8 font-medium text-slate-900 hover:underline">
        Return to Home &rarr;
      </a>
    </div>
  );
}