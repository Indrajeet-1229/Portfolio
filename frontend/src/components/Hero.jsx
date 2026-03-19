import React from 'react'
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import  myphoto from "../assets/hero/my_photo.webp"

const Hero = ({ scrollToSection, isVisible }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-6 pt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 mt-4 inline-block">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl font-bold">
           <img src={myphoto} alt="my_photo" />
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-[1.3] md:leading-[1.35] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Indrajeet Bandgar
        </h1>

        <p className="text-2xl md:text-3xl text-slate-300 mb-8">
          Web Developer
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
            <span className="text-cyan-400 text-xl">3+</span>
            <span className="text-slate-300">Years Experience</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
            <span className="text-cyan-400">📍</span>
            <span className="text-slate-300">Pune, India</span>
          </div>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href='src\assets\Indrajeet Bandgar-Full_stack_Devloper.pdf' target='_blank' className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <Download size={20} />
            Download Resume
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex gap-6 justify-center mt-8">
          {[{ icon: Github, link: "https://github.com/Indrajeet-1229" }, { icon: Linkedin, link: "https://www.linkedin.com/in/indrajeet-bandgar" }, { icon: Mail, link: "mailto:bandgar.indrajeet1229@gmail.com" }, { icon: Phone, link: "tel:9970447043" }].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <item.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero