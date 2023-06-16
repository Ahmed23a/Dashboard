import React, { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useContext } from "react";
import { storeValues } from "../../Store";
import { useEffect } from "react";
import {useTheme} from "@mui/material";
import { tokens } from "../../theme";

export default function ProfileEdit() {
  let { profile, setProfile, edit, setEdit } = useContext(storeValues);
  let [name, setName] = useState("");
  let [email, setemail] = useState("");
  let [tel, settel] = useState("");
  let [mobile, setmobile] = useState("");
  let [address, setaddress] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = theme.palette.mode=='dark'? 'white' : 'black'

 function UpdateProfile(name, email, address, mobile, tel) {
    profile.pop();
    profile.push({
      name: name,
      email: email,
      address: address,
      mobile: mobile,
      tel: tel,
    });
    profile.map((item) => console.log(item.name));
    console.log(profile);
    // setProfile(profile);
    setEdit(false)
  }
  return (
    <MDBCard className="mb-4" style={{backgroundColor:colors.blueAccent[1200]}}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol sm="9">
            <TextField
              id="standard-basic"
              label="الاسم بالكامل"
              variant="standard"
              fullWidth
              value={name}
              //   label="اكتب سؤالك هنا"
              //   id="outlined-end-adornment"

              //   InputProps={{
              //     startAdornment: <InputAdornment position="start"></InputAdornment>,
              //   }}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol sm="9">
            <TextField
              id="standard-basic"
              label=" البريد الالكتروني"
              variant="standard"
              fullWidth
              value={email}
              //   label="اكتب سؤالك هنا"
              //   id="outlined-end-adornment"

              //   InputProps={{
              //     startAdornment: <InputAdornment position="start"></InputAdornment>,
              //   }}
              onChange={(event) => {
                setemail(event.target.value);
              }}
            />{" "}
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol sm="9">
            <TextField
              id="standard-basic"
              label=" رقم التليفون الارضي"
              variant="standard"
              fullWidth
              value={tel}
              //   label="اكتب سؤالك هنا"
              //   id="outlined-end-adornment"

              //   InputProps={{
              //     startAdornment: <InputAdornment position="start"></InputAdornment>,
              //   }}
              onChange={(event) => {
                settel(event.target.value);
              }}
            />{" "}
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol sm="9">
            <TextField
              id="standard-basic"
              label="رقم الموبايل"
              variant="standard"
              fullWidth
              value={mobile}
              //   label="اكتب سؤالك هنا"
              //   id="outlined-end-adornment"

              //   InputProps={{
              //     startAdornment: <InputAdornment position="start"></InputAdornment>,
              //   }}
              onChange={(event) => {
                setmobile(event.target.value);
              }}
            />{" "}
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol sm="9">
            <TextField
              id="standard-basic"
              label="عناوين الفروع"
              variant="standard"
              value={address}
              //   label="اكتب سؤالك هنا"
              //   id="outlined-end-adornment"

              //   InputProps={{
              //     startAdornment: <InputAdornment position="start"></InputAdornment>,
              //   }}
              onChange={(event) => {
                setaddress(event.target.value);
              }}
            />{" "}
          </MDBCol>
          <MDBCol sm="3" className="d-flex justify-content-end">
            <Button
              variant="contained"
              onClick={() => {
                UpdateProfile(name, email, address, mobile, tel);
            
              }}
            >
              حفظ التغييرات
            </Button>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}
