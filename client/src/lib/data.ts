import { 
  TestimonialUI as Testimonial, 
  ServiceUI as Service, 
  IndustryUI as Industry, 
  ResourceUI as Resource, 
  Differentiator,
  NavItem,
  SiteConfig
} from "./types";

// Navigation Items
export const navItems: NavItem[] = [
  { text: "Home", href: "/" },
  { 
    text: "Services", 
    href: "/services",
    dropdown: [
      { text: "Cloud-Smart Solutions", href: "/services#cloud" },
      { text: "AI-First Services", href: "/services#ai" },
      { text: "Outcome-Based Engagements", href: "/services#outcome" },
      { text: "Digital Marketing", href: "/services#marketing" },
      { text: "Security-Embedded Delivery", href: "/services#security" },
    ] 
  },
  { 
    text: "Industries", 
    href: "#",
    dropdown: [
      { text: "Fintech", href: "/industries/fintech" },
      { text: "Healthcare", href: "/industries/healthcare" },
      { text: "LegalTech", href: "/industries/legaltech" },
      { text: "Logistics", href: "/industries/logistics" },
    ] 
  },
  { text: "Why Choose Us", href: "/why-choose-us" },
  { text: "Resources", href: "/resources" },
  { text: "Contact", href: "/contact" },
];

// Site Configuration
export const siteConfig: SiteConfig = {
  name: "NextGenixTech",
  tagline: "Smart Tech. Real Outcomes.",
  description: "AI-Native IT Consultancy - From strategy to delivery, we engineer results, not just roadmaps.",
  contactEmail: "connect.nextgenixtech@gmail.com",
  phoneNumber: "+1 (415) 555-7890",
  address: {
    street: "123 Tech Avenue, Suite 500",
    city: "San Francisco",
    state: "CA",
    zip: "94103",
    country: "USA"
  },
  socialLinks: {
    linkedin: "https://linkedin.com/company/nextgenixtech",
    twitter: "https://twitter.com/nextgenixtech",
    github: "https://github.com/nextgenixtech"
  }
};

// Differentiators for homepage
export const differentiators: Differentiator[] = [
  {
    icon: "fa-robot",
    title: "AI-First, Not Just AI-Enabled",
    description: "Solutions designed around AI capabilities from the ground up, not retrofitted."
  },
  {
    icon: "fa-chart-line",
    title: "Outcome-Based Engagements",
    description: "We bill by results, not hours. Your success is our success."
  },
  {
    icon: "fa-shield-alt",
    title: "Security-Embedded Delivery",
    description: "Protection built in from day one, not bolted on later."
  },
  {
    icon: "fa-industry",
    title: "Domain Expertise",
    description: "Specialized knowledge in Finance, Health, Legal, and Logistics."
  }
];

// Testimonials for carousel
export const testimonials: Testimonial[] = [
  {
    metric: "37%",
    title: "Reduced Cloud Costs",
    description: "Without sacrificing performance or scalability. Our FinOps approach optimized resource allocation.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    name: "James Wilson",
    position: "CTO",
    company: "FinanceHub"
  },
  {
    metric: "60%",
    title: "Faster Compliance Processing",
    description: "Our AI-powered regulatory technology automated document review and compliance verification.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    name: "Sarah Martinez",
    position: "Compliance Director",
    company: "MedTech Solutions"
  },
  {
    metric: "1000+",
    title: "Patients Served Daily",
    description: "Our AI triage tool helped healthcare providers prioritize care and reduce wait times.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    name: "Dr. Emily Chen",
    position: "Medical Director",
    company: "CareFirst Hospital"
  }
];

// Services
export const services: Service[] = [
  {
    id: "cloud",
    icon: "fa-cloud",
    title: "Cloud-Smart, Not Cloud-Hungry",
    description: "FinOps-driven optimization that reduces costs while enhancing performance and scalability.",
    features: [
      "Cost optimization audits",
      "Resource right-sizing",
      "Cloud architecture modernization"
    ]
  },
  {
    id: "ai",
    icon: "fa-brain",
    title: "AI-First, Not Just AI-Enabled",
    description: "LLM-native tools, automation, and governance built to transform your business operations.",
    features: [
      "Custom LLM development",
      "AI workflow automation",
      "AI ethics and governance frameworks"
    ]
  },
  {
    id: "outcome",
    icon: "fa-chart-pie",
    title: "Outcome-Based Engagements",
    description: "KPI-aligned billing and delivery that ensures our success is tied directly to yours.",
    features: [
      "Performance-based contracts",
      "KPI definition and tracking",
      "Continuous optimization"
    ]
  },
  {
    id: "marketing",
    icon: "fa-bullhorn",
    title: "Digital Marketing & Social Media Strategy",
    description: "Performance-led marketing powered by data, automation, and AI.",
    features: [
      "Cross-platform campaigns",
      "AI-powered ad targeting",
      "ROI-focused growth strategies"
    ]
  },
  {
    id: "healthcare",
    icon: "fa-hospital-user",
    title: "Healthcare Expertise",
    description: "HIPAA-compliant AI platforms that enhance patient care while ensuring data security.",
    features: [
      "Patient triage automation",
      "Clinical decision support",
      "Secure health data platforms"
    ]
  },
  {
    id: "legal",
    icon: "fa-balance-scale",
    title: "LegalTech Solutions",
    description: "E-discovery automation and contract analysis tools that save time and improve accuracy.",
    features: [
      "AI-powered document review",
      "Contract analysis automation",
      "Legal knowledge management"
    ]
  },
  {
    id: "security",
    icon: "fa-shield-alt",
    title: "Security-Embedded Delivery",
    description: "DevSecOps-first pipelines and automated compliance that protect your business at every level.",
    features: [
      "Secure CI/CD pipelines",
      "Automated compliance verification",
      "Zero-trust architecture implementation"
    ]
  }
];

