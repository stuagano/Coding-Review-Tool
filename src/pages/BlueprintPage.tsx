import { Button, BottomNav } from '../components/CoreUI';

export const BlueprintPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-background-light dark:bg-background-dark/50 sticky top-0 z-20 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-primary/10 text-slate-900 dark:text-slate-100 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-xl font-bold leading-none tracking-tight">Codebase Blueprint</h1>
            <p className="text-xs text-primary/70 font-medium">analysis-v2.repo.git</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" className="h-10 w-10 rounded-full p-0">
            <span className="material-symbols-outlined">share</span>
          </Button>
          <Button className="h-10 w-10 rounded-full p-0">
            <span className="material-symbols-outlined">refresh</span>
          </Button>
        </div>
      </header>

      <main className="flex-1 relative overflow-hidden flex flex-col">
        <div className="flex border-b border-primary/10 bg-background-light dark:bg-background-dark/80 px-4">
          <a className="flex flex-1 items-center justify-center border-b-2 border-primary text-primary py-3 transition-colors" href="#">
            <span className="text-sm font-bold tracking-wide">Architecture</span>
          </a>
          <a className="flex flex-1 items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 py-3 transition-colors" href="#">
            <span className="text-sm font-bold tracking-wide">Skill Gaps</span>
            <span className="ml-2 bg-accent-warning text-black text-[10px] px-1.5 py-0.5 rounded-full font-bold">3</span>
          </a>
        </div>

        <div className="flex-1 relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[length:40px_40px] bg-[linear-gradient(to_right,#8c25f4_1px,transparent_1px),linear-gradient(to_bottom,#8c25f4_1px,transparent_1px)]" />

          <div className="absolute inset-0 p-8">
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group">
              <div className="w-16 h-16 rounded-xl bg-primary/20 border-2 border-primary/60 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform cursor-pointer">
                <span className="material-symbols-outlined text-primary text-3xl">web</span>
              </div>
              <span className="mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Frontend</span>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group">
              <div className="w-20 h-20 rounded-2xl bg-primary border-4 border-primary/30 flex items-center justify-center shadow-[0_0_30px_rgba(140,37,244,0.4)] group-hover:scale-105 transition-transform cursor-pointer">
                <span className="material-symbols-outlined text-white text-4xl">memory</span>
              </div>
              <span className="mt-3 text-sm font-bold text-white uppercase tracking-widest">Core API</span>
            </div>

            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 flex flex-col items-center group">
              <div className="w-16 h-16 rounded-xl bg-primary/20 border-2 border-primary/60 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform cursor-pointer">
                <span className="material-symbols-outlined text-primary text-3xl">database</span>
              </div>
              <span className="mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">PostgreSQL</span>
            </div>

            <div className="absolute top-1/3 right-1/3 flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-accent-warning/20 border-2 border-accent-warning flex items-center justify-center backdrop-blur-sm node-pulse cursor-pointer">
                <span className="material-symbols-outlined text-accent-warning">warning</span>
              </div>
              <span className="mt-2 text-[10px] font-bold text-accent-warning uppercase tracking-tighter">Middleware Gap</span>
            </div>

            <svg className="absolute inset-0 w-full h-full -z-10 opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <line stroke="#8c25f4" strokeDasharray="5,5" strokeWidth="2" x1="25%" x2="50%" y1="25%" y2="50%"></line>
              <line stroke="#8c25f4" strokeWidth="2" x1="50%" x2="75%" y1="50%" y2="75%"></line>
              <line stroke="#f59e0b" strokeWidth="2" x1="50%" x2="66%" y1="50%" y2="33%"></line>
            </svg>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-background-dark/60 border border-primary/20 backdrop-blur-xl p-2 rounded-xl">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/20 text-white text-xs font-bold">
              <span className="material-symbols-outlined text-sm">layers</span>
              Frontend
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-white text-xs font-bold">
              <span className="material-symbols-outlined text-sm">security</span>
              Security
            </button>
          </div>
        </div>

        <div className="bg-background-light dark:bg-background-dark/95 border-t border-primary/20 rounded-t-3xl p-6 shadow-2xl z-30">
          <div className="w-12 h-1 bg-primary/30 rounded-full mx-auto mb-6"></div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">lightbulb</span>
              Blueprint Insights
            </h3>
            <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded uppercase tracking-wider">3 Gaps Identified</span>
          </div>
          <div className="space-y-3">
            {[
              { icon: 'sync_problem', color: 'text-accent-warning', title: 'Inconsistent Error Handling', desc: 'Exception bubbling found in 4 controller files.' },
              { icon: 'speed', color: 'text-accent-warning', title: 'N+1 Query Pattern', desc: "Detected in 'UserService.java'. Recommended to use eager loading." }
            ].map((insight, i) => (
              <div key={i} className="flex gap-4 p-3 rounded-xl bg-primary/5 border border-primary/10 items-start">
                <div className="bg-accent-warning/20 p-2 rounded-lg">
                  <span className={`material-symbols-outlined ${insight.color}`}>{insight.icon}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100">{insight.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{insight.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};
