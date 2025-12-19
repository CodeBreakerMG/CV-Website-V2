import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  Avatar,
  Stack,
  Button,
  Divider,
  Chip,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const drawerWidth = 320;

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/contact" },
];

export default function Layout_OLD() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Top bar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: (t) => t.zIndex.drawer + 1,
          background: "linear-gradient(90deg, #03045E, #0077B6)",
        }}
      >
        <Toolbar sx={{ gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: 0.2 }}>
            Manuel Moran
          </Typography>

          <Box sx={{ flex: 1 }} />

          <Stack direction="row" spacing={1}>
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  sx={{
                    color: "white",
                    fontWeight: 800,
                    borderRadius: 3,
                    px: 1.5,
                    backgroundColor: active ? "rgba(255,255,255,0.18)" : "transparent",
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Left sidebar that covers the full left side */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid rgba(0,119,182,0.18)",
            background: "linear-gradient(180deg, rgba(144,224,239,0.45), rgba(202,240,248,0.9))",
          },
        }}
      >
        {/* spacer so content starts below the AppBar */}
        <Toolbar />

        <Box sx={{ p: 2.2 }}>
          <Stack spacing={2}>
            {/* Photo */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Avatar
                src="/profile.jpg"
                alt="Profile"
                sx={{
                  width: 170,
                  height: 170,
                  border: "5px solid #90E0EF",
                  boxShadow: "0 18px 40px rgba(3,4,94,0.18)",
                }}
              />
            </Box>

            {/* Titles */}
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: 900, color: "#03045E" }}>
                Manuel Moran
              </Typography>
              <Typography sx={{ fontWeight: 700, color: "rgba(3,4,94,0.70)" }}>
                Data Analytics • Data Engineering
              </Typography>
              <Typography sx={{ fontWeight: 600, color: "rgba(3,4,94,0.60)", mt: 0.5 }}>
                M.S. Computer Science @ Texas A&amp;M
              </Typography>
            </Box>

            <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
              <Chip label="Python" />
              <Chip label="SQL" />
              <Chip label="React" />
              <Chip label="FastAPI" />
            </Stack>

            <Divider />

            {/* Quick links */}
            <Stack spacing={1}>
              <Button
                variant="contained"
                onClick={() => navigate("/resume")}
                sx={{
                  fontWeight: 900,
                  borderRadius: 3,
                  background: "linear-gradient(90deg, #0077B6, #00B4D8)",
                }}
              >
                View Resume
              </Button>

              <Button
                variant="outlined"
                onClick={() => navigate("/projects")}
                sx={{ fontWeight: 900, borderRadius: 3, borderColor: "rgba(0,119,182,0.35)" }}
              >
                See Projects
              </Button>
            </Stack>

            <Divider />

            {/* Social / contact */}
            <Stack spacing={1}>
              <Button
                startIcon={<EmailIcon />}
                variant="text"
                sx={{ justifyContent: "flex-start", fontWeight: 800, color: "#03045E" }}
                href="mailto:manuel.moran@tamu.edu"
              >
                manuel.moran@tamu.edu
              </Button>

              {/* Replace these with your real links */}
              <Button
                startIcon={<LinkedInIcon />}
                variant="text"
                sx={{ justifyContent: "flex-start", fontWeight: 800, color: "#03045E" }}
                href="#"
              >
                LinkedIn
              </Button>

              <Button
                startIcon={<GitHubIcon />}
                variant="text"
                sx={{ justifyContent: "flex-start", fontWeight: 800, color: "#03045E" }}
                href="#"
              >
                GitHub
              </Button>
            </Stack>

            <Box sx={{ flex: 1 }} />

            {/* Footer small text */}
            <Typography variant="caption" sx={{ color: "rgba(3,4,94,0.55)" }}>
              Built with React + Vite + Material UI
            </Typography>
          </Stack>
        </Box>
      </Drawer>

      {/* Right content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "background.default",
          minHeight: "100vh",
          ml: `${drawerWidth}px`,
        }}
      >
        {/* spacer for AppBar */}
        <Toolbar />

        <Box
          sx={{
            backgroundColor: "background.paper",
            borderRadius: 4,
            p: { xs: 2, md: 3 },
            boxShadow: "0 18px 45px rgba(3,4,94,0.10)",
            border: "1px solid rgba(0,119,182,0.10)",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
