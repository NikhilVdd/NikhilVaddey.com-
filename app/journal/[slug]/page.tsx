import Link from "@/components/plain-link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { journalArticles } from "@/lib/site-content";

export function generateStaticParams() {
  return journalArticles.map((article) => ({ slug: article.slug }));
}

export default async function JournalArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = journalArticles.find((entry) => entry.slug === slug);
  if (!article) notFound();

  return <main className="interior"><article className="article-page"><nav className="interior-nav"><Link href="/journal"><ArrowLeft size={15}/> Journal index</Link><span>NOTE {article.number} / {article.topic.toUpperCase()}</span></nav><p className="interior-kicker">{article.topic}</p><h1>{article.title}</h1><p className="article-dek">{article.dek}</p><div className="article-body">{article.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}</div><Link className="article-back" href="/journal"><ArrowLeft size={15}/> Read another note</Link></article></main>;
}
