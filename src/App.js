import "./App.css";

import SearchAppBar from "./components/SearchAppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import DetailJob from "./pages/DetailJob";
import { CssBaseline } from "@mui/material";
import { createContext, useState } from "react";
import Login from "./pages/Login";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export const CurrentUserContext = createContext(null);

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <ThemeProvider theme={darkTheme}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <CssBaseline />
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job/:id" element={<DetailJob />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </CurrentUserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
