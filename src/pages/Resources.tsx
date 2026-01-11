
import React, { useState, useEffect } from 'react';
import { BookOpen, ShieldAlert, Cpu, Heart, ArrowRight, Search, Loader2, Globe, ExternalLink, ShieldCheck, AlertTriangle, FileText, Zap } from 'lucide-react';
import { fetchLiveSecurityIntelligence } from '../services/geminiService';

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Farms' | 'Small Business' | 'Families'>('Small Business');
  const [intelligence, setIntelligence] = useState<{ text: string; sources: any[] } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Core educational articles for non-tech users
  const coreArticles = {
    'Farms': {
      title: "The Smart Harvest Risk",
      subtitle: "Why Hackers Want Your Tractor",
      excerpt: "Your equipment is smart, but is it safe? Learn how a single sensor can shut down a multi-million dollar harvest.",
      content: "Modern agriculture isn't just about soil and seeds anymore—it's about data. When you use GPS-guided tractors or remote-controlled irrigation, you're using 'IoT' (Internet of Things) devices. Hackers target these because they know that during harvest season, you can't afford a single day of downtime. They don't want your crops; they want the ransom you'll pay to unlock your machines.",
      readTime: "4 min read",
      tags: ["IoT Security", "Downtime Prevention"]
    },
    'Small Business': {
      title: "The $50,000 Email",
      subtitle: "The Truth About Business Phishing",
      excerpt: "It doesn't take a genius hacker to bankrupt a shop. It just takes one employee clicking the wrong link.",
      content: "Most small business hacks don't look like the movies. There are no scrolling green codes. Instead, it's a simple email that looks like an invoice from a vendor you trust. This is called 'Social Engineering.' Once they have your password, they don't steal your money immediately—they watch. They learn who you pay and when, then they strike when you're busiest.",
      readTime: "5 min read",
      tags: ["Email Safety", "Employee Training"]
    },
    'Families': {
      title: "Digital Inheritance",
      subtitle: "Protecting Your Family's Identity",
      excerpt: "Identity theft isn't just about a stolen credit card. It's about protecting your kids' future and your parents' peace of mind.",
      content: "For a hacker, your family is a goldmine of data. They use your social media posts to guess passwords and your children's clean credit history to open fraudulent loans that go unnoticed for years. Security at home isn't about being paranoid; it's about building a 'Digital Moat' around the people you love. Simple steps like MFA (that code on your phone) stop 99% of these attacks.",
      readTime: "3 min read",
      tags: ["Identity Theft", "Home Privacy"]
    }
  };

  const loadIntelligence = async (category: 'Farms' | 'Small Business' | 'Families') => {
    setActiveCategory(category);
    setIsLoading(true);
    setIntelligence(null);
    try {
      const result = await fetchLiveSecurityIntelligence(category);
      setIntelligence(result);
    } catch (error) {
      console.error("Intelligence Fetch Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadIntelligence('Small Business');
  }, []);

  return (
    <div className="pb-32 px-4">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto pt-20 text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-cyan-950/40 border border-cyan-500/20 px-6 py-2 rounded-full mb-8 shadow-xl">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Security Awareness Hub</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter italic uppercase">
          Sentinel <br />
          <span className="gradient-text not-italic">Intelligence Center</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Vetted security protocols and plain-English guides for the Tennessee heartbeat.
        </p>
      </section>

      {/* Simplified Category Selector */}
      <section className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 mb-20">
        {[
          { id: 'Small Business', name: 'Small Business', icon: Cpu },
          { id: 'Farms', name: 'Ag-Tech & Farms', icon: ShieldAlert },
          { id: 'Families', name: 'Families & Home', icon: Heart }
        ].map((cat) => (
          <button 
            key={cat.id} 
            onClick={() => loadIntelligence(cat.id as any)}
            className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all border ${
              activeCategory === cat.id 
              ? 'bg-cyan-600 text-white border-cyan-400 shadow-xl shadow-cyan-900/20' 
              : 'bg-slate-900 text-slate-400 border-white/5 hover:border-cyan-500/30'
            }`}
          >
            <cat.icon className="w-4 h-4" />
            <span>{cat.name}</span>
          </button>
        ))}
      </section>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content Area (2/3 width) */}
        <div className="lg:col-span-2 space-y-12">
          {/* Core Foundation Article */}
          <div className="glass rounded-[3.5rem] p-10 md:p-16 border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              <FileText size={200} />
            </div>
            
            <div className="relative space-y-8">
              <div className="flex items-center space-x-3 text-cyan-400 text-[10px] font-black uppercase tracking-widest">
                <Zap className="w-4 h-4" />
                <span>Essential Guide: {activeCategory}</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase leading-none tracking-tighter">
                  {coreArticles[activeCategory].title}
                </h2>
                <p className="text-cyan-500 font-bold uppercase tracking-widest text-xs">
                  {coreArticles[activeCategory].subtitle}
                </p>
              </div>

              <div className="bg-slate-950/50 p-6 rounded-3xl border border-white/5">
                <p className="text-slate-300 text-lg leading-relaxed font-medium italic">
                  "{coreArticles[activeCategory].excerpt}"
                </p>
              </div>

              <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed font-medium">
                {coreArticles[activeCategory].content}
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-white/5">
                <div className="flex items-center space-x-4">
                   {coreArticles[activeCategory].tags.map((t, i) => (
                     <span key={i} className="text-[9px] font-black text-slate-500 uppercase tracking-widest bg-slate-900 px-3 py-1.5 rounded-full border border-white/5">{t}</span>
                   ))}
                </div>
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{coreArticles[activeCategory].readTime}</span>
              </div>
            </div>
          </div>

          {/* Practical Checklist - New Section */}
          <div className="glass rounded-[2.5rem] p-8 border-emerald-500/20 bg-emerald-950/5">
            <div className="flex items-center space-x-3 mb-8">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-black text-white uppercase italic tracking-widest">Immediate Defense Steps</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Enable 2-Factor Authentication on ALL bank/email accounts.",
                "Verify wire transfers via a phone call, not just email.",
                "Ensure your home/shop Wi-Fi has a unique, strong password.",
                "Update your phone and computer software today."
              ].map((step, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 bg-slate-950/50 rounded-2xl border border-white/5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] font-black text-emerald-400">{i+1}</span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar: Sentinel Live Feed (1/3 width) */}
        <div className="space-y-8">
          <div className="glass rounded-[2.5rem] border-white/10 overflow-hidden sticky top-24">
            <div className="bg-slate-900/80 p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <h2 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Live Sentinel Feed</h2>
              </div>
              <Globe className="w-4 h-4 text-cyan-400 opacity-50" />
            </div>

            <div className="p-8">
              {isLoading ? (
                <div className="py-20 flex flex-col items-center justify-center space-y-4">
                  <Loader2 className="w-10 h-10 text-cyan-500 animate-spin" />
                  <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Scanning Global Threats...</p>
                </div>
              ) : intelligence ? (
                <div className="space-y-8">
                  <div className="text-slate-400 text-xs leading-relaxed font-medium line-clamp-6">
                    {intelligence.text}
                  </div>
                  
                  <div className="space-y-4 pt-6 border-t border-white/5">
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-4">Vetted Intelligence Sources</span>
                    {intelligence.sources.slice(0, 3).map((source, i) => (
                      <a 
                        key={i} 
                        href={source.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-slate-950/50 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all group"
                      >
                        <span className="text-[10px] text-white font-bold truncate pr-4">{source.title || "External Alert"}</span>
                        <ExternalLink className="w-3 h-3 text-cyan-500 shrink-0" />
                      </a>
                    ))}
                  </div>

                  <button 
                    onClick={() => loadIntelligence(activeCategory)}
                    className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-cyan-400 text-[9px] font-black uppercase tracking-widest rounded-xl transition-all border border-white/5"
                  >
                    Refresh Intelligence
                  </button>
                </div>
              ) : (
                <div className="text-center py-10">
                   <AlertTriangle className="w-8 h-8 text-yellow-500 mx-auto mb-4 opacity-50" />
                   <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest leading-relaxed">System standby. <br /> Select category to re-initiate scan.</p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Contact Block */}
          <div className="glass rounded-[2.5rem] p-8 border-cyan-500/20 bg-cyan-950/10">
             <h4 className="text-white font-black uppercase italic mb-4">Under Attack?</h4>
             <p className="text-[10px] text-slate-500 font-medium mb-6 leading-relaxed">If you suspect an active breach, contact our Nashville rapid-response team immediately.</p>
             <a href="tel:6156931113" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-4 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center space-x-2 shadow-lg">
                <span className="animate-pulse">615-693-1113</span>
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
