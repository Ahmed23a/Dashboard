import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { storeValues } from "../../Store";
import CheckIcon from "@mui/icons-material/Check";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import ClearIcon from "@mui/icons-material/Clear";

import { useNavigate } from "react-router-dom";
import Header from "./../../components/Header";
import { useState } from "react";

export default function StudentUpdate(props) {
  const {
    isPressed,
    setIsPressed,
    idRow,
    setIdRow,
    allStudents,
    setAllStudents,
  } = useContext(storeValues);

  const navigate = useNavigate();

  // function getStudent(id) {
  //   return allStudents.filter((question) => question.id == id)[0];
  // }

  // let x = getStudent(idRow);
  // console.log(x);
  let [name, setName] = useState("");
  let [year, setYear] = useState("");
  let [age, setAge] = useState("");
  let [phonenum, setPhoneNum] = useState("");
  let [email, setEmail] = useState("");

  function UpdateStudent(name, age, year, phonenum, email) {
    allStudents.map((student) => {
      if (student.id == idRow) {
          (student.name = name),
          (student.age = age),
          (student.email = email),
          (student.year = year),
          (student.phone = phonenum);
      }

      setAllStudents(allStudents);
    });
  }

  return (
    <Box>
      <Header title="تعديل بيانات الطالب" subtitle="ـــــــــــــــــــــــ" />

      {/* <h1>الطالب: {x.name}</h1>
      <h6> الصف/ {x.year}</h6>
      <h6> رقم الهاتف/ {x.phonenum}</h6>
      <h6>العمر/ {x.age}</h6>
      <h6>البريد الالكتروني/ {x.email}</h6> */}

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
          UpdateStudent(name, age, year, phonenum, email);
          navigate("/Student");
        }}
        variant="contained"
        endIcon={<CheckIcon />}
      >
        تأكيد
      </Button>
    </Box>
  );
}
