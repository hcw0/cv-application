import React, {Component} from "react";
import ProjectsCSS from "./Projects.module.css";

class Projects extends Component {
    constructor(props){
        super(props);

        let defaultProject1 = {
            title: "Stock Trading Simulator",
            titleInputWidth: 20, 
            moreInformation: "Python, Flask, React, PostgreSQL",
            moreInformationInputWidth: 27,
            date: "Jan. 2017 - May 2017",
            dateInputWidth: 18,
            description: [],
        }

        this.state = {
            projects: [defaultProject1],
            defaultTitle: "Project name",
            defaultTitleInputWidth: 11,
            defaultMoreInformationInputWidth: 10,
            defaultDate: "Month Year - Month Year",
            defaultDateInputWidth: 20,
        }
    }

    handleInputChange = (event, index) => {
        let newProjects = [...this.state.projects];
        let varName = event.target.name;
        newProjects[index][varName] = event.target.value;
        this.setState({
            projects: newProjects,
        });
    }

    changeInputWidth = (event, index) => {
        let newProjects = [...this.state.projects];
        newProjects[index][event.target.name + "InputWidth"] = event.target.value.length;
        this.setState({
            projects: newProjects,
        });
    }

    setInputIfEmpty = (event, index) => {
        let newProjects = [...this.state.projects];
        const inputName = event.target.name;
        const inputWidth = inputName + "InputWidth";
        if (event.target.value == "") {
            if (inputName == "title") {
                newProjects[index][inputName] = this.state.defaultTitle;
                newProjects[index][inputWidth] = this.state.defaultTitleInputWidth;
            } else if (inputName == "moreInformation") {
                newProjects[index][inputWidth] = this.state.defaultMoreInformationInputWidth;
            } else if (inputName == "date") {
                newProjects[index][inputName] = this.state.defaultDate;
                newProjects[index][inputWidth] = this.state.defaultDateInputWidth;
            }
        }
        this.setState({
            projects: newProjects,
        });
    }

    render(){
        return (
            <div className={ProjectsCSS.mainContainer}>
                <div className={ProjectsCSS.titleContainer}>
                    <p className={ProjectsCSS.title}>PROJECTS</p>
                </div>

                {this.state.projects.map((project, projectIndex) => {
                    return (
                        <div key={projectIndex} className={ProjectsCSS.projectsContainer}>
                            <div className={ProjectsCSS.topContainer}>
                                <div className={ProjectsCSS.leftContainer}>
                                    <input style={{ width: project.titleInputWidth + "ch", borderRight: project.moreInformation != "" ? "1px solid black" : ""}} 
                                        type="text" name="title" 
                                        value={project.title} className={ProjectsCSS.projectTitle}
                                        onChange={event => { this.handleInputChange(event, projectIndex); this.changeInputWidth(event, projectIndex) }}
                                        onBlur={event => { this.setInputIfEmpty(event, projectIndex) }} />
                                    <input style={{ width: project.moreInformationInputWidth + "ch" }} type="text" name="moreInformation" 
                                        value={project.moreInformation} className={ProjectsCSS.moreInformation}
                                        onChange={event => { this.handleInputChange(event, projectIndex); this.changeInputWidth(event, projectIndex) }}
                                        onBlur={event => { this.setInputIfEmpty(event, projectIndex) }} />
                                </div>
                                <input style={{ width: project.dateInputWidth + "ch" }} type="text" name="date" 
                                        value={project.date} className={ProjectsCSS.date}
                                        onChange={event => { this.handleInputChange(event, projectIndex); this.changeInputWidth(event, projectIndex) }}
                                        onBlur={event => { this.setInputIfEmpty(event, projectIndex) }} />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Projects;