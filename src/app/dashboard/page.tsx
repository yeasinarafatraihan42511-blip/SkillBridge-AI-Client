"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  _id?: string;
  name: string;
  email: string;
  role: string;
};

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");

      if (!storedUser || storedUser === "undefined") {
        router.replace("/login");
        return;
      }

      const parsedUser: User = JSON.parse(storedUser);

      if (!parsedUser?.email) {
        localStorage.removeItem("user");
        router.replace("/login");
        return;
      }

      setUser(parsedUser);
    } catch (error) {
      console.error("Invalid User:", error);

      localStorage.removeItem("user");

      router.replace("/login");
    } finally {
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.replace("/");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  if (!user) return null;

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl p-8">

        <div className="mb-8 flex items-center justify-between rounded-3xl bg-white p-8 shadow dark:bg-slate-900">

          <div>
            <h1 className="text-4xl font-bold">
              Welcome {user.name} 👋
            </h1>

            <p className="mt-2 text-slate-500">
              {user.email}
            </p>

            <span className="mt-4 inline-block rounded-full bg-cyan-100 px-4 py-2 text-cyan-700">
              {user.role.toUpperCase()}
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white"
          >
            Logout
          </button>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-cyan-500 p-6 text-white">
            <h2>Total Developers</h2>
            <p className="mt-3 text-5xl font-bold">0</p>
          </div>

          <div className="rounded-2xl bg-blue-600 p-6 text-white">
            <h2>Total Projects</h2>
            <p className="mt-3 text-5xl font-bold">0</p>
          </div>

          <div className="rounded-2xl bg-violet-600 p-6 text-white">
            <h2>Total Earnings</h2>
            <p className="mt-3 text-5xl font-bold">$0</p>
          </div>

        </div>

      </div>
    </main>
  );
}