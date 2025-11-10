import { Mail, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              Santhirakumar Tharsiyan
            </h3>
            <p className="text-muted-foreground">
              Statistician • Programmer • Problem Solver
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:tharsijan1999@gmail.com"
              className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/santhirakumar-tharsiyan-5773bb2b2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p className="flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Santhirakumar Tharsiyan. Built with 
            <Heart className="h-4 w-4 text-red-500 fill-current" /> 
            and passion for data.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
