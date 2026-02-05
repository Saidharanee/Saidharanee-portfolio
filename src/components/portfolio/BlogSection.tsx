const blogPosts = [
  {
    title: "Getting Started with PySpark for Big Data",
    excerpt:
      "Learn how to set up PySpark and perform distributed data processing on large datasets.",
    date: "Coming Soon",
    category: "Big Data",
  },
  {
    title: "Machine Learning Fundamentals",
    excerpt:
      "An introduction to supervised learning algorithms and their practical applications.",
    date: "Coming Soon",
    category: "ML/AI",
  },
  {
    title: "Building Responsive UIs with CSS",
    excerpt:
      "Best practices for creating mobile-first, accessible web interfaces.",
    date: "Coming Soon",
    category: "Web Dev",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Blog</h2>
        <p className="section-subtitle">
          Thoughts, tutorials, and insights
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="glass-card-hover p-6 flex flex-col animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <span className="text-xs font-mono text-accent mb-2">
              {post.category}
            </span>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm flex-1 mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{post.date}</span>
              <span className="text-primary text-sm hover:underline cursor-pointer">
                Read More →
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;