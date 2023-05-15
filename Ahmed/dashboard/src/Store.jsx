import { createContext, useState } from "react";
import { dummyQuestions } from "./Data/dummyQuestions";

export let sidebarCollapsed = createContext(0);

export default function SidebarCollapsedProvider(props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  
  const [allQuestion, setAllQuestions] = useState(dummyQuestions);

  
  

  return (
    <sidebarCollapsed.Provider
      value={{ isCollapsed, setIsCollapsed, isPressed, setIsPressed,allQuestion }}
    >
      {props.children}
    </sidebarCollapsed.Provider>
  );
}
