import "./Footer.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const Footer = () => {
    return (
        <footer>
            <p>Built with ❤️ by Srijan Biswas</p>
            <a href="https://www.linkedin.com/in/sb07/">
                <AiFillLinkedin size="20px"/>
            </a>
            <a href="https://github.com/srijanB7"><AiFillGithub size="20px"/></a>
        </footer>
    );
};
