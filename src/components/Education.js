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
        }

        this.state = {
            universities: [defaultUniversity2, defaultUniversity1],
            defaultName: "University Name",
            defaultLocation: "City, State",
            defaultDegree: "Degree name",
            defaultTime: "Month Year - Month Year",
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
                newUniversities[index][inputWidth] = 14;
            } else if (inputName == "location") {
                newUniversities[index][inputName] = this.state.defaultLocation;
                newUniversities[index][inputWidth] = 9;
            } else if (inputName == "degree") {
                newUniversities[index][inputName] = this.state.defaultDegree;
                newUniversities[index][inputWidth] = 12;
            } else if (inputName == "time") {
                newUniversities[index][inputName] = this.state.defaultTime;
                newUniversities[index][inputWidth] = 21;
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

    render() {
        return (
            <div className={EducationCSS.mainContainer}>
                <div className={EducationCSS.titleContainer}>
                    <p className={EducationCSS.title}>EDUCATION</p>
                </div>

                <div className={EducationCSS.educationContainer}>
                    {this.state.universities.map((university, index) => {
                        return (
                            <div key={index} className={EducationCSS.educationCard}>
                                    <div className={EducationCSS.mainInformation}>
                                        <input style={{ width: university.nameInputWidth + "ch" }} className={EducationCSS.universityName}
                                            type="text" name="name" value={university.name}
                                            onChange={event => { this.handleInputChange(event, index); this.changeInputWidth(event, index, "nameInputWidth") }}
                                            onBlur={event => { this.setNameInputIfEmpty(event, index) }} />
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