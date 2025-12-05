import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-secondary">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Industrial Flooring Specialist</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              PT Metropole<br />
              <span className="text-primary">Trikarya Ciptaperkasa</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              PT Metropole Trikarya Ciptaperkasa is an industrial flooring specialist providing high-performance floor hardener, liquid hardener, and waterproofing solutions—supported by premium materials from Chichibu Japan and Tuffloor to enhance durability, strength, and long-term performance in industrial environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection('#services')} className="gap-2">
                Our Services <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('#contact')} className="gap-2">
                <Phone className="h-4 w-4" /> Contact Us
              </Button>
            </div>
            <div className="pt-8 flex items-center gap-8">
              <div>
                <p className="text-3xl font-heading font-bold text-primary">1,200+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-3xl font-heading font-bold text-primary">25+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-3xl font-heading font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop"
                alt="Industrial flooring construction"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-lg border border-border">
              <p className="text-sm font-medium text-muted-foreground">Trusted Partner of</p>
              <p className="text-lg font-semibold text-foreground">Chichibu Japan & Tuffloor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
