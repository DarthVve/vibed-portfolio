import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20 bg-slate-900/50">
      <div className="max-w-4xl w-full">
        <div className="mb-12">
          <span className="font-mono text-emerald-400 text-sm">// Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mt-2">
            <span className="text-emerald-400">{'<'}</span>
            Contact
            <span className="text-emerald-400">{' />'}</span>
          </h2>
        </div>

        <div className="bg-slate-950 p-8 rounded border border-slate-800 mb-8">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="font-mono text-sm bg-slate-900 p-4 rounded border border-slate-800">
            <span className="text-slate-500">{'// Let\'s connect'}</span>
            <br />
            <span className="text-amber-400">const</span>{' '}
            <span className="text-blue-400">contact</span> ={' '}
            <span className="text-slate-300">{'{'}</span>
            <br />
            &nbsp;&nbsp;email: <span className="text-amber-400">'your.email@example.com'</span>,
            <br />
            &nbsp;&nbsp;availability: <span className="text-emerald-400">true</span>,
            <br />
            &nbsp;&nbsp;responseTime: <span className="text-amber-400">'24-48 hours'</span>
            <br />
            <span className="text-slate-300">{'}'}</span>;
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-4 bg-slate-950 p-6 rounded border border-slate-800 hover:border-emerald-500/50 transition-colors group"
          >
            <Mail className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-mono font-semibold mb-1">Email</h3>
              <p className="text-sm text-slate-400">your.email@example.com</p>
            </div>
          </a>

          <a
            href="https://linkedin.com"
            className="flex items-center gap-4 bg-slate-950 p-6 rounded border border-slate-800 hover:border-emerald-500/50 transition-colors group"
          >
            <Linkedin className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-mono font-semibold mb-1">LinkedIn</h3>
              <p className="text-sm text-slate-400">/in/yourprofile</p>
            </div>
          </a>

          <a
            href="https://github.com"
            className="flex items-center gap-4 bg-slate-950 p-6 rounded border border-slate-800 hover:border-emerald-500/50 transition-colors group"
          >
            <Github className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-mono font-semibold mb-1">GitHub</h3>
              <p className="text-sm text-slate-400">@yourusername</p>
            </div>
          </a>

          <a
            href="https://twitter.com"
            className="flex items-center gap-4 bg-slate-950 p-6 rounded border border-slate-800 hover:border-emerald-500/50 transition-colors group"
          >
            <Twitter className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-mono font-semibold mb-1">Twitter</h3>
              <p className="text-sm text-slate-400">@yourusername</p>
            </div>
          </a>
        </div>

        <footer className="text-center pt-8 border-t border-slate-800">
          <p className="font-mono text-slate-500">
            <span className="text-emerald-400">{'<'}</span>
            Built with React + TypeScript + Tailwind
            <span className="text-emerald-400">{' />'}</span>
          </p>
          <p className="font-mono text-slate-500 mt-2">
            © 2024 Vire Majoroh. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
