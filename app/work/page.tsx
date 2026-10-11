import Link from "@/components/plain-link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site-content";

export const metadata = { title: "Selected Work" };

export default function WorkIndex() {
  return (
    <main className="interior">
      <nav className="interior-nav"><Link href="/"><ArrowLeft size={15}/> Return to the experience</Link><span>WORK / INDEX</span></nav>
      <section className="interior-hero"><div><p className="interior-kicker">Selected work · 01—05</p><h1>Things I’ve<br/><em>brought to life.</em></h1></div><p className="interior-dek">Products, businesses, and systems created at the intersection of practical problems and persistent curiosity.</p></section>
      <div className="index-list">
        {projects.map((project) => <Link href={`/work/${project.slug}`} key={project.slug}><span>{project.index}</span><h2>{project.name}</h2><p>{project.eyebrow}</p><ArrowUpRight/></Link>)}
      </div>
    </main>
  );
}
