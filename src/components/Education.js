import React, { Component } from "react";
import EducationCSS from "./Education.module.css"

class Education extends Component {
    constructor(props) {
        super(props);

        let id = 3;
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
            universities: [defaultUniversity1, defaultUniversity2],
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
                    {/* <div className={EducationCSS.educationCard}>
                        <div className={EducationCSS.mainInformation}>
                            <input key="1" style={{width: this.state.universityNameInputWidth + "ch"}} className={EducationCSS.universityName}
                                type="text" name="universityName" value={this.state.universityName} 
                                onChange={event => {this.handleInputChange(event); this.changeInputWidth(event, "universityNameInputWidth")}}
                                onBlur = {event => {this.setNameInputIfEmpty(event, "University Name")}}/>
                            <input style={{width: this.state.universityLocationInputWidth + "ch"}} className={EducationCSS.universityLocation}
                                type="text" name="universityLocation" value={this.state.universityLocation} 
                                onChange={event => {this.handleInputChange(event); this.changeInputWidth(event, "universityLocationInputWidth")}}
                                onBlur = {event => {this.setNameInputIfEmpty(event, "City, State")}}/>
                        </div>
                        <div className={EducationCSS.secondaryInformation}>
                            <input style={{width: this.state.universityDegreeInputWidth + "ch"}} className={EducationCSS.universityDegree}
                                type="text" name="universityDegree" value={this.state.universityDegree} 
                                onChange={event => {this.handleInputChange(event); this.changeInputWidth(event, "universityDegreeInputWidth")}}
                                onBlur = {event => {this.setNameInputIfEmpty(event, "Bachelor of Arts in Computer Science")}}/>
                            <input style={{width: this.state.universityTimeInputWidth + "ch"}} className={EducationCSS.universityTime}
                                type="text" name="universityTime" value={this.state.universityTime} 
                                onChange={event => {this.handleInputChange(event); this.changeInputWidth(event, "universityTimeInputWidth")}}
                                onBlur = {event => {this.setNameInputIfEmpty(event, "Aug. 2014 - May 2018")}}/>
                        </div>
                    </div> */}
                    {this.state.universities.map((university, index) => {
                        return (
                            <div key={index} className={EducationCSS.educationCard}>
                                <div className={EducationCSS.educationCard}>
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
                            </div>
                        )

                    })}

                </div>
            </div>
        )
    }
}

export default Education;