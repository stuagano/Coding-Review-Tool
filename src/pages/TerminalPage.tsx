import { Button, BottomNav } from '../components/CoreUI';

export const TerminalPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-primary/10 bg-background-light/50 dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-2xl">terminal</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">IDE Studio</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="p-2 hover:bg-primary/10 rounded-full transition-colors text-primary">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 max-w-4xl mx-auto w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Bridge the Gap
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg mx-auto leading-relaxed">
            Let's analyze your project for skill gaps. Enter your repository link to start the diagnostic.
          </p>
        </div>

        <div className="w-full bg-[#1e1429] rounded-xl border border-terminal-border overflow-hidden terminal-glow">
          <div className="bg-terminal-header px-4 py-2 border-b border-terminal-border flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">diagnostic-terminal</div>
            <div className="w-12"></div>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-primary font-bold">➜</span>
              <span className="text-slate-300">await <span className="text-primary">init_diagnostic</span>();</span>
            </div>
            <div className="flex items-start gap-3 mb-6">
              <span className="text-primary font-bold">➜</span>
              <span className="text-slate-400">Waiting for repository connection...</span>
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-primary font-mono font-bold">url:</span>
              </div>
              <input
                className="block w-full pl-12 pr-4 py-4 bg-primary/5 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-slate-100 font-mono placeholder-slate-600 outline-none transition-all"
                placeholder="https://github.com/username/project"
                type="text"
              />
              <div className="absolute right-4 inset-y-0 flex items-center">
                <span className="cursor-blink"></span>
              </div>
            </div>
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-slate-500 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">security</span>
                  <span>Secure link</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">code</span>
                  <span>Private/Public support</span>
                </div>
              </div>
              <Button className="w-full md:w-auto px-8 py-3">
                Start Analysis
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">bolt</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            { icon: 'insights', title: 'Deep Scan', desc: 'ML-powered pattern recognition for tech stack detection.' },
            { icon: 'psychology', title: 'Gap Analysis', desc: 'Identifies missing critical dependencies and patterns.' },
            { icon: 'assignment_turned_in', title: 'Roadmap', desc: 'Personalized learning path based on your findings.' }
          ].map((feature, i) => (
            <div key={i} className="p-4 rounded-xl border border-primary/5 bg-primary/5">
              <div className="text-primary mb-2">
                <span className="material-symbols-outlined">{feature.icon}</span>
              </div>
              <h3 className="font-bold text-sm mb-1">{feature.title}</h3>
              <p className="text-xs text-slate-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
};
