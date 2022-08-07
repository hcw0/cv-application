import React, { Component } from "react";
import EducationCSS from "./Education.module.css"

class Education extends Component {
    constructor(props) {
        super(props);

        let defaultUniversity1 = {
            name: "Arizona State University",
            nameInputWidth: 20,
            location: "Tempze, AZ",
            locationInputWidth: 10,
            degree: "Bachelor of Science in Computer Science, Minor in Finance",
            degreeInputWidth: 48,
            time: "Aug. 2014 - May 2018",
            timeInputWidth: 19,
            deleteButtonDisplay: "none"
        }

        let defaultUniversity2 = {
            name: "Duke University",
            nameInputWidth: 13,
            location: "Durham, NC",
            locationInputWidth: 10,
            degree: "Masters of Science in Computer Science",
            degreeInputWidth: 33,
            time: "Aug. 2018 - May 2020",
            timeInputWidth: 19,
            deleteButtonDisplay: "none"
        }

        this.state = {
            universities: [defaultUniversity2, defaultUniversity1],
            defaultName: "University Name",
            defaultNameInputWidth: 14,
            defaultLocation: "City, State",
            defaultLocationInputWidth: 9,
            defaultDegree: "Degree name",
            defaultDegreeInputWidth: 12,
            defaultTime: "Month Year - Month Year",
            defaultTimeInputWidth: 21,
            addButton: "none",
        }
    }

    handleInputChange = (event, index) => {
        const newUniversities = [...this.state.universities];
        let varName = event.target.name;
        newUniversities[index][varName] = event.target.value;
        this.setState({
            universities: newUniversities,
        });
    }

    setNameInputIfEmpty = (event, index) => {
        const newUniversities = [...this.state.universities];
        const inputName = event.target.name;
        const inputWidth = inputName + "InputWidth";
        if (event.target.value == "") {
            if (inputName == "name") {
                newUniversities[index][inputName] = this.state.defaultName;
                newUniversities[index][inputWidth] = this.state.defaultNameInputWidth;
            } else if (inputName == "location") {
                newUniversities[index][inputName] = this.state.defaultLocation;
                newUniversities[index][inputWidth] = this.state.defaultLocationInputWidth;
            } else if (inputName == "degree") {
                newUniversities[index][inputName] = this.state.defaultDegree;
                newUniversities[index][inputWidth] = this.state.defaultDegreeInputWidth;
            } else if (inputName == "time") {
                newUniversities[index][inputName] = this.state.defaultTime;
                newUniversities[index][inputWidth] = this.state.defaultTimeInputWidth;
            }
        }
        this.setState({
            universities: newUniversities,
        });
    }

    changeInputWidth = (event, index, inputName) => {
        const newUniversities = [...this.state.universities];
        newUniversities[index][inputName] = event.target.value.length;
        this.setState({
            universities: newUniversities,
        });
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

    addEducationElement = event => {
        let defaultEducation = {
            name: this.state.defaultName,
            nameInputWidth: this.state.defaultNameInputWidth,
            location: this.state.defaultLocation,
            locationInputWidth: this.state.defaultLocationInputWidth,
            degree: this.state.defaultDegree,
            degreeInputWidth: this.state.defaultDegreeInputWidth,
            time: this.state.defaultTime,
            timeInputWidth: this.state.defaultTimeInputWidth,
            deleteButtonDisplay: "none"
        }

        let newUniversities = [...this.state.universities, defaultEducation];

        this.setState({
            universities: newUniversities,
        })
    }

    showDeleteButton = (event, index) => {
        let newUniversities = this.state.universities;
        newUniversities[index].deleteButtonDisplay = "inline-block";
        this.setState({
            universities: newUniversities
        })
    }

    hideDeleteButton = (event, index) => {
        let newUniversities = this.state.universities;
        newUniversities[index].deleteButtonDisplay = "none";
        this.setState({
            universities: newUniversities
        })
    }

    deleteEducationItem = (event, index) => {
        let newUniversities = this.state.universities.filter((university, universityIndex) => {
            return universityIndex !== index;
        })

        this.setState({
            universities: newUniversities,
        })
    }

    render() {
        return (
            <div className={EducationCSS.mainContainer}>
                <div className={EducationCSS.titleContainer} onMouseEnter={this.showAddButton} onMouseLeave={this.hideAddButton}>
                    <span className={EducationCSS.title}>EDUCATION</span>
                    <button style={{display: this.state.addButton}} className="addButton" onClick={this.addEducationElement}> 
                        <span>+</span>
                    </button>
                </div>

                <div className={EducationCSS.educationContainer}>
                    {this.state.universities.map((university, index) => {
                        return (
                            <div key={index} className={EducationCSS.educationCard}>
                                    <div className={EducationCSS.mainInformation}>
                                        <div onMouseEnter={event => this.showDeleteButton(event, index)} onMouseLeave={event => this.hideDeleteButton(event, index)}>
                                            <input style={{ width: university.nameInputWidth + "ch" }} className={EducationCSS.universityName}
                                                type="text" name="name" value={university.name}
                                                onChange={event => { this.handleInputChange(event, index); this.changeInputWidth(event, index, "nameInputWidth") }}
                                                onBlur={event => { this.setNameInputIfEmpty(event, index) }} />
                                            <button style={{display: university.deleteButtonDisplay}} className="deleteButton"
                                                onClick={event => this.deleteEducationItem(event, index)}>
                                                <span>-</span>
                                            </button>
                                        </div>

                                        <input style={{ width: university.locationInputWidth + "ch" }} className={EducationCSS.universityLocation}
                                            type="text" name="location" value={university.location}
                                            onChange={event => { this.handleInputChange(event, index); this.changeInputWidth(event, index, "locationInputWidth") }}
                                            onBlur={event => { this.setNameInputIfEmpty(event, index) }} />
                                    </div>
                                    <div className={EducationCSS.secondaryInformation}>
                                        <input style={{ width: university.degreeInputWidth + "ch" }} className={EducationCSS.universityDegree}
                                            type="text" name="degree" value={university.degree}
                                            onChange={event => { this.handleInputChange(event, index); this.changeInputWidth(event, index, "degreeInputWidth") }}
                                            onBlur={event => { this.setNameInputIfEmpty(event, index) }} />
                                        <input style={{ width: university.timeInputWidth + "ch" }} className={EducationCSS.universityTime}
                                            type="text" name="time" value={university.time}
                                            onChange={event => { this.handleInputChange(event, index); this.changeInputWidth(event, index, "timeInputWidth") }}
                                            onBlur={event => { this.setNameInputIfEmpty(event, index) }} />
                                    </div>
                            </div>
                        )

                    })}

                </div>
            </div>
        )
    }
}

export default Education;