"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight, Asterisk, Command, Menu, X } from "lucide-react";
import { experiences, interests, navItems, projects, story, updates } from "@/lib/site-content";

const SculptureScene = dynamic(() => import("./sculpture-scene"), {
  ssr: false,
  loading: () => <div className="scene scene-fallback" aria-hidden="true" />,
});

const ease = [0.22, 1, 0.36, 1] as const;

function Intro({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduced) {
      const id = window.setTimeout(onDone, 100);
      return () => window.clearTimeout(id);
    }
    const times = [100, 1050, 2050, 3150];
    const ids = times.map((time, i) => window.setTimeout(() => (i === 3 ? onDone() : setStep(i)), time));
    return () => ids.forEach(window.clearTimeout);
  }, [onDone, reduced]);

  const lines = ["Some people collect ideas.", "I like building them.", "NIKHIL VADDEY"];
  return (
    <motion.div className="intro" exit={{ opacity: 0 }} transition={{ duration: 0.7 }}>
      <AnimatePresence mode="wait">
        <motion.p
          key={step}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.55, ease }}
          className={step === 2 ? "intro-name" : "intro-copy"}
        >
          {lines[step]}
        </motion.p>
      </AnimatePresence>
      <button className="intro-skip" onClick={onDone}>Skip intro</button>
    </motion.div>
  );
}

