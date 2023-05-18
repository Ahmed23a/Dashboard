import { useContext } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useState } from "react";
import TextField from "@mui/material/TextField";

import InputAdornment from "@mui/material/InputAdornment";

import CheckIcon from "@mui/icons-material/Check";
import { storeValues } from "../../Store";
import { useNavigate } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { QueryBuilder } from "@mui/icons-material";

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
  function createQuestion({
    question,
    A,
    B,
    C,
    D,
    answer,
    year,
    subject,
    session,
  }) {
    allQuestions = [...allQuestions];

    allQuestions.push({
      question,
      A,
      B,
      C,
      D,
      answer,
      year,
      subject,
      session,
      id: allQuestions.length + 1,
    });

    setAllQuestions(allQuestions);
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
      <Box>
        <Button
          className="m-3"
          onClick={() => {
            setIsPressed(!isPressed);
            navigate("/QuestionsBank");
          }}
          variant="contained"
          endIcon={<ClearIcon />}
        >
          إلغاء
        </Button>
        <Button
          className="m-3"
          onClick={() => {
            createQuestion({
              question: ques,
              A: value1,
              B: value2,
              C: value3,
              D: choiceD,
              rightChoice,
              year,
              subject,
              session,
            });
            setIsPressed(!isPressed);
            navigate("/QuestionsBank");
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
