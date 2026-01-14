export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML/CSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
    },
    {
      category: 'DevOps',
      skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux', 'Nginx']
    },
    {
      category: 'Tools',
      skills: ['VS Code', 'Figma', 'Postman', 'Jest', 'Webpack', 'Vite']
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-slate-900/50">
      <div className="max-w-6xl w-full">
        <div className="mb-12">
          <span className="font-mono text-emerald-400 text-sm">// Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mt-2">
            <span className="text-emerald-400">{'<'}</span>
            Skills
            <span className="text-emerald-400">{' />'}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-slate-950 p-6 rounded border border-slate-800 hover:border-emerald-500/50 transition-colors"
            >
              <h3 className="font-mono text-emerald-400 text-lg mb-4 flex items-center gap-2">
                <span className="text-slate-500">{'// '}</span>
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-slate-300 flex items-center gap-2">
                    <span className="text-emerald-400 font-mono">{'>'}</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-950 p-8 rounded border border-slate-800">
          <div className="font-mono text-sm">
            <span className="text-slate-500">{'// Always expanding my toolkit'}</span>
            <br />
            <span className="text-amber-400">const</span>{' '}
            <span className="text-blue-400">currentlyLearning</span> ={' '}
            <span className="text-slate-300">[</span>
            <br />
            &nbsp;&nbsp;<span className="text-amber-400">'Rust'</span>,
            <br />
            &nbsp;&nbsp;<span className="text-amber-400">'Kubernetes'</span>,
            <br />
            &nbsp;&nbsp;<span className="text-amber-400">'Machine Learning'</span>,
            <br />
            &nbsp;&nbsp;<span className="text-amber-400">'Web3'</span>
            <br />
            <span className="text-slate-300">];</span>
          </div>
        </div>
      </div>
    </section>
  );
}
