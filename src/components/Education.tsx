import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Sc. (Hons.) in Statistics and Operations Research",
      institution: "University of Peradeniya",
      period: "Current",
      description: "Specialized in statistical analysis, operations research, optimization techniques, and data-driven decision making."
    },
    {
      degree: "G.C.E. Advanced Level - Physical Science",
      institution: "Mu/Vidyananda College",
      period: "Completed",
      description: "Strong foundation in analytical and scientific thinking with focus on mathematics and sciences."
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">
          Education
        </h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {edu.period}
                  </p>
                  <p className="text-foreground/80">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
