import { Award, Users, Video, Zap } from "lucide-react";

const stats = [
  { icon: Video, label: "Projects Completed", value: "100+" },
  { icon: Users, label: "Happy Clients", value: "10+" },
  { icon: Award, label: "Years Experience", value: "2+" },
  { icon: Zap, label: "Hours of Content", value: "500+" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground">
              Transforming raw footage into compelling visual narratives
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <p className="text-foreground/90 leading-relaxed">
              I'm a passionate video editor with over 5 years of experience in creating 
              engaging content for brands, businesses, and creators. My expertise spans 
              across motion graphics, explainer videos, promotional content, and documentary 
              storytelling.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              I believe that every frame tells a story, and my goal is to ensure that your 
              message resonates with your audience through seamless editing, dynamic animations, 
              and precise audio synchronization. Whether it's a 30-second ad or a feature-length 
              documentary, I bring the same level of dedication and creativity to every project.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary transition-all hover:shadow-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
