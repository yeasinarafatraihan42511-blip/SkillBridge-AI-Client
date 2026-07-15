"use client";

import { InputHTMLAttributes } from "react";

type AuthInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function AuthInput({
  label,
  ...props
}: AuthInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />
    </div>
  );
}