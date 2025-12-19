import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Drawer, Avatar, Stack, Button, Grid, Chip} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { site } from "../config/site";

const drawerWidth = 320;

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/contact" },
];

export default function TopBar() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <AppBar 
            position="fixed" elevation={0}         
            sx={{
                zIndex: (t) => t.zIndex.drawer + 1,
                background: "linear-gradient(90deg, #03045E, #0077B6)",
        }}>
          <Toolbar sx={{ gap: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: 0.2 }}>
                {site.person.fullName}
            </Typography>
            {/* Left spacer */}
            <Box sx={{ flexGrow: 0.8 }} />
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

            {/* Right spacer */}
            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </AppBar>
    );



};