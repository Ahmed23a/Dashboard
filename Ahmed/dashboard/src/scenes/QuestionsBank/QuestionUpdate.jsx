import { Box, Button } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { storeValues } from "../../Store";

import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
export default function QuestionUpdate() {
  const {
    isPressed,
    setIsPressed,
    idRow,
    setIdRow,
    allQuestions,
    setAllQuestions,
  } = useContext(storeValues);

  const navigate = useNavigate();
  
  function getQuestion(id) {
    return allQuestions.filter((question) => question.id == id)[0];
  }

  let x = getQuestion(idRow);
  console.log(x);
  return (
    <Box>
      <Header title="تعديل السؤال" subtitle="ــــــــــــــــ" />

      <h1>السؤال: {x.question}</h1>
      <h6> أ/ {x.A}</h6>
      <h6> ب/ {x.B}</h6>
      <h6>ج/ {x.C}</h6>
      <h6>د/ {x.D}</h6>
      <p> الاجابة الصحيحة: {x.answer}</p>
      <Button
        onClick={() => {
          setIsPressed(!isPressed);
          navigate("/QuestionsBank");
        }}
        variant="contained"
      >
        Cancel
      </Button>
    </Box>
  );
}
