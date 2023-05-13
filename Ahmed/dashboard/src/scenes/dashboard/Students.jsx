import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../Data/dummyData";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import { Link, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { sidebarCollapsed } from "../../Store";
import DeleteButton from "./DeleteButton";
import { useEffect } from "react";

export function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    // <Pagination
    //   color="primary"
    //   count={pageCount}
    //   page={page + 1}
    //   onChange={(event, value) => apiRef.current.setPage(value - 1)}

    // />
    <Pagination
      color="primary"
      count={pageCount}
      page={page + 1}
      
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    >
      <Box>
        <Typography variant="h6">الصفحات</Typography>
      </Box>
    </Pagination>
  );
}

export default function Student(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let [studentsData, setStudentsData] = useState(mockDataTeam);
  const { isCollapsed, setIsCollapsed, isPressed, setIsPressed } =
    useContext(sidebarCollapsed);

  const columns = [
    // { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "اسم",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "العمر",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "رقم الهاتف",
      flex: 1,
    },
    {
      field: "email",
      headerName: "بريد الكترونى",
      flex: 1,
    },
    {
      field: "id",
      headerName: "حذف",
      flex: 1,
      renderCell: ({ row: { id } }) => {
        return (
         
          <DeleteButton
            index={id}
            dataArray={studentsData}
            setDataArray={setStudentsData}
          />
        );
      },
    },
  ];



  return (
    <Box m="20px">
      <Header title="فريق التدريس" subtitle="تنظيم فرق التدريس" />
      <Link onClick={() => setIsPressed(!isPressed)} to={"StudentCreate"}>
        <Button className={isPressed ? "d-none" : ""} variant="contained">
          Create
        </Button>
      </Link>

      <Box
        m="40px 0 0 0"
        className={isCollapsed ? "w-100 mx-100" : ""}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {/* sebha keda la7d ama azbtha  */}
        {isPressed ? (
          <Outlet></Outlet>
        ) : (
          <>
            <DataGrid
              sx={{ width: isCollapsed ? "99%" : "99%" }}
              checkboxSelection
              rows={studentsData}
              columns={columns}
              components={{ Pagination: CustomPagination }}
              
            />
          </>
        )}
      </Box>
    </Box>
  );
}
