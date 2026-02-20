
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import axios from 'axios'
import { useState } from 'react';
import { toast } from 'react-toastify';
import ButtonLoader from '../other/ButtonLoader';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      console.log(`${import.meta.env.VITE_API_URL}/api/enquiry`)
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/enquiry`, formData);
      console.log(response.success)
      if (response.data.success) {
        toast.success(response.data.message)
        setFormData({ name: '', email: '', message: '' })

      }
    } catch (error) {
      console.log(error)
      toast.success(error.message)
    }
    finally{
      setLoading(false)
    }
  };
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Contact
        </h2>
        <p className="text-center text-slate-400 mb-12">I Want to Hear from You</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: MapPin, label: 'Address', value: 'Kothrud, Pune-411038' },
              { icon: Mail, label: 'Email', value: 'bandgar.indrajeet1229@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 9970 447043' }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-cyan-400 font-semibold mb-1">{item.label}</p>
                  <p className="text-slate-300 text-sm break-words">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              {[{ icon: Github, link: "https://github.com/IndrajeetBandgar" }, { icon: Linkedin, link: "https://www.linkedin.com/in/indrajeet-bandgar-700082214/" }, { icon: Mail, link: "mailto:bandgar.indrajeet1229@gmail.com" }, { icon: Phone, link: "tel:9970447043" }].map((item, index) => (
                <a
                  key={index}
                  target='_blank'
                  href={item.link || "#"}
                  className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500"
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500 resize-none"
              required
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-x-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Submit Now {loading && <ButtonLoader/>} 
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact