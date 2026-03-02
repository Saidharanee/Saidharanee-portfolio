const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">
          Recognition and milestones along the way
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="glass-card p-8 animate-fade-in-up flex items-start gap-5">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              National Scholarship Portal Awardee
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Awarded a merit-based national scholarship through the National
              Scholarship Portal in recognition of outstanding Class 12 academic
              performance. Demonstrates dedication to education and commitment
              to personal and professional growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
