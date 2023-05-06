import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { colorModeContext, useMode } from "./theme";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard/Dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/dashboard/Team";
import Invoices from "./scenes/dashboard/Invoices";
import Contacts from "./scenes/dashboard/Contacts";
import Bar from "./scenes/dashboard/Bar";
import Form from "./scenes/dashboard/Form";
import Line from "./scenes/dashboard/Line";
import Pie from "./scenes/dashboard/Pie";
import FAQ from "./scenes/dashboard/FAQ";
import Geography from "./scenes/dashboard/Geography";
import Calendar from "./scenes/dashboard/Calendar";
import QuestionsBank from "./scenes/dashboard/questionsBank";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const themeRtl = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
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
          <colorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                <Sidebar />
                <main className="content">
                  <Topbar />
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/QuestionsBank" element={<QuestionsBank />} />
                    <Route path="/Team" element={<Team />} />
                    <Route path="/Invoices" element={<Invoices />} />
                    <Route path="/Contacts" element={<Contacts />} />
                    <Route path="/Bar" element={<Bar />} />
                    <Route path="/Form" element={<Form />} />
                    <Route path="/Pie" element={<Pie />} />
                    <Route path="/FAQ" element={<FAQ />} />
                    <Route path="/Geography" element={<Geography />} />
                    <Route path="/Line" element={<Line />} />
                    <Route path="/Calendar" element={<Calendar />} />
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
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
