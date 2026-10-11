import Link from "@/components/plain-link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "Playground · Nikhil Vaddey" };
const experiments = [
  ["01", "Generative form", "A home for small WebGL and shader studies.", "Forms, materials, and motion studies become a low-risk place to learn what makes an interface feel alive."],
  ["02", "Market signal", "Interface experiments for making dense information calmer.", "A watchlist, market breadth, notes, and alerts come together without turning every data point into a demand for action."],
  ["03", "Arena", "Short-form practice concepts connected to Orbit.", "Arena explores compact sales scenarios, immediate reflection, and deliberate practice without pretending a score tells the whole story."],
  ["04", "Physical builds", "Sketches, woodworking progress, and objects made by hand.", "Physical making changes the feedback loop: material constraints are immediate, mistakes stay visible, and iteration becomes tangible."],
  ["05", "Prototype shelf", "Unfinished ideas that are still worth keeping visible.", "Early product fragments live here long enough to reveal whether there is a useful problem underneath the initial excitement."],
  ["06", "Next unknown", "Reserved for the experiment that does not have a name yet.", "The portfolio stays intentionally open-ended—leaving room for questions that do not fit the current roadmap."],
];
export default function Playground() { return <main className="interior"><nav className="interior-nav"><Link href="/"><ArrowLeft size={15}/> Return to the experience</Link><span>PLAYGROUND / 01—06</span></nav><section className="interior-hero"><div><p className="interior-kicker">Experiments & fragments</p><h1>The useful<br/><em>unfinished.</em></h1></div><p className="interior-dek">Not everything needs to become a company. Open any study to see the question behind it.</p></section><div className="play-grid">{experiments.map(([number,title,copy,detail])=><details className="play-tile" key={number}><summary><span>{number}</span><div><h2>{title}</h2><p>{copy}</p></div></summary><div className="play-detail">{detail}</div></details>)}</div></main>; }
