import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { journalArticles } from "@/lib/site-content";

export const metadata = { title: "Journal · Nikhil Vaddey" };

export default function Journal() {
  return <main className="interior"><nav className="interior-nav"><Link href="/"><ArrowLeft size={15}/> Return to the experience</Link><span>JOURNAL / 01—03</span></nav><section className="interior-hero"><div><p className="interior-kicker">Ideas & observations</p><h1>Notes on<br/><em>making.</em></h1></div><p className="interior-dek">Working notes about building products, applying AI with judgment, and using systems to make better decisions.</p></section><div className="index-list">{journalArticles.map((article)=><Link href={`/journal/${article.slug}`} key={article.slug}><span>{article.number}</span><h2>{article.title}</h2><p>{article.topic}</p><ArrowUpRight/></Link>)}</div></main>;
}
