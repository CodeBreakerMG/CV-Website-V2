// src/pages/Contact.jsx
import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
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
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
        Contact
      </Typography>
      <Typography sx={{ opacity: 0.8, mb: 3 }}>
        Feel free to reach out for collaboration, research, or full-time
        opportunities.
      </Typography>

      <Stack spacing={3}>
        {/* Direct contact card */}
        <Card sx={{ borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Get in touch
            </Typography>

            <Stack spacing={2}>
              <Button
                startIcon={<EmailIcon />}
                href="mailto:manuelgmoran@gmail.com"
                variant="contained"
              >
                manuelgmoran@gmail.com
              </Button>

              <Button
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/manuelgmoran/"
                target="_blank"
                rel="noreferrer"
                variant="outlined"
              >
                LinkedIn Profile
              </Button>

              <Button
                startIcon={<GitHubIcon />}
                href="https://github.com/manuelgmoran"
                target="_blank"
                rel="noreferrer"
                variant="outlined"
              >
                GitHub
              </Button>
            </Stack>
          </CardContent>
        </Card>

        {/* Message form (frontend only) */}
        <Card sx={{ borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Send a message
            </Typography>

            <Stack spacing={2}>
              <TextField
                label="Name"
                fullWidth
                variant="outlined"
              />

              <TextField
                label="Email"
                fullWidth
                variant="outlined"
              />

              <TextField
                label="Message"
                fullWidth
                multiline
                minRows={4}
                variant="outlined"
              />

              <Divider />

              <Button
                variant="contained"
                size="large"
                disabled
              >
                Send Message (coming soon)
              </Button>

              <Typography variant="caption" sx={{ opacity: 0.6 }}>
                This form is currently frontend-only. Please contact me directly
                via email or LinkedIn.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
