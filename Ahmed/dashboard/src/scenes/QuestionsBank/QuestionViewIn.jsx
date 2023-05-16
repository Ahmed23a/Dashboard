import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { storeValues } from "../../Store";
import CheckIcon from "@mui/icons-material/Check";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { useNavigate } from "react-router-dom";
import Header from "./../../components/Header";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import UpdateQuestion from "./UpdatQuestion";
import PopData from "./PopData";
import { useEffect } from "react";


export default function QuestionViewIn(props) {
  console.log("props",props)
  const {
    isPressed,
    setIsPressed,
    idRow,
    setIdRow,
    allQuestions,
    setAllQuestions,
  } = useContext(storeValues);
  let [shownUpdate, setIsshownUpdate] = useState(true);
  let [shownConfirm, setIsshownConfirm] = useState(false);

//   let [returnValue,setReturnValue] =useState({})
//   console.log(returnValue)
//   useEffect(()=>{
//     setReturnValue(JSON.parse(localStorage.getItem("values")))
//    },[shownConfirm])



//   const navigate = useNavigate();

  function getQuestion(id) {
    return allQuestions.filter((question) => question.id == id)[0];
  }

  let x = getQuestion(idRow);
  console.log(x);
  return (
    <Box>


      <h1>السؤال: {x.question}</h1>
      <h6> أ/ {props.confirm?(props.value1):(x.A)}</h6>
      <h6> ب/ {x.B}</h6>
      <h6>ج/ {x.C}</h6>
      <h6>د/ {x.D}</h6>
      <p> الاجابة الصحيحة: {x.answer}</p>
 
    </Box>
  );
}
