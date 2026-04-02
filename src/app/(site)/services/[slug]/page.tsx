export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="mx-auto px-4 py-24 md:py-32 container">
      <h1 className="font-bold text-slate-900 text-4xl tracking-tight">
        Service: {params.slug}
      </h1>
      <p className="mt-4 text-slate-600">Detailed service content goes here.</p>
    </div>
  );
}