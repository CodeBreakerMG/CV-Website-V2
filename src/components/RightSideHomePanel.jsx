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
            Current Focus
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: "text.primary" }}>
            AI Researcher at the <u><a href="https://readcenter.tamu.edu/">Texas A&M Advanced Distribution Research Center (READ Center)</a></u> deploying industrial AI solutions from concept to production. 
          </Typography>
          <Typography variant="body2" sx={{ pl: 2, mb: 1.5, color: "text.secondary" }}>
            📊 Collaborating with industrial distributors to identify, develop and execute high-impact AI solutions and automation use cases.
          </Typography>
          <Typography variant="body2" sx={{ pl: 2, mb: 1.5, color: "text.secondary" }}>
            ⚡ Conducting technical assessments to quantify ROI for AI-driven operational improvements.
          </Typography>
          <Typography variant="body2" sx={{ pl: 2, mb: 1.5, color: "text.secondary" }}>
            🧠 Driving AI adoption strategies and literacy for consortium partners.
          </Typography>
            <Typography variant="body2" sx={{ pl: 2, mb: 1.5, color: "text.secondary" }}>
            ⚙️ Developing and deploying production-ready AI prototypes, including automated ETL pipelines solutions hosted on Microsoft Azure.
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
            🎓 <strong>Industrial AI:</strong> Leading research and implementation for 4 major distributor companies through the <u><a href="https://readcenter.tamu.edu/ai4id/" target="_blank" rel="noopener">AI4ID Consortium</a></u>, an AI-focused industrial distribution consortium led by Texas A&M
          </Typography>

          <Typography variant="body2" sx={{ mb: 1.5, color: "text.primary" }}>
            🏦 <strong>Financial Data Engineering:</strong> Engineered data infrastructure at <strong>Credit Bank of Peru (BCP)</strong>, a <u><a href="https://credicorp.gcs-web.com/about" target="_blank" rel="noopener">Credicorp Financial Group</a></u> subsidiary, supporting a $400M+ annual revenue stream.
          </Typography>

          <Typography variant="body2" sx={{ mb: 1.5, color: "text.primary" }}>
              📊 <strong>Efficiency & Optimization:</strong> Architected ETL pipelines that reduced data processing latency by 50% at   <u><a href="https://credicorp.gcs-web.com/about" target="_blank" rel="noopener">Credit Bank of Peru (BCP)</a></u> 
          
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: "text.primary" }}>
            🧩 <strong>Cloud Modernization:</strong> Migrated legacy on-premise infrastructure to <strong>Azure Databricks</strong>, resulting in an 80% improvement in query performance.
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
            I am currently finalizing my Master's and available for full-time roles. I am based in Texas but open to opportunities nationwide.          
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
