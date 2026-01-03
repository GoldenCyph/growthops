export default function MarketingPage() {
  const container = {
    maxWidth: 1100,
    margin: "0 auto",
  };

  return (
    <>
      {/* HERO */}
      <section style={{ padding: "120px 40px", textAlign: "center" }}>
        <div style={container}>
          <h1 style={{ fontSize: 48, lineHeight: 1.1 }}>
            Measure Growth. Not Guesswork.
          </h1>

          <p
            style={{
              marginTop: 20,
              fontSize: 18,
              color: "#6b7280",
            }}
          >
            Track user actions, visualize conversions, and give teams confidence
            in their decisions.
          </p>

          <a
            href="/login"
            style={{
              display: "inline-block",
              marginTop: 32,
              padding: "10px 20px",
              background: "#111827",
              color: "#ffffff",
              borderRadius: 6,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Access Dashboard
          </a>
        </div>
      </section>

      {/* WHY GROWTHOPS */}
      <section style={{ padding: "80px 40px", background: "#f9fafb" }}>
        <div style={container}>
          <h2 style={{ fontSize: 32 }}>Why GrowthOps</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
              marginTop: 32,
            }}
          >
            <div>
              <strong>Reliable Tracking</strong>
              <p style={{ color: "#6b7280", marginTop: 6 }}>
                Consistent event instrumentation across the product.
              </p>
            </div>

            <div>
              <strong>Admin Dashboard</strong>
              <p style={{ color: "#6b7280", marginTop: 6 }}>
                Secure, internal analytics for growth teams.
              </p>
            </div>

            <div>
              <strong>Firebase-backed</strong>
              <p style={{ color: "#6b7280", marginTop: 6 }}>
                Scalable infrastructure with minimal overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "80px 40px" }}>
        <div style={container}>
          <h2 style={{ fontSize: 32 }}>How It Works</h2>
          <p style={{ marginTop: 12, color: "#4b5563", fontSize: 16 }}>
            User interactions are instrumented once, stored securely, and
            surfaced in internal dashboards for real-time insight.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "80px 40px",
          background: "#111827",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <div style={container}>
          <h2 style={{ fontSize: 32 }}>
            Access Internal Analytics
          </h2>

          <p style={{ marginTop: 12, color: "#d1d5db" }}>
            Admin-only dashboard for monitoring conversion activity.
          </p>

          <a
            href="/login"
            style={{
              display: "inline-block",
              marginTop: 24,
              padding: "10px 18px",
              background: "#ffffff",
              color: "#111827",
              borderRadius: 6,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Admin Login
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "40px",
          borderTop: "1px solid #e5e7eb",
          fontSize: 14,
          color: "#6b7280",
        }}
      >
        <div style={container}>
          © {new Date().getFullYear()} GrowthOps. Internal tooling demo.
        </div>
      </footer>
    </>
  );
}
