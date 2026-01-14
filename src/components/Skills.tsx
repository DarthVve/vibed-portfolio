export function Skills() {
  const skillCategories = [
    {
      category: 'Programming',
      skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'Solidity', 'Objective C', 'C#', 'CSS', 'HTML5', 'RegEx']
    },
    {
      category: 'Frontend',
      skills: ['React + React Native', 'Next.js', 'Electron', 'Angular', 'Vue', 'Svelte', 'ASP.NET', 'Expo & EAS', 'jQuery', 'Figma']
    },
    {
      category: 'Backend',
      skills: ['Express.js', 'Flask', 'Nest.js', 'Django', 'FastAPI', 'Hono', 'GraphQL', 'Apollo', 'REST', 'OpenAPI', 'Postman']
    },
    {
      category: 'Database',
      skills: ['MySQL', 'SQLite', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'Memcache', 'Firebase', 'Supabase']
    },
    {
      category: 'Cloud/DevOps',
      skills: ['Docker', 'Azure', 'AWS', 'GCP', 'GitHub Actions', 'Terraform', 'Pulumi', 'Apache', 'Nginx']
    },
    {
      category: 'Testing & Performance',
      skills: ['SEO & Optimization', 'Jest', 'Selenium', 'Cypress', 'Playwright', 'Mocha', 'TDD', 'Sentry', 'CloudWatch']
    },
    {
      category: 'Tech Extras',
      skills: ['AI/ML', 'PyTorch', 'Blender 3D', 'Data Structures', 'Algorithms', 'SDLC/STLC', 'Git', 'Cyber Security', 'Grafana']
    },
    {
      category: 'Project Management',
      skills: ['Jira', 'Atlassian', 'ClickUp', 'Notion', 'Trello', 'Slack', 'Zoho', 'GitHub', 'GitLab', 'Bitbucket', 'Salesforce', 'Miro']
    },
    {
      category: 'Soft Skills',
      skills: ['Agile/Scrum', 'Detail Oriented', 'Communication', 'Team Collaboration', 'Leadership', 'Accountability']
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-slate-900/50">
      <div className="max-w-7xl w-full">
        <div className="mb-12">
          <span className="font-mono text-emerald-400 text-sm">// Tech Stack</span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono mt-2">
            <span className="text-emerald-400">{'<'}</span>
            Skills
            <span className="text-emerald-400">{' />'}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-slate-950 rounded border border-slate-800 hover:border-emerald-500/50 transition-colors h-64 flex flex-col"
            >
              <h3 className="font-mono text-emerald-400 text-lg mb-4 flex items-center gap-2 p-6 pb-0 flex-shrink-0">
                <span className="text-slate-500">{'// '}</span>
                {category.category}
              </h3>
              <ul className="space-y-2 overflow-y-auto p-6 pt-4 flex-1 custom-scrollbar">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-slate-300 flex items-center gap-2 text-sm">
                    <span className="text-emerald-400 font-mono flex-shrink-0">{'>'}</span>
                    <span className="truncate">{skill}</span>
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
            &nbsp;&nbsp;<span className="text-amber-400">'GoLang'</span>,
            <br />
            &nbsp;&nbsp;<span className="text-amber-400">'Rust'</span>,
            <br />
            &nbsp;&nbsp;<span className="text-amber-400">'Solidity'</span>,
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