// Industries
export const industries: Industry[] = [
  {
    id: "fintech",
    title: "Fintech",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    headline: "AI-Driven Fintech Solutions for Compliance and Speed",
    description: "Tackle fraud detection, regulatory reporting, and transaction latency with our specialized fintech solutions.",
    cta: "Explore Fintech Solutions"
  },
  {
    id: "healthcare",
    title: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    headline: "HIPAA-Compliant AI to Power Modern Healthcare",
    description: "Enhance patient engagement and improve diagnostics with secure, compliant AI solutions.",
    cta: "Explore Healthcare Solutions"
  },
  {
    id: "legaltech",
    title: "LegalTech",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    headline: "Automate Discovery. Improve Accuracy. Scale LegalOps.",
    description: "Overcome review bottlenecks and document overload with AI-powered legal solutions.",
    cta: "Explore LegalTech Solutions"
  },
  {
    id: "logistics",
    title: "Logistics",
    image: "https://images.unsplash.com/photo-1519074069390-98277ca18db6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    headline: "Predictive AI for Supply Chain & Fleet Optimization",
    description: "Minimize downtime and route inefficiency with AI-powered logistics solutions.",
    cta: "Explore Logistics Solutions"
  }
];

// Why Choose Us differentiators
export const whyChooseUs: Differentiator[] = [
  {
    icon: "fa-briefcase",
    title: "Business-first thinking",
    description: "Technology is a means to an end. We focus on the business outcomes you need to achieve."
  },
  {
    icon: "fa-shield-alt",
    title: "DevSecOps from day one",
    description: "Security isn't an afterthought. We build it into our processes and solutions from the start."
  },
  {
    icon: "fa-users",
    title: "Embedded agile squads",
    description: "Our teams integrate with yours for seamless collaboration and knowledge transfer."
  },
  {
    icon: "fa-hand-holding-usd",
    title: "Outcome-based pricing",
    description: "We align our compensation with your success metrics. You pay for results, not hours."
  },
  {
    icon: "fa-robot",
    title: "AI-native delivery",
    description: "We harness the power of AI throughout our delivery process to accelerate outcomes."
  },
  {
    icon: "fa-clipboard-check",
    title: "Compliance automation",
    description: "We automate regulatory compliance to reduce risk and administrative burden."
  }
];

// Resources / Insights
export const resources: Resource[] = [
  {
    id: "ai-healthcare-roadmap",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    categories: ["ai", "healthcare"],
    title: "AI Readiness in Healthcare: A 2025 Roadmap",
    description: "How healthcare providers can prepare for the next generation of AI-powered medical solutions.",
    date: "June 15, 2025",
    type: "whitepaper"
  },
  {
    id: "cloud-optimization",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    categories: ["cloud", "security"],
    title: "Cloud Cost Optimization Playbook",
    description: "Practical strategies to reduce cloud spending without compromising performance or security.",
    date: "June 10, 2025",
    type: "article"
  },
  {
    id: "securing-ai-systems",
    image: "https://images.unsplash.com/photo-1558346547-8961a464dfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    categories: ["ai", "security"],
    title: "Securing AI Systems: The 2025 Threat Landscape",
    description: "Emerging threats and defense strategies for AI-powered systems in the enterprise.",
    date: "June 5, 2025",
    type: "article"
  },
  {
    id: "ai-fraud-detection",
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    categories: ["fintech", "ai"],
    title: "AI-Driven Fraud Detection in Financial Services",
    description: "How advanced machine learning models are revolutionizing fraud prevention in the financial industry.",
    date: "May 28, 2025",
    type: "case-study"
  },
  {
    id: "supply-chain-cloud",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    categories: ["logistics", "cloud"],
    title: "Supply Chain Optimization Through Cloud Computing",
    description: "Leveraging cloud technologies to create more resilient and efficient supply chains.",
    date: "May 20, 2025",
    type: "whitepaper"
  },
  {
    id: "legal-discovery-ai",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    categories: ["legaltech", "ai"],
    title: "Transforming Legal Discovery with AI",
    description: "Case study on how a leading law firm reduced document review time by 60% using our AI solutions.",
    date: "May 15, 2025",
    type: "case-study"
  }
];

// Category filters for resources
export const resourceFilters = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "cloud", label: "Cloud" },
  { id: "security", label: "Security" },
  { id: "healthcare", label: "Healthcare" },
  { id: "fintech", label: "Fintech" },
  { id: "logistics", label: "Logistics" },
  { id: "legaltech", label: "LegalTech" }
];

// Type filters for resources
export const resourceTypeFilters = [
  { id: "all", label: "All Types" },
  { id: "article", label: "Articles" },
  { id: "whitepaper", label: "Whitepapers" },
  { id: "case-study", label: "Case Studies" }
];
