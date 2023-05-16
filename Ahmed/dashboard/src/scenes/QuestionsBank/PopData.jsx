
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
// import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import UpdateQuestion from "../UpdateQuestion/UpdateQuestion";
export default function PopData(props) {


  console.log(props)
  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: "auto",
    color: theme.palette.text.primary,
  }));
  let [question, setQuestion] = useState([]);
  let [answers, setAnswers] = useState([]);
  let [shown, setIsshown] = useState(false);

 
  async function getQuestion() {
    // let { data } = await axios.get(
    //   "https://mocki.io/v1/f9405dfd-345a-443f-8d7e-99d46400e1d9"
    // );
    // setQuestion(data);
    // data.map((d) => {
    //   setAnswers(d);
    //   console.log(answers);
    // });
    console.log("data");
  }
  useEffect(() => {
    getQuestion();
    console.log("question", question);
    question.map((q, ind) => {
      console.log(q);
    });
  }, []);

  return (
    <>
      <Grid item xs>
        <Typography component={"span"} sx={{ float: "right" }}>
          <h3 dir="rtl">
            {/* {question.map((q, ind) => (
              <span key={ind}>{q.question}</span>
            ))} */}
            {props.ques}
          </h3>
          <span dir="rtl">اختر اجابة واحدة صحيحة</span>

          <div id="block-3" dir="rtl">
            <label htmlFor="option-3">
              <input type="radio" name="option" value="180" id="option-3" />
             {props.value1}
            </label>
            <span id="result-3"></span>
          </div>

          <div id="block-4" dir="rtl">
            <label htmlFor="option-4">
              <input type="radio" name="option" value="220" id="option-4" />
             {props.value2}
            </label>
            <span id="result-4"></span>
          </div>

          <div id="block-5" dir="rtl">
            <label htmlFor="option-5">
              <input type="radio" name="option" value="360" id="option-5" />
              {props.value3}
            </label>
            <span id="result-5"></span>
          </div>
        </Typography>
      </Grid>
    </>
  );
}
