
import React, { useState, useEffect } from 'react';
import { Shield, Activity, Globe, AlertTriangle, Lock } from 'lucide-react';

const ThreatDashboard: React.FC = () => {
  const [threats, setThreats] = useState<any[]>([]);

  useEffect(() => {
    const locations = ['Nashville, TN', 'Memphis, TN', 'Knoxville, TN', 'Chattanooga, TN', 'Jackson, TN'];
    const types = ['Phishing Attempt', 'Brute Force', 'SQL Injection', 'Ransomware Probe'];
    
    const interval = setInterval(() => {
      const newThreat = {
        id: Math.random().toString(36).substr(2, 9),
        location: locations[Math.floor(Math.random() * locations.length)],
        type: types[Math.floor(Math.random() * types.length)],
        severity: Math.random() > 0.8 ? 'CRITICAL' : 'HIGH',
        time: new Date().toLocaleTimeString()
      };
      setThreats(prev => [newThreat, ...prev].slice(0, 5));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass rounded-[2rem] p-6 border-white/5 glow-cyan h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">Heartland Threat Monitor</h3>
        </div>
        <Globe className="w-4 h-4 text-cyan-400 opacity-50" />
      </div>

      <div className="space-y-4 flex-grow overflow-hidden">
        {threats.map((t) => (
          <div key={t.id} className="flex items-center justify-between p-3 bg-slate-950/50 rounded-xl border border-white/5 animate-in slide-in-from-right-4">
            <div className="flex items-center space-x-3">
              <div className={`p-1.5 rounded-lg ${t.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                <AlertTriangle className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="block text-[10px] text-white font-bold tracking-tight">{t.type}</span>
                <span className="block text-[9px] text-slate-500 uppercase font-black">{t.location}</span>
              </div>
            </div>
            <span className="text-[9px] font-mono text-cyan-400 opacity-60">{t.time}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 grid grid-cols-2 gap-4">
        <div className="text-center">
          <span className="block text-[18px] font-black text-white italic">14.2k</span>
          <span className="text-[8px] text-slate-500 uppercase tracking-widest font-black">Threats Blocked</span>
        </div>
        <div className="text-center">
          <span className="block text-[18px] font-black text-cyan-400 italic">100%</span>
          <span className="text-[8px] text-slate-500 uppercase tracking-widest font-black">TN Uptime</span>
        </div>
      </div>
    </div>
  );
};

export default ThreatDashboard;
