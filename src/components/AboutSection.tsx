import { CheckCircle, Award, Building2, Users } from 'lucide-react';

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
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square bg-secondary rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop"
                alt="Industrial facility"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl">
              <p className="text-4xl font-heading font-bold">25+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Indonesia's Trusted Industrial Flooring Partner
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              PT Metropole Trikarya Ciptaperkasa is a continuation of PT Metropole Trading Company, established on 12 December 1997. We specialize in industrial flooring systems, supplying and applying premium materials for floor hardener, liquid hardener, and waterproofing solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As the authorized agent and distributor of Chichibu Concrete Industry Co., Ltd. (Japan) and Tuffloor, we have completed over 1,200 projects across Indonesia, including the Jakarta MRT Phase 1 (Bundaran HI – Lebak Bulus), where our Chichibu floor hardener—both powder and liquid—was selected for its Japanese-standard Mohs hardness of 8.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We serve factories, warehouses, car parks, logistics hubs, and industrial facilities nationwide.
            </p>
            <div className="space-y-4 pt-4">
              {['Premium Japanese-standard materials', 'Nationwide coverage', 'Experienced application team', 'After-sales support'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 bg-secondary rounded-xl">
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
