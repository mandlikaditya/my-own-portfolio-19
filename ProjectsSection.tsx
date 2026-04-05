import { motion } from "framer-motion";
import { GitBranch, Server, Database, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Chaos Sentinel",
    subtitle: "Enterprise Infrastructure & Security Operations Platform",
    period: "Nov 2025 – Feb 2026",
    icon: Server,
    featured: true,
    link: "https://github.com/mandlikaditya/Chaos-Sentinel-an-AI-Powered-Cloud-Incident-Simulator",
    highlights: [
      "Architected an autonomous SRE agent on GKE integrating Chaos Mesh experiments with real-time Prometheus observability, enabling proactive fault injection across Kubernetes workloads",
      "Engineered a 4-stage agentic pipeline (Analyze → Generate → Detect → Report) powered by Google Gemini's multimodal reasoning, automating root cause analysis and generating SRE-style postmortems",
      "Published chaos-sentinel-mcp as an open-source Python package on PyPI using the Model Context Protocol (FastMCP), enabling LLM-driven orchestration of Kubernetes chaos experiments",
      "Designed infrastructure resilience workflows on GKE applying SRE principles — fault injection, blast radius containment, and rollback procedures — reducing manual incident triage through AI-assisted anomaly correlation",
      "Built end-to-end cloud-native observability integrating Prometheus, Alertmanager, and Streamlit dashboards to monitor chaos experiment impact and support SLO validation",
    ],
    tags: ["GKE", "Chaos Mesh", "Prometheus", "Gemini AI", "FastMCP", "PyPI", "Kubernetes", "Streamlit"],
  },
  {
    title: "Real Estate Management System",
    subtitle: "Full-Stack Python Application",
    period: "Jan 2025 – Apr 2025",
    icon: Database,
    featured: false,
    link: "https://github.com/mandlikaditya/Real-Estate-Management-System",
    highlights: [
      "Developed secure web application with user authentication, access controls, and comprehensive technical documentation and SOPs for deployment and maintenance",
      "Designed and deployed Python (Flask) application with PostgreSQL backend, implementing RESTful APIs and database optimization to handle 1,000+ records efficiently",
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

                  <div className="flex flex-wrap gap-2 items-center ml-0 lg:ml-[60px]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-display bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-display font-semibold bg-secondary text-foreground border border-border hover:border-primary/50 hover:text-primary transition-all duration-300 ml-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View on GitHub
                    </a>
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
