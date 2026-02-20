import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-cyan-400">
              A Passionate Web Developer
            </h3>
            <p className="text-slate-300 leading-relaxed">
              I’m a passionate Web Developer with over 3+ years of experience building responsive, high-performance web applications. Specializing in the MERN stack (MongoDB, Express.js, React, Node.js), I develop scalable full-stack solutions with a strong focus on clean architecture and seamless user experience.
            </p>
            <p className="text-slate-300 leading-relaxed">
              With a B.Tech degree and certifications in Full Stack Development and Responsive Web Design, I combine technical expertise with modern development practices to create impactful digital products.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Name', value: 'Indrajeet Bandgar' },
              { label: 'Email', value: 'bandgar.indrajeet1229@gmail.com' },
              { label: 'Phone', value: '+91 99 70 447043' },
              { label: 'Degree', value: 'B.Tech' },
              { label: 'Address', value: 'Kothrud, Pune-411038' },
              { label: 'Freelance', value: 'Available' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <p className="text-cyan-400 text-sm mb-1">{item.label}</p>
                <p className="text-slate-300 text-sm font-semibold break-words">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About