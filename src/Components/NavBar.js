import { AppBar, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../Images/logo.png";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
      }}
    >
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        to="/leagues"
        component={Link}
        sx={{ marginLeft: 2, marginRight: 2 }}
      >
        <img src={logo} className="App-logo" alt="logo" height={40} />
      </IconButton>

      <Button
        sx={{
          color: "white",
          minWidth: "140px",
          fontWeight: "bold",
          ":hover": {
            boxShadow: "0 0 0.5rem 0.01rem white",
          },
        }}
        variant="text"
        size="large"
        to="/leagues"
        component={Link}
      >
        Лиги
      </Button>
      <Button
        sx={{
          color: "white",
          minWidth: "140px",
          fontWeight: "bold",
          ":hover": {
            boxShadow: "0 0 0.5rem 0.01rem white",
          },
        }}
        variant="outlined"
        size="large"
        to="/teams"
        component={Link}
      >
        Команды
      </Button>
    </AppBar>
  );
}

export default Navbar;
