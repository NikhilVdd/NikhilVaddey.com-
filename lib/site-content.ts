export type Project = {
  slug: string;
  index: string;
  name: string;
  eyebrow: string;
  headline: string;
  summary: string;
  status: string;
  role: string;
  accent: string;
  tags: string[];
  problem: string;
  approach: string;
  contribution: string;
  outcome: string;
  features: string[];
};

export type GalleryItem = {
  title: string;
  category: string;
  caption: string;
  image?: string;
  alt?: string;
  credit?: string;
  source?: string;
};

export const projects: Project[] = [
  {
    slug: "orbit",
    index: "01",
    name: "Orbit",
    eyebrow: "AI sales technology",
    headline: "Helping people sell with more confidence.",
    summary:
      "A sales assistance platform exploring real-time conversational guidance, practice, and post-call reflection.",
    status: "Active product development · early-stage exploration",
    role: "Co-founder · product · engineering",
    accent: "#8b68e8",
    tags: ["Gemini API", "Python", "Flask", "Product strategy"],
    problem:
      "Sales coaching often arrives long after a conversation ends. Orbit explores what changes when useful context is available during the call—and when reflection is built directly into the workflow.",
    approach:
      "The concept pairs a restrained live teleprompter with notes, illustrative performance signals, and an experimental practice environment called Arena.",
    contribution:
      "I co-founded the product, helped shape the product strategy, developed the experience, and presented the concept to venture investors.",
    outcome:
      "The product remains in active development. Any calls, scores, and metrics shown in this portfolio are illustrative demo data, not customer results.",
    features: ["Live guidance", "Call reflection", "Sales coaching", "Arena practice"],
  },
  {
    slug: "nnr-technologies",
    index: "02",
    name: "NnR Technologies",
    eyebrow: "Entrepreneurship · software",
    headline: "Learning how to build a business by actually building one.",
    summary:
      "A software business created to design practical products and automation for organizations with real operational problems.",
    status: "Founded and operated",
    role: "Founder & CEO",
    accent: "#d7ab55",
    tags: ["8+ clients", "Five-figure revenue", "Custom software", "Automation"],
    problem:
      "Smaller organizations often understand the friction in their work but do not have the product and engineering capacity to remove it.",
    approach:
      "I treated discovery, scoping, design, delivery, and the client relationship as one connected product system—not separate handoffs.",
    contribution:
      "I founded the company and led the full path from identifying prospects and winning work to planning products and overseeing delivery.",
    outcome:
      "The business served 8+ clients, generated five-figure revenue, and received a reported $53,000 valuation through a MassMutual startup program. Revenue cadence is intentionally not stated.",
    features: ["SchoolMate", "Velvet", "Automotive systems", "Healthcare concepts"],
  },
  {
    slug: "grub",
    index: "03",
    name: "GRUB",
    eyebrow: "Campus marketplace",
    headline: "Making campus life a little easier.",
    summary:
      "A two-sided marketplace concept connecting students who need errands completed with students willing to complete them.",
    status: "In development",
    role: "Product · engineering",
    accent: "#9e7bf2",
    tags: ["Marketplace", "Mobile", "Trust systems", "Campus"],
    problem:
      "Campus schedules are fragmented, but small errands still demand time, travel, and coordination.",
    approach:
      "GRUB explores a local task marketplace organized around discovery, clear request creation, transparent status, and student-to-student trust.",
    contribution:
      "I am developing the product concept, interaction model, and implementation. The portfolio flow is a guided product prototype.",
    outcome:
      "GRUB is in development. Matching, reputation, payments, and completion states are presented as concepts unless marked otherwise.",
    features: ["Discover", "Request", "Match", "Complete"],
  },
  {
    slug: "trading-dashboard",
    index: "04",
    name: "Signal / Noise",
    eyebrow: "Finance · analytics",
    headline: "Turning market noise into a clearer picture.",
    summary:
      "A centralized trading research dashboard concept for organizing market context, research, and alerts.",
    status: "Independent product exploration",
    role: "Product · research · engineering",
    accent: "#c99a42",
    tags: ["Market research", "Options", "Visualization", "Risk"],
    problem:
      "Market context arrives through disconnected feeds, charts, alerts, and notes—making synthesis harder than collection.",
    approach:
      "The interface groups briefings, watchlists, sentiment, and research into a calm daily decision surface.",
    contribution:
      "I developed and explored the dashboard around a long-running interest in markets, options strategies, and data-driven decisions.",
    outcome:
      "All market prices and performance values in the portfolio demonstration are simulated and for interface illustration only.",
    features: ["Briefing", "Sentiment", "Options research", "Alerts"],
  },
  {
    slug: "citco-automation",
    index: "05",
    name: "Citco Automation",
    eyebrow: "Fintech · process optimization",
    headline: "Finding opportunities to simplify complex financial workflows.",
    summary:
      "A prototype approach for identifying and extracting information from private-equity side letter documents.",
    status: "Internship prototype · conceptualized workflow",
    role: "Private Equity Fund Administration Intern",
    accent: "#b69af4",
    tags: ["Document AI", "Human review", "Operations", "Fintech"],
    problem:
      "Dense fund documentation creates repeated manual review and makes important terms difficult to structure consistently.",
    approach:
      "The concept moves fictional documents through ingestion, key-term identification, extraction, human review, and structured output.",
    contribution:
      "During my internship, I prototyped an approach to the workflow while learning how enterprise processes balance efficiency, controls, and human judgment.",
    outcome:
      "The work produced an estimated $283,000 in potential annual savings. This was a projection—not realized savings—and no proprietary material is shown.",
    features: ["Ingest", "Identify", "Extract", "Review"],
  },
];

