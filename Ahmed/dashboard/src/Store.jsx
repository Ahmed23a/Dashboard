import { createContext, useState } from "react";

export let sidebarCollapsed = createContext(0);

export default function SidebarCollapsedProvider(props) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isPressed, setIsPressed] = useState(false);

  return (
    <sidebarCollapsed.Provider value={{ isCollapsed, setIsCollapsed ,isPressed,setIsPressed}}>
      {props.children}
    </sidebarCollapsed.Provider>
  );
}

