const About = () => {
  return (
    <section className="px-6 py-32 bg-card">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-5xl md:text-6xl font-bold">About</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a designer with a passion for creating meaningful experiences that blend aesthetics with functionality. 
            With over 8 years in the industry, I've worked with startups and established brands to bring their visions to life.
          </p>
          
          <p>
            My approach combines strategic thinking with hands-on design work. I believe great design is invisible—it should 
            feel intuitive and natural while solving real problems for real people.
          </p>
          
          <p>
            Currently, I'm exploring the intersection of design and technology, focusing on building accessible and inclusive 
            digital products that make a positive impact.
          </p>
        </div>
        
        <div className="pt-8 space-y-6">
          <h3 className="text-2xl font-bold">Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Brand Identity", "UI/UX Design", "Design Systems", "Product Strategy", "Art Direction", "Motion Design"].map((skill) => (
              <div key={skill} className="px-4 py-3 bg-background rounded-lg border border-border">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
