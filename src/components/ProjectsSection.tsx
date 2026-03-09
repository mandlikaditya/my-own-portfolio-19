import { motion } from "framer-motion";
import { GitBranch, Server, Database } from "lucide-react";

const projects = [
  {
    title: "Chaos Sentinel",
    subtitle: "CI/CD Automation & Incident Response Platform",
    period: "Nov 2025 – Feb 2026",
    icon: Server,
    highlights: [
      "End-to-end CI/CD pipelines with GitHub Actions for 10+ containerized services",
      "Docker containers on Kubernetes with auto-scaling and health probes",
      "Prometheus, Grafana, Alertmanager monitoring stack",
      "Comprehensive runbooks and deployment documentation",
    ],
    tags: ["GitHub Actions", "Docker", "Kubernetes", "Terraform", "AWS", "GCP"],
  },
  {
    title: "Real Estate Management System",
    subtitle: "Full-Stack Python Application",
    period: "Jan 2025 – Apr 2025",
    icon: Database,
    highlights: [
      "Python/Flask app with PostgreSQL and automated testing",
      "RESTful APIs with secure authentication",
      "Indexed database queries handling 1,000+ records",
    ],
    tags: ["Python", "Flask", "PostgreSQL", "REST API"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-display text-sm text-primary mb-2 block">// projects</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Featured Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group p-6 rounded-xl border border-border bg-card hover:glow-border-strong transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <project.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{project.title}</h3>
                  <span className="font-display text-xs text-muted-foreground">{project.period}</span>
                </div>
              </div>

              <p className="text-sm text-accent mb-4 font-display">{project.subtitle}</p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded text-xs font-display bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
