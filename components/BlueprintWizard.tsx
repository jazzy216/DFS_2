
import React from 'react';
import { ClipboardList, ChevronRight, Check, ShieldCheck, Mail, Loader2, Download } from 'lucide-react';
import { generateSecurityBlueprint } from '../services/geminiService';
import { BlueprintData } from '../types';

const BlueprintWizard: React.FC = () => {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState<BlueprintData>({
    audience: 'Business',
    worry: '',
    deviceCount: '10-50',
    email: ''
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [blueprint, setBlueprint] = React.useState<string | null>(null);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await generateSecurityBlueprint(data);
      setBlueprint(res);
      setStep(4);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto glass rounded-3xl p-8 border border-slate-800 overflow-hidden min-h-[450px] flex flex-col">
      {/* Progress */}
      <div className="flex justify-between mb-8 px-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${step >= s ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
              {step > s ? <Check className="w-4 h-4" /> : s}
            </div>
            {s < 3 && <div className={`h-0.5 w-16 mx-2 ${step > s ? 'bg-cyan-600' : 'bg-slate-800'}`} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
          <h3 className="text-xl font-bold text-white">Who are we securing today?</h3>
          <div className="grid grid-cols-1 gap-4">
            {(['Business', 'Farm', 'Person'] as const).map((type) => (
              <button 
                key={type}
                onClick={() => { setData({...data, audience: type}); nextStep(); }}
                className={`p-4 rounded-2xl border text-left flex justify-between items-center transition-all ${data.audience === type ? 'bg-cyan-950/30 border-cyan-500/50 text-cyan-400' : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'}`}
              >
                <span className="font-semibold">{type === 'Person' ? 'Individual / Family' : type}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
          <h3 className="text-xl font-bold text-white">What is your biggest security worry?</h3>
          <textarea 
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-slate-300 focus:outline-none focus:border-cyan-500 min-h-[120px]"
            placeholder="e.g., Ransomware attacks on our servers, someone hijacking my harvest data, identity theft..."
            value={data.worry}
            onChange={(e) => setData({...data, worry: e.target.value})}
          />
          <button 
            disabled={!data.worry}
            onClick={nextStep}
            className="w-full bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl transition-all"
          >
            Continue
          </button>
          <button onClick={prevStep} className="w-full text-slate-500 text-sm">Go back</button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
          <div className="text-center">
            <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white">Unlock Your Strategy</h3>
            <p className="text-slate-400 text-sm mt-2">Enter your email to receive your full preliminary report.</p>
          </div>
          <input 
            type="email"
            placeholder="name@company.com"
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-slate-300 focus:outline-none focus:border-cyan-500"
            value={data.email}
            onChange={(e) => setData({...data, email: e.target.value})}
          />
          <button 
            disabled={!data.email || isLoading}
            onClick={handleSubmit}
            className="w-full bg-cyan-600 hover:bg-cyan-500 flex items-center justify-center space-x-2 text-white font-bold py-4 rounded-2xl transition-all"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <span>Generate My Blueprint</span>}
          </button>
        </div>
      )}

      {step === 4 && blueprint && (
        <div className="space-y-6 animate-in zoom-in-95 duration-500">
          <div className="flex items-center space-x-2 text-emerald-400 mb-4">
            <ShieldCheck className="w-6 h-6" />
            <span className="font-bold">Blueprint Ready</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl max-h-[300px] overflow-y-auto text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
            {blueprint}
          </div>
          <button className="w-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center space-x-2 py-4 rounded-2xl transition-all">
            <Download className="w-5 h-5" />
            <span>Download PDF Report</span>
          </button>
          <p className="text-[10px] text-slate-500 text-center">
            Our experts will review this and follow up within 24 hours.
          </p>
        </div>
      )}
    </div>
  );
};

export default BlueprintWizard;
