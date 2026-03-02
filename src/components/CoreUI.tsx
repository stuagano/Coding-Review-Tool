import React from 'react';
import { NavLink } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NavItemProps {
  to: string;
  icon: string;
  label: string;
  fill?: boolean;
}

const NavItem = ({ to, icon, label, fill }: NavItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex flex-1 flex-col items-center justify-center gap-1 transition-colors",
        isActive ? "text-primary" : "text-slate-400 dark:text-primary/40 hover:text-primary"
      )
    }
  >
    {({ isActive }) => (
      <>
        <span className={cn("material-symbols-outlined", (isActive || fill) && "fill-1")}>
          {icon}
        </span>
        <p className="text-[10px] font-medium leading-normal tracking-tight uppercase">
          {label}
        </p>
      </>
    )}
  </NavLink>
);

export const BottomNav = () => {
  return (
    <nav className="flex gap-2 border-t border-slate-200 dark:border-primary/20 bg-background-light dark:bg-background-dark px-4 pb-6 pt-2 sticky bottom-0 z-50">
      <NavItem to="/blueprint" icon="account_tree" label="Blueprint" />
      <NavItem to="/explorer" icon="folder_open" label="Explorer" />
      <NavItem to="/terminal" icon="terminal" label="Terminal" />
      <NavItem to="/studio" icon="school" label="Studio" />
      <NavItem to="/analysis" icon="psychology" label="Analysis" />
    </nav>
  );
};

export const Button = ({
  children,
  className,
  variant = 'primary',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' }) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25",
    secondary: "bg-primary/10 text-primary hover:bg-primary/20",
    ghost: "hover:bg-primary/10 text-slate-900 dark:text-slate-100"
  };

  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-bold transition-all active:scale-[0.98]",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const Input = ({ icon, className, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { icon?: string }) => {
  return (
    <div className="relative group w-full">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">
            {icon}
          </span>
        </div>
      )}
      <input
        className={cn(
          "w-full py-4 rounded-xl border border-slate-200 dark:border-primary/20 bg-white dark:bg-primary/5 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400",
          icon ? "pl-11 pr-4" : "px-4",
          className
        )}
        {...props}
      />
    </div>
  );
};
