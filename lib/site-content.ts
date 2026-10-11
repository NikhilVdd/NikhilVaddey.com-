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

export const projects: Project[] = [
  {
    slug: "orbit",
    index: "01",
    name: "ORbit",
    eyebrow: "AI sales technology",
    headline: "Helping people sell with more confidence.",
    summary:
      "A sales assistance platform exploring real-time conversational guidance, practice, and post-call reflection.",
    status: "Active product development · early-stage exploration",
    role: "Co-founder · product · engineering",
    accent: "#c5f36b",
    tags: ["Gemini API", "Python", "Flask", "Product strategy"],
    problem:
      "Sales coaching often arrives long after a conversation ends. ORbit explores what changes when useful context is available during the call—and when reflection is built directly into the workflow.",
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
    accent: "#d7b18a",
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
    accent: "#a8c7ff",
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
    accent: "#ff8e6e",
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
    accent: "#d6c5ff",
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
  ["BUILDING", "ORbit, GRUB, and new software experiments", "Active chapter"],
  ["EXPLORING", "Product strategy, startups, finance, and investing", "Open questions"],
  ["OUTSIDE", "Tennis, golf, cars, motorsports, and woodworking", "Away from the screen"],
] as const;

export const interests = ["Cars & motorsport", "Tennis", "Golf", "Woodworking", "Travel", "Friends & everyday life"];

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
