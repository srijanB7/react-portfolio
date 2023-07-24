import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { UseTheme } from "../../context/ThemeContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"

export const Navbar = () => {
    const { darkMode, setDarkMode } = UseTheme();
    return (
        <nav>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/projects"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Projects
            </NavLink>
            <a href="https://hashnode.com/@srijan7">Blog</a>
            <button onClick={() => setDarkMode((prev) => !prev)} className="theme-btn">
                {darkMode ? <BsFillSunFill color="yellow" size="20px"/> : <BsFillMoonFill size="20px"/>}
            </button>
        </nav>
    );
};
