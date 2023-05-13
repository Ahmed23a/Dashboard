import React from "react";
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
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CheckIcon from '@mui/icons-material/Check';
export default function UpdateQuestion(props) {
  let[ques,setQues]=useState("")
  let[value1,setValue1]=useState("")
  let[value2,setValue2]=useState("")
  let[value3,setValue3]=useState("")

  useEffect(()=>{
    console.log(value1)
    console.log(value2)
    console.log(value3)
    console.log(ques)
    let values = {"ques":ques,"value1":value1,"value2":value2,"value3":value3}
    localStorage.setItem("values",JSON.stringify(values))
    let returnValue =JSON.parse(localStorage.getItem("values")) 
    console.log(returnValue)

  },[ques,value1,value2,value3])

  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: "auto",
    color: theme.palette.text.primary,
  }));

  return (
    <Grid item xs>
      <Typography component={"span"} sx={{ float: "right" }}>
      <TextField fullWidth
          label="اكتب سؤالك هنا"
          id="outlined-end-adornment"
          sx={{ m: 1}}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          value={ques} onChange={(event)=>{setQues(event.target.value)}}
        />


        <div id="block-3" dir="rtl">
          <TextField
            dir="ltr"
            id="standard-basic"
            label="الاختيار الأول"
            variant="standard"
            value={value1} onChange={(event)=>{setValue1(event.target.value)}}
          />
          <span id="result-3"></span>
        </div>
        <div id="block-3" dir="rtl">
          <TextField sx={{float:'right'}}
            dir="ltr"
            id="standard-basic"
            label="الاختيار الثاني"
            variant="standard"
            value={value2} onChange={(event)=>{setValue2(event.target.value)}}
          />
          <span id="result-3"></span>
        </div>
        <div id="block-3" dir="rtl">
          <TextField
            dir="ltr"
            id="standard-basic"
            label="الاختيار الثالث"
            variant="standard"
            value={value3} onChange={(event)=>{setValue3(event.target.value)}}
          />
          <span id="result-3"></span>
        </div>
      </Typography>
    </Grid>
  );
}
