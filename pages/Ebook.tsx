
import React from 'react';
import { BookOpen, CheckCircle2, ArrowRight, Download, ShieldCheck, Mail, User, Building, Loader2, Star, Eye, Clock, Shield, Info } from 'lucide-react';

const Ebook: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isDownloaded, setIsDownloaded] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    org: ''
  });

  // Placeholder PDF URL - in production, this would be your hosted S3/Cloudfront link
  const PDF_URL = 'https://www.cisa.gov/sites/default/files/publications/CISA_Cybersecurity_Best_Practices_for_Small_and_Midsize_Businesses.pdf';

  const chapters = [
    { title: "Risk & Baseline", simple: "Knowing what you own", desc: "Inventory your assets and identify your unique threat profile." },
    { title: "Perimeter Design", simple: "Locking the front door", desc: "Network segmentation and locking down Wi-Fi perimeters." },
    { title: "Endpoint Hardening", simple: "Updates & Anti-Virus", desc: "Enforcing updates and configuring EDR for all devices." },
    { title: "Access Control", simple: "Keys for the right people", desc: "Principle of Least Privilege and MFA implementation." },
    { title: "3-2-1 Backup Rule", simple: "Digital Life Insurance", desc: "Protecting data from ransomware with offline cloud strategies." },
    { title: "Social Defense", simple: "Spotting the Scams", desc: "Training your human firewall to spot phishing and smishing." },
    { title: "Vendor Management", simple: "Checking your partners", desc: "Assessing supply-chain risk and SaaS security protocols." },
    { title: "Incident Response", simple: "Emergency Plan", desc: "Building a 6-step playbook for when things go wrong." },
    { title: "Monitoring Basics", simple: "Setting the Alarm", desc: "Practical log collection and setting up critical alerts." },
    { title: "Insurance & Policy", simple: "Getting Covered", desc: "Acceptable use and aligning with cyber liability needs." }
  ];

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // SIMULATION: In a live environment, this POSTs to darkfiresec@proton.me via an API gateway
    console.log(`[SECURE DISPATCH] Routing lead data to darkfiresec@proton.me...`);
    console.log(`[PAYLOAD]`, formData);

    await new Promise(r => setTimeout(r, 2000));
    setIsSubmitting(false);
    setIsDownloaded(true);
  };

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = PDF_URL;
    link.download = 'DarkFire_Cyber_Playbook_v4.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const viewOnline = () => {
    window.open(PDF_URL, '_blank');
  };

  return (
    <div className="pb-32 px-4 pt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Side: Mockup & Info */}
        <div className="space-y-12">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="inline-flex items-center space-x-2.5 bg-cyan-950/40 border border-cyan-500/20 px-5 py-2 rounded-full text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Free Plain English Guide</span>
            </div>
            <div className="inline-flex items-center space-x-2 text-slate-500 text-[9px] font-black uppercase tracking-widest">
              <Clock className="w-3 h-3" />
              <span>Updated for 2025 Threats</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-[0.9]">
            Cybersecurity <br />
            <span className="gradient-text not-italic">For Humans.</span>
          </h1>

          <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-xl">
            A 10-step strategy designed for Tennessee owners, not IT experts. Stop hackers without the headache.
          </p>

          {/* New Direct Actions Row */}
          <div className="flex flex-wrap items-center gap-8 pt-4">
            <button 
              onClick={viewOnline}
              className="flex items-center space-x-3 text-cyan-400 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Eye className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest">Read Now</span>
                <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">No Signup Needed</span>
              </div>
            </button>

            <button 
              onClick={triggerDownload}
              className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Download className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest">Direct Download</span>
                <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">PDF (Small File)</span>
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {chapters.slice(0, 4).map((c, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="text-white font-black text-xs uppercase tracking-widest">{c.title}</h4>
                    <span className="text-[7px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-black uppercase tracking-widest">In Plain English: {c.simple}</span>
                  </div>
                  <p className="text-slate-500 text-[10px] font-medium leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass p-8 rounded-[2.5rem] border-white/5 flex items-center space-x-6">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden">
                   <User className="w-5 h-5 text-slate-500" />
                 </div>
               ))}
             </div>
             <div>
                <div className="flex items-center text-orange-400 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-[10px] font-black text-white uppercase tracking-widest">Trusted by 450+ TN Farmers & SMBs</p>
             </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative glass p-10 md:p-12 rounded-[3.5rem] border-white/10 glow-cyan">
            {isDownloaded ? (
              <div className="text-center py-10 animate-in zoom-in-95">
                <div className="w-20 h-20 bg-emerald-950 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/30">
                  <ShieldCheck className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 italic uppercase">Identity Verified.</h3>
                <p className="text-slate-400 mb-10 leading-relaxed font-medium">
                  Briefing transmitted to <span className="text-cyan-400">{formData.email}</span>. Access the full high-res protocols below.
                </p>
                
                <div className="space-y-4">
                  <button 
                    onClick={viewOnline}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl flex items-center justify-center space-x-3 border border-white/10 active:scale-95 transition-all"
                  >
                    <Eye className="w-4 h-4 text-cyan-400" />
                    <span>View Online Now</span>
                  </button>
                  
                  <button 
                    onClick={triggerDownload}
                    className="w-full btn-fire text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl flex items-center justify-center space-x-3 active:scale-95 transition-all relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <Download className="w-4 h-4" />
                    <span>Download Full Playbook</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="space-y-6">
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-black text-white italic uppercase mb-2">Secure Your Copy</h2>
                  <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Full 60-Page Intelligence Briefing</p>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                    <input 
                      required 
                      type="text" 
                      placeholder="Your Full Name" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:border-cyan-500 outline-none transition-all" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                    <input 
                      required 
                      type="email" 
                      placeholder="Secure Email Address" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:border-cyan-500 outline-none transition-all" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                    <input 
                      required 
                      type="text" 
                      placeholder="Entity / Organization Name" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:border-cyan-500 outline-none transition-all" 
                      value={formData.org}
                      onChange={e => setFormData({...formData, org: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-slate-900/50 rounded-2xl border border-white/5">
                   <ShieldCheck className="w-5 h-5 text-cyan-400" />
                   <p className="text-[9px] text-slate-500 font-bold leading-tight uppercase tracking-widest">We never share data. Your privacy is our priority mission.</p>
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full btn-fire text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center space-x-3 active:scale-95 transition-all shadow-2xl"
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><span>Request Full Playbook</span> <Download className="w-4 h-4" /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Chapter Detail Grid */}
      <section className="mt-40 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black text-white italic uppercase">The 10-Step Blueprint</h2>
          <div className="h-1 w-24 bg-cyan-600 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
           {chapters.map((c, i) => (
             <div key={i} className="glass p-8 rounded-3xl border-white/5 hover:border-cyan-500/20 transition-all flex flex-col items-center text-center group">
               <span className="text-xs font-black text-cyan-500 mb-4 block opacity-50">CH. 0{i+1}</span>
               <h3 className="text-white font-black uppercase italic tracking-tighter mb-2">{c.title}</h3>
               <span className="text-[8px] text-slate-500 font-black uppercase tracking-widest mb-4 block">In Plain English: {c.simple}</span>
               <p className="text-[10px] text-slate-500 leading-relaxed font-medium flex-grow">{c.desc}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Ebook;
