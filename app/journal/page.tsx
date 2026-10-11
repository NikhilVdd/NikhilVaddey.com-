import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata = { title: "Journal" };

const drafts = [
  ["01", "Entrepreneurship", "What building for real users teaches you"],
  ["02", "Artificial intelligence", "A working theory of useful AI"],
  ["03", "Finance & markets", "Systems, signals, and staying curious"],
  ["04", "Product strategy", "The product is only half the problem"],
];

export default function Journal() {
  return <main className="interior"><nav className="interior-nav"><Link href="/"><ArrowLeft size={15}/> Return to the experience</Link><span>JOURNAL / DRAFT INDEX</span></nav><section className="interior-hero"><div><p className="interior-kicker">Ideas & observations</p><h1>Notes on<br/><em>making.</em></h1></div><p className="interior-dek">An editorial home for writing about startups, AI, markets, design, and the lessons that only appear after making something real. Draft titles are placeholders until Nikhil publishes the first entry.</p></section><div className="index-list">{drafts.map(([number,topic,title])=><div key={number} style={{display:"grid",gridTemplateColumns:"70px 1fr 1fr auto",alignItems:"center",padding:"28px 0",borderTop:"1px solid var(--line)"}}><span>{number}</span><h2 style={{margin:0}}>{title}</h2><p style={{color:"var(--muted)"}}>{topic}</p><ArrowUpRight/></div>)}</div></main>;
}
