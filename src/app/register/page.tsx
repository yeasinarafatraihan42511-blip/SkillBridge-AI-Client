"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import AuthInput from "@/components/ui/AuthInput";
import { registerUser } from "@/services/auth";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await registerUser(form);

      console.log(res);

      

      setForm({
        name: "",
        email: "",
        password: "",
      });

      localStorage.setItem("user", JSON.stringify(res.data));

      toast.success("🎉 Registration Successful");

      setTimeout(() => {
        router.push("/login");
      }, 1200);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-[#0B1120]">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <h1 className="mb-2 text-center text-3xl font-bold">
          Create Account
        </h1>

        <p className="mb-8 text-center text-slate-500">
          Join SkillBridge AI
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <AuthInput
            label="Full Name"
            type="text"
            placeholder="John Doe"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <AuthInput
            label="Email"
            type="email"
            placeholder="john@gmail.com"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <AuthInput
            label="Password"
            type="password"
            placeholder="********"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </main>
  );
}