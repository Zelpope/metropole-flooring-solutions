const projects = [
  {
    title: 'Jakarta MRT Phase 1 and Phase 2',
    location: 'Jakarta',
    category: 'Transportation',
    image: '/images/ProjectLogos/mrt-jakarta-logo.png',
  },
  {
    title: 'Warehouse',
    location: 'Semarang',
    category: 'Storage',
    image: '/images/ProjectLogos/astra-logo.png',
  },
  {
    title: 'Factory',
    location: 'Karawang',
    category: 'Production',
    image: '/images/ProjectLogos/sharp-logo.png',
  },
  {
    title: 'Tire Factory',
    location: 'Delta Mas Cibatu - Cikarang Pusat',
    category: 'Production',
    image: '/images/ProjectLogos/Maxxis-Logo.png',
  },
  {
    title: 'Service area and Stockyards',
    location: 'Jakarta, Bekasi, Depok, Purwokerto, Tangerang, Pontianak, Surabaya',
    category: 'Automotive',
    image: '/images/ProjectLogos/mitsubishi-logo.png',
  },
  {
    title: 'Warehouse',
    location: 'Cibitung',
    category: 'Storage',
    image: '/images/ProjectLogos/daiwa-logo.png',
  },
  {
    title: 'Factory',
    location: 'Cikarang, Medan, Palembang, Pasuruan, Semarang, Cikande',
    category: 'Industrial',
    image: '/images/ProjectLogos/logo-sariroti.png', 
  },
  {
    title: 'Shoe Factory',
    location: 'Cianjur',
    category: 'Production',
    image: '/images/ProjectLogos/Converse_logo.png',
  },
  {
    title: 'Motorcycle Factory',
    location: 'Cibitung',
    category: 'Production',
    image: '/images/ProjectLogos/logo-kawasaki.jpg',
  },

];


const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Our Projects</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Project Portfolio
          </h2>
          <p className="text-muted-foreground">
            Over 1,200 successful projects across Indonesia—from the Jakarta MRT to major industrial facilities, warehouses, and commercial buildings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-secondary rounded-xl overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain bg-white p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            And many more projects across factories, warehouses, car parks, and industrial facilities nationwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
