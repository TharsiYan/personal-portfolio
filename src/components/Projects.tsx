import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Assembly Line Optimization",
      company: "SMT Apparels (Pvt) Ltd",
      description: "Solved complex scheduling challenges using the Critical Path Method (CPM) and PERT analysis to optimize production workflow and reduce bottlenecks in the assembly line.",
      technologies: ["Operations Research", "CPM", "PERT", "Project Scheduling", "Optimization"],
      icon: Building2,
      type: "Operations Research"
    },
    {
      title: "Software Engineering Projects",
      company: "Yarl IT Hub - Coming Soon",
      description: "Currently working on various software engineering and data analytics projects as part of my internship. Projects include web development, data processing pipelines, and analytical dashboards.",
      technologies: ["Python", "Web Development", "Data Analytics", "Software Engineering"],
      icon: Code2,
      type: "Software Development"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
          Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Real-world applications and problem-solving
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-accent/20 text-accent border-accent/30">
                      {project.type}
                    </Badge>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary font-semibold">
                      {project.company}
                    </p>
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-md text-xs font-medium"
                    >
                      {tech}
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

export default Projects;
