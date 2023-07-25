import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { Projectcard } from "../../components/Projectcard/Projectcard";
import { projectData } from "../../data/projectData";
import "./Projects.css";

export const Projects = () => {
    return (
        <div className="projects-container">
            <Navbar />
            <div className="projects-content">
                {projectData.map((project) => (
                    <Projectcard key={project.id} {...project} />
                ))}
                {/* {
          projectData.map(project => <Projectcard key={project.id} {...project}/>)
        }
        {
          projectData.map(project => <Projectcard key={project.id} {...project}/>)
        } */}
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};
