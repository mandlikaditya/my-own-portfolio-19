import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "CI/CD & DevOps",
    skills: ["Git", "GitHub Actions", "GitLab", "CI/CD Pipelines", "Automated Testing"],
  },
  {
    title: "Cloud & Infra",
    skills: ["AWS (EC2, S3, IAM, VPC)", "GCP", "Terraform", "Ansible", "IaC"],
  },
  {
    title: "Containers",
    skills: ["Docker", "Kubernetes", "Container Registries", "Auto-scaling"],
  },
  {
    title: "Scripting",
    skills: ["Bash", "Python", "JavaScript", "Node.js", "SQL"],
  },
  {
    title: "Linux & Networking",
    skills: ["CentOS", "Ubuntu", "RHEL", "TCP/IP", "DNS", "SSH"],
  },
  {
    title: "Monitoring",
    skills: ["Prometheus", "Grafana", "Alertmanager", "CloudWatch"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-display text-sm text-primary mb-2 block">// skills</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Technical Arsenal
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card hover:glow-border transition-all duration-300"
            >
              <h3 className="font-display text-sm font-semibold text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md text-sm bg-secondary text-secondary-foreground font-display"
                  >
                    {skill}
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

export default SkillsSection;
