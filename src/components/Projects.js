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
            descriptions: [{text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab error, facilis officia libero!", height: "22px", deleteButton: "none"},
                            {text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, corrupti.", height: "22px", deleteButton: "none"},
                            {text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum impedit cum dolore?", height: "22px", deleteButton: "none"}
                            ],
            buttonsContainer: "none",
        }

        let defaultProject2 = {
            title: "Algorithm Visualizer",
            titleInputWidth: 17, 
            moreInformation: "Java, Springboot, Maven, Docker",
            moreInformationInputWidth: 27,
            date: "Sep. 2016 - Dec. 2016",
            dateInputWidth: 18,
            descriptions: [{text: "LLorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate vel consequuntur", height: "22px", deleteButton: "none"},
                            {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, qui aliquam", height: "22px", deleteButton: "none"},
                            ],
            buttonsContainer: "none",
        }

        this.state = {
            projects: [defaultProject1, defaultProject2],
            defaultTitle: "Project name",
            defaultTitleInputWidth: 11,
            defaultMoreInformation: "More information",
            defaultMoreInformationInputWidth: 15,
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
            moreInformation: "More information",
            moreInformationInputWidth: this.state.defaultMoreInformationInputWidth,
            date: this.state.defaultDate,
            dateInputWidth: this.state.defaultDateInputWidth,
            descriptions: [{text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab error, facilis officia libero!", height: "22px", deleteButton: "none"}],
            buttonsContainer: "none",
        }

        let newProjects = [...this.state.projects, defaultProject];

        this.setState({
            projects: newProjects,
        })
    }


    showButtonsContainer = (event, index) => {
        let newProjects = [...this.state.projects];
        newProjects[index].buttonsContainer = "inline-block";
        this.setState({
            projects: newProjects,
        })
    }

    hideButtonsContainer = (event, index) => {
        let newProjects = [...this.state.projects];
        newProjects[index].buttonsContainer = "none";
        this.setState({
            projects: newProjects,
        })
    }
        addContributionElement = (event, experienceIndex) => {
        let newContribution = {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis enim ut nulla similique", 
            height: "25px",
            deleteButton: "none"
        }

        let newExperiences = [...this.state.experiences];
        newExperiences[experienceIndex].contributions = [...this.state.experiences[experienceIndex].contributions, newContribution];

        this.setState({
            experiences: newExperiences,
        })
    }

    deleteContributionIfEmpty = (event, experienceIndex, contributionIndex) => {
        if (event.target.value == ""){
            let newExperiences = [...this.state.experiences];
            newExperiences[experienceIndex].contributions = newExperiences[experienceIndex].contributions.filter((contribution, index) => {
                return index !== contributionIndex;
            })

            this.setState({
                experiences: newExperiences,
            })
        }
    }

    deleteProjectElement = (event, index) => {
        let newProjects = this.state.projects.filter((project, projectIndex) => {
            return projectIndex !== index;
        })

        this.setState({
            projects: newProjects,
        })
    }

    addDescriptionElement = (event, projectIndex) => {
        let newDescription = {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, qui aliquam", 
            height: "22px"
        }

        let newProjects = [...this.state.projects];
        newProjects[projectIndex].descriptions = [...this.state.projects[projectIndex].descriptions, newDescription];

        this.setState({
            projects: newProjects,
        })
    }

    deleteDescriptionIfEmpty = (event, projectIndex, descriptionIndex) => {
        if (event.target.value == ""){
            let newProjects = [...this.state.projects];
            newProjects[projectIndex].descriptions = newProjects[projectIndex].descriptions.filter((contribution, index) => {
                return index !== descriptionIndex;
            })

            this.setState({
                projects: newProjects,
            })
        }
    }

    deleteDescription = (event, projectIndex, descriptionIndex) => {
        let newProjects = [...this.state.projects];
        newProjects[projectIndex].descriptions = newProjects[projectIndex].descriptions.filter((contribution, index) => {
            return index !== descriptionIndex;
        })

        this.setState({
            projects: newProjects,
        })
    }

    showDeleteDescriptionButton = (event, projectIndex, descriptionIndex) => {
        let newProjects = [...this.state.projects];
        newProjects[projectIndex].descriptions[descriptionIndex].deleteButton = "inline-block";

        this.setState({
            projects: newProjects,
        })
    }

    hideDeleteDescriptionButton = (event, projectIndex, descriptionIndex) => {
        let newProjects = [...this.state.projects];
        newProjects[projectIndex].descriptions[descriptionIndex].deleteButton = "none";

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
                            <div className={ProjectsCSS.topContainer} onMouseEnter={event => this.showButtonsContainer(event, projectIndex)}
                                onMouseLeave={event => this.hideButtonsContainer(event, projectIndex)}>
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
                                    <div style={{display: project.buttonsContainer}} className={ProjectsCSS.buttonContainer}>
                                        <i onClick={event => this.addDescriptionElement(event, projectIndex) } className="fa-solid fa-plus"></i>
                                        <i onClick={event => this.deleteProjectElement(event, projectIndex)} className="fa-solid fa-minus"></i>
                                    </div>
                                </div>
                                <input style={{ width: project.dateInputWidth + "ch" }} type="text" name="date" 
                                        value={project.date} className={ProjectsCSS.date}
                                        onChange={event => { this.handleInputChange(event, projectIndex); this.changeInputWidth(event, projectIndex) }}
                                        onBlur={event => { this.setInputIfEmpty(event, projectIndex) }} />
                            </div>
                            
                            <div className={ProjectsCSS.descriptionContainer}>
                                {project.descriptions.map((description, descriptionIndex) => {
                                    return (
                                        <div key={descriptionIndex} className={ProjectsCSS.descriptionItemContainer} 
                                        onMouseLeave={event => this.hideDeleteDescriptionButton(event, projectIndex, descriptionIndex)}
                                        onMouseEnter={event => this.showDeleteDescriptionButton(event, projectIndex, descriptionIndex)}>
                                            <div className={ProjectsCSS.textareaContainer}>
                                                <div className={ProjectsCSS.dotContainer}>
                                                    <i className="fa-solid fa-circle"></i>
                                                </div>

                                                <textarea style={{height: description.height}}
                                                className={ProjectsCSS.description} value={description.text} name=""
                                                rows="1" onChange={event => {this.handleTextAreaChange(event, projectIndex, descriptionIndex); 
                                                this.resizeTextArea(event, projectIndex, descriptionIndex)}}
                                                onBlur={event => this.deleteDescriptionIfEmpty(event, projectIndex, descriptionIndex)}></textarea>
                                            </div>
                                            <div>
                                                <i onClick={event => this.deleteDescription(event, projectIndex, descriptionIndex)} 
                                                style={{display: description.deleteButton}}
                                                className="fa-solid fa-minus"></i>
                                            </div>
                                            
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Projects;