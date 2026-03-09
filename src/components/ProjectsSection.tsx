import { motion } from "framer-motion";
import { GitBranch, Server, Database, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Chaos Sentinel",
    subtitle: "CI/CD Automation & Incident Response Platform",
    period: "Nov 2025 – Feb 2026",
    icon: Server,
    featured: true,
    highlights: [
      "End-to-end CI/CD pipelines with GitHub Actions for 10+ containerized services across AWS & GCP",
      "Docker on Kubernetes with auto-scaling, health probes, and configuration management",
      "Prometheus + Grafana + Alertmanager monitoring with alert tuning and log validation",
      "Automated operational tasks with Bash, Python, Terraform IaC, and Ansible",
      "Comprehensive runbooks and deployment documentation for incident response",
    ],
    tags: ["GitHub Actions", "Docker", "Kubernetes", "Terraform", "Ansible", "AWS", "GCP", "Prometheus"],
  },
  {
    title: "Real Estate Management System",
    subtitle: "Full-Stack Python Application",
    period: "Jan 2025 – Apr 2025",
    icon: Database,
    featured: false,
    highlights: [
      "Python/Flask app with PostgreSQL, Git version control, and automated testing",
      "RESTful APIs with secure authentication and indexed queries handling 1,000+ records",
    ],
    tags: ["Python", "Flask", "PostgreSQL", "REST API", "Git"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 px-6 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(hsl(142 70% 45%) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="section-label">// projects</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Real-world infrastructure and applications I've built.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`group glass-card p-8 hover:glow-border-intense transition-all duration-500 ${
                project.featured ? 'border-primary/20' : ''
              }`}
            >
              {project.featured && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-display bg-primary/10 text-primary border border-primary/20 mb-4">
                  ⭐ Featured Project
                </span>
              )}

              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-sans text-xl font-bold text-foreground">{project.title}</h3>
                      <span className="font-display text-xs text-muted-foreground">{project.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-accent mb-5 font-display ml-0 lg:ml-[60px]">{project.subtitle}</p>

                  <ul className="space-y-2 mb-6 ml-0 lg:ml-[60px]">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
                        <span className="text-primary mt-1 text-xs shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 ml-0 lg:ml-[60px]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-display bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
