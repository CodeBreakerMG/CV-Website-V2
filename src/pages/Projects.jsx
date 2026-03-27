// src/pages/Projects.jsx
import { Box, Grid, Typography, Card, CardContent, Chip, Stack, Button, IconButton, Link } from "@mui/material";
import { useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [

  {
    title: "AI-Powered Fleet Management Automation",
    subtitle: "A web-based application that analyzes fleet datasets to generate actionable insights, automated reports, and decision-support recommendations for asset management in distribution operations.",
    bullets: [
      "Upload fleet datasets → generate automated insights, reports, and recommended actions.",
      "Uses LLMs to analyze operational data and produce structured summaries and decision-support outputs.",
    ],
    chips: ["FastAPI", "React", "LLM", "Azure", "Docker", "Python"],
    githubURL: "https://github.com/CodeBreakerMG/AI4ID-FleetManagementAutomationTracker-v2",
    liveURL: "https://ai4id-prototype-fleetmanagement-gdhne0bcgafpfxau.centralus-01.azurewebsites.net/",
  },
  {
    title: "AI-Powered Inventory Data Duplication Preventer",
    subtitle: "A web-based application that detects and prevents duplicate inventory records by analyzing product attributes and enforcing consistent item creation standards across distribution systems.",
    bullets: [
      "Identifies duplicate SKUs by analyzing item descriptions, codes, and attributes.",
      "Improves data quality and consistency in ERP systems by preventing redundant item creation.",
    ],
    chips: ["FastAPI", "React", "LLM", "Azure", "Docker", "Python"],
    githubURL: "https://github.com/CodeBreakerMG/AI4ID-Inventory-Data-Duplication-Preventer",
    liveURL: "https://ai4id-inventory-data-duplication-det.azurewebsites.net/",
  },
  {
    title: "AI-Powered Document Processing Prototype (DocuDigest)",
    subtitle: "A Flask-based web application that extracts structured data from unstructured documents (PDFs, images, spreadsheets) using AI, enabling automated data ingestion for distribution workflows.",
    bullets: [
      "Processes PDFs, images, and spreadsheets → outputs structured JSON/CSV data.",
      "Combines OCR and LLMs to extract key fields such as supplier, dates, items, and pricing.",
    ],
    chips: ["Flask", "LLM", "OCR", "Azure", "Docker", "Python"],
    githubURL: "https://github.com/CodeBreakerMG/AI4ID-Prototype-V1",
    liveURL: "https://ai4id-prototype-v1-ggf2ahekc5a9cja4.eastus2-01.azurewebsites.net/",
  },
  {
    title: "Smart Resume Parser Dashboard",
    subtitle: "A web-based application that allows users to upload resumes, identify relevant skills, and receive tailored job matches along with visual insights into skill gaps and salary trends.",
    bullets: [
      "Resume upload → tailored job matches + charts for skill gaps and salary trends.",
      "Compares extracted skills against 10k+ job listings and returns top matches in seconds.",
    ],
    chips: ["FastAPI", "SBERT", "Gemini Flash 2.0", "React", "Docker", "Python"],
    githubURL: "https://github.com/CodeBreakerMG/ResumeDashboardRecommendation",
    liveURL: "https://ai4id-prototype-fleetmanagement-gdhne0bcgafpfxau.centralus-01.azurewebsites.net/"
  },
  {
    title: "Nationwide Vehicle Routing Logistics Software",
    subtitle: "A logistics scheduling system designed to optimize vehicle routing and delivery operations for a fleet of over 500 trucks across multiple cities.",
    bullets: [
      "Scheduling system for 500+ trucks across multiple cities with maintenance + disruptions.",
      "Implemented AI-driven route optiization planning with A* and scheduling refinement using Simulated Annealing.",
    ],
    chips: ["Java", "Spring", ".NET", "Optimization"],
    githubURL: "https://github.com/CodeBreakerMG/Depre-1-BackEnd",
    liveURL: "https://ai4id-prototype-fleetmanagement-gdhne0bcgafpfxau.centralus-01.azurewebsites.net/",
  },

];

export default function Projects() {
    useEffect(() => {       /*To change the name on the tab */
    document.title = "Manuel G. Moran | Projects";
  }, []);
  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        px: { xs: 2, md: 3 },
        py: 4,
      }}
    >
      {/* Header */}
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
        Project Portfolio
      </Typography>
      <Typography sx={{ opacity: 0.8, mb: 3 }}>
        This portfolio includes projects I have worked on through coursework, research, and independent practice.
      </Typography> 

      <Grid container spacing={2}>
        {projects.map((p) => (
          <Grid size={6} > 
            <Card key={p.title} sx={{ borderRadius: 3 , height: 360}}>
              <CardContent>
                <Stack direction="row"  justifyContent="space-between" spacing={1}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }} a>
                    <Link href={p.liveURL}  target="_blank" rel="noopener noreferrer">                 
                      {p.title}
                    </Link>
                  </Typography>
                  <IconButton  component="a" href={p.githubURL} target="_blank" color="primary" size="large">
                    <GitHubIcon />
                  </IconButton>
                </Stack>
                <Typography variant="body2" sx={{ opacity: 0.75, mb: 1 }}>
                  {p.subtitle}
                </Typography>

                <Box component="ul" sx={{ mt: 1, mb: 2, pl: 2 }}>
                  {p.bullets.map((b) => (
                    <li key={b}>
                      <Typography variant="body2">{b}</Typography>
                    </li>
                  ))}
                </Box>

                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {p.chips.map((c) => (
                    <Chip key={c} label={c} />
                  ))}
                </Stack>
                  {/* 
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Button variant="contained">View Details</Button>
                  <Button variant="outlined">GitHub</Button>
                </Stack>
                */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
