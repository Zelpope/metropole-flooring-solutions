import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const heroImages = [
  '/images/Top side/pic 1.png',
  '/images/Top side/pic 2.png',
  '/images/Top side/pic 3.jpg',
  '/images/Top side/pic 4.png',
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // auto-rotate every 4 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

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
            <div className="space-y-2">
            <div className="space-y-2">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Exclusive Chichibu Floor Hardener Distributor Indonesia</span>
            </div>
            
            {/* Company Name - Large & Prominent */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              PT Metropole Trikarya Ciptaperkasa
            </h1>
            
            {/* SEO-Rich Subtitle - H2 but styled like H1 continuation */}
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-primary leading-tight">
              Authorized Chichibu Distributor Indonesia
            </h2>
          </div>
          </div>
            <p className="text-lg text-muted-foreground max-w-xl">
            Indonesia's exclusive authorized distributor of Chichibu Japan and Tuffloor floor hardener since 1997. We provide premium liquid floor hardener, dry shake hardener, and industrial floor repair solutions for factories, warehouses, and facilities across Jakarta, Cikarang, Karawang, Cikampek, and nationwide. Trusted by MRT Jakarta, Mitsubishi, Sharp, and 1,200+ major projects.
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
            {/* Rotating hero images - fade transition */}
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden relative">
              {heroImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Hero ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    i === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                />
              ))}
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
