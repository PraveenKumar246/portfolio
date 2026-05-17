import { Project, Experience, Skill, Testimonial } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'PayFlow - FinTech Payment Platform',
    description: 'A modern fintech payment platform with dashboard, money transfers, card management, and transaction tracking. Built with Next.js, TypeScript, and Tailwind CSS.',
    image: '💸',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    link: 'https://github.com/PraveenKumar246/fintech-payment-platform',
    github: 'PraveenKumar246/fintech-payment-platform',
    featured: true,
    year: 2025,
  },
  {
    id: '2',
    title: 'CtrlCampus ERP Platform',
    description: 'Full-featured SaaS ERP platform for educational institutions with modules for admissions, fees, and academics. Developed responsive UI components and integrated REST APIs.',
    image: '🎓',
    technologies: ['React.js', 'TypeScript', 'Redux', 'REST APIs', 'Material UI'],
    link: 'https://www.ctrlcampus.com',
    github: 'CtrlCampus',
    featured: true,
    year: 2024,
  },
  {
    id: '3',
    title: 'ERP Mobile Application',
    description: 'Cross-platform mobile app built with React Native for students and parents. Features payment gateway integration and real-time data synchronization.',
    image: '📱',
    technologies: ['React Native', 'JavaScript', 'Payment APIs', 'Firebase'],
    link: '#',
    github: '#',
    featured: true,
    year: 2024,
  },
  {
    id: '4',
    title: 'Freelance Web Solutions',
    description: 'Delivered scalable web and mobile solutions for diverse clients. Focused on performance optimization and user experience design.',
    image: '🚀',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    link: '#',
    github: '#',
    featured: false,
    year: 2023,
  },
];

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Paywize Technologies Pvt Ltd',
    position: 'Frontend Software Engineer',
    duration: 'Oct 2025 - Present',
    description: 'Building scalable fintech platforms with React and TypeScript.',
    achievements: [
      'Architected React.js components for payout & connected banking workflows',
      'Integrated 20+ REST APIs for real-time transaction tracking',
      'Improved page load times by 35% through performance optimization',
      'Achieved 80%+ code coverage with Jest & React Testing Library',
    ],
    startDate: '2025-10',
    endDate: 'present',
  },
  {
    id: '2',
    company: 'CtrlCampus Pvt Ltd',
    position: 'UI Developer',
    duration: 'June 2023 - Sep 2025',
    description: 'Developed modular components for SaaS ERP platform.',
    achievements: [
      'Built reusable React components with TypeScript',
      'Integrated APIs for Admissions, Fees, and Academics modules',
      'Implemented responsive UI layouts across all devices',
      'Optimized application performance reducing code duplication',
      'Built cross-platform mobile app with React Native',
    ],
    startDate: '2023-06',
    endDate: '2025-09',
  },
  {
    id: '3',
    company: 'Factana Computing Pvt Ltd',
    position: 'Web Development Intern',
    duration: '3 Months (2023)',
    description: 'Gained practical experience in frontend development.',
    achievements: [
      'Learned React.js and modern web development practices',
      'Debugged and fixed production issues',
      'Collaborated with development team on real-world projects',
    ],
    startDate: '2023-01',
    endDate: '2023-03',
  },
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend & APIs',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'REST APIs', 'TDD', 'Design Documentation'],
  },
  {
    category: 'UI & Styling',
    icon: '🎭',
    skills: ['Responsive Design', 'CSS3 (Flexbox, Grid)', 'Material UI', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'Azure DevOps', 'Bitrix24'],
  },
  {
    category: 'Testing & QA',
    icon: '✅',
    skills: ['Jest', 'React Testing Library', 'Unit Testing', 'TDD', 'Regression Testing'],
  },
  {
    category: 'Core Skills',
    icon: '🚀',
    skills: ['Agile/Scrum', 'Component Architecture', 'Performance Optimization', 'Code Reusability'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    position: 'CTO',
    company: 'CtrlCampus',
    text: 'Praveen is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills are outstanding.',
    image: '👨‍💼',
  },
  {
    id: '2',
    name: 'Priya Singh',
    position: 'Product Manager',
    company: 'Paywize Technologies',
    text: 'Working with Praveen has been fantastic. He understands fintech requirements and builds robust, scalable solutions with excellent attention to UX.',
    image: '👩‍💼',
  },
  {
    id: '3',
    name: 'Amit Patel',
    position: 'Team Lead',
    company: 'Factana Computing',
    text: 'Praveen is a fast learner and dedicated professional. His commitment to code quality and continuous improvement is remarkable.',
    image: '👨‍💻',
  },
];

export const stats = {
  yearsExperience: 3,
  projectsCompleted: 15,
  clientsSatisfied: 10,
  codeQuality: 95,
};
