const projects = [
  {
    title: 'Jakarta MRT Phase 1',
    location: 'Bundaran HI – Lebak Bulus',
    category: 'Transportation',
    image: '/images/ProjectLogos/mrt-jakarta-logo.png',
  },
  {
    title: 'Automotive Factory',
    location: 'Cikarang Industrial Estate',
    category: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&auto=format&fit=crop',
  },
  {
    title: 'Logistics Warehouse',
    location: 'Cakung, Jakarta',
    category: 'Logistics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop',
  },
  {
    title: 'Distribution Center',
    location: 'Bekasi Industrial Area',
    category: 'Distribution',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&auto=format&fit=crop',
  },
  {
    title: 'Food Processing Plant',
    location: 'Tangerang',
    category: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop',
  },
  {
    title: 'Underground Parking',
    location: 'Jakarta CBD',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&auto=format&fit=crop',
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
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
