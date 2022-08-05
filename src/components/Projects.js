import React, {Component} from "react";
import ProjectsCSS from "./Projects.module.css";

class Projects extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={ProjectsCSS.mainContainer}>
                <div className={ProjectsCSS.titleContainer}>
                    <p className={ProjectsCSS.title}>PROJECTS</p>
                </div>
            </div>
        )
    }
}

export default Projects;