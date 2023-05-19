import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import  { useContext } from "react";

import  {storeValues}  from "../../Store";
import { useNavigate } from "react-router-dom";
import StudentUpdate from "./StudentUpdate";
import Header from "../../components/Header";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

export default function StudentCreate() {
  const navigate = useNavigate();
  const {
    isPressed,
    setIsPressed,
    idRow,
    setIdRow,
    allStudents,
    setAllStudents,
  } = useContext(storeValues);
  let [name, setName] = useState("");
  let [year, setYear] = useState("");
  let [age, setAge] = useState("");
  let [phonenum, setPhoneNum] = useState("");
  let [email, setEmail] = useState("");
  console.log("all",allStudents.length+1)
  function CreateStudent(name, age, year, phonenum, email) {
      let newStudent={
          id:(allStudents.length)+1,
          name : name,
          age :age,
          email :email,
          year : year,
          phone : phonenum
        }
      var obj1 = JSON.stringify(allStudents)
      var obj2 = JSON.parse(obj1)
        
      obj2.push(newStudent)
      setAllStudents(obj2);
    };
  
  return (
    <Box>
    <Header title="تعديل بيانات الطالب" subtitle="ـــــــــــــــــــــــ" />



    <Typography component={"span"}>
      <TextField
        fullWidth
        label="اكتب اسم الطالب"
        id="outlined-end-adornment"
        sx={{ m: 1 }}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <div className="row">
        <div className="col">
          <div id="block-3">
            <TextField
              id="standard-basic"
              label="الصف"
              variant="standard"
              value={year}
              onChange={(event) => {
                setYear(event.target.value);
              }}
            />
            <span id="result-3"></span>
          </div>
        </div>
        <div className="col">
          <div id="block-3">
            <TextField
              id="standard-basic"
              label="رقم الهاتف"
              variant="standard"
              value={phonenum}
              onChange={(event) => {
                setPhoneNum(event.target.value);
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
              label="العمر"
              variant="standard"
              value={age}
              onChange={(event) => {
                setAge(event.target.value);
              }}
            />
            <span id="result-3"></span>
          </div>
        </div>
        <div className="col">
          <div id="block-3">
            <TextField
              id="standard-basic"
              label="البريد الالكتروني"
              variant="standard"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <span id="result-3"></span>
          </div>
        </div>
      </div>
    </Typography>

    <Button
      onClick={() => {
        setIsPressed(!isPressed);
        navigate("/Student");
      }}
      variant="contained"
      endIcon={<ClearIcon />}

    >
      إلغاء
    </Button>

    <Button
      sx={{ mx: 2, my: 2 }}
      onClick={() => {
        setIsPressed(!isPressed);
        CreateStudent(name, age, year, phonenum, email);
        navigate("/Student");
      }}
      variant="contained"
      endIcon={<CheckIcon />}
    >
      تأكيد
    </Button>
  </Box>
    // <>
    //   <Box>
    // <div >

 
    //   <div>StudentCreate</div>
  
    //   {/* <Button
    //     onClick={() => {
    //       setIsPressed(!isPressed);
    //       navigate("/Student")
    //     }}
        
    //     variant="contained"
    //   >
    //     Cancel
    //   </Button> */}
    //   </div>
    //   </Box>
    // </>

  );
  }
