const projects = [
  {
    title: "Big Data Analysis Using PySpark",
    description:
      "Analyzed a large-scale sales dataset with 1,000,000 records using PySpark for distributed data processing. Applied aggregations and grouping to identify top-selling products.",
    tech: ["PySpark", "Apache Spark", "Python", "Data Analysis"],
    link: "#",
    featured: true,
  },
  {
    title: "Predictive Analytics for Students",
    description:
      "Built a predictive analytics model using Logistic Regression to classify student pass/fail outcomes based on study hours.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    link: "#",
    featured: true,
  },
  {
    title: "Netflix Clone",
    description:
      "Replicated core UI components of Netflix including homepage layout, navigation bar, and content sections using pure HTML and CSS.",
    tech: ["HTML", "CSS", "Responsive Design"],
    link: "#",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A futuristic glassmorphism portfolio website built with modern web technologies and CSS-only animations.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Featured work and personal experiments
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="glass-card-hover p-6 block group animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {project.featured && (
              <span className="inline-block px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full mb-4">
                FEATURED
              </span>
            )}
            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-primary/70 bg-primary/10 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-sm">View Project</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;