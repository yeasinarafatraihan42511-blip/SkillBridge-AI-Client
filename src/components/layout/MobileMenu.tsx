"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const publicNavLinks = [
  { label: "Home", href: "/" },
  { label: "Developers", href: "/developers" },
  { label: "About", href: "/about" },
];

export default function MobileMenu({
  open,
  setOpen,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25 }}
            className="fixed right-0 top-0 z-50 h-screen w-72 bg-white p-6 shadow-2xl dark:bg-[#09090B] lg:hidden"
          >
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-xl font-bold">Menu</h2>

              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {publicNavLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 font-medium transition hover:bg-cyan-500 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/login"
                className="mt-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-center font-semibold text-white"
              >
                Login
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}