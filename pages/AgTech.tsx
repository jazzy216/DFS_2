
import React from 'react';
import { Tractor, Sprout, Wind, ShieldAlert, Cpu, Network, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AgTech: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="px-4 pt-12 text-center max-w-4xl mx-auto">
        <div className="w-20 h-20 bg-emerald-950 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-emerald-500/30">
          <Tractor className="w-10 h-10 text-emerald-400" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Hackers can lock your tractors.<br />
          <span className="text-emerald-400">We keep your harvest safe.</span>
        </h1>
        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
          Modern farming relies on data, sensors, and autonomy. Dark Fire Security provides specialized defenses for the smart farm infrastructure that powers today's agriculture.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:6156931113" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-emerald-900/20">
            Emergency Farm Audit
          </a>
          <Link to="/tools" className="bg-slate-900 border border-slate-800 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:border-slate-700">
            Free Risk Analysis
          </Link>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: Cpu, title: 'Smart Equipment Defense', desc: 'Secure the firmware and control systems of automated tractors, harvesters, and drones.' },
          { icon: Sprout, title: 'Soil Sensor Privacy', desc: 'Protect your proprietary soil data and yield forecasts from competitors or malicious actors.' },
          { icon: Wind, title: 'Network Segregation', desc: 'Keep your farm operation data separate from your home WiFi for maximum security.' },
          { icon: ShieldAlert, title: 'Ransomware Recovery', desc: 'Robust backups and rapid response protocols designed for the tight windows of harvest season.' },
          { icon: Network, title: 'Remote Access Audit', desc: 'Secure the connections used by service technicians and remote monitoring teams.' },
          { icon: ShieldCheck, title: 'Supply Chain Security', desc: 'Ensure your vendors and logistics partners aren\'t creating vulnerabilities in your operation.' },
        ].map((feat, i) => (
          <div key={i} className="glass p-8 rounded-3xl border-slate-800 hover:border-emerald-500/30 transition-all group">
            <div className="w-12 h-12 bg-emerald-950 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <feat.icon className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{feat.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="glass bg-gradient-to-br from-emerald-950/20 to-slate-900 p-12 rounded-[3rem] border-emerald-500/20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px]" />
          <h2 className="text-3xl font-bold text-white mb-6 uppercase italic">Ready to secure your yield?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">Join the 1,200+ farms using Dark Fire for mission-critical AgTech protection.</p>
          <button className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-50 transition-all flex items-center space-x-2 mx-auto shadow-xl">
            <span>Get a Custom Quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AgTech;
