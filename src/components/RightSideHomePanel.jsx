import { Stack, Card, CardContent, Typography, Button, Chip, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


const contactPage = "/contact"
const resumePage = "/resume"

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/contact" },
];

export default function RightSideHomePanel() {
      const navigate = useNavigate();
  return (
    <Stack spacing={2} sx={{pt:2.5, px: 2.5, display: "flex", width: "55vw", flexDirection: "column" }} >

      {/* Card 1: Now / Focus */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Right Now
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: "text.primary" }}>
            AI Researcher at the Read Center (Texas A&M), working with distributor companies to bring AI from concept to implementation. My tasks include:
          </Typography>
          <Typography variant="body2" sx={{ pl: 2, mb: 1.5, color: "text.secondary" }}>
            📊 Partner with distribution companies to identify high-impact AI use cases
          </Typography>
          <Typography variant="body2" sx={{ pl: 2, mb: 1.5, color: "text.secondary" }}>
            ⚡ Assess where AI can add value
          </Typography>
          <Typography variant="body2" sx={{ pl: 2, mb: 1.5, color: "text.secondary" }}>
            🧠 Support AI adoption strategy and literacy
          </Typography>
            <Typography variant="body2" sx={{ pl: 2, mb: 1.5, color: "text.secondary" }}>
            ⚙️ Develop working AI prototypes (process automation, dashboards, ETLs)
          </Typography>


          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            <Chip label="Azure & Databricks" />
            <Chip label="ETL" />
            <Chip label="Python" />
            <Chip label="FastAPI" />
            <Chip label="Pandas" />
            <Chip label="Scikit-Learn" />
          </Box>
        </CardContent>
      </Card>
      {/* Card 2: Experience at a Glance */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Experience at a Glance
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: "text.primary" }}>
            🎓 AI Researcher supporting 4 distributor companies through <a href="https://www.readcenter.com/ai4id/">AI4ID</a>, an AI-focused industrial distribution consortium led by Texas A&M
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: "text.primary" }}>
            🏦 Data Engineer in banking supporting $400M+ in annual revenue  <a href="https://credicorp.gcs-web.com/about">(Credicorp Group)</a>
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: "text.primary" }}>
            📊 Built ETL pipelines cutting processing time by 50%  <a href="https://credicorp.gcs-web.com/about">(Credicorp Group)</a>
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: "text.primary" }}>
            🧩 Migrated enterprise workflows to Azure Databricks (−80% query time)
          </Typography>


        </CardContent>
      </Card>

      {/* Card 3: Let's Connect */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Let's Connect
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: "text.primary" }}>
            I am currently finalizing my Master's and available for full-time roles. I am based in Texas but am open to opportunities nationwide.          
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: "text.secondary" }}>
            📍 Willing to Relocate
          </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "Center"  }}>
                <Button  
                    component="a"
                    onClick={() => navigate(resumePage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained" 
                    sx={{ ml: 15, mr: 0.5, flex: 1, minWidth: 140 }} >
                View Resume</Button>
                <Button variant="outlined" onClick={() => navigate(contactPage)}  sx={{ ml: 0.5, mr: 15, flex: 1, minWidth: 140}} >Contact Information</Button>
            </Box>


        </CardContent>
      </Card>

    </Stack>
  );
}
