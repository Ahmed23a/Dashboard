import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { storeValues } from "../../Store";

import { useNavigate } from "react-router-dom";
import Header from './../../components/Header';

export default function StudentView(props) {
  const {
    isPressed,
    setIsPressed,
    idRow,
    setIdRow,
    allStudents,
    setAllStudents,
  } = useContext(storeValues);

  const navigate = useNavigate();

  function getStudent(id) {
    return allStudents.filter((question) => question.id == id)[0];
  }

  let x = getStudent(idRow);
  console.log(x);

  return (
    <Box>
      
      <Header title="بيانات الطالب" subtitle="ـــــــــــــــــــــــ" />

      <h1>الطالب: {x.name}</h1>
      <h6> الصف/ {x.year}</h6>
      <h6> رقم الهاتف/ {x.phone}</h6>
      <h6>العمر/ {x.age}</h6>
      <h6>البريد الالكتروني/ {x.email}</h6>
      <Button
        onClick={() => {
          setIsPressed(!isPressed);
          navigate("/Student");
        }}
        variant="contained"
      >
        Cancel
      </Button>
    </Box>
  );
}
