import { ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';

interface FallbackLink {
  label: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  fallbackDescription?: string;
  fallbackLinks?: FallbackLink[];
}

export function Projects() {
  const [activeFallback, setActiveFallback] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Gopaddi',
      description: 'An ERP Application/Ecosystem centered around travel and tourism, poised with a plethora of services for hotels, activities, visa booking, trip planning, social media, shared diaries and trips, a marketplace for travel items and services, and so much more. Find apps in your app store (Google/Apple).',
      tech: ['React', 'Next.js', 'PHP', 'Node.js', 'MySQL', 'Electron', 'PostgreSQL', 'Bun', 'Hono', 'Socket.io', 'iOS', 'Android (Kotlin)', 'Stripe', 'Paystack', 'Redis', 'Docker', 'AWS', 'Git', 'Jira', 'Miro'],
      github: undefined,
      live: "https://www.gopaddi.com",
      fallbackDescription: "This project's source code is currently not available due to an NDA.",
      fallbackLinks: [{ label: "Gopaddi Personal", url: "https://www.gopaddi.com" }, { label: "Gopaddi Suppliers", url: "https://supplier.gopaddi.com/" }, { label: "Gopaddi App", url: "https://play.google.com/store/search?q=gopaddi&c=apps&hl=en&gl=US" }],
    },
    {
      title: 'VivaFemini',
      description: 'VivaFemini is Africa’s first women’s health app clinically backed by licensed experts. Users get guidance, care, and community you can truly trust. It offers features such as expert-reviewed symptom checking, 24/7 telehealth consultations, cycle and wellness tracking, and supportive community networks.',
      tech: ['Next.js', 'Nest.js', 'React Native', 'Socket.io', 'MongoDB', 'AWS S3', 'Stripe', 'Paystack', 'Redis', 'Docker', 'Fly.io', 'Git', 'Zoho', 'ClickUp'],
      github: undefined,
      live: "https://www.vivafemini.org",
      fallbackDescription: "This project's source code is currently not available due to an NDA.",
      fallbackLinks: [{ label: "VivaFemini", url: "https://www.vivafemini.org" }],
    },
    {
      title: 'Proof (Patent No: US 10,244,198 B2)',
      description: 'First AI-powered drug testing platform that uses machine learning to proctor and analyze drug tests conducted by users using Proof testing kits and devices. And provides a way to verify the authenticity of the tests or upload tests conducted by other labs.',
      tech: ['Next.js', 'Django', 'Python', 'PyTorch', 'Data Torch', 'Redis', 'IndexedDB', 'M5', 'Docker', 'AWS +S3 +Rekognition', 'Vercel', 'Beam', 'Scandit'],
      github: undefined,
      live: "https://collectwithproof.com",
      fallbackDescription: "This project's source code is currently not available due to an NDA.",
      fallbackLinks: [{ label: "Proof", url: "https://collectwithproof.com" }, { label: "Proof Web App", url: "https://proof-client.vercel.app/auth/sign-in" }, { label: "Proof App", url: "https://play.google.com/store/apps/details?id=com.recoverytrek.badgertrek&hl=en&gl=US" }],
    },
    {
      title: 'CareInTouch Messenger',
      description: 'A chat application bearing slack-like features employed by healthcare workers helps streamline communications, status updates, and sharing of patient data, with live location updates, voice recordings, private rooms, etc.',
      tech: ['React (Vite)', 'React Native', 'Firebase', 'Expo & EAS', 'Python', 'FastAPI', 'Socket.io', 'Docker', 'AWS', 'Vercel'],
      github: undefined,
      live: "https://cit-web-pi.vercel.app",
      fallbackDescription: "This project's source code is currently not available due to an NDA.",
      fallbackLinks: [{ label: "CareInTouchWeb Messenger", url: "https://cit-web-pi.vercel.app" }, { label: "CareInTouch", url: "https://play.google.com/store/apps/details?id=com.careintouch" }],
    },
    {
      title: 'TchVult',
      description: 'Official website of TchVult, my company that provides custom software, robust infrastructure, advanced cybersecurity, and AI-powered innovations that transform challenges into competitive advantages for forward-thinking organizations.',
      tech: ['React (Vite)', 'TypeScript', 'Light House', 'Cypress', 'AWS', 'Vercel'],
      github: undefined,
      live: "https://tchvult.com",
      fallbackDescription: "This project's source code is currently not available due to an NDA.",
      fallbackLinks: [{ label: "TchVult", url: "https://tchvult.com" }],
    },
    {
      title: 'Kreatives Lobby',
      description: 'Official website of Kreatives Lobby, a not-for-profit organisation driving change through art. They believe art can drive social change by raising awareness of important issues, promoting social justice, building community, and encouraging creativity and innovation.',
      tech: ['React (Vite)', 'TypeScript', 'React Icons', 'Tailwind CSS', 'Vercel'],
      github: "https://github.com/DarthVve/kreatives-lobby",
      live: "https://kreativeslobby.com"
    }
  ];

  const handleLinkClick = (e: React.MouseEvent, project: Project, linkType: 'github' | 'live') => {
    const url = linkType === 'github' ? project.github : project.live;

    if (!url) {
      e.preventDefault();
      setActiveFallback(project);
    }
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-6xl w-full">
        <div className="mb-12">
          <span className="font-mono text-emerald-400 text-sm">// Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono mt-2">
            <span className="text-emerald-400">{'<'}</span>
            Projects
            <span className="text-emerald-400">{' />'}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded border border-slate-800 hover:border-emerald-500/50 transition-all hover:transform hover:-translate-y-1 min-w-0"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-mono font-semibold text-emerald-400">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  ) : (
                    <button
                      onClick={(e) => handleLinkClick(e, project, 'github')}
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </button>
                  )}

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  ) : (
                    <button
                      onClick={(e) => handleLinkClick(e, project, 'live')}
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              <p className="text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex overflow-x-auto gap-2 custom-scrollbar pb-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-950 text-emerald-400 text-sm font-mono rounded border border-slate-800 whitespace-nowrap"
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
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/DarthVve"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-emerald-500 hover:bg-emerald-500/10 text-emerald-400 font-mono font-semibold rounded transition-colors"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>

      {/* Fallback Modal */}
      {activeFallback && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setActiveFallback(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-xl font-mono text-emerald-400 mb-4">
              Project Details
            </h3>

            <p className="text-slate-300 mb-6 font-mono text-sm leading-relaxed">
              {activeFallback.fallbackDescription || "Additional details for this project are currently available upon request."}
            </p>

            {activeFallback.fallbackLinks && activeFallback.fallbackLinks.length > 0 && (
              <div className="space-y-3">
                {activeFallback.fallbackLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-emerald-400 rounded transition-colors font-mono text-sm border border-slate-700 hover:border-emerald-500/30"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
