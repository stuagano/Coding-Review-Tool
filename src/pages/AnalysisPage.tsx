import { BottomNav } from '../components/CoreUI';

export const AnalysisPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/20 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Node Analysis</h1>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
              <h2 className="text-lg font-bold">Auth Middleware</h2>
            </div>
          </div>
        </div>
        <button className="text-xs font-medium px-3 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/5 transition-all">
          BACK TO GRAPH
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-6 max-w-2xl mx-auto w-full custom-scrollbar">
        {/* AI Message */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(140,37,244,0.4)]">
            <span className="material-symbols-outlined text-white text-sm">psychology</span>
          </div>
          <div className="space-y-3 flex-1">
            <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl rounded-tl-none p-4">
              <p className="text-sm leading-relaxed">
                I've analyzed the <span className="text-primary font-mono">Auth Middleware</span> and identified a critical skill gap in <span className="text-primary font-semibold">Insecure JWT handling</span>.
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                The current implementation fails to verify the algorithm header, allowing for potential algorithm switching attacks.
              </p>
            </div>

            {/* Code Snippet */}
            <div className="rounded-xl overflow-hidden border border-primary/20 bg-slate-950">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-900/50 border-b border-white/5">
                <span className="text-[10px] text-slate-400 font-mono uppercase">middleware/auth.js</span>
                <span className="material-symbols-outlined text-xs text-slate-500">content_copy</span>
              </div>
              <pre className="p-4 overflow-x-auto text-[13px] font-mono leading-relaxed">
                <span className="text-pink-500">const</span> <span className="text-blue-400">decoded</span> = <span className="text-primary">jwt.verify</span>(token, secret);<br/>
                <span className="text-slate-500">// Vulnerable: lacks algorithm constraint</span><br/><br/>
                <span className="text-slate-500">// Recommendation:</span><br/>
                <span className="text-pink-500">const</span> <span className="text-blue-400">decoded</span> = <span className="text-primary">jwt.verify</span>(token, secret, {'{'} <br/>
                &nbsp;&nbsp;<span className="text-emerald-400">algorithms</span>: [<span className="text-amber-300">'RS256'</span>] <br/>
                {'}'});
              </pre>
            </div>
          </div>
        </div>

        {/* User Message */}
        <div className="flex gap-3 flex-row-reverse">
          <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-slate-500 text-sm">person</span>
          </div>
          <div className="bg-primary text-white rounded-xl rounded-tr-none p-4 max-w-[80%] shadow-lg shadow-primary/10">
            <p className="text-sm">Can you show me a full example of how to implement this securely with Express?</p>
          </div>
        </div>

        {/* AI Typing */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-white text-sm">psychology</span>
          </div>
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 dark:bg-slate-800/50 w-fit">
              <div className="flex gap-1">
                <span className="w-1 h-1 rounded-full bg-primary/60 animate-bounce"></span>
                <span className="w-1 h-1 rounded-full bg-primary/60 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1 h-1 rounded-full bg-primary/60 animate-bounce [animation-delay:0.4s]"></span>
              </div>
              <span className="text-[10px] text-slate-500 uppercase tracking-tighter">Analyzing...</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="p-4 bg-background-light dark:bg-background-dark border-t border-primary/20">
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2 custom-scrollbar">
          {['How do I fix this?', 'Show me an example', 'Explain the risk'].map((suggestion, i) => (
            <button key={i} className="whitespace-nowrap px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary hover:bg-primary/10 transition-colors">
              {suggestion}
            </button>
          ))}
        </div>
        <div className="relative flex items-center">
          <input
            className="w-full bg-slate-100 dark:bg-slate-900 border border-primary/20 rounded-xl py-4 pl-5 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            placeholder="Ask follow-up questions..."
          />
          <button className="absolute right-2 w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-transform">
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </footer>
      <BottomNav />
    </div>
  );
};
