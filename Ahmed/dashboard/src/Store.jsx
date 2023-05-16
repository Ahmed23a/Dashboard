import { createContext, useState } from "react";
import { mockDataTeam } from "./Data/dummyData";
import { dummyQuestions } from "./Data/dummyQuestions";

export let storeValues = createContext(0);

export default function StoreValuesProvider(props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [allQuestions, setAllQuestions] = useState(dummyQuestions);
  const [allStudents, setAllStudents] = useState(mockDataTeam);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [idRow, setIdRow] = useState(0);

  return (
    <storeValues.Provider
      value={{
        isCollapsed,
        setIsCollapsed,
        isPressed,
        setIsPressed,
        selectedQuestion,
        setSelectedQuestion,
        idRow,
        setIdRow,
        allQuestions,
        setAllQuestions,
        allStudents,
        setAllStudents,
      }}
    >
      {props.children}
    </storeValues.Provider>
  );
}
