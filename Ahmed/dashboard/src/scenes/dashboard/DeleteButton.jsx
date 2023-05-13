import { Box, Button } from "@mui/material";
import "./popup.css";
import { Link } from "react-router-dom";

export default function DeleteButton(props) {
  return (
    <Box display="flex" justifyContent="center">
      <Link>
        <Button
          className="bg-danger"
          variant="contained"
          onClick={() => {
            let studentsData = props.dataArray.filter(
              (student) => student.id !== props.index
            );            
            props.setDataArray( studentsData );
          }}
        >
          Delete
        </Button>
      </Link>
      {/* <Link onClick={() => setIsPressed(!isPressed)} to={"StudentUpdate"}>
        {" "}
        <Button variant="contained">Update</Button>
      </Link> */}
    </Box>
  );
}
