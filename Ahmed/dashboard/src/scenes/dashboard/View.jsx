import { Box, Button, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { sidebarCollapsed } from "../../Store";
import { tokens } from "../../theme";

import { useNavigate } from "react-router-dom";
import { quesntionData } from "../../QuestionContext";

export default function View(props) {
  const { isCollapsed, isPressed, setIsPressed } = useContext(sidebarCollapsed);    
  const { idRow,setIdRow, allQuestions,setAllQuestions } = useContext(quesntionData);
  const navigate = useNavigate();

  function getQuestion(id) {
    return allQuestions.filter((question) => question.id == id)[0];
  }
  
 let x = getQuestion(idRow)
 console.log(x)
  return (
    <Box>
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
