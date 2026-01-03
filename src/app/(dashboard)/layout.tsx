"use client";

import { logout } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.push("/login");
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: 240,
          padding: 20,
          background: "#f9fafb",
          borderRight: "1px solid #e5e7eb",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2 style={{ marginBottom: 4 }}>GrowthOps</h2>
          <p style={{ fontSize: 12, color: "#6b7280" }}>
            Internal Dashboard
          </p>

          <nav style={{ marginTop: 30 }}>
            <p style={{ fontSize: 13, fontWeight: 600 }}>Analytics</p>
            <p style={{ fontSize: 14, marginTop: 10 }}>Events</p>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          style={{
            marginTop: 20,
            padding: "8px 12px",
            fontSize: 14,
            borderRadius: 6,
            border: "1px solid #e5e7eb",
            background: "#ffffff",
            cursor: "pointer",
          }}
        >
          Log out
        </button>
      </aside>

      <main style={{ flex: 1, padding: 40 }}>{children}</main>
    </div>
  );
}
