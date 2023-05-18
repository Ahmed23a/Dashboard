import React, { useContext } from "react";
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
// import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CheckIcon from "@mui/icons-material/Check";
import { storeValues } from "../../Store";
import { useNavigate } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";

export default function UpdateQuestion(props) {
  // States
  let [ques, setQues] = useState("");
  let [value1, setValue1] = useState("");
  let [value2, setValue2] = useState("");
  let [value3, setValue3] = useState("");
  let [choiceD, setChoiceD] = useState("");
  let [rightChoice, setRightChoice] = useState("");
  let [year, setYear] = useState("");
  let [subject, setSubject] = useState("");
  let [session, setSession] = useState("");

  let { idRow, setIsPressed, isPressed, allQuestions, setAllQuestions } =
    useContext(storeValues);

  const navigate = useNavigate();

  //Functions
  function updateQuestion({ques,a,b,c,d,rightChoice,year,subject,session}) {
    allQuestions = allQuestions.map((question) => {
      if (question.id == idRow) {
        question.question = ques;
        question.A = a;
        question.B = b;
        question.C = c;
        question.D = d;
        question.answer = rightChoice;
        question.year = year;
        question.subject = subject;
        question.session = session;
      }
      setAllQuestions(allQuestions);
    });
  }

  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: "auto",
    color: theme.palette.text.primary,
  }));

  return (
    <Grid item xs>
      <Typography component={"span"}>
        <TextField
          fullWidth
          label="اكتب سؤالك هنا"
          id="outlined-end-adornment"
          sx={{ m: 1 }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          value={ques}
          onChange={(event) => {
            setQues(event.target.value);
          }}
        />
        <div className="row">
          <div className="col">
            <div id="block-3">
              <TextField
                id="standard-basic"
                label="الاختيار الأول"
                variant="standard"
                value={value1}
                onChange={(event) => {
                  setValue1(event.target.value);
                }}
              />
              <span id="result-3"></span>
            </div>
          </div>
          <div className="col">
            <div id="block-3">
              <TextField
                id="standard-basic"
                label="الاختيار الثاني"
                variant="standard"
                value={value2}
                onChange={(event) => {
                  setValue2(event.target.value);
                }}
              />
              <span id="result-3"></span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div id="block-3">
              <TextField
                id="standard-basic"
                label="الاختيار الثالث"
                variant="standard"
                value={value3}
                onChange={(event) => {
                  setValue3(event.target.value);
                }}
              />
              <span id="result-3"></span>
            </div>
          </div>
          <div className="col">
            <div id="block-3">
              <TextField
                id="standard-basic"
                label="الاختيار الرابع"
                variant="standard"
                value={choiceD}
                onChange={(event) => {
                  setChoiceD(event.target.value);
                }}
              />
              <span id="result-3"></span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div id="block-3">
              <TextField
                id="standard-basic"
                label="الاجابة الصحيحة"
                variant="standard"
                value={rightChoice}
                onChange={(event) => {
                  setRightChoice(event.target.value);
                }}
              />
              <span id="result-3"></span>
            </div>
          </div>
          <div className="col">
            <div id="block-3">
              <TextField
                id="standard-basic"
                label="الصف الدراسى"
                variant="standard"
                value={year}
                onChange={(event) => {
                  setYear(event.target.value);
                }}
              />
              <span id="result-3"></span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div id="block-3">
              <TextField
                id="standard-basic"
                label="المادة الدراسية"
                variant="standard"
                value={subject}
                onChange={(event) => {
                  setSubject(event.target.value);
                }}
              />
              <span id="result-3"></span>
            </div>
          </div>
          <div className="col">
            <div id="block-3">
              <TextField
                id="standard-basic"
                label="الدرس"
                variant="standard"
                value={session}
                onChange={(event) => {
                  setSession(event.target.value);
                }}
              />
              <span id="result-3"></span>
            </div>
          </div>
        </div>
      </Typography>
      <Box >
        
        <Button className="m-3"
          onClick={() => {
            setIsPressed(!isPressed);
            navigate("/QuestionsBank");
          }}
          variant="contained"
          endIcon={<ClearIcon />}
        >
          إلغاء
        </Button>
        <Button className="m-3"
          onClick={() => {
            setIsPressed(!isPressed);
            navigate("/QuestionsBank");
            
            updateQuestion({ques,value1,value2,value3,choiceD,rightChoice,year,subject,session});
          }}
          variant="contained"
          endIcon={<CheckIcon />}
        >
          تأكيد
        </Button>
      </Box>
    </Grid>
  );
}
