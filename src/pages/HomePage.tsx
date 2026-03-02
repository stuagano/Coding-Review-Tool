import { Button, Input, BottomNav } from '../components/CoreUI';

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 border-b border-primary/10 justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="text-primary flex size-10 items-center justify-center bg-primary/10 rounded-lg">
            <span className="material-symbols-outlined">account_tree</span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">Code Architect</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Documentation</button>
          <button className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </header>

      <main className="flex-1 relative overflow-hidden flex flex-col items-center justify-center px-4 py-12 node-bg">
        <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-40">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-3xl w-full text-center relative z-10">
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
              Next-Gen Repository Mapping
            </span>
            <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              Visualize Your <span className="text-primary">Knowledge</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
              Upload your GitHub repo to see your code mapped out as an interactive learning diagram. Understand complex architectures in seconds.
            </p>
          </div>

          <div className="glass-panel p-2 md:p-3 rounded-2xl shadow-2xl shadow-primary/5 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <Input
                icon="link"
                placeholder="github.com/username/repository"
                className="bg-white dark:bg-background-dark/50"
              />
              <Button className="px-8 py-4 whitespace-nowrap">
                Map Codebase
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            {[
              { icon: 'check_circle', label: 'Supports Public & Private Repos' },
              { icon: 'check_circle', label: 'Real-time Node Generation' },
              { icon: 'check_circle', label: 'AI-Powered Insights' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 w-full max-w-4xl px-4">
          <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10 pointer-events-none"></div>
            <div
              className="bg-center bg-no-repeat bg-cover aspect-video w-full transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbGNmxdwW5QxU6BPq7QO0pwwVa52-ieG4XffaAw1t8RPAYskpnXNFy1w_Srf4sbyBF-h7opULdEOe6Kf8HXox_B_HxyZNhPH8FBCXaVimo_SAWfqrPOFkcLGeq68SyN2Xvg4U3G2WPXzxBCajaHn76iSRUtby0jMudXRFYSFuW-qKbRWsmbJTLI2GxFq7sgHB8bwZ4PPdp8v6vcZXQra6MK_Qubblu7f39moqf812c3G31JAFMuHV6qTg_x4DQZwhmhNZPdmfqVn4")' }}
            />
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-white font-bold text-xl">Interactive Architectural Graphs</p>
              <p className="text-slate-300 text-sm">Visualize dependencies and data flow in real-time.</p>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};
