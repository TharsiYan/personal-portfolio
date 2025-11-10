import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
          Let's Connect
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          I'm always open to discussing new opportunities and collaborations
        </p>
        
        <Card className="p-8 md:p-12" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                <p className="text-foreground/80 mb-8">
                  Feel free to reach out for opportunities, collaborations, or just to connect.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="mailto:tharsijan1999@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">tharsijan1999@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/santhirakumar-tharsiyan-5773bb2b2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-semibold text-foreground">santhirakumar-tharsiyan</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">Olumadu, Nedunkerny, Vavuniya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Message CTA */}
            <div className="flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8">
              <Send className="h-16 w-16 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-foreground/80 mb-6">
                Whether you have a project in mind, need a data-driven solution, or just want to connect — I'd love to hear from you.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:shadow-lg transition-all duration-300"
                asChild
              >
                <a href="mailto:tharsijan1999@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
