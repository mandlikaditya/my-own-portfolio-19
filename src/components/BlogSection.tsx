import { motion } from "framer-motion";
import { PenTool, ExternalLink, Clock, Calendar } from "lucide-react";

const blogs = [
  {
    title: "MWC 2026: AI-Native 6G Networks and Smart Glasses Are No Longer Science Fiction",
    description:
      "How Mobile World Congress 2026 proved that two of tech's biggest promises — 6G connectivity and AI-powered smart glasses — are finally becoming real.",
    tags: ["6G", "AI", "Smart Glasses", "MWC 2026", "Wireless"],
    date: "April 2026",
    readTime: "8 min read",
    link: "https://medium.com/@adityamandlik17/mwc-2026-ai-native-6g-networks-and-smart-glasses-are-no-longer-science-fiction-abca7760fa65", // Replace with your Medium URL after publishing
  },
  {
    title: "I Tracked 5 Technologies Across 3 Years of CES — Here's What Actually Happened",
    description:
      "From Wi-Fi 7 ratification to Wi-Fi 8 demos, from Rabbit R1 hype to Alexa+ everywhere, and from 190 Matter products to 750+. Three years of CES told a clear story.",
    tags: ["CES", "Wi-Fi 8", "Matter", "AI Assistants", "Health Tech"],
    date: "April 2026",
    readTime: "12 min read",
    link: "https://medium.com/@adityamandlik17/3-years-of-ces-told-me-exactly-where-tech-is-heading-here-are-the-5-trends-that-prove-it-d56319a7f525", // Replace with your Medium URL after publishing
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-28 px-6 relative">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(142 70% 45%) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="section-label">// blog</span>
          <h2 className="section-title">Latest Articles</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Technical deep-dives, industry analysis, and insights from the
            intersection of cloud infrastructure and emerging technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, i) => (
            <motion.a
              key={blog.title}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group glass-card p-8 hover:glow-border-intense transition-all duration-500 block no-underline"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <PenTool className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center gap-3 ml-auto">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-display">
                    <Calendar className="w-3 h-3" />
                    {blog.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-display">
                    <Clock className="w-3 h-3" />
                    {blog.readTime}
                  </span>
                </div>
              </div>

              <h3 className="font-sans text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                {blog.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {blog.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-display bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
                Read on Medium
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
