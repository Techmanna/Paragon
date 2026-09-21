import { notFound } from "next/navigation";

const INSIGHTS = [
  { slug: "building-sustainable-msmes", title: "Building Sustainable MSMEs in Northern Nigeria", category: "Report", excerpt: "An analysis of the core challenges...", date: "Oct 12, 2023" },
  { slug: "the-future-of-innovation", title: "The Future of Innovation in Energy", category: "Article", excerpt: "How local tech ecosystems are responding to the energy crisis...", date: "Nov 05, 2023" },
];

export async function generateStaticParams() {
  return INSIGHTS.map((i) => ({
    slug: i.slug,
  }));
}

export default async function InsightDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const insight = INSIGHTS.find((i) => i.slug === resolvedParams.slug);

  if (!insight) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full min-h-screen pt-20">
      <section className="bg-bg-dark py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-accent-blue/20 text-accent-blue font-medium mb-4">
            {insight.category}
          </span>
          <h1 className="text-4xl font-bold mb-4">{insight.title}</h1>
          <p className="text-muted-foreground">{insight.date}</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg leading-relaxed text-foreground">
            {insight.excerpt} Content for this insight will go here.
          </p>
        </div>
      </section>
    </div>
  );
}
