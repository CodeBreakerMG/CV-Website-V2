// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import TopBar from "./TopBar";

const TOPBAR_HEIGHT = 72; // adjust to your AppBar height

export default function Layout() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Always visible navigation */}
      <TopBar />

      {/* Routed page content */}
      <Box
        component="main"
        sx={{
          pt: `${TOPBAR_HEIGHT}px`,
          minHeight: `calc(100vh - ${TOPBAR_HEIGHT}px)`,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
