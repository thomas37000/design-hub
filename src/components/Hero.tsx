import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full animate-fade-in">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-accent font-medium tracking-wide">Designer & Creative Director</p>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              Crafting Digital
              <br />
              <span className="text-accent">Experiences</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            I transform ideas into beautiful, functional designs that connect with people and drive results.
          </p>
          
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="font-semibold">
              View Work
            </Button>
            <Button size="lg" variant="outline" className="font-semibold">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
