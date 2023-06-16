import React, { useContext } from "react";
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
import ProfileIn from "./ProfileIn";
import { useState } from "react";
import ProfileEdit from "./ProfileEdit";
import { Button } from "@mui/material";
import { storeValues } from "../../Store";
import {useTheme} from "@mui/material";
import { tokens } from "../../theme";
export default function Profile() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = theme.palette.mode=='dark'? 'white' : 'black'
  // let [edit, setEdit] = useState(false);
  const{edit,setEdit}=useContext(storeValues)
  function EditProfile() {
    setEdit((prev) => !prev);
  }
  return (
    <section style={{ backgroundColor: colors.blueAccent[1000],backgroundSize:'100% 100vh'}}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mt-1 py-5" style={{backgroundColor:colors.blueAccent[1200]}}>
              <MDBCardBody className="text-center py-5">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "130px",marginBottom:'20px' }}
                  fluid
                />
                <p className=" mb-3" style={{color:colorMode}}>أ|الصباحي</p>
                <p className=" mb-4" style={{color:colorMode}}>معلم الصفوف الثانوية</p>
                <div className="d-flex justify-content-center mb-2">
                  {edit || (
                    <Button variant="contained" onClick={EditProfile}>
                      تعديل البيانات الشخصية
                    </Button>
                  )}
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            {edit ? <ProfileEdit /> : <ProfileIn />}
            
            <MDBRow dir="ltr">
              <MDBCol md="12">
                <MDBCard className="mb-4 mb-lg-0" style={{backgroundColor:colors.blueAccent[1200]}}>
                  <MDBCardBody className="p-0">
                    <MDBListGroup className="rounded-3">
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" style={{backgroundColor:colors.blueAccent[1200]}}>
                        <MDBIcon fas icon="globe fa-lg" style={{color:colorMode}} />
                        <MDBCardText  style={{color:colorMode}} >https://الصباحي.com</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" style={{backgroundColor:colors.blueAccent[1200]}}>
                        <MDBIcon
                          fab
                          icon="github fa-lg"
                          style={{color:colorMode}} 
                        />
                        <MDBCardText  style={{color:colorMode}} >الصباحي</MDBCardText>
                      </MDBListGroupItem>
                      {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon
                          fab
                          icon="twitter fa-lg"
                          style={{ color: "#55acee" }}
                        />
                        <MDBCardText>@الصباحي</MDBCardText>
                      </MDBListGroupItem> */}
                      {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon
                          fab
                          icon="instagram fa-lg"
                          style={{ color: "#ac2bac" }}
                        />
                        <MDBCardText>الصباحي</MDBCardText>
                      </MDBListGroupItem> */}
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" style={{backgroundColor:colors.blueAccent[1200]}}>
                        <MDBIcon
                          fab
                          icon="facebook fa-lg"
                          style={{color:colorMode}} 
                        />
                        <MDBCardText style={{color:colorMode}}>الصباحي</MDBCardText>
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
