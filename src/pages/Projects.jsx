// src/pages/Projects.jsx
import { Box, Grid, Typography, Card, CardContent, Chip, Stack, Button, IconButton } from "@mui/material";
import { useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  {
    title: "Smart Resume Parser Dashboard",
    subtitle: "A web-based application that allows users to upload resumes, identify relevant skills, and receive tailored job matches along with visual insights into skill gaps and salary trends.",
    bullets: [
      "Resume upload → tailored job matches + charts for skill gaps and salary trends.",
      "Compares extracted skills against 10k+ job listings and returns top matches in seconds.",
    ],
    chips: ["FastAPI", "SBERT", "Gemini Flash 2.0", "React", "Docker", "Python"],
    githubURL: "https://github.com/CodeBreakerMG/ResumeDashboardRecommendation",
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
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {p.title}
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
