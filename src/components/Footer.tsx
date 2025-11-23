const Footer = () => {
  return (
    <footer className="px-6 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-2xl font-bold">Let's Work Together</p>
            <p className="text-muted-foreground">Get in touch for projects and collaborations</p>
          </div>
          
          <div className="flex gap-6">
            <a href="mailto:hello@designer.com" className="text-foreground hover:text-accent transition-colors">
              Email
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Dribbble
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Instagram
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Designer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
