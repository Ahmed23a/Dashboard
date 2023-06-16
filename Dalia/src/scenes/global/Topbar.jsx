import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutLinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutLinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { tokens, colorModeContext } from "./../../theme";

export default function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleColorMode } = useContext(colorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search Bar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        
        
        <InputBase sx={{ mr: 2, ml: 2, flex: 4 }} placeholder="  البحث"/>
        <IconButton type="button" sx={{ p: 1, }}>
          <SearchIcon />
        </IconButton>
        
      </Box>
      {/*Icons   */}

      <Box display="flex">
        <IconButton onClick={toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutLinedIcon />
          ) : (
            <LightModeOutLinedIcon />
          )}
        </IconButton>

        <IconButton>
          <NotificationsOutLinedIcon />
        </IconButton>

        <IconButton>
          <SettingsOutLinedIcon />
        </IconButton>

        <IconButton>
          <PersonOutLinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
