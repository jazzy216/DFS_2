
import React from 'react';
import { PhoneCall, MapPin, ShieldCheck, Zap, ArrowRight, X, Clock, Check, Shield, Search } from 'lucide-react';
import IntakeForm from '../components/IntakeForm';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = React.useState<string | null>(null);

  const services = [
    {
      id: 'phone',
      title: 'Operational Triage',
      simple: 'The 30-Min Health Check',
      price: '$195',
      period: 'per session',
      icon: PhoneCall,
      desc: 'Rapid strategic consult to fix immediate security worries or evaluate a new tech purchase.',
      features: ['Secure Comm Line', 'Immediate Risk Triage', 'Actionable Summary', 'Nashville Based'],
      cta: 'Request Triage',
      featured: false
    },
    {
      id: 'agtech',
      title: 'AgTech Hardening',
      simple: 'Digital Farm Fencing',
      price: '$1,450',
      period: 'flat fee',
      icon: Zap,
      desc: 'Specialized engineering for tractors, IoT sensors, and private farm networks.',
      features: ['Fleet Firmware Audit', 'Yield Data Privacy', 'Network Isolation', 'Seasonal Support'],
      cta: 'Harden My Farm',
      featured: true
    },
    {
      id: 'inperson',
      title: 'Physical Audit',
      simple: 'The Full Shop Walkthrough',
      price: '$3,200',
      period: 'starting from',
      icon: Search,
      desc: 'On-site hardware check. We look at your routers, cameras, and physical door locks.',
      features: ['Vulnerability Map', 'Hardware Layer Check', 'Entry Point Test', 'Full Roadmap'],
      cta: 'Request On-Site',
      featured: false
    },
    {
      id: 'managed',
      title: 'Sentinel Shield',
      simple: 'The 24/7 Digital Guard',
      price: '$89',
      period: 'per device / mo',
      icon: ShieldCheck,
      desc: 'Continuous monitoring and response. If someone attacks, we handle it for you.',
      features: ['24/7 Endpoint Guard', 'Weekly Intel Report', 'Included Breach Response', 'Bank-Grade Armor'],
      cta: 'Deploy Shield',
      featured: false
    }
  ];

  return (
    <div className="pb-32">
      {/* Hero */}
      <section className="px-4 pt-16 text-center max-w-4xl mx-auto mb-20 reveal-up">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase italic tracking-tighter leading-none">
          Operational Security <br />
          <span className="gradient-text not-italic">For Small Business.</span>
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed font-medium">
          Elite protection shouldn't be a mystery. We provide fixed-price, no-jargon defense plans designed for Tennessee's core industries.
        </p>
      </section>

      {/* Service Cards */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s) => (
          <div 
            key={s.id} 
            className={`glass relative p-10 rounded-[3.5rem] border-white/5 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 ${s.featured ? 'ring-2 ring-cyan-500/30 shadow-2xl shadow-cyan-900/20 bg-slate-900/40' : ''}`}
          >
            {s.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-widest shadow-xl">
                Most Popular for TN
              </div>
            )}
            
            <div className="mb-8">
              <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group">
                <s.icon className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-black text-white mb-1 italic uppercase tracking-tight leading-none">{s.title}</h3>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 block">{s.simple}</span>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-4xl font-black text-white">{s.price}</span>
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{s.period}</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm mb-10 flex-grow leading-relaxed font-medium">
              {s.desc}
            </p>

            <ul className="space-y-4 mb-12">
              {s.features.map((f, i) => (
                <li key={i} className="flex items-start space-x-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => setSelectedService(s.title)}
              className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center space-x-2 active:scale-95 shadow-xl ${s.featured ? 'btn-fire text-white' : 'bg-slate-950 hover:bg-slate-900 text-white border border-white/10'}`}
            >
              <span>{s.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </section>

      {/* Value Props */}
      <section className="max-w-7xl mx-auto px-4 mt-40 grid grid-cols-1 md:grid-cols-3 gap-16">
        {[
            { icon: Clock, title: "Immediate Response", desc: "Consultations begin within 24h. Active threats are engaged by a specialist within 60 minutes." },
            { icon: Shield, title: "Trusted Vets", desc: "Our team includes Nashville-rooted experts with 15+ years protecting sensitive government data." },
            { icon: MapPin, title: "Nashville Roots", desc: "We are not a tech giant from the coast. We are your neighbors in Middle Tennessee." }
        ].map((v, i) => (
            <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-cyan-950/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-cyan-500/10 group-hover:scale-110 group-hover:bg-cyan-950/40 transition-all duration-500">
                    <v.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-white font-black uppercase italic text-2xl mb-6 tracking-tight">{v.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto font-medium">{v.desc}</p>
            </div>
        ))}
      </section>

      {/* Intake Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-lg" onClick={() => setSelectedService(null)} />
          <div className="relative glass w-full max-w-2xl rounded-[3.5rem] p-10 md:p-14 border-white/10 glow-cyan">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-10 right-10 p-3 text-slate-500 hover:text-white transition-colors bg-slate-900 rounded-2xl"
              aria-label="Close form"
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
