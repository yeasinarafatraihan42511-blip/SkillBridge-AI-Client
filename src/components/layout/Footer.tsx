// import Link from "next/link";
// import {
//   Github,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Globe,
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="mt-20 border-t border-slate-200 bg-gradient-to-b from-white to-slate-100 dark:border-slate-800 dark:from-[#09090B] dark:to-[#111827]">
//       <div className="mx-auto max-w-7xl px-6 py-14">

//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

//           {/* Logo */}
//           <div>
//             <div className="flex items-center gap-3">

//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 text-lg font-black text-white shadow-lg">
//                 SBA
//               </div>

//               <div>
//                 <h2 className="text-xl font-bold">
//                   SkillBridge AI
//                 </h2>

//                 <p className="text-sm text-slate-500">
//                   Connect • Build • Hire
//                 </p>
//               </div>

//             </div>

//             <p className="mt-5 text-sm leading-7 text-slate-500">
//               SkillBridge AI is a modern hiring platform where
//               developers and companies connect faster with AI-powered
//               recommendations.
//             </p>
//           </div>

//           {/* Quick Links */}

//           <div>

//             <h3 className="mb-5 text-lg font-semibold">
//               Quick Links
//             </h3>

//             <div className="space-y-3">

//               <Link href="/" className="block hover:text-cyan-500">
//                 Home
//               </Link>

//               <Link href="/developers" className="block hover:text-cyan-500">
//                 Developers
//               </Link>

//               <Link href="/about" className="block hover:text-cyan-500">
//                 About
//               </Link>

//               <Link href="/contact" className="block hover:text-cyan-500">
//                 Contact
//               </Link>

//             </div>

//           </div>

//           {/* Resources */}

//           <div>

//             <h3 className="mb-5 text-lg font-semibold">
//               Resources
//             </h3>

//             <div className="space-y-3">

//               <Link href="/blog" className="block hover:text-cyan-500">
//                 Blog
//               </Link>

//               <Link href="/faq" className="block hover:text-cyan-500">
//                 FAQ
//               </Link>

//               <Link href="/privacy" className="block hover:text-cyan-500">
//                 Privacy Policy
//               </Link>

//               <Link href="/terms" className="block hover:text-cyan-500">
//                 Terms & Conditions
//               </Link>

//             </div>

//           </div>

//           {/* Contact */}

//           <div>

//             <h3 className="mb-5 text-lg font-semibold">
//               Contact
//             </h3>

//             <div className="space-y-4 text-sm text-slate-500">

//               <div className="flex items-center gap-3">
//                 <MapPin size={18} />
//                 Chattogram, Bangladesh
//               </div>

//               <div className="flex items-center gap-3">
//                 <Phone size={18} />
//                 +8801XXXXXXXXX
//               </div>

//               <div className="flex items-center gap-3">
//                 <Mail size={18} />
//                 support@skillbridgeai.com
//               </div>

//             </div>

//             <div className="mt-6 flex gap-4">

//               <a
//                 href="#"
//                 className="rounded-full bg-slate-200 p-2 transition hover:bg-cyan-500 hover:text-white dark:bg-slate-800"
//               >
//                 <Github size={18} />
//               </a>

//               <a
//                 href="#"
//                 className="rounded-full bg-slate-200 p-2 transition hover:bg-cyan-500 hover:text-white dark:bg-slate-800"
//               >
//                 <Linkedin size={18} />
//               </a>

//               <a
//                 href="#"
//                 className="rounded-full bg-slate-200 p-2 transition hover:bg-cyan-500 hover:text-white dark:bg-slate-800"
//               >
//                <Globe size={18} />
//               </a>

//             </div>

//           </div>

//         </div>

//         <div className="mt-12 border-t border-slate-300 pt-6 text-center text-sm text-slate-500 dark:border-slate-700">
//           © {new Date().getFullYear()} SkillBridge AI. All Rights Reserved.
//         </div>

//       </div>
//     </footer>
//   );
// }
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Developers", href: "/developers" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const resources = [
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="mt-20 border-t border-slate-200 bg-gradient-to-b from-white to-slate-100 dark:border-slate-800 dark:from-[#09090B] dark:to-[#111827]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 text-lg font-black text-white shadow-lg">
                SBA
              </div>

              <div>
                <h2 className="text-xl font-bold">SkillBridge AI</h2>
                <p className="text-sm text-slate-500">
                  Connect • Build • Hire
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              SkillBridge AI helps companies find skilled developers and
              enables developers to discover the right opportunities with a
              modern AI-powered platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:text-cyan-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Resources</h3>

            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:text-cyan-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Contact</h3>

            <div className="space-y-4 text-sm text-slate-500">
              <p>📍 Chattogram, Bangladesh</p>
              <p>📧 support@skillbridgeai.com</p>
              <p>📞 +8801XXXXXXXXX</p>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                className="rounded-lg border px-4 py-2 text-sm transition hover:bg-cyan-600 hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="rounded-lg border px-4 py-2 text-sm transition hover:bg-cyan-600 hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                className="rounded-lg border px-4 py-2 text-sm transition hover:bg-cyan-600 hover:text-white"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-300 pt-6 text-center text-sm text-slate-500 dark:border-slate-700">
          © {new Date().getFullYear()} SkillBridge AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}