
import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import AgTech from './pages/AgTech';
import Tools from './pages/Tools';
import Services from './pages/Services';
import About from './pages/About';
import Resources from './pages/Resources';
import Ebook from './pages/Ebook';
import Chatbot from './components/Chatbot';
import { ShieldAlert, Phone } from 'lucide-react';

// Interfaces for ErrorBoundary to ensure standard React component behavior
interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Friendly Global Error Boundary Component
/**
 * Fix: Explicitly declare the state and props property on the class to resolve 
 * "Property 'state/props' does not exist" errors that occur in some environments 
 * when inheritance from React.Component is not correctly resolved.
 */
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // Explicit declarations to satisfy strict TypeScript environments where inherited props/state are shadowed
  public state: ErrorBoundaryState = { hasError: false };
  public props: ErrorBoundaryProps;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.props = props;
  }

  // Static method to catch rendering errors and update state
  static getDerivedStateFromError(_: any): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    // Correctly checking state after explicit declaration
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-slate-950">
          <div className="glass p-12 rounded-[3rem] text-center max-w-xl border-red-500/20 glow-cyan">
            <div className="w-20 h-20 bg-red-950/30 rounded-full flex items-center justify-center mx-auto mb-8 border border-red-500/30">
              <ShieldAlert className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">System Shield Activated</h1>
            <p className="text-slate-400 mb-8">
              We've encountered a secure anomaly. Our technicians have been alerted. You can still reach us directly via the emergency line.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => window.location.reload()} 
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-2xl font-bold transition-all"
              >
                Restart Session
              </button>
              <a 
                href="tel:6156931113" 
                className="bg-slate-900 border border-slate-800 text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>Call Urgent Support</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    // Safely return children, which is now explicitly recognized through class property
    return this.props.children || null;
  }
}

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agtech" element={<AgTech />} />
            <Route path="/ebook" element={<Ebook />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
        <Chatbot />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
