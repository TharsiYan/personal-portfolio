import { Card } from "@/components/ui/card";
import { Users, Leaf, Trophy } from "lucide-react";

const Extracurricular = () => {
  const activities = [
    {
      title: "OR Society Member",
      organization: "University of Peradeniya",
      icon: Users,
      description: "Active member contributing to operations research discussions and academic events."
    },
    {
      title: "Zero Plastic Campaign",
      organization: "Environmental Initiative",
      icon: Leaf,
      description: "Participated in sustainability initiatives promoting environmental awareness and plastic reduction."
    },
    {
      title: "Volleyball Team",
      organization: "University Sports (2022–2024)",
      icon: Trophy,
      description: "Team player demonstrating commitment, discipline, and collaborative spirit through athletics."
    }
  ];

  return (
    <section id="extracurricular" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">
          Extracurricular Activities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-accent/10 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3">
                    {activity.organization}
                  </p>
                  <p className="text-foreground/70 text-sm">
                    {activity.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
