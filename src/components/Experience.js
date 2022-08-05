import React, {Component} from "react";
import Education from "./Education";
import ExperienceCSS from "./Experience.module.css";

class Experience extends Component{
    constructor(props){
        super(props);

         let defaultExperience1 = {
            title: "Software Engineer",
            titleInputWidth: 15,
            date: "June 2020 - Present",
            dateInputWidth: 17,
            company: "Vivat company",
            companyInputWidth: 14,
            location: "Manhattan, NY",
            locationInputWidth: 13,
            contributions: [{text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, numquam", height: "25px"},
                            {text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum corrupti blanditiis necessitatibus dolore" +
                            "nam numquam error ratione dolores recusandae, sint ad explicabo voluptatem alias praesentium minus cum quasi laboriosam", height: "58px"},
                            {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis enim ut nulla similique" +
                            "minima natus ipsam quaerat fugiat reprehenderit distinctio", height: "40px"},
                            ]
         }

        this.state = {
            experiences: [defaultExperience1],
            defaultTitle: "Title name",
            defaultTitleInputWidth: 9,
            defaultDate: "Month Year - Month Year",
            defaultDateInputWidth: 20,
            defaultCompany: "Company name",
            defaultCompanyInputWidth: 13,
            defaultLocation: "City, State",
            defaultLocationInputWidth: 10,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event, index) => {
        let newExperiences = [...this.state.experiences];
        let varName = event.target.name;
        newExperiences[index][varName] = event.target.value;
        this.setState({
            experiences: newExperiences,
        });
    }

    changeInputWidth = (event, index) => {
        let newExperiences = [...this.state.experiences];
        newExperiences[index][event.target.name + "InputWidth"] = event.target.value.length;
        this.setState({
            experiences: newExperiences,
        });
    }

    setNameInputIfEmpty = (event, index) => {
        const newExperiences = [...this.state.experiences];
        const inputName = event.target.name;
        const inputWidth = inputName + "InputWidth";
        if (event.target.value == "") {
            if (inputName == "title") {
                newExperiences[index][inputName] = this.state.defaultTitle;
                newExperiences[index][inputWidth] = this.state.defaultTitleInputWidth;
            } else if (inputName == "date") {
                newExperiences[index][inputName] = this.state.defaultDate;
                newExperiences[index][inputWidth] = this.state.defaultDateInputWidth;
            } else if (inputName == "company") {
                newExperiences[index][inputName] = this.state.defaultCompany;
                newExperiences[index][inputWidth] = this.state.defaultCompanyInputWidth;
            } else if (inputName == "location") {
                newExperiences[index][inputName] = this.state.defaultLocation;
                newExperiences[index][inputWidth] = this.state.defaultLocationInputWidth;
            }
        }
        this.setState({
            experiences: newExperiences,
        });
    }

    resizeTextArea = (event, experienceIndex, contributionIndex) => {
        this.state.experiences[experienceIndex].contributions[contributionIndex].height = event.target.scrollHeight + "px";
    }

    handleTextAreaChange = (event, experienceIndex, contributionIndex) => {
        let newExperiences = [...this.state.experiences];
        let newContributions = [...this.state.experiences[experienceIndex].contributions];
        newContributions[contributionIndex].text = event.target.value;
        newExperiences[experienceIndex].contributions = newContributions;

        this.setState({
            experiences: newExperiences,
        })
    }
 

    render(){
        return(
            <div className={ExperienceCSS.mainContainer}>
                <div className={ExperienceCSS.titleContainer}>
                    <p className={ExperienceCSS.title}>EXPERIENCE</p>
                </div>
                
                {this.state.experiences.map((experience, experienceIndex) => {
                    return (
                        <div key={experienceIndex} className={ExperienceCSS.experienceContainer}>
                            <div className={ExperienceCSS.titleDateContainer}>
                                <input style={{ width: experience.titleInputWidth + "ch" }} type="text" name="title" 
                                    value={experience.title} className={ExperienceCSS.jobTitle}
                                    onChange={event => { this.handleInputChange(event, experienceIndex); this.changeInputWidth(event, experienceIndex) }}
                                    onBlur={event => { this.setNameInputIfEmpty(event, experienceIndex) }} />
                                <input style={{ width: experience.dateInputWidth + "ch" }} type="text" name="date"
                                    value={experience.date} className={ExperienceCSS.date}
                                    onChange={event => { this.handleInputChange(event, experienceIndex); this.changeInputWidth(event, experienceIndex) }}
                                    onBlur={event => { this.setNameInputIfEmpty(event, experienceIndex) }} />
                            </div>
                            <div className={ExperienceCSS.companyLocationContainer}>
                                <input style={{ width: experience.companyInputWidth + "ch" }} type="text" name="company" 
                                    value={experience.company} className={ExperienceCSS.company}
                                    onChange={event => { this.handleInputChange(event, experienceIndex); this.changeInputWidth(event, experienceIndex) }}
                                    onBlur={event => { this.setNameInputIfEmpty(event, experienceIndex) }} />
                                <input style={{ width: experience.locationInputWidth + "ch" }} type="text" name="location"
                                    value={experience.location} className={ExperienceCSS.location}
                                    onChange={event => { this.handleInputChange(event, experienceIndex); this.changeInputWidth(event, experienceIndex) }}
                                    onBlur={event => { this.setNameInputIfEmpty(event, experienceIndex) }} />
                            </div>
                            <ul className={ExperienceCSS.contributionsContainer}>
                                {experience.contributions.map((contribution, contributionIndex) => {
                                    return (
                                        <li key={contributionIndex}>
                                            <textarea style={{height: this.state.experiences[experienceIndex].contributions[contributionIndex].height}}
                                            className={ExperienceCSS.contribution} value={contribution.text} name="" id=""
                                            rows="1" onChange={event => {this.handleTextAreaChange(event, experienceIndex, contributionIndex); 
                                            this.resizeTextArea(event, experienceIndex, contributionIndex)}}></textarea>
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

export default Experience;