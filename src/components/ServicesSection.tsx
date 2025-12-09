// ServicesSection.tsx
import { useState } from 'react';
import {
  Droplets,
  Layers,
  Wrench,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

type Service = {
  icon: any;
  title: string;
  description: string;
  features: string[];
  images: string[];
  imageClass?: string;
  wrapperClass?: string;
  keywords?: string[]; // added for SEO alt text generation
};

const services: Service[] = [
  {
    icon: Droplets,
    title: 'Liquid Floor Hardener',
    description:
      'Premium Chichibu liquid floor hardener from Japan penetrates deep into concrete, creating a harder, denser industrial floor surface. Ideal for warehouse floors, factory flooring, and high-traffic areas in Jakarta and throughout Indonesia. Our liquid hardener provides superior abrasion resistance and dustproofing for maximum durability.',
    features: [
      'Deep penetration formula',
      'Dustproofing properties',
      'Abrasion Resistence',
      'Low maintenance',
    ],
    imageClass: 'w-full h-full object-cover flex-shrink-0',
    wrapperClass:
      'relative aspect-video bg-background rounded-xl overflow-hidden group',
    images: [
      import.meta.env.BASE_URL + '/images/liquid/pic 1.jpeg',
      import.meta.env.BASE_URL + '/images/liquid/pic 2.jpg',
      import.meta.env.BASE_URL + '/images/liquid/pic 3.jpeg',
      import.meta.env.BASE_URL + '/images/liquid/pic 4.jpeg',
      import.meta.env.BASE_URL + '/images/liquid/pic 5.jpeg',
      import.meta.env.BASE_URL + '/images/liquid/pic 6.jpeg',
    ],
    keywords: [
      'Chichibu distributor Indonesia',
      'Chichibu floor hardener Indonesia',
      'Liquid floor hardener Indonesia',
      'Floor hardener Jakarta',
      'Tuffloor Indonesia',
      'Lantai pabrik',
      'Lantai gudang',
      'Jasa floor hardener Jakarta',
    ],
  },
  {
    icon: Layers,
    title: 'Dry Shake Floor Hardener',
    description:
      'Authentic Chichibu dry shake floor hardener with non metallic aggregates, achieving Mohs hardness 8 , the Japanese standard. Perfect for new concrete floors in factories, warehouses, and logistics centers across Indonesia. As the only authorized Chichibu distributor in Indonesia, we guarantee genuine Japanese quality for your industrial flooring projects.',
    features: [
      'Mohs hardness 8 rating',
      'Metallic & non-metallic options',
      'Integral color options',
      'Seamless application',
    ],
    imageClass: 'w-full h-full object-cover flex-shrink-0',
    wrapperClass:
      'relative aspect-video bg-background rounded-xl overflow-hidden group',
    images: [
      import.meta.env.BASE_URL + '/images/dry/pic 1.jpeg',
      import.meta.env.BASE_URL + '/images/dry/pic 2.jpg',
      import.meta.env.BASE_URL + '/images/dry/pic 3.jpeg',
      import.meta.env.BASE_URL + '/images/dry/pic 4.jpg',
      import.meta.env.BASE_URL + '/images/dry/pic 5.jpeg',
      import.meta.env.BASE_URL + '/images/dry/pic 6.jpg',
    ],
    keywords: [
      'Chichibu distributor Indonesia',
      'Dry shake floor hardener Indonesia',
      'Floor hardener Indonesia',
      'Floor hardener Jakarta',
      'Distributor resmi Chichibu Indonesia',
      'Lantai gudang',
    ],
  },
  {
    icon: Wrench,
    title: 'Repair & Surface Restoration',
    description:
      'Professional industrial floor repair services across Jakarta and Indonesia. We restore damaged warehouse floors, factory floors, and parking areas using premium Chichibu and Tuffloor materials. Our repair solutions include crack repair, surface leveling, and protective coatings with minimal downtime. Serving Jabodetabek, Bekasi, Karawang, Cikarang, Tangerang, and all major industrial zones nationwide.',
    features: [
      'Crack & joint repair',
      'Surface leveling',
      'Protective coatings',
      'Quick turnaround',
    ],
    imageClass: 'w-full h-full object-contain bg-white flex-shrink-0',
    wrapperClass: 'relative aspect-video bg-white rounded-xl overflow-hidden group',
    images: [
      import.meta.env.BASE_URL + '/images/repair/pic 1.jpg',
      import.meta.env.BASE_URL + '/images/repair/pic 2.jpg',
      import.meta.env.BASE_URL + '/images/repair/pic 3.jpg',
      import.meta.env.BASE_URL + '/images/repair/pic 4.JPG',
      import.meta.env.BASE_URL + '/images/repair/pic 5.JPG',
    ],
    keywords: [
      'Floor repair Indonesia',
      'Surface restoration Jakarta',
      'Lantai pabrik repair',
      'Floor hardener Indonesia',
      'Chichibu distributor Indonesia',
    ],
  },
];

const generateAltText = (title: string, index: number, keywords: string[]) => {
  // Keep alt readable, include high-priority phrases first
  const top = [
    'Authorized distributor of Chichibu Japan in Indonesia',
    'Chichibu floor hardener Indonesia',
  ];
  // merge top + provided keywords but avoid duplicates
  const merged = [...new Set([...top, ...(keywords || [])])];
  // limit length to keep it concise for screen readers and SEO (avoid too long alt)
  const joined = merged.slice(0, 6).join(', ');
  return `${title} — ${joined} — image ${index + 1}`;
};

const ServiceImageGallery = ({
  images,
  title,
  imageClass = 'w-full h-full object-cover flex-shrink-0',
  wrapperClass = 'relative aspect-video bg-background rounded-xl overflow-hidden group',
  keywords = [],
}: {
  images: string[];
  title: string;
  imageClass?: string;
  wrapperClass?: string;
  keywords?: string[];
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
            alt={generateAltText(title, index, keywords)}
            title={`${title} — ${keywords && keywords.length ? keywords[0] : ''}`}
            data-keywords={keywords.join('|')}
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

  // Small JSON-LD block to help search engines understand your services and the Chichibu partnership
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'PT Metropole Trikarya Ciptaperkasa',
    url: typeof window !== 'undefined' ? window.location.href : 'https://example.com',
    description:
      'Authorized distributor of Chichibu Japan and Tuffloor in Indonesia — industrial flooring systems, floor hardener, liquid hardener, and waterproofing.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Hayam Wuruk 62',
      addressLocality: 'Jakarta',
      postalCode: '11160',
      addressCountry: 'ID',
    },
    service: services.map((s) => ({
      '@type': 'Service',
      name: s.title,
      description: s.description,
      provider: {
        '@type': 'Organization',
        name: 'PT Metropole Trikarya Ciptaperkasa',
      },
      serviceType: s.title,
      areaServed: 'Indonesia',
    })),
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      {/* JSON-LD for SEO */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

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
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <ServiceImageGallery
                  images={service.images}
                  title={service.title}
                  imageClass={service.imageClass}
                  wrapperClass={service.wrapperClass}
                  keywords={service.keywords}
                />
              </div>
              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                  <service.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Service</span>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  {service.title}
                </h3>
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
