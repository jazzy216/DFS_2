
import React, { useState, useEffect } from 'react';
import { BookOpen, ShieldAlert, Cpu, Heart, ArrowRight, Search, Loader2, Globe, ExternalLink, ShieldCheck } from 'lucide-react';
import { fetchLiveSecurityIntelligence } from '../services/geminiService';

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Farms' | 'Small Business' | 'Families' | null>(null);
  const [intelligence, setIntelligence] = useState<{ text: string; sources: any[] } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: 'Farms', name: 'For Farms', icon: ShieldAlert, color: 'text-emerald-400', border: 'hover:border-emerald-500/40' },
    { id: 'Small Business', name: 'For Small Business', icon: Cpu, color: 'text-cyan-400', border: 'hover:border-cyan-500/40' },
    { id: 'Families', name: 'For Families', icon: Heart, color: 'text-red-400', border: 'hover:border-red-500/40' }
  ] as const;

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

  // Initial load
  useEffect(() => {
    loadIntelligence('Small Business');
  }, []);

  return (
    <div className="pb-32 px-4">
      <section className="max-w-7xl mx-auto pt-20 text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-cyan-950/30 border border-cyan-500/20 px-6 py-2 rounded-full mb-8">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Live Intelligence Feed</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter italic uppercase">Sentinel <br /><span className="gradient-text not-italic">Intelligence Center</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">Search-grounded, vetted cybersecurity protocols for Tennessee's core industries.</p>
      </section>

      {/* Category Selector */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {categories.map((cat) => (
          <button 
            key={cat.id} 
            onClick={() => loadIntelligence(cat.id)}
            className={`glass p-8 rounded-[2.5rem] text-left transition-all group border ${activeCategory === cat.id ? 'border-cyan-500 bg-cyan-950/20 ring-4 ring-cyan-500/10' : 'border-white/5 ' + cat.border}`}
          >
            <cat.icon className={`w-12 h-12 mb-6 ${cat.color} group-hover:scale-110 transition-transform`} />
            <h3 className="text-xl font-black text-white uppercase italic">{cat.name}</h3>
            <p className="text-slate-500 text-sm mt-2">Deploy {cat.id} protocols</p>
          </button>
        ))}
      </section>

      {/* Live Intelligence Report */}
      <section className="max-w-5xl mx-auto">
        <div className="glass rounded-[3rem] border-white/10 overflow-hidden min-h-[400px]">
          <div className="bg-slate-900/80 p-6 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-cyan-400 animate-pulse" />
              <h2 className="text-xs font-black text-white uppercase tracking-[0.2em]">
                {isLoading ? "Fetching Vetted Content..." : `Live Report: ${activeCategory}`}
              </h2>
            </div>
            {!isLoading && intelligence && (
              <div className="flex items-center space-x-2 text-[10px] text-emerald-400 font-black uppercase">
                <ShieldCheck className="w-3 h-3" />
                <span>AI Grounding Verified</span>
              </div>
            )}
          </div>

          <div className="p-10">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20 space-y-6">
                <Loader2 className="w-12 h-12 text-cyan-500 animate-spin" />
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Scanning High-Authority Databases...</p>
              </div>
            ) : intelligence ? (
              <div className="space-y-12">
                {/* Generated Content */}
                <div className="prose prose-invert max-w-none">
                  <div className="text-slate-300 leading-relaxed text-lg whitespace-pre-wrap">
                    {intelligence.text}
                  </div>
                </div>

                {/* Vetted Links/Sources */}
                {intelligence.sources.length > 0 && (
                  <div className="pt-10 border-t border-white/5">
                    <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6">Verified Intelligence Sources</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {intelligence.sources.map((source, i) => (
                        <a 
                          key={i} 
                          href={source.uri} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 bg-slate-950/50 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group"
                        >
                          <div className="max-w-[80%]">
                            <span className="block text-[10px] text-cyan-400 font-black uppercase mb-1">External Guide</span>
                            <span className="text-white text-sm font-bold truncate block">{source.title || "Vetted Resource"}</span>
                          </div>
                          <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-slate-500 italic">Select a category to generate a live intelligence report.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Static Vetted Protocol Vault */}
      <section className="max-w-5xl mx-auto mt-24">
         <h2 className="text-2xl font-black text-white uppercase italic tracking-widest mb-12 flex items-center space-x-4">
          <span>Tennessee Protocol Vault</span>
          <div className="h-px flex-grow bg-white/5" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="glass p-8 rounded-[2.5rem] border-emerald-500/20 group">
              <ShieldAlert className="w-10 h-10 text-emerald-400 mb-6" />
              <h3 className="text-xl font-black text-white italic uppercase mb-4">Farm Data Shield v1.0</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">Click to download the standardized protocol for securing connected John Deere and Case IH fleets in Tennessee.</p>
              <button className="flex items-center space-x-2 text-emerald-400 text-xs font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                <span>Access Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
           </div>
           <div className="glass p-8 rounded-[2.5rem] border-cyan-500/20 group">
              <Cpu className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-black text-white italic uppercase mb-4">Retail Ransomware Defense</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">A simple checklist for TN retail and hospitality businesses to ensure credit card data and POS systems are hardened.</p>
              <button className="flex items-center space-x-2 text-cyan-400 text-xs font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                <span>Access Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
