// Import the necessary libraries and hooks.
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material"; // Importing components from the Material UI library
import { useLocation, useParams } from "react-router-dom"; // Hooks to work with React Router

// Import the fetchFromAPI function and the Videos and Sidebar components.
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

import { useDarkModeContext } from "../ContextApi/DarkModeContext";

// Define the Feed functional component
const Feed = () => {
  const { darkMode } = useDarkModeContext();

  // Initialize a state variable "videos" and the setter function "setVideos"
  const [videos, setVideos] = useState(null);

  // Extract the "searchTerm" and "categoryName" from the current route parameters
  const { searchTerm, categoryName } = useParams();

  // Use the useLocation hook to get the current URL
  const location = useLocation();

  // Define a variable "selectedCategory" which gets its value based on whether "searchTerm" or "categoryName" is available.
  let selectedCategory = searchTerm
    ? searchTerm
    : categoryName
    ? categoryName
    : "New";

  // A useEffect hook that runs every time "selectedCategory" changes
  useEffect(() => {
    // Set videos state to null
    setVideos(null);

    // Make a request to the API with the "selectedCategory" and set the "videos" state with the response data
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]); // Dependency array for useEffect

  // The component return statement
  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      {/* A Box for the Sidebar and Copyright */}
      <Box
        p={2}
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
          background: darkMode ? "#dcdedc" : "#1a1a1a",
        }}
      >
        {/* Sidebar component with the selected category */}
        <Sidebar selectedCategory={selectedCategory} />

        {/* Copyright text */}
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: darkMode ? "#1a1a1a" : "#dcdedc" }}
        >
          Copyright © {new Date().getFullYear()} Media App
        </Typography>
      </Box>

      {/* A Box for the videos */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        {/* Video category title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {/* Display "Search for: " if in a search route */}
          {location.pathname.includes("/search/") && "Search For : "}
          <span style={{ color: "#FC1503" }}>{selectedCategory}</span> Videos
        </Typography>

        {/* Video list component */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

// Export the Feed component as default
export default Feed;
