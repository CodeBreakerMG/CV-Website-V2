import { Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";

export default function Home() {
  const navigate = useNavigate();

  return(
    <TopBar>
      
    </TopBar>
  );


}
/*
  return (
    <Stack spacing={2}>
      <Typography variant="h4" sx={{ fontWeight: 950 }}>
        Howdy — I’m Manuel.
      </Typography>

      <Typography sx={{ fontSize: 16, lineHeight: 1.7, color: "rgba(3,4,94,0.75)" }}>
        I’m a Master’s student in Computer Science at Texas A&amp;M focused on data analytics and
        data engineering. I build dashboards, automation, and AI-powered tools that help teams
        make decisions faster and with more confidence.
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Button
          variant="contained"
          sx={{ fontWeight: 900, borderRadius: 3, background: "linear-gradient(90deg, #0077B6, #00B4D8)" }}
          onClick={() => navigate("/projects")}
        >
          Explore Projects
        </Button>
        <Button variant="outlined" sx={{ fontWeight: 900, borderRadius: 3 }} onClick={() => navigate("/resume")}>
          View Resume
        </Button>
      </Stack>
    </Stack>
  );
*/