function CommandMenu({ open, close }: { open: boolean; close: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="command-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close}>
          <motion.div className="command-panel" initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16 }} onClick={(event) => event.stopPropagation()}>
            <div className="command-head"><span>Go somewhere</span><kbd>ESC</kbd></div>
            <div className="command-list">
              {navItems.map(([label, href], index) => (
                <Link href={href} key={label} onClick={close}><span>0{index + 1}</span>{label}<ArrowUpRight size={16} /></Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Header({ menuOpen, setMenuOpen, commandOpen, setCommandOpen }: {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  commandOpen: boolean;
  setCommandOpen: (value: boolean) => void;
}) {
  return (
    <header className="site-header">
      <Link href="/" className="monogram" aria-label="Nikhil Vaddey home">NV<span>•</span></Link>
      <nav className={menuOpen ? "nav-open" : ""} aria-label="Primary navigation">
        {navItems.map(([label, href]) => <Link href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <button className="command-button" onClick={() => setCommandOpen(!commandOpen)} aria-label="Open command menu"><Command size={15} /> <span>Explore</span><kbd>⌘K</kbd></button>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="section-label"><span>{number}</span>{children}</p>;
}

function ProjectVisual({ projectIndex }: { projectIndex: number }) {
  if (projectIndex === 0) {
    return <div className="product-ui orbit-ui"><div className="ui-top"><i /><span>ORbit / Live session</span><b>ILLUSTRATIVE</b></div><div className="orbit-grid"><div className="speaker-ring"><span>LISTENING</span></div><div className="prompt-lines"><em>Try asking about the decision process.</em><i /><i /><i /></div></div><div className="metric-row"><span>Talk ratio <b>46%</b></span><span>Questions <b>08</b></span><span>Momentum <b>↗</b></span></div></div>;
  }
  if (projectIndex === 2) {
    return <div className="phone-wrap"><div className="phone"><div className="phone-notch"/><p>GRUB / NEARBY</p><h4>What can you help with?</h4>{["Pick up a package", "Coffee from Strada", "Return library books"].map((item, i) => <div className="task" key={item}><span>0{i + 1}</span><b>{item}</b><em>${8 + i * 3}</em></div>)}</div></div>;
  }
  if (projectIndex === 3) {
    return <div className="terminal-ui"><div className="terminal-head"><span>MARKET / 09:42</span><b>SIMULATED DATA</b></div><div className="ticker"><strong>SPX</strong><em>5,824.41</em><i>+0.62%</i></div><div className="chart-bars">{[32,52,38,68,61,82,76,92,72,88,96,84].map((h,i)=><span key={i} style={{height:`${h}%`}} />)}</div><div className="signal"><i/> MARKET BREADTH IMPROVING</div></div>;
  }
  if (projectIndex === 4) {
    return <div className="workflow-ui">{["INGEST", "IDENTIFY", "EXTRACT", "REVIEW", "OUTPUT"].map((item, i) => <div key={item}><span>0{i+1}</span><b>{item}</b>{i < 4 && <i>→</i>}</div>)}</div>;
  }
  return <div className="showroom-ui"><div className="showroom-nav">NnR / PRODUCT SHOWROOM <b>01—04</b></div>{["SchoolMate", "Velvet", "Automotive", "Healthcare"].map((item,i)=><div className="showroom-row" key={item}><span>0{i+1}</span><strong>{item}</strong><ArrowUpRight size={18}/></div>)}</div>;
}

export default function PortfolioExperience() {
  const reduceMotion = useReducedMotion();
  const [showIntro, setShowIntro] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [photoFilter, setPhotoFilter] = useState("All");

  useEffect(() => {
    const seen = window.sessionStorage.getItem("nv-intro-seen");
    setShowIntro(!seen && !reduceMotion);
  }, [reduceMotion]);

  const finishIntro = () => {
    window.sessionStorage.setItem("nv-intro-seen", "true");
    setShowIntro(false);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((open) => !open);
      }
      if (event.key === "Escape") { setCommandOpen(false); setMenuOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.9 });
    let frame = 0;
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 54, opacity: 0 }, { y: 0, opacity: 1, duration: 1.05, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 86%" } });
      });
      gsap.utils.toArray<HTMLElement>(".chapter").forEach((chapter, index) => {
        gsap.to(".scene", { filter: `hue-rotate(${index * 8}deg)`, scrollTrigger: { trigger: chapter, start: "top center", end: "bottom center", scrub: 1 } });
      });
    });
    return () => { cancelAnimationFrame(frame); lenis.destroy(); ctx.revert(); };
  }, [reduceMotion]);

  const visibleInterests = useMemo(() => photoFilter === "All" ? interests : interests.filter((item) => item === photoFilter), [photoFilter]);

  return (
    <>
      <AnimatePresence>{showIntro && <Intro onDone={finishIntro} />}</AnimatePresence>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} commandOpen={commandOpen} setCommandOpen={setCommandOpen} />
      <CommandMenu open={commandOpen} close={() => setCommandOpen(false)} />
      <main>
        <section className="hero" id="top">
          <SculptureScene />
          <div className="hero-meta"><span>BERKELEY, CALIFORNIA</span><span>ORIGINALLY CHARLOTTE, NC</span></div>
          <div className="hero-title" aria-label="Nikhil Vaddey">
            <motion.span initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: .25, ease }}>NIKHIL</motion.span>
            <motion.span className="outline" initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: .38, ease }}>VADDEY.</motion.span>
          </div>
          <div className="hero-bottom">
            <div><p>FOUNDER / BUILDER / PRODUCT STRATEGIST</p><h1>Building products. Exploring ideas.<br/>Figuring out what’s next.</h1></div>
            <a href="#story" className="scroll-cue"><span>Scroll to explore</span><ArrowDown /></a>
          </div>
          <a className="currently" href="#work"><i/>CURRENTLY BUILDING <b>ORbit / GRUB</b></a>
        </section>

        <section className="manifesto section-pad">
          <SectionLabel number="00">Always building</SectionLabel>
          <p className="manifesto-copy" data-reveal>
            I’m drawn to the moment an idea becomes <em>something real.</em> A product. A company. A better system. A piece of wood shaped by hand.
          </p>
          <div className="manifesto-note" data-reveal><Asterisk/><p>This is a living index of the products, questions, experiences, and people shaping what I build next.</p></div>
        </section>

        <section className="story section-pad" id="story">
          <div className="section-intro" data-reveal><SectionLabel number="01">My story</SectionLabel><h2>Four chapters.<br/><span>One continuous curiosity.</span></h2></div>
          <div className="story-line" aria-hidden="true" />
          {story.map((chapter) => (
            <article className="chapter" key={chapter.index} data-reveal>
              <div className="chapter-index"><span>{chapter.index}</span><i /></div>
              <div className="chapter-copy"><p>{chapter.place}</p><h3>{chapter.title}</h3><div>{chapter.copy}</div></div>
              <div className="chapter-art"><span>PHOTO / ARTIFACT PLACEHOLDER</span><b>{chapter.place}</b><small>Replace in /public/images/story</small></div>
            </article>
          ))}
          <p className="story-end" data-reveal>And I’m just getting started.</p>
        </section>

        <section className="work" id="work">
          <div className="work-heading section-pad" data-reveal><SectionLabel number="02">Selected work</SectionLabel><h2>Things I’ve<br/><em>brought to life.</em></h2><p>Move through a selection of products, businesses, and systems. Each started as a question worth exploring.</p></div>
          {projects.map((project, index) => (
            <article className="project" style={{ "--project-accent": project.accent } as React.CSSProperties} key={project.slug}>
              <div className="project-copy" data-reveal>
                <div className="project-number">{project.index} / 05</div>
                <p>{project.eyebrow}</p>
                <h3>{project.name}</h3>
                <h4>{project.headline}</h4>
                <div className="project-tags">{project.tags.map((tag)=><span key={tag}>{tag}</span>)}</div>
                <Link href={`/work/${project.slug}`} className="text-link">View case study <ArrowUpRight/></Link>
              </div>
              <div className="project-stage" data-reveal><ProjectVisual projectIndex={index}/></div>
            </article>
          ))}
          <div className="more-work section-pad"><p>More experiments</p><div><span>Engageus.ai</span><span>SchoolMate</span><span>Independent AI prototypes</span><span>Next unknown</span></div></div>
        </section>

        <section className="experience section-pad" id="experience">
          <div className="section-intro" data-reveal><SectionLabel number="03">Experience</SectionLabel><h2>The places that<br/><span>changed my perspective.</span></h2></div>
          <div className="timeline">
            {experiences.map(([company, role, description], index) => (
              <details className="experience-row" key={company} data-reveal open={index === 0}>
                <summary><span>0{index + 1}</span><h3>{company}</h3><p>{role}</p><b>+</b></summary>
                <div><p>{description}</p><small>Dates and expanded details are ready to add from a verified résumé.</small></div>
              </details>
            ))}
          </div>
        </section>

        <section className="impact section-pad">
          <SectionLabel number="04">Leadership & impact</SectionLabel>
          <div className="impact-grid">
            <div data-reveal><strong>5,000<span>+</span></strong><p>members represented as a former NC FBLA Southwest Region Vice President.</p></div>
            <div data-reveal><strong>2<sup>nd</sup></strong><p>nationally in FBLA Coding & Programming, 2025.</p></div>
            <div data-reveal><strong>60<span>+</span></strong><p>refurbished computer kits distributed through Tech Dreams 4 Kids.</p></div>
            <div data-reveal><strong>500<span>+</span></strong><p>reported attendees for a talk and live VR demonstration at WICT Carolinas Tech It Out.</p></div>
          </div>
          <p className="impact-note">Reported figures from supplied background information. Keep source material with the editable content record.</p>
        </section>

        <section className="beyond section-pad" id="beyond">
          <div className="section-intro" data-reveal><SectionLabel number="05">Beyond work</SectionLabel><h2>Life beyond<br/><span>the screen.</span></h2><p>When I’m not building something, there’s usually something else I’m getting into.</p></div>
          <div className="filter-row"><button className={photoFilter === "All" ? "active" : ""} onClick={()=>setPhotoFilter("All")}>All</button>{interests.map((item)=><button className={photoFilter === item ? "active" : ""} key={item} onClick={()=>setPhotoFilter(item)}>{item}</button>)}</div>
          <motion.div layout className="photo-grid">
            {visibleInterests.map((item, index) => (
              <motion.button layout className={`photo-placeholder photo-${index % 4}`} key={item} data-reveal>
                <span>PERSONAL PHOTO PLACEHOLDER</span><div><strong>{item}</strong><small>Add authentic photography in /public/images/life</small></div>
              </motion.button>
            ))}
          </motion.div>
        </section>

        <section className="now section-pad" id="now">
          <div className="now-head" data-reveal><SectionLabel number="06">Now / updates</SectionLabel><h2>What I’m up to<br/><em>right now.</em></h2><p>Undated by design—add a verified date when each update is published.</p></div>
          <div className="updates-list">{updates.map(([category,title,status], index)=><article key={category} data-reveal><span>0{index+1}</span><p>{category}</p><h3>{title}</h3><small>{status}</small></article>)}</div>
        </section>

        <section className="journal-preview section-pad">
          <SectionLabel number="07">Journal</SectionLabel>
          <div className="journal-title" data-reveal><h2>Notes on making,<br/><em>markets, and momentum.</em></h2><Link href="/journal">Open journal <ArrowUpRight/></Link></div>
          <div className="journal-lines">
            {["What building for real users teaches you", "A working theory of useful AI", "Systems, signals, and staying curious"].map((title,index)=><div key={title} data-reveal><span>DRAFT 0{index+1}</span><h3>{title}</h3><p>Editorial placeholder — ready for an MDX article.</p></div>)}
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <SculptureScene />
          <p className="contact-kicker">THE OBJECT RECONNECTS. THE STORY KEEPS MOVING.</p>
          <h2 data-reveal>Have an idea?<br/><em>Let’s build it.</em></h2>
          <p data-reveal>I’m always interested in ambitious problems, sharp teams, and people who care about making something genuinely useful.</p>
          <div className="contact-actions" data-reveal><button onClick={()=>setCommandOpen(true)}>Open contact links <ArrowUpRight/></button><Link href="/work">See the work</Link></div>
          <footer><span>© {new Date().getFullYear()} Nikhil Vaddey</span><span>Built from Berkeley / Always building</span><button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>Back to top ↑</button></footer>
        </section>
      </main>
    </>
  );
}
