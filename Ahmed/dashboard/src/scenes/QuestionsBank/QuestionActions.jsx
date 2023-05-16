import { Box, Button } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { storeValues } from "../../Store";
import { useContext } from "react";

export default function DeleteButton(props) {
  const {  setIsPressed, isPressed } =
    useContext(storeValues);


  return (
    <Box display="flex" justifyContent="center">
      <div className="ms-5">
       
          <Button
            className="bg-danger"
            variant="contained"
            onClick={() => {
              let dataArray = props.dataArray.filter(
                (student) => student.id !== props.index
              );
              props.setDataArray(dataArray);
            }}
          >
            Delete
          </Button>
        
      </div>
      <div>
        <Link to={"QuestionUpdate"}>
          {" "}
          <Button
            variant="contained"
            onClick={() => {
             
              setIsPressed(!isPressed);
             
              // let dataArray = props.dataArray.map((data)=>
              // {
              //   if(data.id == props.index)
              //   {
              //     data.subject = "أهلا"
              //   }
              // })
              // setAllStudents(dataArray)
            }}
          >
            Update
          </Button>
        </Link>
      </div>
    </Box>
  );
}
