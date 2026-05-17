export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github: string;
  featured: boolean;
  year: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  startDate: string;
  endDate: string;
}

export interface Skill {
  category: string;
  skills: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  text: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}
