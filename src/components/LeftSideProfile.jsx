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
  IconButton,
  Chip,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { site } from "../config/site";

export default function LeftSideProfile() {
  const navigate = useNavigate();
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "45vw",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "45vw",
          boxSizing: "border-box",
          background: `
            linear-gradient(
              to bottom,
              transparent 0%,
              rgba(0, 0, 0, 0.12) 15%,
              rgba(0, 0, 0, 0.12) 85%,
              transparent 100%
            )
            right / 1px 100% no-repeat,
            white
          `,
        },
      }}
    >
        {/* spacer so content starts below the AppBar */}
        <Toolbar />
        <Box sx={{p:5}}>
            {/* Photo */}
            <Box sx={{display:"flex", justifyContent: "Center"}}>
                <Avatar
                    src= "/profile.png"
                    alt={site.person.fullName}
                    sx={{
                        width: 300,
                        height: 300,
                        border: "1px solid rgba(3,4,94,0.18)",
                        boxShadow: "0 18px 40px rgba(3,4,94,0.18)",
                    }}
                />
            </Box>
            <Box sx={{ textAlign: "center", mt: 5}}>
              <Typography variant="h3" sx={{ fontWeight: 500, color: "#03045E" }}>
                {site.person.fullName}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "rgba(3,4,94,0.70)" }}>
                Data Analytics • Data Engineering
              </Typography>
              <Typography sx={{ fontWeight: 600, color: "rgba(3,4,94,0.60)", mt: 0.5 }}>
                M.S. Computer Science @ Texas A&amp;M
              </Typography>
            </Box>
              <Divider sx={{ mt: 2}} />
            <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" sx={{ mt: 2}}>
            <IconButton  component="a" href={site.links.linkedinURL} target="_blank" color="primary" size="large">

              <LinkedInIcon />
            </IconButton>

              <IconButton  component="a" href={site.links.githubURL} target="_blank" color="primary" size="large">
                <GitHubIcon />
              </IconButton>
              <IconButton onClick={() => navigate("/contact")} color="primary" size="large">
                <EmailIcon />
              </IconButton>
            </Stack>
            <Divider sx={{ mt: 2}} />
            <Box sx={{ textAlign: "center", mt: 5}}>
              <Typography variant="h2" sx={{ fontWeight: 500, color: "#03045E" }}>
                Howdy!
              </Typography>
              <br/>
              <Typography variant="h5" sx={{ fontWeight: 300, color: "rgba(3,4,94,0.70)" }}>
                I am Manny, a Computer Scientist currently finalizing my Master's in Computer Science at Texas A&M. I am interested in AI, Deep learning and Data Analaytics. 
              </Typography>

            </Box>
        </Box>
    </Drawer>
  );
}
