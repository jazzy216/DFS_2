
import React from 'react';
import PasswordGenerator from '../components/PasswordGenerator';
import BlueprintWizard from '../components/BlueprintWizard';
import { Lock, FileText, Sparkles } from 'lucide-react';

const Tools: React.FC = () => {
  return (
    <div className="space-y-32 pb-24">
      {/* Header */}
      <section className="px-4 pt-12 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Security Sandbox</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Free Intelligence <span className="gradient-text">Tools</span>
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          Access our suite of privacy-first security utilities. All data generated here is local to your browser and secured by Gemini AI analysis.
        </p>
      </section>

      {/* Password Gen Section */}
      <section id="password-gen" className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
            <PasswordGenerator />
        </div>
        <div className="order-1 lg:order-2 space-y-8">
            <div className="w-16 h-16 bg-cyan-950 rounded-3xl flex items-center justify-center border border-cyan-500/30">
                <Lock className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold text-white leading-tight">The Fortress AI Password Vault</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
                Most breaches happen because of weak passwords. Our "Fortress" tool uses cryptographically secure local generation to ensure your secrets never leave your device.
            </p>
            <div className="space-y-4">
                <div className="flex items-center space-x-3 text-slate-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span>Client-side only (Privacy first)</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span>AI-powered entropy explanation</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span>Customizable complexity levels</span>
                </div>
            </div>
        </div>
      </section>

      {/* Blueprint Section */}
      <section id="blueprint" className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-slate-900/30 py-24 rounded-[4rem] border border-slate-900">
        <div className="space-y-8 pl-0 lg:pl-12">
            <div className="w-16 h-16 bg-cyan-950 rounded-3xl flex items-center justify-center border border-cyan-500/30">
                <FileText className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold text-white leading-tight">Shield Blueprint Generator</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
                Stop guessing and start protecting. Use our AI wizard to get a custom roadmap for your digital security based on your specific industry and concerns.
            </p>
            <div className="p-6 bg-slate-950 rounded-3xl border border-slate-800">
                <p className="text-sm text-slate-500 italic">"The blueprint gave my farm team a clear 3-month goal to secure our autonomous tractors. Essential starting point." — Marcus R., Ag-Innovations</p>
            </div>
        </div>
        <div className="pr-0 lg:pr-12">
            <BlueprintWizard />
        </div>
      </section>
    </div>
  );
};

export default Tools;
