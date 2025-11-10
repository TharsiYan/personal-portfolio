import { Card } from "@/components/ui/card";
import { Award, TrendingUp } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Data Analysis with R Programming",
      provider: "Coursera",
      icon: TrendingUp,
      description: "Comprehensive course covering R programming, data manipulation, visualization, and statistical analysis."
    },
    {
      title: "Introduction to Data Analytics",
      provider: "Coursera",
      icon: Award,
      description: "Foundational course exploring data analytics concepts, tools, and methodologies."
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-secondary font-semibold mb-3">
                      {cert.provider}
                    </p>
                    <p className="text-foreground/70 text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
