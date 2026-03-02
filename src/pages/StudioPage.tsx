import { Button, Input, BottomNav } from '../components/CoreUI';

export const StudioPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-primary/10 bg-background-light/50 dark:bg-background-dark/50 sticky top-0 z-50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <span className="material-symbols-outlined text-white text-2xl">school</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Studio</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
            <span className="material-symbols-outlined text-primary text-sm">person</span>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 max-w-4xl mx-auto w-full">
        <div className="relative w-full mb-12 flex justify-center">
          <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full scale-150 -z-10"></div>
          <div className="grid grid-cols-3 gap-6 w-full max-w-lg">
            {[
              { icon: 'auto_awesome', label: 'Analysis', progress: 'w-2/3' },
              { icon: 'military_tech', label: 'Milestones', progress: 'w-1/2', translate: 'translate-y-4' },
              { icon: 'database', label: 'Knowledge', progress: 'w-1/4' }
            ].map((stat, i) => (
              <div key={i} className={`glass-panel p-4 rounded-xl flex flex-col items-center gap-3 ${stat.translate || ''}`}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-primary">{stat.icon}</span>
                </div>
                <div className="w-full bg-primary/10 h-1.5 rounded-full overflow-hidden">
                  <div className={`bg-primary h-full ${stat.progress}`}></div>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4 mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Master Your Stack
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Turn your project into a personalized learning path. Connect your GitHub repository to begin your tailored educational journey.
          </p>
        </div>

        <div className="w-full max-w-md space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">GitHub Repository URL</label>
            <Input icon="link" placeholder="https://github.com/username/repo" />
          </div>
          <Button className="w-full py-4 text-lg">
            <span>Begin My Journey</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Button>

          <div className="flex items-center justify-center gap-6 pt-4 grayscale opacity-50">
            {['verified', 'history_edu', 'workspace_premium'].map((icon, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">{icon}</span>
                <span className="text-[10px] font-medium uppercase tracking-tighter">
                  {['AI Analysis', 'Skill Tree', 'Badges'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-md w-full mt-12">
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex items-start gap-4">
            <div className="text-primary mt-0.5">
              <span className="material-symbols-outlined">info</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              We'll analyze your code architecture, dependencies, and patterns to create a custom curriculum just for you.
            </p>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};
