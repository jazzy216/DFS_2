
import React from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Sparkles, AlertCircle, Shield } from 'lucide-react';
import { chatWithSentinel } from 'src/services/geminiService';
import { Message } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    { role: 'model', text: "Welcome to Secure Channel. I'm Sentinel. I can help you with security audits, incident triage, or general safety questions. How can I protect you today?" }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const suggestions = [
    { label: "Report a Breach", icon: AlertCircle, color: "text-red-400" },
    { label: "Farm Tech Audit", icon: Shield, color: "text-emerald-400" },
    { label: "Compliance Help", icon: Sparkles, color: "text-cyan-400" }
  ];

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (customInput?: string) => {
    const textToSend = customInput || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chatWithSentinel(messages, textToSend);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Secure connection timeout. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-[400px] h-[600px] glass rounded-[2.5rem] overflow-hidden flex flex-col glow-cyan border border-cyan-500/30 shadow-2xl animate-in slide-in-from-bottom-8 duration-500">
          {/* Header */}
          <div className="bg-slate-900/80 p-5 border-b border-slate-800 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-500/40">
                  <Bot className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">Sentinel Intelligence</h3>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Active Guard</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 text-slate-500 hover:text-white transition-colors bg-slate-800/50 rounded-xl">
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-5 space-y-4 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-cyan-600 text-white rounded-br-none shadow-lg' 
                    : 'bg-slate-800/80 text-slate-200 rounded-bl-none border border-slate-700/50'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/80 p-4 rounded-2xl rounded-bl-none border border-slate-700/50 animate-pulse flex space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full" />
                </div>
              </div>
            )}
          </div>

          {/* Footer Area with Suggestions */}
          <div className="p-5 border-t border-slate-800 bg-slate-900/40 space-y-4">
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleSend(s.label)}
                    className="flex items-center space-x-1.5 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-full px-3 py-1.5 text-xs text-slate-300 transition-all hover:scale-105 active:scale-95"
                  >
                    <s.icon className={`w-3 h-3 ${s.color}`} />
                    <span>{s.label}</span>
                  </button>
                ))}
              </div>
            )}
            
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask anything..."
                className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all pr-14 shadow-inner"
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 p-2.5 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 text-white rounded-xl transition-all shadow-lg active:scale-90"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] text-center">
              Encrypted 256-Bit Channel
            </p>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-[1.5rem] bg-cyan-600 hover:bg-cyan-500 text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-3 glow-cyan relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
          <MessageCircle className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500"></span>
          </span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
