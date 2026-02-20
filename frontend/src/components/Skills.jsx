import React from 'react'

const Skills = () => {
      const skills = {
    frontend: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Bootstrap', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'WordPress', level: 70 }
    ],
    backend: [
      { name: 'Node.js', level: 70 },
      { name: 'Express.js', level: 70 },
      { name: 'MongoDB', level: 70 },
      { name: 'SQL', level: 65 }
    ],
    tools: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'Netlify', level: 80 },
      { name: 'Vercel', level: 80 },
      { name: 'Render', level: 80 }
    ]
  };
  return (
  <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-center text-slate-400 mb-12">I Work Hard to Improve My Skills Regularly</p>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold mb-6 capitalize text-cyan-400">
                  {category === 'frontend' ? 'Front End' : category === 'backend' ? 'Back End' : 'Development Tools'}
                </h3>
                
                <div className="space-y-4">
                  {skillList.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 text-sm">{skill.name}</span>
                        <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Skills