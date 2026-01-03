export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: 240,
          padding: 20,
          background: "#f9fafb",
          borderRight: "1px solid #e5e7eb",
        }}
      >
        <h2 style={{ marginBottom: 4 }}>GrowthOps</h2>
        <p style={{ fontSize: 12, color: "#6b7280" }}>
          Internal Dashboard
        </p>

        <nav style={{ marginTop: 30 }}>
          <p style={{ fontSize: 13, fontWeight: 600 }}>Analytics</p>
          <p style={{ fontSize: 14, marginTop: 10 }}>Events</p>
        </nav>
      </aside>

      <main
        style={{
          flex: 1,
          padding: 40,
          background: "#ffffff",
        }}
      >
        {children}
      </main>
    </div>
  );
}
