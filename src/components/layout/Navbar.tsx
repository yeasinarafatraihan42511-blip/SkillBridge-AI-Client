"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

import Logo from "@/components/shared/Logo";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { publicNavLinks } from "@/constants/navLinks";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

 return (
  <>
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-50 border-b border-slate-200/30 bg-white/70 backdrop-blur-xl dark:border-slate-800 dark:bg-[#09090b]/70"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-2 lg:flex">
          {publicNavLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "text-slate-700 hover:bg-cyan-50 hover:text-cyan-600 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-cyan-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/login"
            className="hidden rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/40 lg:block"
          >
            Login
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.header>

    <MobileMenu open={open} setOpen={setOpen} />
  </>
 )
}
