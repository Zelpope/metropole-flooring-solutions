import { useState } from 'react';
import { Droplets, Layers, Wrench, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Service = {
  icon: any;
  title: string;
  description: string;
  features: string[];
  images: string[];
  imageClass?: string;
  wrapperClass?: string;
};

const services: Service[] = [
  {
    icon: Droplets,
    title: 'Liquid Floor Hardener',
    description:
      'Our liquid floor hardener penetrates deep into concrete surfaces, chemically reacting to create a harder, denser surface. Ideal for warehouses, factories, and high-traffic industrial areas requiring superior abrasion resistance.',
    features: ['Deep penetration formula', 'Dustproofing properties', 'Chemical resistance', 'Low maintenance'],
    imageClass: 'w-full h-full object-cover flex-shrink-0',
    wrapperClass: 'relative aspect-video bg-background rounded-xl overflow-hidden group',
    images: [
      '/images/liquid/pic 1.jpeg',
      '/images/liquid/pic 2.jpg',
      '/images/liquid/pic 3.jpeg',
      '/images/liquid/pic 4.jpeg',
      '/images/liquid/pic 5.jpeg',
      '/images/liquid/pic 6.jpeg',
    ],
  },
  {
    icon: Layers,
    title: 'Dry Shake Floor Hardener',
    description:
      'Premium dry shake hardener with metallic or non-metallic aggregates, broadcast onto fresh concrete for exceptional surface hardness. Achieves Mohs hardness of 8 with Chichibu Japanese-standard materials.',
    features: ['Mohs hardness 8 rating', 'Metallic & non-metallic options', 'Integral color options', 'Seamless application'],
    imageClass: 'w-full h-full object-cover flex-shrink-0',
    wrapperClass: 'relative aspect-video bg-background rounded-xl overflow-hidden group',
    images: [
        '/images/dry/pic 1.jpeg',
        '/images/dry/pic 2.jpg',
        '/images/dry/pic 3.jpeg',
        '/images/dry/pic 4.jpg',
        '/images/dry/pic 5.jpeg',
        '/images/dry/pic 6.jpg',
      ],

  },
  {
    icon: Wrench,
    title: 'Repair & Surface Restoration',
    description:
      'Comprehensive repair services for damaged industrial floors, including crack repair, surface restoration, and protective coating application. We restore floors to optimal condition with minimal downtime.',
    features: ['Crack & joint repair', 'Surface leveling', 'Protective coatings', 'Quick turnaround'],
    // Repair uses contain so portrait images show fully; white bg keeps it clean
    imageClass: 'w-full h-full object-contain bg-white flex-shrink-0',
    wrapperClass: 'relative aspect-video bg-white rounded-xl overflow-hidden group',
    images: [
      '/images/repair/pic 1.jpg',
      '/images/repair/pic 2.jpg',
      '/images/repair/pic 3.jpg',
      '/images/repair/pic 4.JPG',
      '/images/repair/pic 5.JPG',
    ],
  },
];

const ServiceImageGallery = ({
  images,
  title,
  imageClass = 'w-full h-full object-cover flex-shrink-0',
  wrapperClass = 'relative aspect-video bg-background rounded-xl overflow-hidden group',
}: {
  images: string[];
  title: string;
  imageClass?: string;
  wrapperClass?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={wrapperClass}>
      {/* Sliding Images Container */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={`${index}-${image}`}
            src={image}
            alt={`${title} - Image ${index + 1}`}
            className={imageClass}
            loading="lazy"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-md transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-md transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Image Counter */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-background/80 text-foreground text-sm px-3 py-1 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Industrial Flooring Solutions
          </h2>
          <p className="text-muted-foreground">
            We provide end-to-end flooring services using premium materials from Chichibu Japan and Tuffloor, ensuring superior quality and durability for your industrial facilities.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <ServiceImageGallery
                  images={service.images}
                  title={service.title}
                  imageClass={service.imageClass}
                  wrapperClass={service.wrapperClass}
                />
              </div>
              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                  <service.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Service</span>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <ul className="grid grid-cols-2 gap-3 pt-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button onClick={scrollToContact} className="mt-4 gap-2">
                  Get Quote <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
