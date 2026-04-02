export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center px-4 min-h-[70vh] text-center">
      <h1 className="font-extrabold text-slate-900 text-8xl tracking-tighter">404</h1>
      <h2 className="mt-6 font-bold text-slate-800 text-3xl tracking-tight">Page not found</h2>
      <p className="mx-auto mt-4 max-w-md text-slate-500 text-lg">
        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      <div className="flex gap-4 mt-10">
        <a
          href="/"
          className="inline-flex justify-center items-center bg-slate-900 hover:bg-slate-800 shadow px-8 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 h-11 font-medium text-white text-sm transition-colors"
        >
          Back to Home
        </a>
        <a
          href="/contact"
          className="inline-flex justify-center items-center bg-white hover:bg-slate-100 shadow-sm px-8 border border-slate-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 h-11 font-medium text-slate-900 hover:text-slate-900 text-sm transition-colors"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}