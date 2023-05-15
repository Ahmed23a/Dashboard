import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { sidebarCollapsed } from "../../Store";

import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";

export default function QuestionCreate() {
  const { isPressed, setIsPressed } = useContext(sidebarCollapsed);
  const navigate = useNavigate();

  return (
    <Box className="containr text-center" m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="اضف سؤالك" subtitle=""></Header>
        <Button
          onClick={() => {
            setIsPressed(!isPressed);
            navigate("/QuestionsBank");
          }}
          variant="contained"
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
