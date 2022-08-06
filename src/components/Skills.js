import React, {Component} from "react";
import SkillsCSS from "./Skills.module.css";

class Skills extends Component {
    constructor(props){
        super(props);

        let defaultSkills1 = {
            title: "Languages:",
            titleInputWidth: 10,
            description: "Python, Java, C++, PostgreSQL, JavaScript, HTML, CSS",
            descriptionHeight: "20px",
        }

        let defaultSkills2 = {
            title: "Frameworks and tools:",
            titleInputWidth: 18,
            description: "React, Flask, Node.js, Maven, Docker, Springboot, Git, VS Code, Next.js",
            descriptionHeight: "20px", 
        }

        this.state = {
            skills: [defaultSkills1, defaultSkills2],
            defaultTitle: "Skill name",
            defaultTitleInputWidth: 12,
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

    render(){
        return (
            <div className={SkillsCSS.mainContainer}>
                <div className={SkillsCSS.titleContainer}>
                    <p className={SkillsCSS.title}>SKILLS</p>
                </div>

                {this.state.skills.map((skill, skillIndex) => {
                    return (
                        <div key={skillIndex} className={SkillsCSS.container}>
                            <input style={{ width: skill.titleInputWidth + "ch", height: "20px"}} 
                                type="text" name="title" 
                                value={skill.title} className={SkillsCSS.skillTitle}
                                onChange={event => { this.handleInputChange(event, skillIndex); this.changeInputWidth(event, skillIndex) }}
                                onBlur={event => { this.setInputIfEmpty(event, skillIndex) }} />
                            <textarea style={{height: skill.descriptionHeight}}
                            className={SkillsCSS.description} value={skill.description} name="description"
                            rows="1" onChange={event => {this.handleInputChange(event, skillIndex); 
                            this.resizeTextArea(event, skillIndex)}}></textarea>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Skills;