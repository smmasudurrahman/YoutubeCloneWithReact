import React from "react";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { categories } from "../utils/constants";

import { useDarkModeContext } from "../ContextApi/DarkModeContext";

const Sidebar = ({ selectedCategory }) => {
  const navigate = useNavigate();
  const { darkMode } = useDarkModeContext();
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => {
            navigate(`/${category.name}`);
          }}
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: darkMode ? "#1a1a1a" : "#fff",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
