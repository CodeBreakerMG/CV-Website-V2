// src/pages/Projects.jsx
import { Box, Typography, Card, CardContent, Chip, Stack, Button } from "@mui/material";

const projects = [
  {
    title: "Smart Resume Parser Dashboard",
    subtitle: "FastAPI • SBERT • Gemini Flash 2.0 • React • Docker",
    bullets: [
      "Resume upload → tailored job matches + charts for skill gaps and salary trends.",
      "Compares extracted skills against 10k+ job listings and returns top matches in seconds.",
    ],
    chips: ["FastAPI", "React", "SBERT", "Docker"],
  },
  {
    title: "Nationwide Vehicle Routing Logistics Software",
    subtitle: "Java • Spring • C#/.NET",
    bullets: [
      "Scheduling system for 500+ trucks across multiple cities with maintenance + disruptions.",
      "Route planning with A* and scheduling refinement using Simulated Annealing.",
    ],
    chips: ["Java", "Spring", ".NET", "Optimization"],
  },
];

export default function Projects() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
        Projects
      </Typography>

      <Stack spacing={2}>
        {projects.map((p) => (
          <Card key={p.title} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                {p.title}
              </Typography>
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

              <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                <Button variant="contained">View Details</Button>
                <Button variant="outlined">GitHub</Button>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
