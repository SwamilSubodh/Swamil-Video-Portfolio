import { useState } from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Play, Clock } from "lucide-react";
import VideoModal from "./VideoModal";

const categories = ["All"];

const projects = [
  {
    id: 1,
    title: "The Power of Asking Better Questions",
    description: "Do you often find yourself stuck in a situation where you're not getting the answers you need?",
    thumbnail: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
    videoSrc: "/videos/project1.mp4", // Place your video files in public/videos/
    duration: "8:22",
    client: "Growthleo",
    tags: ["Talking Head", "Explainer"],
    date: "8/1/2025"
  },
  {
    id: 2,
    title: "Cyber Security Awareness",
    description: "Just one wrong click and your business could be vulnerable to cyber attacks.",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    videoSrc: "/videos/project2.mp4",
    duration: "1:30",
    client: "Impel IT",
    tags: ["Motion Graphics", "Promo"],
    date: "7/31/2025"
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    description: "Transform your business with cutting-edge digital marketing strategies.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    videoSrc: "/videos/project3.mp4",
    duration: "1:22",
    client: "Marketing Pro",
    tags: ["Motion Graphics", "Promo"],
    date: "7/24/2025"
  },
  {
    id: 4,
    title: "Product Launch Video",
    description: "Showcase your product with stunning visuals and compelling storytelling.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    videoSrc: "/videos/project4.mp4",
    duration: "2:15",
    client: "TechStart",
    tags: ["Explainer", "Promo"],
    date: "7/20/2025"
  },
  {
    id: 5,
    title: "Social Media Shorts",
    description: "Quick, engaging content optimized for social media platforms.",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    videoSrc: "/videos/project5.mp4",
    duration: "0:45",
    client: "SocialBuzz",
    tags: ["Shorts", "Motion Graphics"],
    date: "7/15/2025"
  },
  {
    id: 6,
    title: "Corporate Training Video",
    description: "Professional training content that educates and engages your team.",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    videoSrc: "/videos/project6.mp4",
    duration: "5:30",
    client: "Corporate Plus",
    tags: ["Talking Head", "Explainer"],
    date: "7/10/2025"
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string } | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeCategory));

  const openVideoModal = (videoSrc: string, title: string) => {
    setSelectedVideo({ src: videoSrc, title });
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="projects" className="py-20 relative">
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={closeVideoModal}
        videoSrc={selectedVideo?.src || ""}
        title={selectedVideo?.title || ""}
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">My Video Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From seamless cuts to spot-on beats and punchy motion — 
            I don't just edit videos, I elevate them.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 transition-all ${
                activeCategory === category 
                  ? 'bg-primary text-primary-foreground shadow-glow' 
                  : 'border-border hover:border-primary hover:text-primary'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
              <span className="ml-2 text-xs opacity-70">
                {category === "All" ? projects.length : projects.filter(p => p.tags.includes(category)).length}
              </span>
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden border-border hover:border-primary transition-all hover:shadow-glow bg-card cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openVideoModal(project.videoSrc, project.title)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-12 h-12 text-primary" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span className="text-xs">{project.duration}</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="justify-between text-sm text-muted-foreground">
                <span>{project.client}</span>
                <span>{project.date}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
