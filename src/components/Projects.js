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
            descriptions: [{text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab error, facilis officia libero!", height: "22px"},
                            {text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, corrupti.", height: "22px"},
                            {text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum impedit cum dolore?", height: "22px"}
                            ],
        }

        let defaultProject2 = {
            title: "Algorithm Visualizer",
            titleInputWidth: 17, 
            moreInformation: "Java, Springboot, Maven, Docker",
            moreInformationInputWidth: 27,
            date: "Sep. 2016 - Dec. 2016",
            dateInputWidth: 18,
            descriptions: [{text: "LLorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate vel consequuntur", height: "22px"},
                            {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, qui aliquam", height: "22px"},
                            ],

        }

        this.state = {
            projects: [defaultProject1, defaultProject2],
            defaultTitle: "Project name",
            defaultTitleInputWidth: 11,
            defaultMoreInformationInputWidth: 10,
            defaultDate: "Month Year - Month Year",
            defaultDateInputWidth: 20,
            addButton: "none",
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

    resizeTextArea = (event, projectIndex, descriptionIndex) => {
        this.state.projects[projectIndex].descriptions[descriptionIndex].height = event.target.scrollHeight + "px";
    }

    handleTextAreaChange = (event, projectIndex, descriptionIndex) => {
        let newProjects = [...this.state.projects];
        let newDescriptions = [...this.state.projects[projectIndex].descriptions];
        newDescriptions[descriptionIndex].text = event.target.value;
        newProjects[projectIndex].contributions = newDescriptions;

        this.setState({
            projects: newProjects,
        })
    }

    showAddButton = event => {
        event.preventDefault();
        this.setState({
            addButton: "inline-block",
        })
    }
    
    hideAddButton = event => {
        event.preventDefault();
        this.setState({
            addButton: "none",
        })
    }

    addProjectElement = event => {
        let defaultProject = {
            title: this.state.defaultTitle,
            titleInputWidth: this.state.defaultTitleInputWidth,
            moreInformation: "",
            moreInformationInputWidth: this.state.defaultMoreInformationInputWidth,
            date: this.state.defaultDate,
            dateInputWidth: this.state.defaultDateInputWidth,
            descriptions: [{text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab error, facilis officia libero!", height: "22px"}]
        }

        let newProjects = [...this.state.projects, defaultProject];

        this.setState({
            projects: newProjects,
        })
    }

    render(){
        return (
            <div className={ProjectsCSS.mainContainer}>
                <div className={ProjectsCSS.titleContainer} onMouseEnter={this.showAddButton} onMouseLeave={this.hideAddButton}>
                    <span className={ProjectsCSS.title}>PROJECTS</span>
                    <i style={{display: this.state.addButton}} onClick={this.addProjectElement} className="fa-solid fa-plus"></i>
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

                            <ul className={ProjectsCSS.descriptionContainer}>
                                {project.descriptions.map((description, descriptionIndex) => {
                                    return (
                                        <li key={descriptionIndex}>
                                            <textarea style={{height: description.height}}
                                            className={ProjectsCSS.description} value={description.text} name=""
                                            rows="1" onChange={event => {this.handleTextAreaChange(event, projectIndex, descriptionIndex); 
                                            this.resizeTextArea(event, projectIndex, descriptionIndex)}}></textarea>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Projects;