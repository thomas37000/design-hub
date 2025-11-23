import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Nav } from "@/components/Nav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <ProjectsGrid />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
