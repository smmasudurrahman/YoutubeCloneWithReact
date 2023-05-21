import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

import { useDarkModeContext } from "../ContextApi/DarkModeContext";
import { Toggle } from "../lib/TaggerButton";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: darkMode ? "#dcdedc" : "#1a1a1a",
        top: 0,
        justifyContent: "space-between",
        borderBottom: "1px solid #3d3d3d",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
      <Toggle toggled={darkMode} onClick={toggleDarkMode} />
    </Stack>
  );
};

export default Navbar;
