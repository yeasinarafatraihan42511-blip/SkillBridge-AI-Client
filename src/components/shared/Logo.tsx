import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">

      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 shadow-lg">

        <span className="absolute left-[7px] top-[5px] text-lg font-black text-white">
          S
        </span>

        <span className="absolute left-[17px] top-[14px] text-lg font-black text-cyan-100">
          B
        </span>

        <span className="absolute right-[7px] bottom-[5px] text-lg font-black text-white">
          A
        </span>

      </div>

      <div>

        <h2 className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-xl font-bold text-transparent">
          SkillBridge AI
        </h2>

        <p className="-mt-1 text-xs text-slate-500">
          Connect • Build • Hire
        </p>

      </div>

    </Link>
  );
}