import { Badge } from "./ui/badge";
import { 
  Video, 
  Film, 
  Palette, 
  Music, 
  Sparkles, 
  Layers,
  Wand2,
  Camera
} from "lucide-react";

const skillCategories = [
  {
    title: "Editing Software",
    icon: Video,
    skills: ["Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve", "Avid Media Composer"]
  },
  {
    title: "Motion Graphics",
    icon: Sparkles,
    skills: ["Adobe After Effects", "Cinema 4D", "Blender", "Motion"]
  },
  {
    title: "Color Grading",
    icon: Palette,
    skills: ["DaVinci Resolve", "Color Correction", "LUT Creation", "Color Theory"]
  },
  {
    title: "Audio",
    icon: Music,
    skills: ["Adobe Audition", "Audio Mixing", "Sound Design", "Noise Reduction"]
  },
  {
    title: "Visual Effects",
    icon: Wand2,
    skills: ["Compositing", "Green Screen", "Tracking", "Rotoscoping"]
  },
  {
    title: "Production",
    icon: Camera,
    skills: ["Camera Operation", "Lighting", "Storyboarding", "Directing"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for bringing your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all hover:shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-secondary hover:bg-secondary/80"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
