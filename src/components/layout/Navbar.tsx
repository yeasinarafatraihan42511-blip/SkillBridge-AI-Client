"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, LayoutDashboard, LogOut, User } from "lucide-react";
import { motion } from "framer-motion";

import Logo from "@/components/shared/Logo";
import ThemeToggle from "@/components/theme/ThemeToggle";
import MobileMenu from "./MobileMenu";

type CurrentUser = {
  _id?: string;
  name: string;
  email: string;
  role: "user" | "admin";
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [user, setUser] = useState<CurrentUser | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const guestLinks = [
    { label: "Home", href: "/" },
    { label: "Developers", href: "/developers" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const authLinks = [
    { label: "Home", href: "/" },
    { label: "Developers", href: "/developers" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Profile", href: "/profile" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");

      if (
        storedUser &&
        storedUser !== "undefined" &&
        storedUser !== "null"
      ) {
        setUser(JSON.parse(storedUser));
      }
    } catch {
      localStorage.removeItem("user");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);
  const handleLogout = () => {
  localStorage.removeItem("user");
  setUser(null);
  setDropdown(false);

  router.replace("/");
  router.refresh();
};


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
            {(user ? authLinks : guestLinks).map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${active
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

            {/* Desktop Auth */}
            <div className="hidden items-center gap-3 lg:flex">
              {user ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdown(!dropdown)}
                    className="flex items-center gap-3 rounded-full border border-slate-200 px-3 py-2 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-white">
                      {user.name.charAt(0).toUpperCase()}
                    </div>

                    <span className="font-semibold">
                      {user.name}
                    </span>
                  </button>

                  {dropdown && (
                    <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900">

                      <Link
                        href="/dashboard"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <LayoutDashboard size={18} />
                        Dashboard
                      </Link>

                      <Link
                        href="/profile"
                        className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <User size={18} />
                        Profile
                      </Link>

                     <button
  onClick={handleLogout}
  className="mt-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
>
  <LogOut size={18} />
  Logout
</button>

                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="rounded-full border border-cyan-500 px-6 py-2.5 text-sm font-semibold text-cyan-600 hover:bg-cyan-50"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    className="rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-6 py-2.5 text-sm font-semibold text-white"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
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
