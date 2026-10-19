import { existsSync } from 'node:fs';

// Builds run from the project root, so this path is relative to it.
// If the file is removed, every resume link disappears instead of 404ing.
const resumeFile = 'public/resume.pdf';

export const site = {
  name: 'Hady Gustianto',
  role: 'Backend-leaning full-stack engineer',
  description:
    'Hady Gustianto is a backend-leaning full-stack engineer who designs and builds integration-heavy systems end to end, from Go microservices to Next.js products.',
  email: 'hadygust2883@gmail.com',
  phone: { display: '+62 878-8415-6045', href: 'tel:+6287884156045' },
  socials: [
    { label: 'GitHub', handle: 'hadygust', href: 'https://github.com/hadygust' },
    { label: 'LinkedIn', handle: 'hadygustianto', href: 'https://www.linkedin.com/in/hadygustianto' },
  ],
  nav: [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
  ],
  resume: existsSync(resumeFile) ? { href: '/resume.pdf', filename: 'Hady-Gustianto-Resume.pdf' } : null,
};
