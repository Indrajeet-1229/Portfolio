import React from 'react'

const Experience = () => {
  return (
   <section id='experience' className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Resume
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Experience</h3>
              <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Software Developer Engineer</h4>
                    <p className="text-cyan-400 mb-2">Orangebits Software Technologies</p>
                    <p className="text-slate-400 text-sm">3 Years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Education</h3>
              <div className="space-y-4">
                {[
                  { degree: 'B.Tech', school: "Kit's College Of Engineering, Kolhapur", year: '2018 - 2022', percentage: '85%' },
                  { degree: 'Higher Secondary', school: 'SRVM College, Jath', year: '2017 - 2018', percentage: '80%' },
                  { degree: 'Secondary', school: 'Jath Highschool, Jath', year: '2015 - 2016', percentage: '87%' }
                ].map((edu, index) => (
                  <div key={index} className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
                    <h4 className="font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-slate-300 text-sm mb-1">{edu.school}</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">{edu.year}</span>
                      <span className="text-cyan-400">Percentage: {edu.percentage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Experience