import { createContext, useState } from "react";
import { dummyQuestions } from "./Data/dummyQuestions";

export let quesntionData = createContext(0);

export default function QuesntionDataProvider(props) {
  const [allQuestions, setAllQuestions] = useState(dummyQuestions);
  const [selectedQuestion, setSelectedQuestion] = useState("");  
  const [idRow, setIdRow] = useState(0)

  return (
    <quesntionData.Provider
      value={{selectedQuestion,setSelectedQuestion ,idRow ,setIdRow , allQuestions ,setAllQuestions }}
    >
      {props.children}
    </quesntionData.Provider>
  );
}
