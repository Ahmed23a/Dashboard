import { createContext, useState } from "react";
import { mockDataTeam } from "./Data/dummyData";
import { dummyQuestions } from "./Data/dummyQuestions";
import {dummyProfile } from "./Data/dummyProfile";
export let storeValues = createContext(0);

export default function StoreValuesProvider(props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [allQuestions, setAllQuestions] = useState(dummyQuestions);
  const [allStudents, setAllStudents] = useState(mockDataTeam);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [idRow, setIdRow] = useState(0);
  const [profile, setProfile] = useState(dummyProfile)
  const [edit, setEdit] = useState(false);
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
        profile,
        setProfile,
        edit,
        setEdit,
      }}
    >
      {props.children}
    </storeValues.Provider>
  );
}
