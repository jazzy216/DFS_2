
import React from 'react';
import { Send, CheckCircle, Loader2, User, Building, Phone, Mail, ShieldCheck, AlertCircle } from 'lucide-react';

interface IntakeFormProps {
  serviceName: string;
  onClose: () => void;
}

const IntakeForm: React.FC<IntakeFormProps> = ({ serviceName, onClose }) => {
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    org: '',
    urgency: 'Standard',
    details: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Secure dispatch simulation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setStep(2);
  };

  if (step === 2) {
    return (
      <div className="text-center py-12 animate-in zoom-in-95">
        <div className="w-20 h-20 bg-emerald-950 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/30">
          <CheckCircle className="w-10 h-10 text-emerald-400" />
        </div>
        <h3 className="text-3xl font-black text-white mb-4 italic uppercase">Dispatch Confirmed</h3>
        <p className="text-slate-400 mb-8 max-w-sm mx-auto leading-relaxed">
          Your briefing has been transmitted via encrypted link. A Nashville-based specialist will contact you within the hour.
        </p>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl mb-8 flex items-center justify-center space-x-4">
           <Phone className="w-5 h-5 text-cyan-400" />
           <span className="text-white font-black uppercase tracking-widest text-sm">Emergency: 615-693-1113</span>
        </div>
        <button onClick={onClose} className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">
          Close Secure Terminal
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-2xl font-black text-white uppercase italic tracking-tight">{serviceName}</h3>
          <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">Status: connection_active</p>
        </div>
        <div className="flex items-center space-x-2 px-3 py-1.5 bg-cyan-950/50 rounded-full border border-cyan-500/30">
           <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
           <span className="text-[9px] uppercase tracking-widest text-cyan-400 font-black">256-Bit Encrypted</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Legal Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
            <input 
              required
              type="text" 
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:border-cyan-500 outline-none transition-all"
              placeholder="John S. Doe"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Secure Email</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
            <input 
              required
              type="email" 
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:border-cyan-500 outline-none transition-all"
              placeholder="name@business.com"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Organization / Entity</label>
        <div className="relative">
          <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
          <input 
            type="text" 
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:border-cyan-500 outline-none transition-all"
            placeholder="Entity Name"
            value={formData.org}
            onChange={e => setFormData({...formData, org: e.target.value})}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Priority Level</label>
        <select 
          className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 px-5 text-sm text-white focus:border-cyan-500 outline-none cursor-pointer appearance-none"
          value={formData.urgency}
          onChange={e => setFormData({...formData, urgency: e.target.value})}
        >
          <option>Consultation (Next Business Day)</option>
          <option>Audit (High Priority)</option>
          <option>Active Breach (Immediate Response)</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Mission Briefing</label>
        <textarea 
          className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 px-5 text-sm text-white focus:border-cyan-500 outline-none min-h-[100px] transition-all resize-none"
          placeholder="Briefly describe your current security landscape..."
          value={formData.details}
          onChange={e => setFormData({...formData, details: e.target.value})}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button 
          type="button"
          onClick={onClose}
          className="flex-1 border border-slate-800 text-slate-500 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-all"
        >
          Abort
        </button>
        <button 
          disabled={isSubmitting}
          type="submit"
          className="flex-[2] btn-fire text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center space-x-2 active:scale-95"
        >
          {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><span>Dispatch Briefing</span> <Send className="w-4 h-4" /></>}
        </button>
      </div>
    </form>
  );
};

export default IntakeForm;
