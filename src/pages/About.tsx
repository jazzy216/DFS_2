
import React from 'react';
import { Heart, MapPin, ShieldCheck, TrendingUp, Users, ChevronRight, Zap, X, Phone, Building2, Tractor, Shield } from 'lucide-react';
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
          <div className="inline-flex items-center space-x-3 bg-cyan-950/30 border border-cyan-500/20 px-6 py-2.5 rounded-full mb-10 shadow-lg">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">Nashville, Tennessee HQ</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] italic uppercase">
            Protecting <br />
            <span className="gradient-text not-italic uppercase">Our Roots.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium mt-10">
            From Nashville shopfronts to East Tennessee family farms, we protect the hard-earned legacies of the people who keep the Volunteer State running.
          </p>
        </div>
      </section>

      {/* Trust Blocks: Who We Serve */}
      <section className="max-w-7xl mx-auto px-4 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { icon: Building2, title: "Storefronts", desc: "Main street business owners who need bank-grade security without the corporate headache." },
             { icon: Tractor, title: "Family Farms", desc: "Agricultural innovators who need to keep their automated harvest equipment safe from lockouts." },
             { icon: Heart, title: "TN Families", desc: "Parents and professionals protecting their digital inheritance and private home networks." }
           ].map((item, i) => (
             <div key={i} className="glass p-10 rounded-[2.5rem] border-white/5 text-center group hover:-translate-y-2 transition-transform duration-500">
               <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                 <item.icon className="w-8 h-8 text-cyan-400" />
               </div>
               <h3 className="text-2xl font-black text-white mb-4 italic uppercase tracking-tight">{item.title}</h3>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* The Core Mission Card */}
      <section className="max-w-7xl mx-auto px-4 relative z-20">
        <div className="glass p-12 md:p-20 rounded-[4rem] border-white/5 glow-cyan relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-1000">
             <Logo size={500} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none">Our Mission: <br /> No One is "Too Small" to be Safe.</h2>
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-medium">
                <p>
                  In the cyber world, there is a dangerous myth: <span className="text-white font-black italic underline decoration-cyan-500/50">"I'm not important enough to be hacked."</span>
                </p>
                <p>
                  Hackers don't always look for the biggest vault. They look for the easiest lock. Whether you're a multi-generational farm in Greeneville or a startup in Chattanooga, your data is a target.
                </p>
                <p>
                  We take the same tools used by elite government agencies and bring them home to the Tennessee heartbeat. Approchable, affordable, and effective.
                </p>
              </div>
              <div className="flex items-center space-x-8 pt-6">
                 <a href="tel:6156931113" className="flex items-center space-x-4 text-white font-black uppercase tracking-widest text-sm group">
                    <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                       <Phone className="w-5 h-5 text-white" />
                    </div>
                    <span>Direct: 615-693-1113</span>
                 </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: "Family Protection", desc: "Securing the networks where your children live, learn, and grow." },
                { icon: Zap, title: "Active Defense", desc: "Stopping attacks before they hit your bank account or local servers." },
                { icon: TrendingUp, title: "Growth Mindset", desc: "Security that helps you scale, instead of slowing you down." },
                { icon: Shield, title: "TN Pride", desc: "Locally owned and operated in the heart of Middle Tennessee." }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-950/50 p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col">
                  <item.icon className="w-8 h-8 text-cyan-400 mb-6" />
                  <h4 className="text-white font-black mb-2 uppercase italic tracking-tight">{item.title}</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-medium flex-grow">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-4xl mx-auto px-4 mt-40">
        <div className="bg-cyan-600 rounded-[4rem] p-16 text-center shadow-[0_20px_50px_-10px_rgba(8,145,178,0.5)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase mb-8 leading-none tracking-tighter">Your Legacy Deserves <br /> Bank-Grade Armor.</h2>
          <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto font-medium">Don't wait for a breach to happen. Secure your organization with our specialized consultation team today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button 
              onClick={() => setIsConsultingModalOpen(true)}
              className="bg-white text-cyan-600 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-3"
            >
              <Zap className="w-4 h-4" />
              <span>Get Free Consultation</span>
            </button>
            <a href="tel:6156931113" className="bg-cyan-950/50 backdrop-blur-md text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center space-x-3 border border-white/10 hover:bg-cyan-950 transition-all active:scale-95">
              <Phone className="w-4 h-4" />
              <span>Call Rapid Response</span>
            </a>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      {isConsultingModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" onClick={() => setIsConsultingModalOpen(false)} />
          <div className="relative glass w-full max-w-2xl rounded-[4rem] p-12 md:p-16 glow-cyan border-cyan-500/20 shadow-2xl">
            <button 
              onClick={() => setIsConsultingModalOpen(false)}
              className="absolute top-12 right-12 text-slate-500 hover:text-white transition-colors bg-slate-900 p-3 rounded-2xl"
              aria-label="Close form"
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
