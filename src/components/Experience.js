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
            buttonsContainer: "none",
            contributions: [{text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, numquam", height: "22px", deleteButton: "none"},
                            {text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum corrupti blanditiis necessitatibus dolore" +
                            "nam numquam error ratione dolores recusandae, sint ad explicabo", height: "40px", deleteButton: "none"},
                            {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis enim ut nulla similique" +
                            "minima natus ipsam quaerat fugiat reprehenderit distinctio", height: "40px", deleteButton: "none"},
                            ],

        }

        let defaultExperience2 = {
            title: "Machine Learning Research Asistant",
            titleInputWidth: 30,
            date: "June 2019 - Aug. 2019",
            dateInputWidth: 19,
            company: "Duke University",
            companyInputWidth: 13,
            location: "Durham, NC",
            locationInputWidth: 11,
            buttonsContainer: "none",
            contributions: [{text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque", height: "22px", deleteButton: "none"},
                            {text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum corrupti blanditiis necessitatibus dolore", height: "40px", deleteButton: "none"},
                            {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis enim ut nulla similique", height: "22px", deleteButton: "none"},
                            ],
            deleteButton: "none"
        }

        let defaultExperience3 = {
            title: "Software Engineer Intern",
            titleInputWidth: 21,
            date: "June 2018 - Aug. 2018",
            dateInputWidth: 19,
            company: "Monsoon Equi Company",
            companyInputWidth: 21,
            location: "San Francisco, CA",
            locationInputWidth: 16,
            buttonsContainer: "none",
            contributions: [{text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum corrupti blanditiis necessitatibus dolore", height: "40px", deleteButton: "none"},
                            {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis enim ut nulla similique", height: "25px", deleteButton: "none"},
                            ],
            deleteButton: "none"
        }

        this.state = {
            experiences: [defaultExperience1, defaultExperience2, defaultExperience3],
            defaultTitle: "Title name",
            defaultTitleInputWidth: 9,
            defaultDate: "Month Year - Month Year",
            defaultDateInputWidth: 20,
            defaultCompany: "Company name",
            defaultCompanyInputWidth: 13,
            defaultLocation: "City, State",
            defaultLocationInputWidth: 10,
            addExperienceButton: "none",
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
 
    showAddExperienceButton = event => {
        event.preventDefault();
        this.setState({
            addExperienceButton: "inline-block",
        })
    }
    
    hideExperienceAddButton = event => {
        event.preventDefault();
        this.setState({
            addExperienceButton: "none",
        })
    }

    addExperienceItem = event => {
        let defaultExperience = {
            title: "Title name",
            titleInputWidth: 9,
            date: "Month Year - Month Year",
            dateInputWidth: 20,
            company: "Company name",
            companyInputWidth: 13,
            location: "City, State",
            locationInputWidth: 10,
            buttonsContainer: "none",
            contributions: [{text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis enim ut nulla similique", height: "25px", deleteButton: "none"},
                            ],
        }

        let newExperiences = [...this.state.experiences, defaultExperience];

        this.setState({
            experiences: newExperiences,
        })
    }

    showButtonsContainer = (event, index) => {
        let newExperiences = [...this.state.experiences];
        newExperiences[index].buttonsContainer = "inline-block";
        this.setState({
            experiences: newExperiences,
        })
    }

    hideButtonsContainer = (event, index) => {
        let newExperiences = [...this.state.experiences];
        newExperiences[index].buttonsContainer = "none";
        this.setState({
            experiences: newExperiences,
        })
    }

    deleteExperienceElement = (event, index) => {
        let newExperiences = this.state.experiences.filter((experience, experienceIndex) => {
            return experienceIndex !== index;
        })

        this.setState({
            experiences: newExperiences,
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

    deleteContribution = (event, experienceIndex, contributionIndex) => {
        let newExperiences = [...this.state.experiences];
        newExperiences[experienceIndex].contributions = newExperiences[experienceIndex].contributions.filter((contribution, index) => {
            return index !== contributionIndex;
        })

        this.setState({
            experiences: newExperiences,
        })
        
    }


    showDeleteContributionButton = (event, experienceIndex, contributionIndex) => {
        let newExperiences = [...this.state.experiences];
        newExperiences[experienceIndex].contributions[contributionIndex].deleteButton = "inline-block";

        this.setState({
            experiences: newExperiences,
        })
    }

    hideDeleteContributionButton = (event, experienceIndex, contributionIndex) => {
        let newExperiences = [...this.state.experiences];
        newExperiences[experienceIndex].contributions[contributionIndex].deleteButton = "none";

        this.setState({
            experiences: newExperiences,
        })
    }

    render(){
        return(
            <div className={ExperienceCSS.mainContainer}>
                <div className={ExperienceCSS.titleContainer} onMouseEnter={this.showAddExperienceButton} onMouseLeave={this.hideExperienceAddButton}>
                    <span className={ExperienceCSS.title}>EXPERIENCE</span>
                    <i style={{display: this.state.addExperienceButton}}  className="fa-solid fa-plus" onClick={this.addExperienceItem}></i>
                </div>
                
                {this.state.experiences.map((experience, experienceIndex) => {
                    return (
                        <div key={experienceIndex} className={ExperienceCSS.experienceContainer}>
                            <div className={ExperienceCSS.titleDateContainer} onMouseEnter={event => this.showButtonsContainer(event, experienceIndex)}
                                onMouseLeave={event => this.hideButtonsContainer(event, experienceIndex)}>
                                <div>
                                    <input style={{ width: experience.titleInputWidth + "ch" }} type="text" name="title" 
                                        value={experience.title} className={ExperienceCSS.jobTitle}
                                        onChange={event => { this.handleInputChange(event, experienceIndex); this.changeInputWidth(event, experienceIndex) }}
                                        onBlur={event => { this.setNameInputIfEmpty(event, experienceIndex) }} />
                                    <div style={{display: experience.buttonsContainer}} className={ExperienceCSS.buttonContainer}>
                                        <i onClick={event => this.addContributionElement(event, experienceIndex) } className="fa-solid fa-plus"></i>
                                        <i onClick={event => this.deleteExperienceElement(event, experienceIndex)} className="fa-solid fa-minus"></i>
                                    </div>

                                </div>
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
                            {/* <ul className={ExperienceCSS.contributionsContainer}>
                                {experience.contributions.map((contribution, contributionIndex) => {
                                    return (
                                        <li key={contributionIndex}>
                                            <textarea style={{height: this.state.experiences[experienceIndex].contributions[contributionIndex].height}}
                                            className={ExperienceCSS.contribution} value={contribution.text} name="" id=""
                                            rows="1" onChange={event => {this.handleTextAreaChange(event, experienceIndex, contributionIndex); 
                                            this.resizeTextArea(event, experienceIndex, contributionIndex)}}
                                            onBlur={event => this.deleteContributionIfEmpty(event, experienceIndex, contributionIndex)}></textarea>
                                        </li>
                                    )
                                })}
                            </ul> */}
                            <div className={ExperienceCSS.contributionsContainer}>
                                {experience.contributions.map((contribution, contributionIndex) => {
                                    return (
                                        <div key={contributionIndex} className={ExperienceCSS.contributionItemContainer}
                                        onMouseLeave={event => this.hideDeleteContributionButton(event, experienceIndex, contributionIndex)}
                                        onMouseEnter={event => this.showDeleteContributionButton(event, experienceIndex, contributionIndex)}>
                                            <div className={ExperienceCSS.textareaContainer}>
                                                <div className={ExperienceCSS.dotContainer}>
                                                    <i className="fa-solid fa-circle"></i>
                                                </div>
                                                <textarea style={{height: this.state.experiences[experienceIndex].contributions[contributionIndex].height}}
                                                className={ExperienceCSS.contribution} value={contribution.text} name="" id=""
                                                rows="1" onChange={event => {this.handleTextAreaChange(event, experienceIndex, contributionIndex); 
                                                this.resizeTextArea(event, experienceIndex, contributionIndex)}}
                                                onBlur={event => this.deleteContributionIfEmpty(event, experienceIndex, contributionIndex)}></textarea>
                                            </div>
                                            <div>
                                                <i onClick={event => this.deleteContribution(event, experienceIndex, contributionIndex)} 
                                                style={{display: contribution.deleteButton}} 
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

export default Experience;