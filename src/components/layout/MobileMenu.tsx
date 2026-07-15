"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface MobileMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type CurrentUser = {
  name: string;
  email: string;
  role: string;
};

export default function MobileMenu({
  open,
  setOpen,
}: MobileMenuProps) {
  const router = useRouter();

  const [user, setUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    try {
      const data = localStorage.getItem("user");

      if (
        data &&
        data !== "undefined" &&
        data !== "null"
      ) {
        setUser(JSON.parse(data));
      }
    } catch {
      localStorage.removeItem("user");
    }
  }, []);

  const guestLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Developers",
      href: "/developers",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const authLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Developers",
      href: "/developers",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    setOpen(false);
    router.push("/");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25 }}
            className="fixed right-0 top-0 z-50 h-screen w-72 overflow-y-auto bg-white p-6 shadow-2xl dark:bg-[#09090B] lg:hidden"
          >
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                Menu
              </h2>

              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {(user ? authLinks : guestLinks).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 font-medium transition hover:bg-cyan-500 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {user ? (
              <div className="mt-8">

                <div className="mb-5 rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">

                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-white">
                    {user.name.charAt(0).toUpperCase()}
                  </div>

                  <h3 className="font-bold">
                    {user.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {user.email}
                  </p>

                  <span className="mt-2 inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                    {user.role}
                  </span>

                </div>

                <button
                  onClick={handleLogout}
                  className="w-full rounded-xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600"
                >
                  Logout
                </button>

              </div>
            ) : (
              <div className="mt-8 space-y-3">

                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl border border-cyan-500 py-3 text-center font-semibold text-cyan-600"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-center font-semibold text-white"
                >
                  Register
                </Link>

              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}