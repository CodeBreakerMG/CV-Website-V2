// src/pages/Resume.jsx
import { Grid, Box, Typography, Card, CardContent, Stack, Button, Divider, Chip, Drawer } from "@mui/material";
import { useEffect } from "react";
import { TOPBAR_HEIGHT } from "../components/Layout";

export default function Resume() {
    useEffect(() => {       /*To change the name on the tab */
    document.title = "Manuel G. Moran | Resume";
  }, []);
  return (
        <Drawer
          variant="permanent"
          sx={{
           
            width: "100vw",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: "100vw",
              boxSizing: "border-box",
              background: `
                linear-gradient(
                  to bottom,
                  transparent 0%,
                  rgba(0, 0, 0, 0.12) 15%,
                  rgba(0, 0, 0, 0.12) 85%,
                  transparent 100%
                )
                right / 1px 100% no-repeat,
                white
              `,
            },
          }}
        >
   
      <iframe
         title="Manuel G. Moran Resume"
         src="/manuel_moran_resume.pdf"
         style={{ width: "100%", height: "200%", border: "none" ,    paddingTop: `calc(${TOPBAR_HEIGHT}px - 8px)`}}
      />
    </Drawer>
  );
}

//`calc(100vh - ${TOPBAR_HEIGHT}px)`,