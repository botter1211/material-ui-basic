import "./App.css";

import SearchAppBar from "./components/SearchAppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import DetailJob from "./pages/DetailJob";
import { CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job/:id" element={<DetailJob />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
