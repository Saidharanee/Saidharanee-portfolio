const certifications = [
  { name: "AI Beginners Guide", issuer: "Simplilearn" },
  { name: "Google AI Essentials", issuer: "Google" },
  { name: "Employability Skills", issuer: "Tech Mahindra" },
  { name: "Oracle Cloud Infrastructure DevOps", issuer: "Oracle" },
  { name: "Data Science Foundation", issuer: "Great Learning" },
];

const highlights = [
  "BSCH Computer Science - 8.5/10 CGPA",
  "National Scholarship Portal Awardee",
  "Full Stack Development Experience",
  "Big Data & Machine Learning Projects",
  "Multiple Industry Certifications",
];

const ResumeSection = () => {
  return (
    <section id="resume" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">
          Download my resume or view highlights below
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Highlights */}
        <div className="glass-card p-8 animate-fade-in-up">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Key Highlights
          </h3>
          <ul className="space-y-4">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="btn-neon inline-flex items-center gap-2 mt-8"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Certifications */}
        <div className="glass-card p-8 animate-fade-in-up delay-200">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div>
                  <p className="text-foreground font-medium">{cert.name}</p>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                </div>
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;