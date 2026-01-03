
import React from 'react';
import { Heart, MapPin, ShieldCheck, TrendingUp, Users, ChevronRight, Zap, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import IntakeForm from '../components/IntakeForm';

const About: React.FC = () => {
  const [isConsultingModalOpen, setIsConsultingModalOpen] = React.useState(false);

  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 bg-cyan-950/30 border border-cyan-500/20 px-6 py-2 rounded-full mb-8">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Nashville, Tennessee HQ</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight italic uppercase">
            Defending the <br />
            <span className="gradient-text not-italic">Heartland.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From Nashville storefronts to East Tennessee family farms, we protect the hard-earned legacies of the people who keep America running.
          </p>
        </div>
      </section>

      {/* The Core Mission Card */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="glass p-12 rounded-[3.5rem] border-white/5 glow-cyan relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5">
             <Logo size={400} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tight">Our Promise: <br /> No One is "Too Small" to be Safe.</h2>
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-medium">
                <p>
                  In the cyber world, there is a dangerous myth: <span className="text-white italic">"I'm not important enough to be hacked."</span>
                </p>
                <p>
                  The truth is, hackers don't always look for the biggest vault. They look for the easiest lock. Whether you're a third-generation farm in Greeneville or a local startup in Chattanooga, your data is a target.
                </p>
                <p>
                  We take the elite defenses used by global banks and bring them home to Tennessee.
                </p>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                 <a href="tel:6156931113" className="flex items-center space-x-3 text-white font-bold group">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>615-693-1113</span>
                 </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: "Family First", desc: "We secure the networks where your family lives, works, and learns." },
                { icon: Zap, title: "Asset Guard", desc: "Protecting your hard-earned bank accounts and digital wealth." },
                { icon: TrendingUp, title: "Business Growth", desc: "Cyber security that enables you to scale without fear." },
                { icon: Heart, title: "Local Pride", desc: "Deep roots in the unique culture of Tennessee." }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all">
                  <item.icon className="w-8 h-8 text-cyan-400 mb-4" />
                  <h4 className="text-white font-bold mb-2 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-4xl mx-auto px-4 mt-32">
        <div className="bg-cyan-600 rounded-[3rem] p-12 text-center shadow-2xl shadow-cyan-900/40 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase mb-6 leading-tight">Your Legacy Deserves <br /> Bank-Grade Armor.</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">Don't wait for a breach. Secure your future with our specialized consultation team.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setIsConsultingModalOpen(true)}
              className="bg-white text-cyan-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <Zap className="w-4 h-4" />
              <span>Free Consultation</span>
            </button>
            <a href="tel:6156931113" className="bg-cyan-950 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center space-x-2 border border-white/10">
              <Phone className="w-4 h-4" />
              <span>615-693-1113</span>
            </a>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      {isConsultingModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setIsConsultingModalOpen(false)} />
          <div className="relative glass w-full max-w-2xl rounded-[3rem] p-8 md:p-12 glow-cyan border-cyan-500/20">
            <button 
              onClick={() => setIsConsultingModalOpen(false)}
              className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <IntakeForm 
              serviceName="Free Consultation" 
              onClose={() => setIsConsultingModalOpen(false)} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
