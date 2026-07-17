import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";
import { getInsight, getRelatedInsights, type Insight } from "@/lib/insights";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }): { article: Insight } => {
    const article = getInsight(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article — Nordwell" }, { name: "robots", content: "noindex" }] };
    const a = loaderData.article;
    const url = `https://elevated-experience-co.lovable.app/insights/${a.slug}`;
    return {
      meta: [
        { title: `${a.title} · Nordwell` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.excerpt,
          author: { "@type": "Organization", name: a.author },
          datePublished: a.date,
        }),
      }],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <section className="py-32 text-center">
      <h1 className="font-display text-4xl font-semibold">Article not found</h1>
      <Link to="/insights" className="mt-6 inline-flex text-sm font-medium">Back to journal</Link>
    </section>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData() as { article: Insight };
  const related = getRelatedInsights(article.slug, 3);

  return (
    <>
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <Link to="/insights" className="text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground">← Journal</Link>
          </Reveal>
          <Reveal i={1}>
            <div className="mt-6 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {article.category} · {article.readingTime} · {article.date}
            </div>
          </Reveal>
          <Reveal i={2}>
            <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              {article.title}
            </h1>
          </Reveal>
          <Reveal i={3}>
            <p className="mt-6 text-lg text-muted-foreground">{article.excerpt}</p>
          </Reveal>
        </div>
      </section>
      <div className={`h-64 w-full bg-gradient-to-br ${article.tone} sm:h-96`} />
      <article className="py-16">
        <div className="mx-auto max-w-2xl space-y-8 px-5">
          {article.content.map((p, i) => (
            <div key={i}>
              {p.heading && <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{p.heading}</h2>}
              <p className={`text-base leading-relaxed text-foreground/85 ${p.heading ? "mt-4" : ""}`}>{p.body}</p>
            </div>
          ))}
        </div>
      </article>

      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Keep reading</div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((a) => (
              <Link key={a.slug} to="/insights/$slug" params={{ slug: a.slug }} className="group block overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1">
                <div className={`aspect-[16/10] w-full bg-gradient-to-br ${a.tone}`} />
                <div className="p-6">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{a.category}</div>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight">{a.title}</h3>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium">
                    Read <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}