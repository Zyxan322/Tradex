import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import eventImg from "@/assets/event.jpg";
import teamImg from "@/assets/team.jpg";
import freezoneImg from "@/assets/freezone.jpg";
import handshakeImg from "@/assets/handshake.jpg";

export const images = { hero1, hero2, hero3, hero4, eventImg, teamImg, freezoneImg, handshakeImg };

export const contact = {
  email: "info@tradexuae.com",
  phone: "+971 4 259 8815",
  mobiles: ["+971 52 913 6157", "+971 52 733 7668"],
  offices: [
    {
      title: "Office 1",
      lines: [
        "Tradex Auditing of Accounts",
        "LB 16, 2nd Floor, Office 207",
        "JAFZA P.O. Box 120591",
        "Dubai, UAE",
      ],
    },
    { title: "Office 2", lines: ["JAFZA Building 11", "Ground Floor, Office 11007", "Dubai, UAE"] },
  ],
  hours: "Mon – Fri: 08:30 – 05:30",
};

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/corporate-tax", label: "Corporate Tax" },
  { to: "/events", label: "Events" },
  { to: "/blogs", label: "Blogs" },
  { to: "/glimpses", label: "Glimpses" },
  { to: "/career", label: "Join Our Team" },
  { to: "/contact", label: "Contact" },
] as const;

export type Service = { slug: string; title: string; short: string; points: string[] };

const s = (title: string, short: string, points: string[]): Service => ({
  slug: title
    .toLowerCase()
    .replace(/[()&,]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-"),
  title,
  short,
  points,
});

export const services: Service[] = [
  s(
    "Audit",
    "Independent external, internal and statutory audits that strengthen confidence in your financial statements.",
    [
      "External & Internal Audits",
      "Statutory Audits",
      "Management Audits",
      "Special & Investigative Audits",
    ],
  ),
  s(
    "Taxation (VAT, CT)",
    "VAT and Corporate Tax registration, filing and compliance support across the UAE.",
    [
      "VAT Registration & Filing",
      "Excise Tax",
      "Corporate Tax Registration & Filing",
      "Tax Compliance",
    ],
  ),
  s(
    "Financial Services",
    "Financial reporting and advisory to support informed business decisions.",
    ["Financial Reporting", "Advisory", "Budgeting Support"],
  ),
  s("Business Setup", "Company formation across Mainland, Freezone and Offshore jurisdictions.", [
    "Mainland",
    "Freezone",
    "Offshore",
    "Licensing",
  ]),
  s(
    "Anti-Money Laundering (AML)",
    "AML compliance frameworks aligned with UAE regulatory requirements.",
    ["AML Policies", "Risk Assessment", "Compliance Review"],
  ),
  s("Accounting", "Accurate bookkeeping and accounting so your records are always audit-ready.", [
    "Bookkeeping",
    "Management Accounts",
    "Reconciliations",
  ]),
  s("Corporate Tax", "End-to-end UAE Corporate Tax registration, filing and advisory.", [
    "CT Registration",
    "CT Filing",
    "Tax Advisory",
  ]),
  s("CFO Services", "Strategic financial leadership without the cost of a full-time CFO.", [
    "Financial Strategy",
    "Cash Flow Planning",
    "Board Reporting",
  ]),
  s(
    "Business Valuation",
    "Professional valuations for transactions, restructuring and reporting.",
    ["Valuation Reports", "Due Diligence Support"],
  ),
  s("Payroll & HR Services", "Reliable payroll processing and HR administration.", [
    "Payroll Processing",
    "WPS Support",
    "HR Administration",
  ]),
  s("Golden Visa", "Assistance with UAE Golden Visa applications.", [
    "Eligibility Review",
    "Application Support",
  ]),
  s("Digital Marketing", "Digital marketing support to help your business grow.", [
    "Online Presence",
    "Campaign Support",
  ]),
  s("Corporate Services", "Ongoing corporate secretarial and administrative services.", [
    "Corporate Secretarial",
    "Document Services",
  ]),
  s("ICV Certification Services", "In-Country Value certification support.", [
    "ICV Assessment",
    "Certification Support",
  ]),
  s("Liquidation", "Company liquidation and deregistration support.", [
    "Liquidation Reports",
    "Deregistration",
  ]),
  s("ESR & UBO Services", "Economic Substance and Ultimate Beneficial Owner compliance.", [
    "ESR Notifications & Reports",
    "UBO Registers",
  ]),
  s("Tax Residency Certificate", "Support obtaining UAE Tax Residency Certificates.", [
    "Application Support",
    "Documentation",
  ]),
  s("Account Opening Assistance", "Guidance through account opening requirements.", [
    "Documentation",
    "Process Support",
  ]),
  s("Bank Account Opening Assistance", "Support with corporate bank account opening in the UAE.", [
    "Bank Liaison",
    "KYC Documentation",
  ]),
];

export const featured = [
  {
    title: "Company Formation in UAE",
    text: "Mainland, Freezone and Offshore company setup with licensing and advisory.",
    slug: "business-setup",
    img: freezoneImg,
  },
  {
    title: "RAK ICC Registered Agent Services",
    text: "Registered agent services for RAK International Corporate Centre companies.",
    slug: "corporate-services",
    img: handshakeImg,
  },
  {
    title: "RERA Auditor Services",
    text: "Audit services for real estate projects and owners' associations.",
    slug: "audit",
    img: hero3,
  },
  {
    title: "E-Invoicing Services",
    text: "Assistance preparing your business for UAE e-invoicing.",
    slug: "taxation-vat-ct",
    img: hero4,
  },
  {
    title: "ADGM Registered Auditor",
    text: "Audit services for entities registered in Abu Dhabi Global Market.",
    slug: "audit",
    img: hero2,
  },
  {
    title: "Odoo ERP Partner & Accounting Firm",
    text: "Odoo ERP implementation combined with accounting expertise.",
    slug: "accounting",
    img: teamImg,
  },
];

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  img: string;
};

