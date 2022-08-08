import React, {Component} from "react";
import SkillsCSS from "./Skills.module.css";

class Skills extends Component {
    constructor(props){
        super(props);

        let defaultSkills1 = {
            title: "Languages:",
            titleInputWidth: 10,
            description: "Python, Java, C++, PostgreSQL, JavaScript, HTML, CSS",
            descriptionHeight: "22px",
            deleteButton: "none"
        }

        let defaultSkills2 = {
            title: "Frameworks and tools:",
            titleInputWidth: 18,
            description: "React, Flask, Node.js, Maven, Docker, Springboot, Git, VS Code, Next.js",
            descriptionHeight: "22px", 
            deleteButton: "none"
        }

        this.state = {
            skills: [defaultSkills1, defaultSkills2],
            defaultTitle: "Skill name:",
            defaultTitleInputWidth: 9,
            defaultDescription: "Skills list",
            defaultDescriptionHeight: "20px",
            addButton: "none",
        }
    }

    handleInputChange = (event, index) => {
        let newSkills = [...this.state.skills];
        let varName = event.target.name;
        newSkills[index][varName] = event.target.value;
        this.setState({
            skills: newSkills,
        });
    }

    changeInputWidth = (event, index) => {
        let newSkills = [...this.state.skills];
        newSkills[index][event.target.name + "InputWidth"] = event.target.value.length;
        this.setState({
            skills: newSkills,
        });
    }

    setInputIfEmpty = (event, index) => {
        let newSkills = [...this.state.skills];
        const inputName = event.target.name;
        const inputWidth = inputName + "InputWidth";
        if (event.target.value == "") {
            if (inputName == "title") {
                newSkills[index][inputName] = this.state.defaultTitle;
                newSkills[index][inputWidth] = this.state.defaultTitleInputWidth;
            } else if (inputName == "moreInformation") {
                newSkills[index][inputWidth] = this.state.defaultMoreInformationInputWidth;
            }
        }
        this.setState({
            skills: newSkills,
        });
    }

    resizeTextArea = (event, index) => {
        this.state.skills[index].descriptionHeight = event.target.scrollHeight + "px";
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

    addSkillItem = event => {
        let defaultSkill = {
            title: this.state.defaultTitle,
            titleInputWidth: this.state.defaultTitleInputWidth,
            description: this.state.defaultDescription,
            descriptionHeight: this.state.defaultDescriptionHeight,
            deleteButton: "none"
        }

        let newSkills = [...this.state.skills, defaultSkill];

        this.setState({
            skills: newSkills,
        })
    }

    deleteSkillIfEmpty = (event, index) => {
        if (event.target.value == ""){
            let newSkills = this.state.skills.filter((skill, skillIndex) => {
                return skillIndex !== index;
            })

            this.setState({
                skills: newSkills,
            })
        }
    }

    deleteSkill = (event, index) => {
        let newSkills = this.state.skills.filter((skill, skillIndex) => {
            return skillIndex !== index;
        })

        this.setState({
            skills: newSkills,
        })
    }

    showDeleteButton = (event, index) => {
        let newSkills = [...this.state.skills];
        newSkills[index].deleteButton = "inline-block";

        this.setState({
            skills: newSkills,
        })
    }

    hideDeleteButton = (event, index) => {
        let newSkills = [...this.state.skills];
        newSkills[index].deleteButton = "none";

        this.setState({
            skills: newSkills,
        })
    }

    render(){
        return (
            <div className={SkillsCSS.mainContainer}>
                <div className={SkillsCSS.titleContainer} onMouseEnter={this.showAddButton} onMouseLeave={this.hideAddButton}>
                    <span className={SkillsCSS.title}>SKILLS</span>
                    <i style={{display: this.state.addButton}} onClick={this.addSkillItem} className="fa-solid fa-plus"></i>
                </div>

                {this.state.skills.map((skill, skillIndex) => {
                    return (
                        <div key={skillIndex} className={SkillsCSS.container} onMouseEnter={event => this.showDeleteButton(event, skillIndex)}
                        onMouseLeave={event => this.hideDeleteButton(event, skillIndex)}>
                            <input style={{ width: skill.titleInputWidth + "ch", height: "20px"}} 
                                type="text" name="title"
                                value={skill.title} className={SkillsCSS.skillTitle}
                                onChange={event => { this.handleInputChange(event, skillIndex); this.changeInputWidth(event, skillIndex) }}
                                onBlur={event => { this.setInputIfEmpty(event, skillIndex) }} />
                            <textarea style={{height: skill.descriptionHeight}}
                            className={SkillsCSS.description} value={skill.description} name="description"
                            rows="1" onChange={event => {this.handleInputChange(event, skillIndex); 
                            this.resizeTextArea(event, skillIndex)}}
                            onBlur={event => this.deleteSkillIfEmpty(event, skillIndex)}></textarea>
                            <div>
                                <i style={{display: skill.deleteButton}} onClick={event => this.deleteSkill(event, skillIndex)} className="fa-solid fa-minus"></i>
                            </div>

                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Skills;