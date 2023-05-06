import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";

export default function Bar() {
  return (
    <Box className="containr text-center" m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header
        title="شريط الرسم البياني"
        subtitle=" مرحبا بك فى شريط الرسم البياني "
      ></Header>
    </Box>
  </Box>
  );
}
