export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="mx-auto px-4 py-24 md:py-32 max-w-3xl container">
      <h1 className="font-bold text-slate-900 text-4xl tracking-tight">
        Blog Post: {params.slug}
      </h1>
      <p className="mt-4 text-slate-600">Post content goes here.</p>
    </div>
  );
}