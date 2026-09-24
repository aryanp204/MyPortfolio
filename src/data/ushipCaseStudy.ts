export interface CompetitiveAnalysisRow {
  area: string;
  commonPattern: string;
  ushipApproach: string;
}

export interface UserPersona {
  name: string;
  role: string;
  age: string;
  tagline: string;
  goals: string[];
  frustrations: string[];
  need: string;
}

export interface UsabilityTask {
  id: string;
  title: string;
  goal: string;
  observation: string;
  response: string;
}

export const ushipCaseStudy = {
  title: "Uship — UX/UI Case Study",
  subtitle: "Designing an organized e-commerce interface supporting both rapid search and exploratory product discovery.",
  metadata: {
    projectType: "E-Commerce Website",
    role: "UI/UX Designer & Front-End Developer",
    tools: ["Figma", "HTML5", "CSS3", "JavaScript"],
    platform: "Responsive Web",
    deployment: "GitHub Pages",
    liveUrl: "https://aryanp204.github.io/Uship/",
    docUrl: "./Uship_UX_UI_Case_Study.docx",
  },
  overview: {
    whatIsUship: "Uship is an e-commerce website designed to help users discover and shop for products through a simple, friction-free, and organized interface. It provides comprehensive product categorization, high-visibility search, promotional highlights, recently added catalogs, secure account access, customer support workflows, and newsletter integrations.",
    goal: "The primary design goal was to craft an e-commerce experience where task-focused shoppers can instantly locate target items, while exploratory shoppers are offered effortless discovery pathways without cognitive overload.",
    responsibilities: [
      "UX planning & information architecture",
      "User research & competitive benchmarking",
      "User personas & journey flow mapping",
      "Low-fidelity wireframing & high-fidelity prototyping",
      "Front-end engineering (HTML, CSS, JavaScript)",
      "Responsive cross-device testing & usability validation",
    ],
  },
  competitiveAnalysis: [
    {
      area: "Navigation",
      commonPattern: "Complex multi-level mega menus with dense subcategories",
      ushipApproach: "Clean, streamlined category navigation emphasizing top shopping intent",
    },
    {
      area: "Search",
      commonPattern: "Prominent top search bar with auto-suggestions",
      ushipApproach: "High-contrast top search accessible from any scroll position",
    },
    {
      area: "Discovery",
      commonPattern: "Algorithmic personalized recommendations and banner promotions",
      ushipApproach: "Tightly grouped sections: Featured Categories + Recently Added + Promotions",
    },
    {
      area: "Account",
      commonPattern: "Mandatory account creation prior to checkout",
      ushipApproach: "Quick sign-in / register modals with minimal upfront friction",
    },
    {
      area: "Support",
      commonPattern: "Hidden footer FAQ links and chatbot popups",
      ushipApproach: "Dedicated customer service hub (FAQ, returns, policy links) grouped logically",
    },
    {
      area: "Engagement",
      commonPattern: "Intrusive overlay modals offering discount codes",
      ushipApproach: "Quiet newsletter subscription row and persistent social links",
    },
  ] as CompetitiveAnalysisRow[],
  personas: [
    {
      name: "Sarah Jenkins",
      role: "University Student",
      age: "24",
      tagline: "The Quick Shopper — Knows exact product requirements prior to landing.",
      goals: ["Find products immediately via search", "Checkout with minimal clicks", "Avoid distracting popups"],
      frustrations: ["Overcomplicated mega menus", "Intrusive discount overlays", "Buried product specifications"],
      need: "Speed, direct navigation, and zero friction.",
    },
    {
      name: "Daniel Miller",
      role: "IT Support Specialist",
      age: "31",
      tagline: "The Product Explorer — Enjoys browsing tech accessories and sales.",
      goals: ["Browse curated categories", "Discover recently added hardware", "Compare pricing on promotions"],
      frustrations: ["Disorganized product grids", "Cluttered interfaces with poor filtering", "Unclear discounts"],
      need: "Structured exploration, organized category tiers, and visual clarity.",
    },
    {
      name: "Maria Rodriguez",
      role: "Small Business Owner",
      age: "42",
      tagline: "The Convenience Shopper — Values predictable layouts and clear customer support.",
      goals: ["Order office essentials quickly", "Easily access return policies", "Save time during purchase"],
      frustrations: ["Ambiguous navigation labels", "Excessive steps to reach support", "Hidden shipping information"],
      need: "Clarity, predictable layout patterns, and dependable support.",
    },
  ] as UserPersona[],
  problemStatement: {
    coreProblem: "Online shoppers arrive with polarized shopping intents: task-driven users require rapid search-to-checkout pipelines, whereas leisurely users rely on visual category exploration. Unclear navigation and excessive promotional noise overwhelm both groups, degrading conversion and user trust.",
    howMightWe: "How might we architect an e-commerce platform that simultaneously accelerates specific product searches and enriches organic browsing—without cluttering the interface?",
  },
  userFlows: [
    {
      intent: "Search Path",
      pattern: "Targeted Shopper",
      flow: ["Home Entry", "Top Search Bar", "Direct Product Match", "Specs & Add to Cart", "Instant Checkout"],
    },
    {
      intent: "Browse Path",
      pattern: "Category Shopper",
      flow: ["Home Entry", "Visual Categories", "Filtered Catalog", "Product Inspection", "Add to Cart"],
    },
    {
      intent: "Discover Path",
      pattern: "Casual Explorer",
      flow: ["Home Entry", "Hero Promotion / New Arrivals", "Curated Showcase", "Product Details", "Checkout"],
    },
  ],
  usabilityTasks: [
    {
      id: "TASK-01",
      title: "Category Recognition",
      goal: "User identifies relevant shopping departments within 3 seconds of page load.",
      observation: "Users scan horizontally across top visual category tiles rather than expanding text dropdowns.",
      response: "Prioritized a dedicated visual category grid immediately below the primary hero banner.",
    },
    {
      id: "TASK-02",
      title: "First-Touch Shopping Initiation",
      goal: "First-time visitor understands primary catalog actions without scrolling.",
      observation: "Vague slogans reduce engagement; visitors look for direct 'Shop Now' callouts.",
      response: "Anchored the Hero section with clear high-contrast CTAs pointing directly to active sales.",
    },
    {
      id: "TASK-03",
      title: "Support & Policy Retrieval",
      goal: "Locate return guidelines, FAQ, and shipping policies effortlessly.",
      observation: "Users abandon checkout if return and shipping guarantees are not readily discoverable.",
      response: "Organized a persistent customer service cluster with dedicated FAQ and policy pathways.",
    },
  ] as UsabilityTask[],
  developmentDetails: {
    techStack: [
      { name: "HTML5", purpose: "Semantic layout structuring, accessible landmark roles, and SEO indexing." },
      { name: "CSS3 / Flexbox / Grid", purpose: "Fluid responsive breakpoints, consistent spatial scale, and responsive card grids." },
      { name: "Vanilla JavaScript", purpose: "Dynamic filtering, search handling, cart state toggling, and interactive modals." },
      { name: "GitHub Pages", purpose: "Zero-latency static hosting with continuous git deployment." },
    ],
    challenges: [
      "Responsive Grid Transitions: Preserving visual balance from 320px mobile screens to ultra-wide displays without card stretching.",
      "Image Scaling & Asset Optimization: Ensuring product photos maintain aspect ratio and crisp fidelity across variable DPR devices.",
      "Usability vs Technical Complexity: Avoiding heavy external UI libraries in favor of lightweight, high-performance vanilla code.",
    ],
  },
  reflection: {
    coreInsight: "Good UX is fundamentally about answering three persistent questions for the user at every viewport: 'Where am I? What can I do? Where should I go next?'",
    designToCode: "Bridging the gap between Figma mockups and working production code revealed how real-world CSS layout constraints inform design choices. Building the interface myself ensured that every micro-interaction and responsive breakpoint was optimized for browser performance.",
  },
};
