export interface ExperienceEntry {
  id: string;
  hash: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startYear: string;
  endYear: string;
  bullets: string[];
}

export interface MetricFigure {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  id: string;
}

export const experiences: ExperienceEntry[] = [
  {
    id: "exp-qa-analyst",
    hash: "8f2a1c0",
    role: "IT Quality Analyst (Tech)",
    company: "Etech",
    location: "Gandhinagar, Gujarat",
    period: "June 2022 – July 2023",
    startYear: "2022",
    endYear: "2023",
    bullets: [
      "Executed 500+ test cases monthly, reducing post-release defects by 30% and improving overall product quality.",
      "Implemented automated testing scripts, decreasing manual testing time by 40% and increasing team efficiency.",
      "Optimized test environment setup process, reducing preparation time by 50% and accelerating project timelines.",
      "Conducted daily code reviews for 5 team members, resulting in a 25% reduction in code-related defects.",
    ],
  },
  {
    id: "exp-tech-support",
    hash: "4b9e28f",
    role: "IT Tech Support",
    company: "Etech",
    location: "Gandhinagar, Gujarat",
    period: "May 2021 – June 2022",
    startYear: "2021",
    endYear: "2022",
    bullets: [
      "Developed and deployed a comprehensive knowledge base, resulting in a 25% increase in customer self-service resolution and a 30% reduction in support ticket volume.",
      "Optimized the ticketing system, leading to a 40% improvement in issue resolution time and a 15% increase in customer satisfaction scores.",
      "Conducted root cause analysis on recurring technical issues, implementing solutions that reduced problem recurrence by 50% and improved overall system stability.",
      "Spearheaded the implementation of remote desktop support capabilities, enabling real-time problem-solving and reducing average resolution time by 35%.",
    ],
  },
];

export const metrics: MetricFigure[] = [
  {
    id: "metric-tests",
    value: 500,
    suffix: "+",
    label: "TEST CASES EXECUTED / MO",
    sublabel: "Rigorous manual & automated validation",
  },
  {
    id: "metric-automation",
    value: 40,
    suffix: "%",
    label: "MANUAL TESTING TIME REDUCED",
    sublabel: "Via automated regression suites",
  },
  {
    id: "metric-prep",
    value: 50,
    suffix: "%",
    label: "ENV PREPARATION ACCELERATION",
    sublabel: "Standardized test env pipelines",
  },
  {
    id: "metric-defects",
    value: 30,
    suffix: "%",
    label: "FEWER POST-RELEASE DEFECTS",
    sublabel: "Elevated release stability & quality",
  },
];
