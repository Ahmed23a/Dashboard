import { Button } from "@mui/material";
import  { useContext } from "react";

import { sidebarCollapsed } from "../../Store";
import { useNavigate } from "react-router-dom";

export default function StudentUpdate() {
  const { isPressed, setIsPressed } = useContext(sidebarCollapsed);
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-between">
      <div>StudentUpdate</div>

      <Button
        onClick={() => {
          setIsPressed(!isPressed);
          navigate("/Student");
        }}
        
        variant="contained"
      >
        Cancel
      </Button>
    </div>
  );
}
