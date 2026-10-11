import Link from "@/components/plain-link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site-content";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{slug: string}> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.name, description: project.summary } : {};
}

export default async function CaseStudy({ params }: { params: Promise<{slug: string}> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const current = projects.indexOf(project);
  const next = projects[(current + 1) % projects.length];
  const sections = [
    ["01", "The problem", project.problem],
    ["02", "The approach", project.approach],
    ["03", "My contribution", project.contribution],
    ["04", "Results & lessons", project.outcome],
  ];
  return (
    <main className="interior" style={{ "--case-accent": project.accent } as React.CSSProperties}>
      <nav className="interior-nav"><Link href="/work"><ArrowLeft size={15}/> All selected work</Link><span>{project.index} / 05</span></nav>
      <section className="interior-hero"><div><p className="interior-kicker">{project.eyebrow}</p><h1>{project.name}</h1></div><div><p className="interior-dek">{project.headline}</p><div className="case-meta"><span>{project.role}</span><span>{project.status}</span></div></div></section>
      <div className="case-stage"><div className="case-orb"><span>{project.name}</span></div></div>
      <div className="case-features">{project.features.map((feature,index)=><div key={feature}>0{index+1} / {feature}</div>)}</div>
      <section className="case-sections">{sections.map(([number,title,copy])=><article key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p></article>)}</section>
      <section className="next-project"><Link href={`/work/${next.slug}`}><div><p>NEXT PROJECT</p><h2>{next.name}</h2></div><ArrowUpRight size={50}/></Link></section>
    </main>
  );
}
