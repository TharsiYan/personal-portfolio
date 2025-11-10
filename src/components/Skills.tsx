import { Card } from "@/components/ui/card";
import { Code2, Database, LineChart, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "R", "C", "Java", "SQL", "HTML"]
    },
    {
      title: "Tools & Software",
      icon: Wrench,
      skills: ["Excel", "Power BI", "SPSS", "Minitab", "MySQL", "Word", "PowerPoint"]
    },
    {
      title: "Technical Areas",
      icon: Database,
      skills: ["Data Science", "Machine Learning", "Optimization", "Project Scheduling"]
    },
    {
      title: "Data Visualization",
      icon: LineChart,
      skills: ["Statistical Analysis", "Predictive Modeling", "Data Visualization", "Dashboard Design"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
          Skills & Tools
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Technical expertise across multiple domains
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 bg-primary/5 text-primary rounded-full text-sm font-medium border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
