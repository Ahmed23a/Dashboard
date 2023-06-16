import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
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
  MDBListGroupItem
} from 'mdb-react-ui-kit';
export default function Bar() {
  return (
    <>
    <Box className="containr text-center" m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="شريط الرسم البياني"
          subtitle=" مرحبا بك فى شريط الرسم البياني "
        ></Header>

      </Box>    </Box>
      <MDBRow className="align-items-center justify-content-center">
          <MDBCol md="10" >
            <MDBCard className="mb-4 mb-md-0">
              <MDBCardBody>
                <MDBCardText className="mb-4 text-dark">
                  {" "}
                  الإحصائيات
                </MDBCardText>
                <MDBCardText
                  className="mb-1 text-dark"
                  style={{ fontSize: ".77rem" }}
                >
                  عدد الطلاب الى الان
                </MDBCardText>
                <MDBProgress className="rounded">
                  <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                </MDBProgress>

                <MDBCardText
                  className="mt-4 mb-1 text-dark"
                  style={{ fontSize: ".77rem" }}
                >
                  عدد الامتحانات الكلي
                </MDBCardText>
                <MDBProgress className="rounded">
                  <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                </MDBProgress>

                <MDBCardText
                  className="mt-4 mb-1 text-dark"
                  style={{ fontSize: ".77rem" }}
                >
                  عدد الامتحانات التي تم تصحيحها
                </MDBCardText>
                <MDBProgress className="rounded">
                  <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                </MDBProgress>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        </>
  );
}
