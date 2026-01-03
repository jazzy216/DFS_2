
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight, AlertCircle, Mail, Shield, BookOpen } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', sub: 'For Small Biz', href: '/services' },
    { name: 'AgTech', sub: 'For Farmers', href: '/agtech' },
    { name: 'Free Guide', sub: '10-Step Playbook', href: '/ebook' },
    { name: 'Tools', sub: 'Free Checks', href: '/tools' },
    { name: 'Intelligence', sub: 'Latest Threats', href: '/resources' },
    { name: 'Mission', sub: 'Our TN Roots', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[90] glass border-b border-white/5 h-20" role="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full items-center">
          <Link to="/" className="flex items-center space-x-4 group" aria-label="Dark Fire Cyber Home">
            <Logo size={42} className="group-hover:scale-105 transition-transform duration-500" />
            <div className="flex flex-col -space-y-1">
              <span className="text-xl font-black tracking-tighter text-white uppercase italic leading-none">
                Dark Fire
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">
                Security
              </span>
            </div>
          </Link>

          {/* Desktop Links with descriptive subtexts */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className={`flex flex-col items-center group relative ${location.pathname === link.href ? 'text-cyan-400' : 'text-slate-400'}`}
              >
                <span className="text-[10px] font-black uppercase tracking-widest transition-all group-hover:text-cyan-400">
                  {link.name}
                </span>
                <span className="text-[7px] font-black uppercase tracking-widest text-slate-600 group-hover:text-slate-400 transition-colors">
                  {link.sub}
                </span>
                <span className={`absolute -bottom-2 left-0 w-full h-px bg-cyan-500 transform transition-transform duration-300 ${location.pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>
            ))}
            <div className="flex items-center space-x-3 pl-6 border-l border-white/10">
               <a 
                href="tel:6156931113" 
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-xl transition-all duration-300 text-[10px] font-black uppercase tracking-widest flex items-center space-x-2 shadow-lg shadow-cyan-900/20 active:scale-95 group"
              >
                <Phone className="w-3.5 h-3.5 group-hover:animate-shake" />
                <span>Call A Specialist</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-3 text-slate-300 hover:text-white bg-slate-800/50 rounded-xl transition-colors"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden glass border-b border-slate-800 py-8 px-6 space-y-8 animate-in slide-in-from-top-4 duration-300 overflow-hidden">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsOpen(false)}
              className="flex justify-between items-center text-slate-300 hover:text-cyan-400 font-bold uppercase tracking-widest text-sm py-2"
            >
              <div className="flex flex-col">
                <span>{link.name}</span>
                <span className="text-[8px] text-slate-500 tracking-widest">{link.sub}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-cyan-500" />
            </Link>
          ))}
          <div className="pt-4">
             <a href="tel:6156931113" className="block bg-cyan-600 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl text-xs active:scale-95 transition-transform">
               Speak to Nashville Office
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 border-t border-white/5 pt-24 pb-12 relative" role="contentinfo">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <Link to="/" className="flex items-center space-x-4 group">
             <Logo size={48} className="group-hover:rotate-12 transition-transform duration-500" />
             <div className="flex flex-col -space-y-1">
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic leading-none">
                Dark Fire
              </span>
              <span className="text-[12px] font-black uppercase tracking-[0.4em] text-cyan-400">
                Security
              </span>
            </div>
          </Link>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
            Approachable, bank-grade cybersecurity for Tennessee's small businesses and family farms. We turn targets into digital fortresses.
          </p>
          <div className="flex flex-col space-y-4 pt-4">
             <a href="mailto:info@darkfiresecurity.com" className="flex items-center space-x-4 text-slate-400 hover:text-cyan-400 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">info@darkfiresecurity.com</span>
             </a>
             <a href="tel:6156931113" className="flex items-center space-x-4 text-slate-400 hover:text-cyan-400 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">615-693-1113</span>
             </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-10 opacity-50 flex items-center">
            <span className="mr-2">Regional Hubs</span>
            <div className="h-px w-8 bg-cyan-500/20" />
          </h4>
          <ul className="space-y-5 text-slate-400 text-[10px] font-black uppercase tracking-widest">
            <li><Link to="/services" className="hover:text-cyan-400 transition-colors flex items-center space-x-2"><ChevronRight className="w-3 h-3 text-cyan-600" /><span>Nashville</span></Link></li>
            <li><Link to="/agtech" className="hover:text-cyan-400 transition-colors flex items-center space-x-2"><ChevronRight className="w-3 h-3 text-cyan-600" /><span>Memphis</span></Link></li>
            <li><Link to="/services" className="hover:text-cyan-400 transition-colors flex items-center space-x-2"><ChevronRight className="w-3 h-3 text-cyan-600" /><span>Knoxville</span></Link></li>
            <li><Link to="/services" className="hover:text-cyan-400 transition-colors flex items-center space-x-2"><ChevronRight className="w-3 h-3 text-cyan-600" /><span>Chattanooga</span></Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-10 opacity-50 flex items-center">
            <span className="mr-2">Quick Access</span>
            <div className="h-px w-8 bg-cyan-500/20" />
          </h4>
          <ul className="space-y-5 text-slate-400 text-[10px] font-black uppercase tracking-widest">
            <li><Link to="/ebook" className="hover:text-cyan-400 transition-colors flex items-center space-x-2"><BookOpen className="w-3 h-3 text-cyan-600" /><span>Free 10-Step Guide</span></Link></li>
            <li><Link to="/resources" className="hover:text-cyan-400 transition-colors flex items-center space-x-2"><ChevronRight className="w-3 h-3 text-cyan-600" /><span>Farm Intelligence</span></Link></li>
            <li><Link to="/tools" className="hover:text-cyan-400 transition-colors flex items-center space-x-2"><ChevronRight className="w-3 h-3 text-cyan-600" /><span>Security Toolkit</span></Link></li>
            <li><a href="tel:6156931113" className="text-red-500 hover:text-red-400 transition-colors flex items-center space-x-2">
              <AlertCircle className="w-3.5 h-3.5 animate-pulse" />
              <span>Breach Hotline</span>
            </a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-600 pt-12 border-t border-white/5 gap-8">
        <p>© 2024 Dark Fire Security. Tennessee Rooted.</p>
        <div className="flex space-x-10">
          <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Shield</span>
          <span className="hover:text-slate-400 cursor-pointer transition-colors font-black text-slate-500">615-693-1113</span>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#020617]">
      <Navbar />
      <main className="flex-grow pt-20 relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};
