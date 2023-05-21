import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CustomPagination } from "../Students/Students";

import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function Invoices() {
  let [value, setvalue] = useState("");
  let [row, setRow] = useState([]);
  function printMe() {
    // var printwin = window.open("")
    // printwin.document.write(document.getElementsByTagName("DataGrid").item)
    window.print();
  }
  function generateCodes(num) {
    let num2 = Number(num);
    console.log(num2, typeof num);
    if (num == "") {
      window.alert("Enter valid number");
    } else {
      let obj = [];
      for (let i = 1; i <= num2; i++) {
        var gen = nanoid();
        let genObj = {
          id: i,
          code: gen,
        };
        obj.push(genObj);
      }
      setRow(obj);
    }
  }

  const rows = row;

  const columns = [
    { field: "id", headerName: "أكواد الطلاب", width: 150 },
    { field: "code", headerName: "الكود ", width: 150 },
  ];

  return (
    <Box>
      {/* <Grid item xs> */}
      <Typography component={"span"}>
        <TextField
          fullWidth
          label="ادخل عدد الأكواد المطلوبة"
          id="outlined-end-adornment"
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          value={value}
          onChange={(event) => {
            setvalue(event.target.value);
          }}
        />
      </Typography>
      <Button
        className="m-3"
        onClick={() => {
          generateCodes(value);
        }}
        variant="contained"
      >
        استخرج أكواد للطلاب
      </Button>
      <DataGrid 
        components={{ Pagination: CustomPagination }}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 25, page: 0 },
          },
        }}
        rows={rows}
        columns={columns}
      />

      <Button className="m-3" onClick={printMe} variant="contained">
        طباعة الأكواد
      </Button>
    </Box>
  );
}
