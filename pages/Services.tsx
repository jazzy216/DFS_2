
import React from 'react';
import { PhoneCall, MapPin, ShieldCheck, Zap, ArrowRight, X, Clock, Check, Shield } from 'lucide-react';
import IntakeForm from '../components/IntakeForm';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = React.useState<string | null>(null);

  const services = [
    {
      id: 'phone',
      title: 'Operational Triage',
      price: '$195',
      period: 'per session',
      icon: PhoneCall,
      desc: 'Rapid 30-minute strategic consult for immediate vulnerabilities or growth decisions.',
      features: ['Secure Comm Line', 'Immediate Risk Triage', 'Actionable Summary', 'Standard NDA'],
      cta: 'Request Triage',
      featured: false
    },
    {
      id: 'agtech',
      title: 'AgTech Hardening',
      price: '$1,450',
      period: 'flat fee',
      icon: Zap,
      desc: 'Specialized security engineering for autonomous fleets, IoT, and farm networks.',
      features: ['Fleet Firmware Audit', 'Yield Data Privacy', 'Network Isolation', 'Seasonal Support'],
      cta: 'Harden My Farm',
      featured: true
    },
    {
      id: 'inperson',
      title: 'Physical Audit',
      price: '$3,200',
      period: 'starting from',
      icon: MapPin,
      desc: 'Comprehensive on-site hardware and physical entry-point assessment.',
      features: ['Full Vulnerability Map', 'Social Eng. Test', 'Hardware Layer Check', 'Exec Strategy Deck'],
      cta: 'Request On-Site',
      featured: false
    },
    {
      id: 'managed',
      title: 'Sentinel Shield',
      price: '$89',
      period: 'per node / mo',
      icon: ShieldCheck,
      desc: 'Continuous 24/7 monitoring and response for your entire digital estate.',
      features: ['24/7 Endpoint Guard', 'Automated Patching', 'Weekly Intelligence', 'Included Breach Response'],
      cta: 'Deploy Shield',
      featured: false
    }
  ];

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="px-4 pt-16 text-center max-w-4xl mx-auto mb-20 reveal-up">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase italic tracking-tighter">
          Operational Security <br />
          <span className="gradient-text not-italic">Fair Market Access.</span>
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed font-medium">
          Bank-grade protection shouldn't be a luxury. We provide clear, actionable defense protocols designed for Tennessee's core industries.
        </p>
      </section>

      {/* Service Cards */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s) => (
          <div 
            key={s.id} 
            className={`glass relative p-10 rounded-[3rem] border-white/5 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 ${s.featured ? 'ring-2 ring-cyan-500/30 shadow-2xl shadow-cyan-900/10' : ''}`}
          >
            {s.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-xl">
                Regional Priority
              </div>
            )}
            
            <div className="mb-8">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                <s.icon className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2 italic uppercase tracking-tight">{s.title}</h3>
              <div className="flex items-baseline space-x-1">
                <span className="text-3xl font-black text-white">{s.price}</span>
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{s.period}</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm mb-10 flex-grow leading-relaxed">
              {s.desc}
            </p>

            <ul className="space-y-4 mb-10">
              {s.features.map((f, i) => (
                <li key={i} className="flex items-start space-x-3 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => setSelectedService(s.title)}
              className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center space-x-2 active:scale-95 ${s.featured ? 'btn-fire text-white' : 'bg-slate-900 hover:bg-slate-800 text-white border border-white/10'}`}
            >
              <span>{s.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </section>

      {/* Value Props */}
      <section className="max-w-7xl mx-auto px-4 mt-32 grid grid-cols-1 md:grid-cols-3 gap-16">
        {[
            { icon: Clock, title: "Immediate Response", desc: "Audit protocols initiated within 24h. Active breach response within 60 minutes." },
            { icon: Shield, title: "Vetted Pedigree", desc: "Consultants are ex-intel and corporate veterans with 15+ years of hardening systems." },
            { icon: MapPin, title: "Nashville Rooted", desc: "Local experts who understand the unique tech landscape of the Volunteer State." }
        ].map((v, i) => (
            <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-cyan-950/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-cyan-500/10 group-hover:scale-110 transition-transform">
                    <v.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-white font-black uppercase italic text-xl mb-4">{v.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto font-medium">{v.desc}</p>
            </div>
        ))}
      </section>

      {/* Intake Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setSelectedService(null)} />
          <div className="relative glass w-full max-w-2xl rounded-[3.5rem] p-8 md:p-12 border-white/10 glow-cyan">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-8 right-8 p-3 text-slate-500 hover:text-white transition-colors bg-slate-900 rounded-2xl"
            >
              <X className="w-6 h-6" />
            </button>
            <IntakeForm 
              serviceName={selectedService} 
              onClose={() => setSelectedService(null)} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
