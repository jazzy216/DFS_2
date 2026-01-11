
import React from 'react';
import { Tractor, Sprout, Wind, ShieldAlert, Cpu, Network, ShieldCheck, ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const AgTech: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="px-4 pt-12 text-center max-w-4xl mx-auto reveal-up">
        <div className="w-20 h-20 bg-emerald-950 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
          <Tractor className="w-10 h-10 text-emerald-400" />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 italic uppercase tracking-tighter">
          Don't let hackers <br />
          <span className="text-emerald-400 not-italic">lock your harvest.</span>
        </h1>
        <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
          Modern farming relies on data, sensors, and GPS. We provide the specialized "Digital Fencing" needed to keep your legacy equipment and yield data safe from predators.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <a href="tel:6156931113" className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-emerald-900/40 active:scale-95">
            Emergency Farm Audit
          </a>
          <Link to="/tools" className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all active:scale-95 flex items-center justify-center space-x-2">
            <span>Free Risk Check</span>
          </Link>
        </div>
      </section>

      {/* Feature Grid - Non-tech friendly */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: Cpu, title: 'Smart Equipment Defense', simple: 'Locking your tractor software', desc: 'Secure the computers inside your automated tractors and harvesters so they can\'t be shut down remotely.' },
          { icon: Sprout, title: 'Yield Data Privacy', simple: 'Protecting your secret sauce', desc: 'Ensure your proprietary soil data and harvest forecasts aren\'t leaked to competitors or market manipulators.' },
          { icon: Wind, title: 'Network Segregation', simple: 'Separate work from home', desc: 'We keep your farm computers on a different "digital line" than your home WiFi so one mistake doesn\'t crash both.' },
          { icon: ShieldAlert, title: 'Ransomware Recovery', simple: 'The 24-Hour Reset', desc: 'If the worst happens, we have your data backed up so you can get back in the field before the weather turns.' },
          { icon: Network, title: 'Remote Access Audit', simple: 'Safe Tech Support', desc: 'Secure the connections used by equipment dealers so they don\'t accidentally leave a door open for hackers.' },
          { icon: ShieldCheck, title: 'Supply Chain Safety', simple: 'Vetting your partners', desc: 'We check that your vendors and tech partners are following the same high security standards you are.' },
        ].map((feat, i) => (
          <div key={i} className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-emerald-500/30 transition-all group flex flex-col">
            <div className="w-14 h-14 bg-emerald-950 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-emerald-500/20">
              <feat.icon className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-black text-white mb-1 uppercase italic tracking-tight">{feat.title}</h3>
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4 block">In Plain English: {feat.simple}</span>
            <p className="text-slate-400 text-sm leading-relaxed font-medium flex-grow">{feat.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="glass bg-gradient-to-br from-emerald-950/20 to-slate-900 p-16 rounded-[4rem] border-emerald-500/20 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[120px] pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter leading-none">Ready to secure <br /> your future?</h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg font-medium">Join over 1,200 Tennessee farms using Dark Fire for mission-critical AgTech protection.</p>
          <button className="bg-white text-slate-950 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all flex items-center space-x-3 mx-auto shadow-2xl">
            <span>Get My Custom Quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AgTech;
