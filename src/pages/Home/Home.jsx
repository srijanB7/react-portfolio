import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { UseTheme } from "../../context/ThemeContext";
import "./Home.css";

export const Home = () => {
    const { darkMode } = UseTheme();
    return (
        <div className="home-container">
            <Navbar />
            <div className="home-content">
                <div className="left">
                    <h2 className="drop-in">Hi There<span className="hand">👋🏻</span>, I'm Srijan</h2>
                    
                    <p>
                        I'm currently looking for a role in FrontEnd
                        engineering.
                    </p>
                    <p>
                        Current Stack: <strong>React, React-Router, CSS, HTML, JS</strong>
                    </p>
                </div>
                <div className="right">
                <img
                        src={
                            darkMode
                                ? "https://res.cloudinary.com/dcxnaihyu/image/upload/v1689699644/assets_2F-LyosnJlPnwmmsZPCFAx_2F-Lz3j9bBMBpVDAgEYGdp_2F-Lz3jDXONujG0i1okt_V_2Fcomputers_masxfo-removebg-preview-removebg-preview_1_gsle8c.jpg"
                                : "https://res.cloudinary.com/dcxnaihyu/image/upload/v1689696525/assets_2F-LyosnJlPnwmmsZPCFAx_2F-Lz3j9bBMBpVDAgEYGdp_2F-Lz3jDXONujG0i1okt_V_2Fcomputers_masxfo-removebg-preview_t9p4zj.jpg"
                        }
                        alt="programmer"
                        className="home-img"
                    />
                    
                </div>
            </div>
            <Footer />
        </div>
    );
};
