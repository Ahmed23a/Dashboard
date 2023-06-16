import { Box, Button } from "@mui/material";
import { useContext, useState } from "react";
import { storeValues } from "../../Store";

import { Link, useNavigate } from "react-router-dom";
import Header from './../../components/Header';
import ClearIcon from "@mui/icons-material/Clear";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import CheckIcon from "@mui/icons-material/Check";
import StudentUpdate from "./StudentUpdate";

export default function StudentViewIn(props) {
  const {
    isPressed,
    setIsPressed,
    idRow,
    setIdRow,
    allStudents,
    setAllStudents,
  } = useContext(storeValues);

  const navigate = useNavigate();
  let [shownUpdate, setIsshownUpdate] = useState(true);
  let [shownConfirm, setIsshownConfirm] = useState(false);
  
  function handleClick(props) {
    setIsshownUpdate((prev) => !prev);

    // props.confirm = shownConfirm

    setIsshownConfirm((prev) => !prev);
  }

  function getStudent(id) {
    return allStudents.filter((question) => question.id == id)[0];
  }

  let x = getStudent(idRow);
  console.log(x);

  return (
    
    <Box>    
  
      <h1>الطالب: {x.name}</h1>
      <h6> الصف/ {x.year}</h6>
      <h6> رقم الهاتف/ {x.phone}</h6>
      <h6>العمر/ {x.age}</h6>
      <h6>البريد الالكتروني/ {x.email}</h6>

    </Box>
  );
}
