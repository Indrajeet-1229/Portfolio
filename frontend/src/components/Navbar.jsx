import { Menu, X } from 'lucide-react';

const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => {

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">

                    <div className="flex items-center">
                        <img
                            src="/src/assets/logo/logo.webp"
                            alt="logo"
                            className="w-[130px] h-[40px] sm:w-[150px] sm:h-[50px]  object-contain"
                        />
                    </div>


                
                    <div className="hidden md:flex gap-8">
                        {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`capitalize transition-all duration-300 hover:text-cyan-400 ${activeSection === item ? 'text-cyan-400' : 'text-slate-300'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                   
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white hover:text-cyan-400 transition-colors"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

               
                {isMenuOpen && (
                    <div className="md:hidden pt-4 pb-2 flex flex-col gap-3">
                        {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="capitalize text-left py-2 hover:text-cyan-400 transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar