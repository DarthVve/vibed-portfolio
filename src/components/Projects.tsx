import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      github: '#',
      live: '#'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Scalable chat application with WebSocket support, message encryption, and file sharing capabilities.',
      tech: ['Next.js', 'Socket.io', 'MongoDB', 'AWS S3'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with Kanban boards, time tracking, and team analytics.',
      tech: ['Vue.js', 'Express', 'PostgreSQL', 'Docker'],
      github: '#',
      live: '#'
    },
    {
      title: 'API Analytics Dashboard',
      description: 'Real-time monitoring dashboard for API performance metrics, error tracking, and usage analytics.',
      tech: ['React', 'Python', 'FastAPI', 'InfluxDB'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="mb-12">
          <span className="font-mono text-emerald-400 text-sm">// Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mt-2">
            <span className="text-emerald-400">{'<'}</span>
            Projects
            <span className="text-emerald-400">{' />'}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded border border-slate-800 hover:border-emerald-500/50 transition-all hover:transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-mono font-semibold text-emerald-400">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <p className="text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-950 text-emerald-400 text-sm font-mono rounded border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-emerald-500 hover:bg-emerald-500/10 text-emerald-400 font-mono font-semibold rounded transition-colors"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
