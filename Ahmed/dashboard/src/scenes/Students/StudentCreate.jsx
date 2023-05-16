import { Button } from "@mui/material";
import  { useContext } from "react";

import  {storeValues}  from "../../Store";
import { useNavigate } from "react-router-dom";

export default function StudentCreate() {
  const { isPressed, setIsPressed } = useContext(storeValues);
  const navigate = useNavigate();

  return (
    <>
    <div className="d-flex justify-content-between">

   
      <div>StudentCreate</div>

      <Button
        onClick={() => {
          setIsPressed(!isPressed);
          navigate("/Student")
        }}
        
        variant="contained"
      >
        Cancel
      </Button>
      </div>
    </>
  );
}