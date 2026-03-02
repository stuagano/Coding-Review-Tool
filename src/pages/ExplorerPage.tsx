import { Button, BottomNav } from '../components/CoreUI';

export const ExplorerPage = () => {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden">
      {/* Header */}
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 border-b border-primary/20 justify-between">
        <div className="flex items-center gap-3">
          <button className="text-slate-900 dark:text-slate-100 flex size-10 items-center justify-center rounded-lg hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">Code Explorer</h2>
            <p className="text-xs text-primary font-medium">facebook / react</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" className="size-10 p-0">
            <span className="material-symbols-outlined">share</span>
          </Button>
          <Button className="size-10 p-0">
            <span className="material-symbols-outlined">sync</span>
          </Button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-4 py-4 bg-background-light dark:bg-background-dark">
        <label className="flex flex-col w-full group">
          <div className="flex w-full items-stretch rounded-xl h-12 bg-slate-200 dark:bg-primary/10 border border-transparent focus-within:border-primary/50 transition-all">
            <div className="text-slate-500 dark:text-primary/60 flex items-center justify-center pl-4">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-primary/40 px-3 text-base font-normal leading-normal outline-none"
              placeholder="Search files, components, or issues..."
            />
            <div className="flex items-center pr-4">
              <kbd className="hidden sm:inline-block px-2 py-1 text-[10px] font-semibold text-slate-500 dark:text-primary/40 bg-slate-300 dark:bg-primary/20 rounded">⌘K</kbd>
            </div>
          </div>
        </label>
      </div>

      {/* View Tabs */}
      <div className="bg-background-light dark:bg-background-dark">
        <div className="flex border-b border-slate-200 dark:border-primary/20 px-4 gap-8">
          <a className="flex flex-col items-center justify-center border-b-2 border-primary text-primary pb-3 pt-2" href="#">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">account_tree</span>
              <p className="text-sm font-bold tracking-tight">File Tree</p>
            </div>
          </a>
          <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 pb-3 pt-2 hover:text-primary transition-colors" href="#">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">hub</span>
              <p className="text-sm font-bold tracking-tight">Architecture Map</p>
            </div>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark custom-scrollbar">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 dark:border-primary/10">
          <span className="material-symbols-outlined text-primary/60">folder_open</span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">root / project-alpha</span>
        </div>

        {/* Directory: src */}
        <div className="group">
          <div className="flex items-center gap-3 px-4 min-h-[52px] py-2 hover:bg-primary/5 cursor-pointer border-l-2 border-primary">
            <span className="material-symbols-outlined text-primary">keyboard_arrow_down</span>
            <span className="material-symbols-outlined text-primary fill-1">folder</span>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold">src</p>
            </div>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/20 text-primary">8 FILES</span>
          </div>

          <div className="ml-6 border-l border-primary/20">
            {/* controllers (Warning state) */}
            <div className="flex items-center gap-3 px-4 min-h-[48px] py-1 hover:bg-primary/5 cursor-pointer">
              <span className="material-symbols-outlined text-slate-400">keyboard_arrow_right</span>
              <span className="material-symbols-outlined text-amber-500">folder</span>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-slate-800 dark:text-slate-200 text-sm">controllers</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="size-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-[10px] text-amber-500 font-bold uppercase">Skill Gap</span>
              </div>
            </div>

            {/* models (High Priority Issue) */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 px-4 min-h-[48px] py-1 hover:bg-primary/5 cursor-pointer bg-red-500/5">
                <span className="material-symbols-outlined text-red-500">keyboard_arrow_down</span>
                <span className="material-symbols-outlined text-red-500">folder</span>
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-slate-800 dark:text-slate-200 text-sm font-medium">models</p>
                </div>
                <span className="bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-lg shadow-red-500/20">HIGH PRIORITY</span>
              </div>
              <div className="ml-8 border-l border-red-500/20">
                <div className="flex items-center gap-3 px-4 min-h-[44px] py-1 hover:bg-red-500/10 cursor-pointer">
                  <span className="material-symbols-outlined text-blue-400 text-base">description</span>
                  <div className="flex flex-1 flex-col justify-center">
                    <p className="text-slate-800 dark:text-slate-200 text-xs">UserModel.ts</p>
                  </div>
                  <span className="material-symbols-outlined text-red-500 text-sm">error</span>
                </div>
              </div>
            </div>

            {/* Isolated File */}
            <div className="flex items-center gap-3 px-4 min-h-[48px] py-1 hover:bg-primary/5 cursor-pointer">
              <span className="w-6"></span>
              <span className="material-symbols-outlined text-blue-400">description</span>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-slate-800 dark:text-slate-200 text-sm">App.tsx</p>
              </div>
              <div className="flex -space-x-1">
                <div className="size-4 rounded-full bg-primary/40 border border-background-dark"></div>
                <div className="size-4 rounded-full bg-amber-500/40 border border-background-dark"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Root Files */}
        <div className="flex items-center gap-3 px-4 min-h-[48px] py-1 hover:bg-primary/5 cursor-pointer opacity-70">
          <span className="w-6"></span>
          <span className="material-symbols-outlined text-slate-400">settings</span>
          <div className="flex flex-1 flex-col justify-center">
            <p className="text-slate-800 dark:text-slate-200 text-sm">package.json</p>
          </div>
        </div>
      </main>

      {/* Status Bar */}
      <div className="bg-slate-200 dark:bg-primary/5 border-t border-primary/20 px-4 py-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-primary/60">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-red-500"></span> 2 critical</span>
          <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-amber-500"></span> 5 gaps</span>
        </div>
        <div className="flex gap-4">
          <span>master</span>
          <span className="text-primary">UTF-8</span>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};
