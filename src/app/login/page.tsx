"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import AuthInput from "@/components/ui/AuthInput";
import { loginUser } from "@/services/auth";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await loginUser(form);

      console.log(res);

      // toast.success("🎉 Login Successful");

      localStorage.setItem("user", JSON.stringify(res.data));

      setForm({
        email: "",
        password: "",
      });
      localStorage.setItem("user", JSON.stringify(res.data));

      toast.success("🎉 Login Successful");

      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);

      // setTimeout(() => {
      //   router.push("/dashboard");
      // }, 1000);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-[#0B1120]">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <h1 className="mb-2 text-center text-3xl font-bold">
          Welcome Back
        </h1>

        <p className="mb-8 text-center text-slate-500">
          Login to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}