"use client";

import { useEffect } from "react";
import api from "@/lib/axios";

export default function Home() {
  useEffect(() => {
    const load = async () => {
      const { data } = await api.get("/");

      console.log(data);
    };

    load();
  }, []);

  return (
    <main className="p-10">
      <h1>SkillBridge AI</h1>
    </main>
  );
}