import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import Stack from "@mui/material/Stack";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import UpdateQuestion from "../UpdateQuestion/UpdateQuestion";
import PopData from "../PopData/PopData";
export default function Popup() {
  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: "auto",
    color: theme.palette.text.primary,
  }));
  let [shown, setIsshown] = useState(false);
  function handleClick() {
    setIsshown(true);
    console.log(shown);
  }

  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
      <StyledPaper
        sx={{
          my: "10%",
          mx: "auto",
          p: 5,
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          wrap="nowrap"
          spacing={2}
        >
          <Grid item>
            <Stack direction="row" spacing={2}>
              <Button
                onClick={handleClick}
                variant="contained"
                endIcon={shown ? <CheckIcon /> : <UpgradeIcon />}
              >
                {shown ? "تأكيد" : "تحديث"}
              </Button>
            </Stack>
          </Grid>
          {shown ? <UpdateQuestion /> : <PopData />}
        </Grid>
      </StyledPaper>
    </Box>
  );
}
