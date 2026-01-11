
import React from 'react';
import { ShieldCheck, Copy, RefreshCw, Lock, Sparkles, CheckCircle, Info } from 'lucide-react';
import { explainPasswordStrength } from '../services/geminiService';

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = React.useState('');
  const [length, setLength] = React.useState(24);
  const [copied, setCopied] = React.useState(false);
  const [explanation, setExplanation] = React.useState('');
  const [isExplaining, setIsExplaining] = React.useState(false);

  const calculateStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length > 12) score += 25;
    if (pwd.length > 20) score += 25;
    if (/[A-Z]/.test(pwd)) score += 15;
    if (/[0-9]/.test(pwd)) score += 15;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 20;
    return score;
  };

  const strength = calculateStrength(password);

  const generate = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    let result = "";
    for (let i = 0; i < length; i++) {
      result += charset.charAt(array[i] % charset.length);
    }
    setPassword(result);
    setCopied(false);
    setExplanation('');
  };

  const getExplanation = async () => {
    if (!password || isExplaining) return;
    setIsExplaining(true);
    try {
      const exp = await explainPasswordStrength(password);
      setExplanation(exp);
    } catch (error) {
      setExplanation("Could not generate analysis.");
    } finally {
      setIsExplaining(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  React.useEffect(() => {
    generate();
  }, [length]);

  const getStrengthColor = () => {
    if (strength < 50) return 'bg-red-500';
    if (strength < 80) return 'bg-yellow-500';
    return 'bg-emerald-500';
  };

  return (
    <div className="glass rounded-[2.5rem] p-8 max-w-2xl mx-auto border-cyan-500/20 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Lock className="w-24 h-24" />
      </div>
      
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 bg-cyan-950/50 rounded-2xl border border-cyan-500/30">
          <ShieldCheck className="w-6 h-6 text-cyan-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Fortress Generator</h2>
          <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Entropy Engine 4.0</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Password Display */}
        <div className="relative group">
          <div className="w-full bg-slate-950/80 border border-slate-800 p-6 rounded-2xl font-mono text-xl text-cyan-400 break-all pr-28 min-h-[96px] flex items-center shadow-inner">
            {password}
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex space-x-2">
            <button 
              onClick={generate}
              title="Regenerate"
              className="p-3 text-slate-400 hover:text-cyan-400 transition-all bg-slate-900/50 rounded-xl border border-slate-800 hover:border-cyan-500/50 hover:scale-105 active:scale-95"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
            <button 
              onClick={copyToClipboard}
              className={`p-3 transition-all rounded-xl border flex items-center justify-center min-w-[48px] ${copied ? 'bg-emerald-950 text-emerald-400 border-emerald-500/50' : 'bg-slate-900/50 text-slate-400 hover:text-cyan-400 border-slate-800'}`}
            >
              {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Strength Meter (New) */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-500">
            <span>Visual Strength Meter</span>
            <span className={strength > 80 ? 'text-emerald-400' : 'text-slate-400'}>{strength}% SECURE</span>
          </div>
          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ease-out ${getStrengthColor()}`}
              style={{ width: `${strength}%` }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800/50">
          <div className="flex justify-between items-center mb-4">
            <label className="text-sm font-semibold text-slate-300">Password Complexity</label>
            <span className="px-3 py-1 bg-cyan-950 text-cyan-400 rounded-lg text-sm font-bold border border-cyan-500/20">{length} Characters</span>
          </div>
          <input 
            type="range" 
            min="12" 
            max="64" 
            value={length} 
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
        </div>

        {/* AI Analysis */}
        <div className="pt-2">
          {!explanation && !isExplaining ? (
            <button 
              onClick={getExplanation}
              className="w-full flex items-center justify-center space-x-2 bg-slate-900/50 hover:bg-slate-900 border border-slate-800 p-4 rounded-xl text-cyan-400 hover:text-cyan-300 transition-all text-sm font-bold group"
            >
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Analyze with Sentinel AI Intelligence</span>
            </button>
          ) : (
            <div className="bg-cyan-950/10 border border-cyan-500/20 p-5 rounded-2xl relative overflow-hidden">
               {isExplaining && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />}
               <div className="flex items-start space-x-3">
                 <div className="p-1.5 bg-cyan-950 rounded-lg shrink-0">
                    <Info className="w-4 h-4 text-cyan-400" />
                 </div>
                 <p className="text-sm text-slate-300 leading-relaxed italic">
                   {isExplaining ? "Sentinel is running permutation simulations..." : explanation}
                 </p>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
