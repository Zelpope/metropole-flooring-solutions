import { useState, useEffect } from 'react';
import { CheckCircle, Award, Building2, Users } from 'lucide-react';

const rotatingImages = [
  "/images/About us images/pic 1.jpeg",
  "/images/About us images/pic 2.jpg",
  "/images/About us images/pic 3.jpg",
  "/images/About us images/pic 4.jpg",
  "/images/About us images/pic 5.jpg",  
];

const features = [
  {
    icon: Award,
    title: 'Authorized Distributor',
    description: 'Official agent of Chichibu Japan & Tuffloor',
  },
  {
    icon: Building2,
    title: '1,200+ Projects',
    description: 'Completed across Indonesia nationwide',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled professionals with decades of experience',
  },
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === rotatingImages.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Rotator */}
          <div className="relative">
            <div className="aspect-square bg-secondary rounded-2xl overflow-hidden relative">
              {rotatingImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`About image ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <p className="text-4xl font-heading font-bold">25+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Indonesia's Only Authorized Chichibu Floor Hardener Distributor Since 1997
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              PT Metropole Trikarya Ciptaperkasa is a continuation of PT Metropole Trading Company,
              established on 12 December 1997. We specialize in industrial flooring systems, supplying 
              and applying premium materials for floor hardener, liquid hardener, and waterproofing solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As the authorized agent and distributor of Chichibu Concrete Industry Co., Ltd. (Japan) and 
              Tuffloor, we have completed over 1,200 projects across Indonesia, including the Jakarta MRT 
              Phase 1 (Bundaran HI – Lebak Bulus), where our Chichibu floor hardener—both powder and liquid—
              was selected for its Japanese-standard Mohs hardness of 8.
            </p>
            <p className="text-muted-foreground leading-relaxed">
            <strong>Looking for premium floor hardener in Jakarta, Karawang, or Cikarang?</strong> As the exclusive Chichibu distributor in Indonesia, we supply authentic Japanese-standard floor hardener materials with Mohs hardness 8 rating. Our liquid floor hardener and dry shake solutions serve factories, warehouses, logistics centers, and industrial facilities throughout Jabodetabek, Semarang, Surabaya, Kalimantan, Sumatra and beyond.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We serve factories, warehouses, car parks, logistics hubs, and industrial facilities nationwide.
            </p>

            <div className="space-y-4 pt-4">
              {[
                'Premium Japanese-standard materials',
                'Nationwide coverage',
                'Experienced application team',
                'After-sales support',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Row */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 bg-secondary rounded-xl">
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
