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
import { useEffect } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { site } from "../config/site";


const GET_IN_TOUCH_PADDING = 25;

export default function Contact() {

    useEffect(() => {       /*To change the name on the tab */
      document.title = "Manuel G. Moran | Contact";
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
          
              <Box sx={{px: GET_IN_TOUCH_PADDING, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <EmailIcon />
                  <Typography variant="h6" sx={{fontSize: '18px'}}  >
                    EMAIL :
                  </Typography>
                </Stack>
                <Typography variant="h6" sx={{fontSize: '18px'}}  >
                  {site.person.email}
                </Typography>
              </Box>

              <Box sx={{px: GET_IN_TOUCH_PADDING, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <LinkedInIcon />
                  <Typography variant="h6" sx={{fontSize: '18px'}}  >
                    LINKEDIN :
                  </Typography>
                </Stack>
                <Typography  variant="h6" sx={{fontSize: '18px', color: 'blue', textDecoration: 'underline'}}  >
                  <a  href={site.links.linkedinURL}  target="_blank">{site.links.linkedin}</a>
                </Typography>
              </Box>

              <Box sx={{px: GET_IN_TOUCH_PADDING, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <GitHubIcon />
                  <Typography variant="h6" sx={{fontSize: '18px'}}  >
                    GITHUB :
                  </Typography>
                </Stack>
                <Typography  variant="h6" sx={{fontSize: '18px', color: 'blue', textDecoration: 'underline'}}  >
                  <a  href={site.links.githubURL} target="_blank">{site.links.github}</a>
                </Typography>
              </Box>
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
