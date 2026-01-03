"use client";

import { useState } from "react";
import { login } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin() {
    await login(email, password);
    router.push("/events");
  }

  return (
    <main style={{ padding: 40, maxWidth: 400 }}>
      <h1>Admin Login</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: 20 }}
      />

      <button onClick={handleLogin}>Login</button>
    </main>
  );
}
