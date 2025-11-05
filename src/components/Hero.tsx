import { ArrowDown } from "lucide-react"; 
import { Button } from "./ui/button";

const Hero = () => {
  // Scroll to Videos section
  const scrollToVideos = () => {
    const element = document.getElementById("videos");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to Contact section
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Crafting Visual
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
                Stories That Matter
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              From seamless cuts to spot-on beats and punchy motion — 
              I don't just edit videos, I elevate them.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToVideos}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-lg hover:shadow-glow transition-all"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Get In Touch
            </Button>
          </div>

          <button 
            onClick={scrollToVideos}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