export const story = [
  {
    index: "01",
    title: "Curiosity came first.",
    place: "Charlotte, North Carolina",
    copy: "I grew up interested in technology, design, business, and the mechanics behind everyday things. Software experiments and competitive tennis gave that curiosity two very different places to go.",
  },
  {
    index: "02",
    title: "I wanted to build something real.",
    place: "Products, clients, constraints",
    copy: "Developing software became NnR Technologies—and a fast education in listening, finding customers, scoping products, and delivering something useful to another person.",
  },
  {
    index: "03",
    title: "The product was only half the problem.",
    place: "Strategy, operations, markets",
    copy: "Founding a business and working across internships pulled me toward the systems around a product: how teams operate, how products reach people, and how better processes make complex work clearer.",
  },
  {
    index: "04",
    title: "Now, I’m building from Berkeley.",
    place: "Berkeley, California",
    copy: "I study Industrial Engineering & Operations Research at UC Berkeley while developing startups, experimenting with products, and exploring technology, strategy, and finance.",
  },
];

export const experiences = [
  ["NnR Technologies", "Founder & CEO", "Custom software, automation, client discovery, and product delivery."],
  ["Citco", "Private Equity Fund Administration Intern", "Process optimization and a document-extraction workflow prototype."],
  ["GitHub", "Product Research Consultant", "Research into developer workflows, onboarding, collaboration, and adoption."],
  ["OpenMind", "Product Strategy Consultant", "Competitive research, user needs, product strategy, and go-to-market planning."],
  ["Handshake", "AI Prompt Engineer", "Model-response evaluation, quality analysis, and structured feedback."],
  ["Samhitha Corp", "Agri-Tech Intern", "A financial-literacy application with multilingual and voice-navigation concepts."],
  ["Tech Dreams 4 Kids", "Co-Founder", "Expanding access to technology through refurbished computer kits."],
] as const;

export const updates = [
  ["STUDYING", "Industrial Engineering & Operations Research", "UC Berkeley"],
  ["BUILDING", "Orbit, GRUB, and new software experiments", "Active chapter"],
  ["EXPLORING", "Product strategy, startups, finance, and investing", "Open questions"],
  ["OUTSIDE", "Tennis, golf, cars, motorsports, and woodworking", "Away from the screen"],
] as const;

export const interests = ["Cars & motorsport", "Tennis", "Golf", "Woodworking", "Travel", "Friends & everyday life"];

