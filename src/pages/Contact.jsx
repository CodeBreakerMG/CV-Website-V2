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
import { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { site } from "../config/site";


const GET_IN_TOUCH_PADDING = 25;

export default function Contact() {

    useEffect(() => {       /*To change the name on the tab */
      document.title = "Manuel G. Moran | Contact";
    }, []);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const onChange = (key) => (e) => {
    setForm((p) => ({ ...p, [key]: e.target.value }));
  };

  const handleSubmit = async () => {
    setStatus({ type: "", msg: "" });

    // basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", msg: "Please fill out all fields." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send message.");

      setStatus({ type: "success", msg: "Message sent! I’ll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", msg: err.message || "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };


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
              value={form.name}
              onChange={onChange("name")}
            />

            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              value={form.email}
              onChange={onChange("email")}
            />

            <TextField
              label="Message"
              fullWidth
              multiline
              minRows={4}
              variant="outlined"
              value={form.message}
              onChange={onChange("message")}
            />

              <Divider />

              <Button
                variant="contained"
                size="large"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {status.msg && (
                <Typography
                  variant="caption"
                  sx={{ opacity: 0.9, color: status.type === "error" ? "error.main" : "success.main" }}
                >
                  {status.msg}
                </Typography>
              )}

              <Typography variant="caption" sx={{ opacity: 0.6 }}>
                Or email me directly at {site.person.email}.
              </Typography>
            </Stack>
          </CardContent>
        </Card>



      </Stack>
    </Box>
  );
}
