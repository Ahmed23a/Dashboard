import { Box, Button, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import { storeValues } from "../../Store";
import Header from "../../components/Header";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import QuestionActions from "./QuestionActions";
import { CustomPagination } from "../Students/Students";

// normal usage

export default function QuestionsBank() {
  let [optionsSubjects, setOptionsSubjects] = useState([]);
  let [optionsLessons, setOptionsLessons] = useState([]);
  let options1 = [
    "الثاني الثانوي علمي",
    "الثاني الثانوي ادبي",
    "الاول الثانوي",
  ];

  //Ahmed
  const {
    isCollapsed,
    isPressed,
    setIsPressed,
    setIdRow,
    setAllQuestions,
    allQuestions,
  } = useContext(storeValues);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const navigate = useNavigate();
  console.log(allQuestions);

  const columns = [
    // { field: "id", headerName: "ID" },
    {
      field: "question",
      headerName: "السؤال",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { question, id } }) => {
        return (
          <>
            <p
              onClick={() => {
                setIsPressed(!isPressed);
                setIdRow(id);
                navigate("QuestionView");
              }}
            >
              {question}
            </p>
          </>
        );
      },
    },
    {
      field: "year",
      headerName: "الصف الدراسى",
      flex: 1,
    },
    {
      field: "subject",
      headerName: "المادة الدراسية",
      flex: 1,
    },
    {
      field: "session",
      headerName: "الدرس",
      flex: 1,
    },
    {
      field: "id",
      headerName: "حذف",
      flex: 1,
      renderCell: ({ row: { id } }) => {
        return (
          <Box
            onClick={() => {
              setIdRow(id);
            }}
          >
            <QuestionActions
              key={id}
              index={id}
              dataArray={allQuestions}
              setDataArray={setAllQuestions}
            />
          </Box>
        );
      },
    },
  ];
  function optionsSelection(selected) {
    console.log("selected", selected);
    if (selected == options1[0]) {
      setOptionsSubjects([
        "اللغة العربية",
        "اللغة الانجليزية",
        "الرياضيات",
        "فيزياء",
        "كيمياء",
      ]);
      console.log("0", optionsSubjects);
    } else if (selected == options1[1]) {
      setOptionsSubjects([
        "اللغة العربية",
        "اللغة الانجليزية",
        "جغرافيا",
        "تاريخ",
        "فرنسي",
      ]);
      console.log("1", optionsSubjects);
    } else {
      setOptionsSubjects([
        "اللغة العربية",
        "اللغة الانجليزية",
        "الرياضيات",
        "علوم",
        "دراسات اجتماعية",
      ]);
      console.log("2", optionsSubjects);
    }
  }
  useEffect(() => {
    if (optionsSubjects.includes("فيزياء")) {
      console.log("3lmy");
      setOptionsLessons(["درس علمي 1", "درس علمي 2"]);
    } else if (optionsSubjects.includes("تاريخ")) {
      console.log("2dby");
      setOptionsLessons(["درس ادبي 1", "درس أدبي 2"]);
    } else if (optionsSubjects.includes("علوم")) {
      console.log("oula");
      setOptionsLessons(["درس  1", "درس  2"]);
    }
  }, [optionsSubjects]);
  return (
    <>
      <Box>
        <Dropdown
          placeholder="اختر السنة الدراسية"
          options={options1}
          onChange={(value) => optionsSelection(value.value)}
          //   onSelect={(value) => console.log('selected!', value.value)} // always fires once a selection happens even if there is no change
          //   onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
          //   onOpen={() => console.log('open!')}
        />
        <Dropdown
          placeholder="اختر اسم المادة"
          options={optionsSubjects}
          // options={['اللغة العربية', 'اللغة الانجليزية', 'الرياضيات',"فيزياء","كيمياء"]}
          // options={['اللغة العربية', 'اللغة الانجليزية', 'جغرافيا',"تاريخ","فرنسي"]}
        />
        <Dropdown placeholder="اختر الدرس" options={optionsLessons} />

        <Box m="20px">
          <Header title="بنك الاسئلة" subtitle="جميع الاسئلة" />
          <Link onClick={() => setIsPressed(!isPressed)} to={"QuestionCreate"}>
            <Button className={isPressed ? "d-none" : ""} variant="contained">
              Create
            </Button>
          </Link>

          <Box
            m="40px 0 0 0"
            // className={isCollapsed ? "w-100 mx-100" : ""}
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
                  // sx={{ width: isCollapsed ? "99%" : "99%" }}
                  sx={{ width: "auto" }}
                  checkboxSelection
                  rows={allQuestions}
                  columns={columns}
                  components={{ Pagination: CustomPagination }}
                />
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
