// src/pages/Resume.jsx
import { Box, Typography, Card, CardContent, Stack, Button, Divider, Chip } from "@mui/material";
import { useEffect } from "react";

export default function Resume() {
    useEffect(() => {       /*To change the name on the tab */
    document.title = "Manuel G. Moran | Resume";
  }, []);
  return (
    <Box>
      <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }} spacing={2} sx={{ mb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>
          Resume
        </Typography>

        {/* Replace href with your hosted resume URL OR put the PDF in /public and use "/MORAN_CV_16_INDUSTRY.pdf" */}
        <Button variant="contained" href="/MORAN_CV_16_INDUSTRY.pdf" target="_blank" rel="noreferrer">
          Download PDF
        </Button>
      </Stack>

      <Card sx={{ borderRadius: 3, mb: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
            Professional Experience
          </Typography>

          <Typography sx={{ fontWeight: 700 }}>
            AI Researcher — Texas A&M University (Read Center for Distribution Research)
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.75, mb: 1 }}>
            June 2025 – Present
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 2 }}>
            <li><Typography variant="body2">Support the AI4ID Consortium with 4 distributors (including HooverCS and SRS Distribution).</Typography></li>
            <li><Typography variant="body2">Engage executives to identify technology gaps, high-impact use cases, and adoption barriers.</Typography></li>
            <li><Typography variant="body2">Research ERP systems, AI tools, and analytics approaches for distribution operations.</Typography></li>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography sx={{ fontWeight: 700 }}>
            Data Engineer — Credit Bank of Peru (Credicorp Group)
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.75, mb: 1 }}>
            Jan 2023 – Aug 2024
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <li><Typography variant="body2">Built Python ETL pipelines, reducing financial statement processing time by 50%.</Typography></li>
            <li><Typography variant="body2">Migrated workflows from Cloudera/Oracle to Azure Databricks, cutting query time by ~80%.</Typography></li>
            <li><Typography variant="body2">Delivered Power BI dashboards tracking ~$400M annual revenue across key metrics.</Typography></li>
            <li><Typography variant="body2">Automated Excel-based processes with Python, improving efficiency by ~80%.</Typography></li>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3, mb: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
            Education
          </Typography>
          <Typography sx={{ fontWeight: 700 }}>Texas A&M University — M.S. Computer Science</Typography>
          <Typography variant="body2" sx={{ opacity: 0.75, mb: 1 }}>Expected May 2026</Typography>

          <Typography sx={{ fontWeight: 700, mt: 1 }}>Pontifical Catholic University of Peru — B.S. Informatics Engineering</Typography>
          <Typography variant="body2" sx={{ opacity: 0.75 }}>Dec 2022</Typography>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
            Skills
          </Typography>

          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {["Python", "SQL", "Azure Databricks", "Power BI", "FastAPI", "React", "Scikit-Learn", "Cloudera/Impala", "Oracle SQL"].map((s) => (
              <Chip key={s} label={s} />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
