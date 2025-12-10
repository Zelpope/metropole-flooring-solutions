const projects = [
  { image : '/images/ProjectLogos/mrt-jakarta-logo.png', alt: 'MRT Jakarta chichibu liquid hardener indonesia' },
  { image :'/images/ProjectLogos/astra-logo.png', alt: 'Astra Chichibu floor hardener and liquid hardener indonesia' },
  { image :'/images/ProjectLogos/sharp-logo.png', alt: 'Sharp tuffloor hardener indonesia' },
  { image :'/images/ProjectLogos/Maxxis-Logo.png', alt: 'Maxxis tuffloor hardener indonesia' },
  { image :'/images/ProjectLogos/mitsubishi-logo.png', alt: 'Mitsubishi chichibu floor hardener powder indonesia' },
  { image :'/images/ProjectLogos/daiwa-logo.png', alt: 'Daiwa chichibu liquid hardener indonesia' },
  { image :'/images/ProjectLogos/logo-sariroti.png', alt: 'Sari Roti chichibu dry shake floor hardener indonesia' },
  { image :'/images/ProjectLogos/Converse_logo.png', alt: 'Converse chichibu dry shake powder floor hardener indonesia' },
  { image :'/images/ProjectLogos/logo-kawasaki.jpg', alt: 'Kawasaki chichibu dry shake powder floor hardener indonesia' },
  { image :'/images/ProjectLogos/unitedtractors-astra-logo.jpg', alt: 'united tractors chichibu dry shake powder floor hardener' },
  { image :'/images/ProjectLogos/bmw-astra-logo.png', alt: 'bmw astra chichibu dry shake powder floor hardener indonesia' },
  { image :'/images/ProjectLogos/indothaiauto.png', alt: 'indothaiauto chichibu dry shake powder floor hardener tuffloor floor hardener indonesia' },
  { image :'/images/ProjectLogos/mayoragroup-logo.jpg', alt: 'mayora group tuffloor dry shake floor hardener' },
  { image :'/images/ProjectLogos/hitachimachinery-logo.jpg', alt: 'hitachi machinery tuffloor hardener indonesia' },
  { image :'/images/ProjectLogos/plazatoyota-logo.png', alt: 'plazatoyota chichibu dry shake powder floor hardener indonesia' },
  { image :'images/ProjectLogos/kiic-logo.png', alt: 'kiic chichibu liquid hardener tuffloor hardener indonesia' },
  { image :'/images/ProjectLogos/namicoh.jpg', alt: 'namicoh tuffloor floor hardener indonesia' },
  { image :'/images/ProjectLogos/mitsuisoko.jpg', alt: 'mitsuisoko chichibu dry shake powder floor hardener indonesia' },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Our Clients</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground">
            Over 1,200 successful projects across Indonesia—from the Jakarta MRT to major industrial facilities, warehouses, and commercial buildings.
          </p>
        </div>

        {/* Logo Grid - 6 columns on desktop, 3 on tablet, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-auto max-h-30 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            And many more projects across factories, warehouses, car parks, and industrial facilities nationwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;