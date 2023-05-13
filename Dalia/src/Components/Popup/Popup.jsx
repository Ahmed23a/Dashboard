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
  let [shownUpdate, setIsshownUpdate] = useState(true);
  let [shownConfirm, setIsshownConfirm] = useState(false);

  let [returnValue,setReturnValue] =useState({})
  console.log(returnValue)



  function handleClick() {
    setIsshownUpdate((prev) => !prev);
    console.log(shownUpdate);
    setIsshownConfirm((prev) => !prev);
    console.log(shownConfirm);
  }
 useEffect(()=>{
  // if(shownConfirm==false)
  // return;
  setReturnValue(JSON.parse(localStorage.getItem("values")))
 },[shownConfirm])
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
              {shownUpdate && (
                <Button
                  onClick={handleClick}
                  variant="contained"
                  endIcon={<UpgradeIcon />}
                >تحديث</Button>
              )}
              {shownConfirm && (
                <Button
                  onClick={handleClick}
                  variant="contained"
                  endIcon={<CheckIcon />}
                >
                  تأكيد
                </Button>
              )}
            </Stack>
          </Grid>
          {shownUpdate ? <PopData ques={returnValue.ques} value1={returnValue.value1} value2={returnValue.value2} value3={returnValue.value3}/> : <UpdateQuestion />}
        </Grid>
      </StyledPaper>
    </Box>
  );
}
