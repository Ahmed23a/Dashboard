import { Box, Button } from "@mui/material";
import { useContext, useState } from "react";
import { storeValues } from "../../Store";

import { Link, useNavigate } from "react-router-dom";
import Header from './../../components/Header';
import ClearIcon from "@mui/icons-material/Clear";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import CheckIcon from "@mui/icons-material/Check";
import StudentUpdate from "./StudentUpdate";
import StudentViewIn from "./StudentViewIn";

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
      
      <Header title="بيانات الطالب" subtitle="ـــــــــــــــــــــــ" />

      {shownUpdate ? (
        <StudentViewIn
          // confirm={shownConfirm}
          // ques={returnValue.ques}
          // value1={returnValue.value1}
          // value2={returnValue.value2}
          // value3={returnValue.value3}
        />
      ) : (
        <StudentUpdate
        // ques={returnValue.ques}
        // value1={returnValue.value1}
        // value2={returnValue.value2}
        // value3={returnValue.value3}
        />
      )}

     {shownUpdate && <Button
        onClick={() => {
          setIsPressed(!isPressed);
          navigate("/Student");
        }}
        variant="contained"
        endIcon={<ClearIcon />}
      >
        إلغاء
      </Button>}

 
      {shownUpdate && (

        <Button  sx={{mx:2,my:2}}
          onClick={handleClick}
          variant="contained"
          endIcon={<UpgradeIcon />}
        >
          تحديث
        </Button>

      )}
        
  
    </Box>
  );
}
