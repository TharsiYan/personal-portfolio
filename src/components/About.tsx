import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">
          About Me
        </h2>
        
        <Card className="p-8 md:p-12 shadow-lg border-0 bg-card" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground/90">
              I am a <span className="font-semibold text-primary">B.Sc. (Hons.) undergraduate in Statistics and Operations Research</span> at the University of Peradeniya, with a deep passion for <span className="font-semibold">data analysis, programming, and real-world problem solving</span>.
            </p>
            
            <p className="text-foreground/90">
              My academic journey has equipped me with strong analytical and mathematical foundations, while my hands-on experience has fostered practical skills in <span className="font-semibold text-secondary">data science, machine learning, and optimization</span>.
            </p>
            
            <p className="text-foreground/90">
              Currently, I am interning as a <span className="font-semibold text-primary">Software Engineering Intern at Yarl IT Hub</span>, where I am actively learning about software engineering principles, data analytics workflows, and collaborative team environments. This experience has broadened my understanding of how technology and data-driven insights converge to create meaningful solutions.
            </p>
            
            <p className="text-foreground/90">
              I believe in the power of <span className="font-semibold">numbers and code</span> to transform complex challenges into actionable insights. Whether it's optimizing processes, building predictive models, or developing software solutions, I am driven by curiosity and a commitment to continuous learning.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
