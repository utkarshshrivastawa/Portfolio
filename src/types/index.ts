export interface Project {
  id: string;
  title: string;
  description: string[];
  liveDemo?: string;
  viewCode?: string;
  backgroundImage?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}