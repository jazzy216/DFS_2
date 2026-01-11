
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, ArrowRight, Zap, CheckCircle2, Building2, Tractor, Users, Activity, MapPin, AlertCircle, ShieldCheck, BookOpen, Search, Compass } from 'lucide-react';
import BlueprintWizard from '../components/BlueprintWizard';
import Logo from '../components/Logo';
import ThreatDashboard from '../components/ThreatDashboard';

const Home: React.FC = () => {
  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section - Simplified for non-techies */}
      <section className="relative px-4 pt-12 md:pt-24 lg:pt-40 overflow-hidden" id="main-content">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-10 text-center lg:text-left reveal-up">
            <div className="inline-flex items-center space-x-2.5 bg-cyan-950/40 border border-cyan-500/20 px-5 py-2 rounded-full text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Cybersecurity for the rest of us</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight">
              Bank-Grade Security. <br />
              <span className="gradient-text italic">Plain English.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              We protect Tennessee storefronts, farms, and families from digital predators. No tech degree required—just common sense protection.
            </p>

            {/* Pathfinder Funnel - The "Where do I go?" solution */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <Link to="/services" className="glass p-6 rounded-3xl border-white/5 hover:border-cyan-500/40 transition-all text-center group">
                <Building2 className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="block text-[10px] font-black text-white uppercase tracking-widest">I own a shop</span>
                <span className="text-[8px] text-slate-500 uppercase font-bold">Small Business</span>
              </Link>
              <Link to="/agtech" className="glass p-6 rounded-3xl border-white/5 hover:border-orange-500/40 transition-all text-center group">
                <Tractor className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="block text-[10px] font-black text-white uppercase tracking-widest">I own a farm</span>
                <span className="text-[8px] text-slate-500 uppercase font-bold">Ag-Tech Security</span>
              </Link>
              <Link to="/services" className="glass p-6 rounded-3xl border-white/5 hover:border-red-500/40 transition-all text-center group">
                <Users className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="block text-[10px] font-black text-white uppercase tracking-widest">Protect my home</span>
                <span className="text-[8px] text-slate-500 uppercase font-bold">Family Identity</span>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
              <Link to="/ebook" className="w-full sm:w-auto btn-fire text-white px-10 py-5 rounded-[1.25rem] font-black uppercase tracking-widest text-xs flex items-center justify-center space-x-3 transition-all group shadow-2xl active:scale-95">
                <span>Get Free Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:6156931113" className="w-full sm:w-auto bg-slate-900/50 backdrop-blur-md border border-slate-800 hover:border-slate-700 text-white px-10 py-5 rounded-[1.25rem] font-black uppercase tracking-widest text-xs flex items-center justify-center transition-all hover:scale-105 active:scale-95">
                Speak to a Human
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block reveal-up" style={{ animationDelay: '0.2s' }}>
             <ThreatDashboard />
          </div>
        </div>
      </section>

      {/* Featured Resource: Simplified eBook Block */}
      <section className="max-w-7xl mx-auto px-4">
        <Link to="/ebook" className="group block relative overflow-hidden glass p-1 border-white/10 rounded-[4rem] hover:border-cyan-500/30 transition-all duration-700">
           <div className="bg-slate-950/50 rounded-[3.8rem] p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="space-y-8 max-w-xl text-center lg:text-left">
                <div className="inline-flex items-center space-x-3 bg-cyan-600/20 text-cyan-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                  <BookOpen className="w-4 h-4" />
                  <span>Free 10-Step Guide</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase leading-none tracking-tighter">Your Security <br /> <span className="gradient-text not-italic">Translated.</span></h2>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">We took the complex stuff used by big banks and turned it into 10 simple steps any business owner can follow.</p>
                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                   <div className="btn-fire text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center space-x-2 group-hover:scale-105 transition-transform">
                      <span>Download Plain English Guide</span>
                      <ArrowRight className="w-4 h-4" />
                   </div>
                </div>
              </div>
              <div className="relative w-full max-w-sm aspect-[4/5] bg-slate-900 rounded-3xl border border-white/5 shadow-2xl flex flex-col p-8 overflow-hidden group-hover:rotate-1 transition-transform duration-700">
                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
                 <Logo size={80} className="mb-12" />
                 <h3 className="text-2xl font-black text-white italic uppercase mb-4 leading-tight">Simplified <br /> Cyber Defense</h3>
                 <p className="text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-12">No-Jargon Guide</p>
                 <div className="mt-auto space-y-2">
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-cyan-500 w-[65%]" />
                    </div>
                    <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Human-Readable Security</span>
                 </div>
              </div>
           </div>
        </Link>
      </section>

      {/* Interactive Shield Magnet - Repositioned to help people find solutions */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center bg-slate-900/30 py-32 rounded-[5rem] border border-white/5 relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="space-y-10 pl-0 lg:pl-16">
              <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase leading-none">Not sure <br /> where to start?</h2>
              <p className="text-slate-400 text-xl max-w-md leading-relaxed">Tell our AI Guide what you're worried about, and we'll give you a 3-step plan in seconds. No tech talk.</p>
              <div className="space-y-6">
                 {[
                   "Takes less than 60 seconds",
                   "Designed for non-tech owners",
                   "Gives you actionable first steps"
                 ].map((t, i) => (
                   <div key={i} className="flex items-center space-x-4">
                      <div className="w-6 h-6 rounded-full bg-cyan-600/20 flex items-center justify-center border border-cyan-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">{t}</span>
                   </div>
                 ))}
              </div>
          </div>
          <div className="pr-0 lg:pr-16">
              <BlueprintWizard />
          </div>
      </section>
    </div>
  );
};

export default Home;