export const events: Post[] = [
  {
    slug: "eurasian-balkan-business-forum-2026",
    title: "TRADEX at the Eurasian Balkan Business Forum 2026",
    category: "Event",
    date: "2026",
    excerpt: "Tradex participated in the Eurasian Balkan Business Forum 2026.",
    img: eventImg,
  },
  {
    slug: "meydan-free-zone-channel-partner",
    title: "Registered Channel Partner – Meydan Free Zone",
    category: "Announcement",
    date: "2026",
    excerpt: "Tradex is a Registered Channel Partner of Meydan Free Zone.",
    img: hero1,
  },
  {
    slug: "rak-icc-registered-agent",
    title: "RAK ICC Registered Agent Services",
    category: "Services",
    date: "2026",
    excerpt: "Registered agent services for RAK ICC companies.",
    img: handshakeImg,
  },
  {
    slug: "rera-auditor-services",
    title: "RERA Auditor Services",
    category: "Services",
    date: "2026",
    excerpt: "Audit services for the real estate sector.",
    img: hero3,
  },
  {
    slug: "e-invoicing-services",
    title: "E-Invoicing Services",
    category: "Services",
    date: "2026",
    excerpt: "Helping businesses prepare for UAE e-invoicing.",
    img: hero4,
  },
  {
    slug: "adgm-registered-auditor",
    title: "ADGM Registered Auditor",
    category: "Services",
    date: "2026",
    excerpt: "Audit services for ADGM-registered entities.",
    img: hero2,
  },
  {
    slug: "middle-east-tax-leaders-summit-2026",
    title: "Middle East Tax Leaders Summit & Awards 2026",
    category: "Event",
    date: "2026",
    excerpt: "Tradex at the Middle East Tax Leaders Summit & Awards 2026.",
    img: teamImg,
  },
];

export const blogs: Post[] = [
  {
    slug: "uae-corporate-tax-essentials",
    title: "UAE Corporate Tax: Registration and Filing Essentials",
    category: "Corporate Tax",
    date: "2026",
    excerpt: "An overview of registration and filing steps for UAE Corporate Tax.",
    img: hero2,
  },
  {
    slug: "why-statutory-audit-matters",
    title: "Why a Statutory Audit Matters for Your Business",
    category: "Audit",
    date: "2026",
    excerpt: "How independent audits build trust with stakeholders and regulators.",
    img: hero4,
  },
  {
    slug: "choosing-mainland-freezone-offshore",
    title: "Mainland, Freezone or Offshore?",
    category: "Business Setup",
    date: "2026",
    excerpt: "Key considerations when choosing a company structure in the UAE.",
    img: freezoneImg,
  },
  {
    slug: "vat-compliance-checklist",
    title: "A Practical VAT Compliance Checklist",
    category: "VAT",
    date: "2026",
    excerpt: "Staying compliant with VAT filing obligations in the UAE.",
    img: hero3,
  },
  {
    slug: "aml-compliance-for-dnfbps",
    title: "AML Compliance Basics",
    category: "AML",
    date: "2026",
    excerpt: "The fundamentals of anti-money laundering compliance.",
    img: handshakeImg,
  },
];

export const freeZones = [
  "JAFZA",
  "DMCC",
  "IFZA",
  "DWC",
  "DAFZA",
  "Silicon Oasis",
  "TECOM",
  "SAIF Zone",
  "SHAMS",
  "Ajman Free Zone",
  "RAK Freezone",
  "Meydan Freezone",
  "DIFC",
  "Hamriyah",
  "SPC Free Zone",
  "ADGM",
  "RAK ICC",
];

export const recognitions = [
  "UAE Recognition",
  "Institute of Financial Accountants (UK)",
  "IPA – Australia",
  "Chartered Accountants Ireland",
  "IFAP – Pakistan",
];
