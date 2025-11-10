import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            Santhirakumar Tharsiyan
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Statistician • Programmer • Software Engineering Intern @ Yarl IT Hub
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate about data science, machine learning, and optimization — using numbers and code to solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/90 hover:shadow-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="/S.Tharsiyan_Resume.pdf" download="Santhirakumar_Tharsiyan_CV.pdf">
                <Download className="mr-2 h-5 w-5" />
                View CV
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToContact}
              className="border-2 hover:bg-primary/5 transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
