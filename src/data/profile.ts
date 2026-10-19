// Professional background shown on the homepage and /about.
// Order matters: newest first.

export interface Role {
  title: string;
  org: string;
  detail?: string;
  place: string;
  period: string;
  points: string[];
}

export const summary = [
  'I’m a backend-leaning full-stack engineer who designs and builds integration-heavy systems end to end. Right now I’m building the Go microservices backend behind Matahari’s multi-channel e-commerce platform, and I own the revenue engine of a hospitality SaaS as a freelancer.',
  'I work daily in agentic, AI-assisted development workflows and want to build AI-powered products. Before industry, I spent four years at BINUS University teaching, coordinating lab assistants and publishing machine-learning research.',
];

export const experience: Role[] = [
  {
    title: 'Senior IT Developer',
    org: 'MDS Retailing (Matahari)',
    detail: 'e-commerce backend, full-time, on-site',
    place: 'Tangerang, Indonesia',
    period: 'Jul 2026 – Present',
    points: [
      'Top contributor to 4 of 7 services in the Go microservices backend (gRPC + REST) that centralizes catalog, inventory, customer accounts, and orders for Matahari.com, SUKO, and MaxMurah.',
      'Designed and built from scratch the integration service through which all vendor product, stock, image, and fulfillment data enters the platform, replacing separate per-channel integrations with one shared catalog.',
      'Shipped storefront product search with filters and facets (Typesense), a secure product image pipeline on object storage (MinIO), and a bulk stock sync designed for 60,000 SKUs every 5 minutes.',
      'Integrated customer accounts with the group loyalty CRM (OTP activation, password reset, loyalty profiles) and led a test-first restructure of the user service with enforced module boundaries.',
    ],
  },
  {
    title: 'Software Engineer (Freelance)',
    org: 'Karana OS',
    detail: 'full-stack, remote',
    place: 'Bali, Indonesia',
    period: 'May 2026 – Present',
    points: [
      'Own the pricing and revenue module of a multi-property hospitality platform end to end, from data model to UI (Next.js, TypeScript, Supabase PostgreSQL + Edge Functions).',
      'Led a major architecture design: structured 5 core tables, migrated the database, and wrote the pricing computation engine in TypeScript.',
      'Built every feature with Claude Code using spec-driven generation and multi-agent review and testing workflows, validating AI-generated code through automated reviews and tests before shipping.',
      'Sustained same-day turnaround on client feedback: 58+ revisions across 5 review cycles in 6 weeks.',
    ],
  },
  {
    title: 'Subject Coordinator',
    org: 'BINUS University',
    detail: 'Software Laboratory Center, full-time, on-site',
    place: 'Jakarta, Indonesia',
    period: 'Feb 2023 – Feb 2026',
    points: [
      'Led 50+ lab assistants across OOP, Data Structures, Computer Vision, and other CS subjects, overseeing assignment design, exams, and code reviews.',
      'Trained 100+ assistant candidates on databases, OOP, and layered architecture; proposed new course modules that were adopted into the curriculum.',
    ],
  },
  {
    title: 'Student Researcher',
    org: 'BINUS University',
    detail: 'full-time, on-site',
    place: 'Jakarta, Indonesia',
    period: 'Feb 2024 – Feb 2025',
    points: [
      'Built a speaker identification model comparing Neural Network vs. SVM classifiers on audio features.',
      'Developed an ML-based web attack detection model (SQLi/XSS) using Random Forest and SVM on preprocessed security logs.',
    ],
  },
  {
    title: 'Programming Instructor & Teaching Assistant',
    org: 'BINUS University Software Laboratory Center; BCA Learning Institute',
    place: 'Jakarta & Sentul, Indonesia',
    period: 'Feb 2022 – May 2023',
    points: [
      'Taught 900+ students across C, Java, Python, JavaScript, SQL, Android, and web development; designed assignments and reviewed code submissions.',
    ],
  },
];

export const education = [
  {
    school: 'Bina Nusantara University',
    degree: 'Bachelor of Computer Science',
    note: 'GPA 3.82 / 4.00',
    place: 'Jakarta, Indonesia',
    period: '2021 – 2025',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Go', 'TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'C++', 'Kotlin (familiar)', 'PHP (familiar)', 'C# (familiar)'] },
  { group: 'Backend', items: ['gRPC & Protocol Buffers', 'REST API design', 'Microservices', 'Gin', 'gqlgen (GraphQL)', 'GORM', 'Supabase (Auth, Storage, Edge Functions)', 'Typesense', 'MinIO (S3)'] },
  { group: 'Frontend', items: ['Next.js (App Router)', 'React', 'Tailwind CSS', 'Recharts', 'Flutter', 'Android'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL / MariaDB', 'Redis', 'SQL Server', 'MongoDB', 'Firebase'] },
  { group: 'AI & ML', items: ['Claude Code (agentic, AI-assisted development)', 'scikit-learn', 'TensorFlow', 'pandas', 'NumPy'] },
  { group: 'DevOps & tooling', items: ['Git', 'GitLab', 'Docker / Docker Compose', 'GitHub Actions (CI/CD)', 'Linux / Bash', 'Postman'] },
];

export const publications: { title: string; status: 'Published' | 'Accepted'; href?: string }[] = [
  {
    title: 'Forensic Voice Analysis: Neural Networks Versus Support Vector Machines for Speaker Identification',
    status: 'Published',
    href: 'https://link.springer.com/chapter/10.1007/978-981-96-6432-0_24',
  },
  { title: 'Data Mod Security Processing for Machine Learning', status: 'Accepted' },
];

export const awards = [
  { title: 'Best Teaching Index Award', org: 'Software Laboratory Center, BINUS University', period: 'Odd term 2022–2023' },
  { title: 'Participant, Senior Competitive Programming Contest', org: 'COMPFEST 15', period: 'Oct 2023' },
];
