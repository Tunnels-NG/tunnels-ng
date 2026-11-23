import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/site/SEO";
import CtaBand from "@/components/site/CtaBand";
import Action from "@/components/site/Action";
import { getInsight, insights, formatDate } from "@/content/insights";
import { getService } from "@/content/services";
import { SITE } from "@/lib/site";
import NotFound from "./NotFound";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function InsightArticle() {
  const { slug } = useParams();
  const article = getInsight(slug);

  if (!article) return <NotFound />;

  const service = getService(article.relatedService);
  const related = insights
    .filter((entry) => entry.slug !== article.slug)
    .sort((a, b) => (a.category === article.category ? -1 : b.category === article.category ? 1 : 0))
    .slice(0, 3);
  const headings = article.sections.filter((section) => section.heading);

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        path={`/insights/${article.slug}`}
        type="article"
        structuredData={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: article.title, path: `/insights/${article.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.date,
            dateModified: article.date,
            author: { "@type": "Organization", name: article.author },
            publisher: {
              "@type": "Organization",
              name: SITE.name,
              logo: { "@type": "ImageObject", url: `${SITE.url}/assets/brand/tunnels-logo.svg` },
            },
            mainEntityOfPage: `${SITE.url}/insights/${article.slug}`,
            articleSection: article.category,
          },
        ]}
      />

      <article>
        <header className="border-b border-line bg-paper">
          <div className="shell pb-12 pt-10 md:pb-16 md:pt-14">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-grey hover:text-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              All insights
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em]">
              <span className="text-tunnels-red">{article.category}</span>
              <span className="h-3 w-px bg-line" aria-hidden="true" />
              <span className="text-grey">{formatDate(article.date)}</span>
              <span className="h-3 w-px bg-line" aria-hidden="true" />
              <span className="text-grey">{article.readTime}</span>
            </div>

            <h1 className="mt-6 max-w-4xl font-display text-[2.1rem] leading-[1.08] tracking-[-0.03em] md:text-5xl lg:text-[3.4rem]">
              {article.title}
            </h1>
            <p className="lede mt-6 max-w-2xl">{article.dek}</p>
          </div>
        </header>

        <div className="bg-paper">
          <div className="shell grid gap-12 py-12 md:py-16 lg:grid-cols-12 lg:gap-10">
            {/* TOC */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <p className="eyebrow text-[10px]">In this article</p>
                <ol className="mt-4 space-y-2.5 border-l border-line pl-4">
                  {headings.map((section, index) => (
                    <li key={section.heading}>
                      <a
                        href={`#${slugify(section.heading!)}`}
                        className="text-[13px] leading-snug text-grey transition-colors hover:text-ink"
                      >
                        <span className="mr-2 font-mono text-[9px] text-mist">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 border-t border-line pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-mist">Author</p>
                  <p className="mt-2 text-[13px] text-ink">{article.author}</p>
                </div>
              </div>
            </aside>

            {/* Body */}
            <div className="lg:col-span-7">
              <div className="prose-tunnels">
                {article.sections.map((section, index) => (
                  <section key={section.heading ?? `intro-${index}`}>
                    {section.heading && (
                      <h2 id={slugify(section.heading)} className="scroll-mt-24">
                        {section.heading}
                      </h2>
                    )}
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                    {section.list && (
                      <ul>
                        {section.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <div className="mt-12 border-t-2 border-ink pt-6">
                <p className="eyebrow">Key points</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {article.takeaways.map((point) => (
                    <li key={point} className="border border-line bg-paper-bright p-4 text-[13px] leading-relaxed text-graphite">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-2">
              <div className="border border-line bg-paper-bright p-5">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-tunnels-red">
                  Related capability
                </p>
                {service ? (
                  <>
                    <p className="mt-3 font-display text-base leading-snug">{service.shortName}</p>
                    <p className="mt-2 text-xs leading-relaxed text-grey">{service.tagline}</p>
                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-ink hover:text-tunnels-red"
                    >
                      Explore
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </Link>
                  </>
                ) : (
                  <Link to="/services" className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-ink hover:text-tunnels-red">
                    Our capabilities
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                )}
              </div>
            </aside>
          </div>
        </div>

        <div className="border-y border-line bg-paper-deep py-12">
          <div className="shell flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <p className="max-w-xl text-sm leading-relaxed text-graphite">
              This perspective reflects how we approach the problem in client work. If it is close to a
              decision you are facing, we are happy to discuss it directly.
            </p>
            <Action to="/contact" variant="solid" withArrow>
              Discuss a Project
            </Action>
          </div>
        </div>
      </article>

      <section className="bg-paper py-14 md:py-16">
        <div className="shell">
          <div className="flex items-end justify-between gap-4 border-t border-line pt-6">
            <p className="eyebrow">Related insights</p>
            <Link
              to="/insights"
              className="font-mono text-[10px] uppercase tracking-[0.12em] text-grey hover:text-ink"
            >
              View all
            </Link>
          </div>
          <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3">
            {related.map((entry) => (
              <Link
                key={entry.slug}
                to={`/insights/${entry.slug}`}
                className="group flex flex-col bg-paper p-6 transition-colors hover:bg-paper-bright"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-tunnels-red">
                  {entry.category}
                </span>
                <h2 className="mt-4 font-display text-lg leading-snug tracking-[-0.01em] group-hover:text-tunnels-red">
                  {entry.title}
                </h2>
                <p className="mt-2 text-[13px] leading-relaxed text-grey">{entry.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
