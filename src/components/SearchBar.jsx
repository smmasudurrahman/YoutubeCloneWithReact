// Import necessary libraries and components
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDarkModeContext } from "../ContextApi/DarkModeContext";
// Define a functional component 'SearchBar'
const SearchBar = () => {
  const { darkMode } = useDarkModeContext();
  // Initialize state variable 'searchTerm' with useState hook
  const [searchTerm, setSearchTerm] = useState("");

  // Use useNavigate hook to programmatically navigate through react-router
  const navigate = useNavigate();

  // Function to handle form submission
  const onhandleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // If searchTerm exists, navigate to the search page with searchTerm as parameter and clear the searchTerm
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  // Render a form with a text input field for searching and a submit button
  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 0,
        border: "1px solid #3d3d3d",
        background: darkMode ? "#1a1a1a" : "#222",
        pl: 2,
        boxShadow: "none",
      }}
      elevation={2}
    >
      <input
        style={{
          backgroundColor: darkMode ? "#1a1a1a" : "#222",
          color: darkMode ? "#fff" : "#ff0000",
        }}
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm with the input value on change
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "red" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

// Export the SearchBar component as the default export
export default SearchBar;
