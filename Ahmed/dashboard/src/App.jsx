import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { colorModeContext, useMode } from "./theme";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard/Dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Student from "./scenes/Students/Students";
import Invoices from "./scenes/dashboard/Invoices";
import Contacts from "./scenes/dashboard/Contacts";
import Bar from "./scenes/Charts/Bar";
import Form from "./scenes/dashboard/Form";
import Line from "./scenes/Charts/Line";
import Pie from "./scenes/Charts/Pie";
import FAQ from "./scenes/dashboard/FAQ";
import Geography from "./scenes/Charts/Geography";
import Calendar from "./scenes/dashboard/Calendar";
import QuestionsBank from "./scenes/QuestionsBank/questionsBank";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import StudentUpdate from "./scenes/Students/StudentUpdate";
import StudentCreate from "./scenes/Students/StudentCreate";
import StudentView from "./scenes/Students/StudentView";

import StoreValuesProvider from "./Store";

import QuestionView from "./scenes/QuestionsBank/QuestionView";
import QuestionCreate from "./scenes/QuestionsBank/QuestionCreate";
import UpdateQuestion from "./scenes/QuestionsBank/UpdatQuestion";



const themeRtl = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={themeRtl}>
          <StoreValuesProvider>
            <colorModeContext.Provider value={colorMode}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                  <Sidebar />
                  <main className="content">
                    <Topbar />
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="QuestionsBank" element={<QuestionsBank />}>
                        <Route
                          path="QuestionCreate"
                          element={<QuestionCreate />}
                        />
                        <Route path="QuestionView" element={<QuestionView />} />
                        <Route
                          path="UpdateQuestion"
                          element={<UpdateQuestion />}
                        />
                      </Route>

                      <Route path="Student" element={<Student />}>
                        <Route
                          path="StudentUpdate"
                          element={<StudentUpdate />}
                        />
                        <Route
                          path="StudentCreate"
                          element={<StudentCreate />}
                        />
                        <Route path="StudentView" element={<StudentView />} />
                      </Route>
                      <Route path="Invoices" element={<Invoices />} />
                      <Route path="Contacts" element={<Contacts />} />
                      <Route path="Bar" element={<Bar />} />
                      <Route path="Form" element={<Form />} />
                      <Route path="Pie" element={<Pie />} />
                      <Route path="FAQ" element={<FAQ />} />
                      <Route path="Geography" element={<Geography />} />
                      <Route path="Line" element={<Line />} />
                      <Route path="Calendar" element={<Calendar />} />
                      <Route
                        path="*"
                        element={
                          <div className="container">
                            <h2>Page Not Found</h2>
                          </div>
                        }
                      />
                    </Routes>
                  </main>
                </div>
              </ThemeProvider>
            </colorModeContext.Provider>
          </StoreValuesProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
