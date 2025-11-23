export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Brand Identity System",
    category: "Branding",
    description: "Complete visual identity for a sustainable fashion startup",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&auto=format&fit=crop",
    year: "2024",
  },
  {
    id: 2,
    title: "E-Commerce Redesign",
    category: "UI/UX Design",
    description: "Modern shopping experience with seamless checkout flow",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    year: "2024",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "Product Design",
    description: "Intuitive financial management for Gen Z users",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop",
    year: "2023",
  },
  {
    id: 4,
    title: "Editorial Layout",
    category: "Print Design",
    description: "Art direction for quarterly design magazine",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop",
    year: "2023",
  },
  {
    id: 5,
    title: "Design System",
    category: "Systems Design",
    description: "Comprehensive component library and guidelines",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
    year: "2024",
  },
  {
    id: 6,
    title: "Motion Graphics",
    category: "Animation",
    description: "Brand video showcasing product features",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop",
    year: "2023",
  },
];
