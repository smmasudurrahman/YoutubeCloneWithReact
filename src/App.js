import React from "react";
// Import necessary libraries and components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { Navbar, Feed, VideoDetail, ChannelDetail } from "./components";
import { DarkModeProvider } from "./ContextApi/DarkModeContext";

// Define the functional component 'App'
const App = () => {
  return (
    // Use BrowserRouter for managing routing
    <BrowserRouter>
      <DarkModeProvider>
        <Box sx={{ backgroundColor: "#212121" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/:categoryName" element={<Feed />} />
            <Route path="/search/:searchTerm" element={<Feed />} />
          </Routes>
        </Box>
      </DarkModeProvider>
    </BrowserRouter>
  );
};

// Export App as the default export of this module
export default App;