export const gallery: GalleryItem[] = [
  {
    title: "Building from Berkeley",
    category: "Travel",
    caption: "The Campanile, a daily reminder that the next chapter is happening at UC Berkeley.",
    image: "/images/places/berkeley.jpg",
    alt: "The Campanile tower framed by trees on the UC Berkeley campus",
    credit: "Janet Ganbold / Unsplash",
    source: "https://unsplash.com/photos/dLO5xBuYh9k",
  },
  {
    title: "Charlotte roots",
    category: "Travel",
    caption: "The city where curiosity, competition, and the instinct to build began.",
    image: "/images/places/charlotte.jpg",
    alt: "Charlotte, North Carolina skyline at sunset",
    credit: "Christian Balentine / Unsplash",
    source: "https://unsplash.com/photos/JEtcYOJUDv4",
  },
  {
    title: "The Bay Area",
    category: "Travel",
    caption: "Across the country and into the Bay—closer to ideas, founders, and the next experiment.",
    image: "/images/places/san-francisco.jpg",
    alt: "Aerial view of the Golden Gate Bridge in warm evening light",
    credit: "Michal Pechardo / Unsplash",
    source: "https://unsplash.com/photos/bpt7mjgrBRQ",
  },
  {
    title: "A quieter kind of focus",
    category: "Golf",
    caption: "Golf slows the pace down: one shot, one decision, one adjustment at a time.",
    image: "/images/places/golf-california.jpg",
    alt: "A California golf course with autumn trees and rolling hills",
    credit: "Cristina Anne Costello / Unsplash",
    source: "https://unsplash.com/photos/PNThasb93aA",
  },
  { title: "Cars & motorsport", category: "Cars & motorsport", caption: "Space reserved for Nikhil's automotive photography and racing moments." },
  { title: "Fourteen years on court", category: "Tennis", caption: "Space reserved for competitive tennis, team, and practice photography." },
  { title: "Made by hand", category: "Woodworking", caption: "Space reserved for workshop progress, sketches, and finished physical builds." },
  { title: "The people around it", category: "Friends & everyday life", caption: "Space reserved for the friends and everyday moments that make the work matter." },
];

export const journalArticles = [
  {
    slug: "building-for-real-users",
    number: "01",
    topic: "Entrepreneurship",
    title: "What building for real users teaches you",
    dek: "A working note on why listening, constraints, and delivery change the way a product gets made.",
    paragraphs: [
      "A product feels completely different once another person depends on it. The decisions stop being theoretical. Small frictions become visible, priorities become sharper, and the work has to survive contact with a real workflow.",
      "Building NnR Technologies taught me that discovery is not a phase you finish before development. It continues through every client conversation, scope change, prototype, and handoff. The best solution is often not the most technically elaborate one; it is the one that fits the people and system already in motion.",
      "That lesson now shapes how I approach every new idea: understand the person, find the constraint that actually matters, and build the smallest useful version that can teach you something true.",
    ],
  },
  {
    slug: "useful-ai",
    number: "02",
    topic: "Artificial intelligence",
    title: "A working theory of useful AI",
    dek: "The interesting question is not whether a model can produce an answer. It is whether that answer improves a real decision.",
    paragraphs: [
      "Useful AI disappears into the work. It provides the right context at the right moment, makes uncertainty visible, and leaves room for human judgment where judgment matters.",
      "Orbit explores this idea in sales conversations: guidance should support the person having the conversation, not overwhelm them with another interface. The same principle applies to document workflows, market research, and operational tools.",
      "The product challenge is to design the relationship between model, interface, and user. Accuracy matters, but so do timing, trust, restraint, and the ability to review what happened afterward.",
    ],
  },
  {
    slug: "systems-signals-curiosity",
    number: "03",
    topic: "Markets & systems",
    title: "Systems, signals, and staying curious",
    dek: "Markets, products, and operations all reward the same habit: separating useful signal from convincing noise.",
    paragraphs: [
      "Complex systems create more information than any one person can use. The instinct is often to add another chart or alert, but clarity usually comes from deciding what can be ignored.",
      "My interest in financial markets led me toward tools that organize context rather than promise certainty. A good dashboard should help someone see relationships, challenge an assumption, and understand risk—not simply make activity feel productive.",
      "That way of thinking carries into product work and operations research at Berkeley: map the system, identify the constraint, test the decision, and stay curious enough to revise the model.",
    ],
  },
] as const;

export const navItems = [
  ["Home", "/"],
  ["My Story", "/#story"],
  ["Work", "/work"],
  ["Experience", "/#experience"],
  ["Beyond Work", "/#beyond"],
  ["Journal", "/journal"],
  ["Playground", "/playground"],
  ["Contact", "/#contact"],
] as const;
