import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { UseTheme } from "./context/ThemeContext";

function App() {
    const { darkMode } = UseTheme();

    return (
        <div className={darkMode ? "theme-dark" : "theme-light"}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
    );
}

export default App;
