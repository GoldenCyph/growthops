"use client";

import { useState } from "react";
import { login } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin() {
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      router.push("/events");
    } catch (err: any) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f9fafb",
      }}
    >
      <div
        style={{
          width: 360,
          padding: 24,
          borderRadius: 8,
          background: "#ffffff",
          border: "1px solid #e5e7eb",
        }}
      >
        <h1 style={{ marginBottom: 6 }}>Admin Login</h1>
        <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 20 }}>
          Sign in to access internal analytics
        </p>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 8,
            marginBottom: 10,
            borderRadius: 6,
            border: "1px solid #e5e7eb",
          }}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 8,
            marginBottom: 12,
            borderRadius: 6,
            border: "1px solid #e5e7eb",
          }}
        />

        {error && (
          <p style={{ color: "red", fontSize: 13, marginBottom: 10 }}>
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: 6,
            border: "none",
            background: "#111827",
            color: "#ffffff",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          {loading ? "Signing in…" : "Login"}
        </button>
      </div>
    </main>
  );
}
