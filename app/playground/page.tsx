import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "Playground" };
const experiments = [
  ["01", "Generative form", "A home for small WebGL and shader studies."],
  ["02", "Market signal", "Interface experiments for making dense information calmer."],
  ["03", "Arena", "Short-form practice concepts connected to ORbit."],
  ["04", "Physical builds", "Sketches, woodworking progress, and objects made by hand."],
  ["05", "Prototype shelf", "Unfinished ideas that are still worth keeping visible."],
  ["06", "Next unknown", "Reserved for the experiment that does not have a name yet."],
];
export default function Playground() { return <main className="interior"><nav className="interior-nav"><Link href="/"><ArrowLeft size={15}/> Return to the experience</Link><span>PLAYGROUND / 01—06</span></nav><section className="interior-hero"><div><p className="interior-kicker">Experiments & fragments</p><h1>The useful<br/><em>unfinished.</em></h1></div><p className="interior-dek">Not everything needs to become a company. This is a modular shelf for sketches, prototypes, technical studies, and things made simply to learn.</p></section><div className="play-grid">{experiments.map(([number,title,copy])=><article className="play-tile" key={number}><span>{number}</span><div><h2>{title}</h2><p>{copy}</p></div></article>)}</div></main>; }
