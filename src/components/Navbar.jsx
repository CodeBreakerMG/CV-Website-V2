import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  padding: "10px 12px",
  borderRadius: 10,
  background: isActive ? "rgba(255,255,255,0.18)" : "transparent",
  color: "white",
  fontWeight: 600
});

export default function Navbar() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 10,
      background: "linear-gradient(90deg, var(--c-navy), var(--c-blue))",
      padding: "14px 18px",
      boxShadow: "0 6px 20px rgba(3,4,94,0.18)"
    }}>
      <nav style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", gap: 10, alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ color: "white", fontWeight: 800, letterSpacing: 0.2 }}>
          Manuel Moran
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <NavLink to="/" style={linkStyle}>Home</NavLink>
          <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
          <NavLink to="/resume" style={linkStyle}>Resume</NavLink>
          <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
