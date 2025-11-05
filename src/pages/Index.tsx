import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Videos from "@/components/Videos"; // ✅ ADD THIS LINE
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Videos /> {/* ✅ NEW VIDEO SECTION */}
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
