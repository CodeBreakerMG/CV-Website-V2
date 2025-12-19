export default function Sidebar() {
  return (
    <aside style={{
      background: "var(--card)",
      borderRadius: 18,
      padding: 18,
      boxShadow: "0 12px 28px rgba(3,4,94,0.10)",
      border: "1px solid rgba(0,119,182,0.12)"
    }}>
      {/* Put your photo in /public and update the src below */}
      <img
        src="../assets/profile.png"
        alt="Profile"
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          objectFit: "cover",
          borderRadius: 16,
          border: "4px solid var(--c-light)"
        }}
      />

      <div style={{ marginTop: 14 }}>
        <div style={{ fontSize: 18, fontWeight: 900, color: "var(--c-navy)" }}>
          Manuel Moran
        </div>
        <div style={{ marginTop: 6, color: "var(--muted)", fontWeight: 600 }}>
          Data Analytics • Data Engineering • Software Development
        </div>

        <div style={{
          marginTop: 12,
          padding: 12,
          borderRadius: 14,
          background: "linear-gradient(180deg, rgba(144,224,239,0.35), rgba(202,240,248,0.5))",
          border: "1px solid rgba(0,180,216,0.20)"
        }}>
          <div style={{ fontWeight: 800, color: "var(--c-navy)" }}>Currently</div>
          <div style={{ marginTop: 6, color: "var(--muted)" }}>
            M.S. Computer Science @ Texas A&amp;M<br />
            Building AI-powered dashboards & apps
          </div>
        </div>
      </div>
    </aside>
  );
}
