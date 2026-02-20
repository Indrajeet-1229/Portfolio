
import { ExternalLink } from 'lucide-react';
import assets from '../assets/asset';
console.log(assets)

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'Developed a full-stack e-commerce website featuring product collections, About Us, Contact Us, Add-to-Cart, Orders, and secure checkout functionality. Implemented a complete shopping workflow including cart management and order tracking. Designed the platform to provide a smooth and user-friendly shopping experience.',
      tech: ['Mongodb', 'Express', 'Node', 'React','Tailwind CSS', 'multer', 'cloudinary'],
      link: 'https://forever-ecom-indra-frontend.vercel.app',
      images: assets.ecom,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'EMS - Employee Management System',
      description: 'Developed a web application with login and registration functionality, featuring separate dashboards for admin and employees. Admins can manage users, create new tasks, and delete existing tasks efficiently. Implemented secure authentication and role-based access control to ensure proper authorization.',
      tech: ['Mongodb', 'Express', 'Node', 'React'],
      link: 'https://ems-indra.netlify.app',
      images: assets.ems1,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Spotify Clone',
      description: 'Developed a dynamic Spotify clone featuring a homepage and a fully functional music player interface. The application displays featured playlists, popular tracks, and personalized recommendations for users. Implemented playback controls including play, pause, skip, and volume adjustments for an interactive user experience.',
      tech: ['React', 'Tailwind CSS', 'HTML', 'JavaScript'],
      link: 'https://spotify-clone-indra.netlify.app',
      images: assets.spotify1,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'E-Commerce Website',
      description: 'Developed a dynamic E-Commerce website featuring category, search, and add-to-cart pages for a smooth shopping experience. Users can register, log in, and log out securely to manage their accounts. Implemented structured navigation and interactive UI components for seamless product browsing.',
      tech: ['React', 'SCSS', 'HTML', 'JavaScript'],
      link: 'https://add-to-cart-e-commerce.netlify.app',
      images: assets.addtocart,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Biotechnology Website',
      description: 'Developed a dynamic biotechnology website that provides detailed information about the company’s services and products. The website includes sections such as About, Products, Equipment, Training, and Contact for structured navigation. Designed the layout to clearly present technical information in a user-friendly manner.',
      tech: [  'HTML', 'CSS', 'BootStrap', 'JavaScript','PHP'],
      link: 'https://www.crownplastics.co',
      images: assets.nirav1,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'E-Commerce Website',
      description: 'Developed a dynamic E-Commerce website featuring category, search, and add-to-cart pages to enhance the shopping experience. Users can securely register, log in, and log out to manage their accounts. Implemented smooth navigation and interactive components for efficient product browsing and cart management.',
      tech: [  'HTML', 'CSS', 'BootStrap', 'JavaScript'],
      link: 'https://www.crownplastics.co',
      images: assets.crown1,
      gradient: 'from-purple-500 to-pink-500'
    },
    
   
    {
      title: 'Javacript Projects',
      description: 'Developed multiple JavaScript utility applications including a Number to Roman converter, Phone Number Validator, and Palindrome Checker. Also built a dynamic Pokémon Search application for quick data retrieval and an interactive Cash Register system to calculate optimized change denominations. Each tool focuses on solving real-world logic problems with efficient implementation.',
      tech: [  'HTML', 'CSS', 'BootStrap', 'JavaScript'],
      link: 'https://my-simple-js-projects.netlify.app',
      images: assets.projectshow1,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Responsive HAVC Website',
      description: 'Developed a dynamic website that provides detailed information about the company’s services and products. The website includes structured sections such as About, Projects, Case Studies, and Contact for clear navigation. Designed the layout to effectively showcase project details and business offerings.',
      tech: [  'HTML', 'CSS', 'BootStrap', 'JavaScript'],
      link: 'https://aquachill.co.in',
      images: assets.aquachill1,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Corporate Website',
      description: 'Developed a corporate website that provides detailed information about the company’s services and products. The website includes structured sections such as About, Clients, Business, and Contact for clear and professional presentation. Designed the layout to effectively highlight company expertise and client relationships.',
      tech: [  'HTML', 'CSS', 'Jquery', 'JavaScript'],
      link: 'https://jairajgroup.in/',
      images: assets.jairaj1,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'React Construction Website',
      description: 'Developed a dynamic construction website that provides detailed information about the company’s services and offerings. The website includes well-structured sections such as About, Projects, Products, and Contact for smooth navigation. Designed the layout to effectively showcase completed projects and service capabilities..',
      tech: [ 'React', 'HTML', 'CSS', 'JavaScript'],
      link: 'https://ssengineers.netlify.app',
      images: assets.ssengineers1,
      gradient: 'from-purple-500 to-pink-500'
    },
    // {
    //   title: 'Responsive College Website',
    //   description: 'Developed a dynamic college website that provides detailed information about the institution, including an interactive contact and comment form. The website features well-structured sections such as About, Courses, Blog, and Contact for easy navigation. Designed the layout to present academic programs and updates clearly.',
    //   tech: [ 'React', 'HTML', 'CSS', 'JavaScript'],
    //   link: 'https://indrajeet-responsive-college-website.netlify.app',
    //   images: assets.collegewebsite1,
    //   gradient: 'from-purple-500 to-pink-500'
    // },
    {
      title: 'Financial Website',
      description: 'Developed a financial website that provides detailed information about finance-related services and solutions. The website includes well-structured sections such as About, Services, Blog, and Contact for clear and easy navigation. Designed the layout to present financial offerings in a professional and organized manner.',
      tech: [ 'React', 'HTML', 'CSS', 'JavaScript'],
      link: 'https://coinfit.in',
      images: assets.coinfit1,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Ordnance Website',
      description: 'Developed an ordnance website that provides detailed information about the company’s products and offerings. The website includes structured sections such as About, Products, and Contact for clear and organized navigation. Designed the layout to professionally showcase product details and specifications.',
      tech: [ 'React', 'HTML', 'CSS', 'JavaScript'],
      link: 'https://royalproordnance.com',
      images: assets.royalpro1,
      gradient: 'from-purple-500 to-pink-500'
    },
   
  ];
  return (
    <section id="projects" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-center text-slate-400 mb-12">I do lots of projects</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div
                className="h-48 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundImage: `url(${project.images})` }}
              />


              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link} target='_blank'
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Visit Website <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects