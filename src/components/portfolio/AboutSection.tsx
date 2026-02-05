const skills = {
  "Technical Skills": ["Java", "Python", "HTML", "CSS", "JavaScript"],
  "Frameworks & Libraries": ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
  "Data & Analytics": ["Excel", "SQL", "Power BI", "Tableau"],
  "Developer Tools": ["VS Code", "Git", "GitHub"],
};

const experience = [
  {
    title: "Full Stack Developer Intern",
    company: "Spark Info Solutions",
    period: "Jan 2026 - Present",
    description:
      "Working on end-to-end web development, including UI design, backend logic, and database integration.",
  },
  {
    title: "Web Technologies Intern",
    company: "NIIT Foundation",
    period: "May - July 2025",
    description:
      "Completed hands-on training in front-end web development. Built a Netflix Clone project using HTML and CSS.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know more about my journey and expertise
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Bio */}
        <div className="glass-card p-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Who I Am
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Motivated Computer Science student with hands-on experience in full
            stack development and strong foundations in programming and data
            analysis. Skilled in Python, Java, web technologies, and
            collaborative development practices.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently pursuing BSCH Computer Science at Sri Padmavati Women's
            Degree and PG College, Tirupati with a CGPA of 8.5/10. Always eager
            to contribute technical and problem-solving skills in a professional
            environment.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-gradient">8.5</span>
              <span className="text-muted-foreground text-sm">/10 CGPA</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-gradient">2+</span>
              <span className="text-muted-foreground text-sm">Internships</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="glass-card p-8 animate-fade-in-up delay-200">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Tech Stack
          </h3>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-primary text-sm font-mono mb-3">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
          Experience
        </h3>
        <div className="relative pl-8 space-y-8">
          <div className="timeline-line" />
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative glass-card-hover p-6 animate-slide-in-left"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="timeline-dot top-8" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-lg font-semibold text-foreground">
                  {exp.title}
                </h4>
                <span className="text-primary font-mono text-sm">
                  {exp.period}
                </span>
              </div>
              <p className="text-accent text-sm mb-3">{exp.company}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;