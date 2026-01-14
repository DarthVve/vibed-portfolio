import { Code2, Coffee, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="mb-12">
          <span className="font-mono text-emerald-400 text-sm">// About Me</span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono mt-2">
            <span className="text-emerald-400">{'<'}</span>
            Background
            <span className="text-emerald-400">{' />'}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a full-stack software engineer with a passion for building
              robust, scalable applications. My journey in tech started with
              curiosity and evolved into a career where I get to solve complex
              problems every day.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              I believe in writing clean, maintainable code and following best
              practices. Whether it's architecting backend systems or crafting
              pixel-perfect frontend experiences, I approach every project with
              attention to detail and a commitment to quality.
            </p>

            <div className="font-mono text-emerald-400 bg-slate-900 p-4 rounded border border-slate-800">
              <span className="text-slate-500">// My approach</span>
              <br />
              <span className="text-amber-400">function</span>{' '}
              <span className="text-blue-400">buildSoftware</span>() {'{'}<br />
              &nbsp;&nbsp;<span className="text-slate-400">return</span> {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;quality: <span className="text-amber-400">'exceptional'</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;testing: <span className="text-amber-400">'comprehensive'</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;documentation: <span className="text-amber-400">'clear'</span>
              <br />
              &nbsp;&nbsp;{'}'};
              <br />
              {'}'}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900 p-6 rounded border border-slate-800 hover:border-emerald-500/50 transition-colors">
              <Code2 className="w-10 h-10 text-emerald-400 mb-4" />
              <h3 className="text-xl font-mono font-semibold mb-2">Clean Code Advocate</h3>
              <p className="text-slate-400">
                Writing maintainable, testable code that stands the test of time and scales with your business.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded border border-slate-800 hover:border-emerald-500/50 transition-colors">
              <Lightbulb className="w-10 h-10 text-emerald-400 mb-4" />
              <h3 className="text-xl font-mono font-semibold mb-2">Problem Solver</h3>
              <p className="text-slate-400">
                Approaching challenges with critical thinking and finding elegant solutions to complex problems.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded border border-slate-800 hover:border-emerald-500/50 transition-colors">
              <Coffee className="w-10 h-10 text-emerald-400 mb-4" />
              <h3 className="text-xl font-mono font-semibold mb-2">Continuous Learner</h3>
              <p className="text-slate-400">
                Always exploring new technologies and best practices to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
