import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { storeValues } from "../../Store";
import CheckIcon from "@mui/icons-material/Check";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { useNavigate } from "react-router-dom";
import Header from "./../../components/Header";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import UpdateQuestion from "./UpdatQuestion";
import PopData from "./PopData";
import { useEffect } from "react";
import QuestionViewIn from "./QuestionViewIn";

export default function QuestionView(props) {
  let [ques, setQues] = useState("");
  let [value1, setValue1] = useState("");
  let [value2, setValue2] = useState("");
  let [value3, setValue3] = useState("");

  // useEffect(() => {
  //   if (!localStorage.getItem("values")) {
  //     let values = {
  //       ques: ques,
  //       value1: value1,
  //       value2: value2,
  //       value3: value3,
  //     };
  //     localStorage.setItem("values", JSON.stringify(values));
  //   }
  // });

  const {
    isPressed,
    setIsPressed,
    idRow,
    setIdRow,
    allQuestions,
    setAllQuestions,
  } = useContext(storeValues);
  let [shownUpdate, setIsshownUpdate] = useState(true);
  let [shownConfirm, setIsshownConfirm] = useState(false);

  let [returnValue, setReturnValue] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setReturnValue(JSON.parse(localStorage.getItem("values")));
  }, [shownConfirm]);

  function handleClick(props) {
    setIsshownUpdate((prev) => !prev);

    // props.confirm = shownConfirm

    setIsshownConfirm((prev) => !prev);
  }

  return (
    <Box>
      <Header title="تفاصيل السؤال" subtitle="ـــــــــــــــــــــــ" />
      <h2>Hello from Question View </h2>

      {shownUpdate ? (
        <QuestionViewIn
          confirm={shownConfirm}
          // ques={returnValue.ques}
          // value1={returnValue.value1}
          // value2={returnValue.value2}
          // value3={returnValue.value3}
        />
      ) : (
        <UpdateQuestion
        // ques={returnValue.ques}
        // value1={returnValue.value1}
        // value2={returnValue.value2}
        // value3={returnValue.value3}
        />
      )}
      {shownUpdate && (
        <Button
          onClick={() => {
            setIsPressed(!isPressed);
            navigate("/QuestionsBank");
          }}
          variant="contained"
          endIcon={<ClearIcon />}
        >
          إلغاء
        </Button>
      )}

      {shownUpdate && (
        <Button
          onClick={handleClick}
          variant="contained"
          endIcon={<UpgradeIcon />}
        >
          تحديث
        </Button>
      )}
      {/* {shownConfirm && (
        <Button
          onClick={() => {
            handleClick();
            UpdateQuestion;
          }}
          variant="contained"
          endIcon={<CheckIcon />}
        >
          تأكيد
        </Button>
      )} */}
    </Box>
  );
}
