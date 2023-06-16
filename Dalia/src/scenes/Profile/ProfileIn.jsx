import React from "react";
import { useContext } from "react";
import { storeValues } from "../../Store";
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
import {useTheme }from "@mui/material";
import { tokens } from "../../theme";


export default function ProfileIn() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = theme.palette.mode=='dark'? 'white' : 'black'
  const { profile, setProfile } = useContext(storeValues);
  function getProfileData()
  {
    return profile
  }
  var r = getProfileData()
  console.log(r)
  return (
    <MDBCard className="mb-3" style={{backgroundColor:colors.blueAccent[1200]}}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText style={{color:colorMode}} > الاسم بالكامل</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText  style={{color:colorMode}} >{r[0].name}</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText  style={{color:colorMode}} >البريد الالكتروني</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText  style={{color:colorMode}} >
              {r[0].email}
            </MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText  style={{color:colorMode}} >رقم التليفون الارضي</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText  style={{color:colorMode}} >{r[0].tel}</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText  style={{color:colorMode}} >رقم الموبايل </MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText  style={{color:colorMode}} >{r[0].mobile}</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText  style={{color:colorMode}} >عناوين الفروع</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText  style={{color:colorMode}} >
              {r[0].address}
            </MDBCardText>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}
