import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

import "./Projectcard.css";

export const Projectcard = ({
  img,
  desc,
  title,
  stack,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="card-container">
      <div className="top">
        <img className="project-image" src={img} alt="project" />
      </div>
      <div className="bottom">
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>{stack}</p>
      </div>
      <div className="links">
        <a href={githubLink}>
          <AiFillGithub size="20px" className="link" />
        </a>
        <a href={liveLink}>
          <AiOutlineLink size="20px" className="link" />
        </a>
      </div>
    </div>
  );
};
