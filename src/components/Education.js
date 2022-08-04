import React, {Component} from "react";
import EducationCSS from "./Education.module.css"

class Education extends Component {
    constructor(props){
        super(props);
        
        let id = 3;
        const defaultUniversity1 = {
            name: "University Name",
            nameInputWidth: 14,
            location: "City, State",
            locationInputWidth: 9,
            degree: "Bachelor of Arts in Computer Science",
            degreeInputWidth: 31,
            time: "Aug. 2014 - May 2018",
            timeInputWidth: 20,
            id: 1,
            defaultName: "University Name",
            defaultLocation: "City, State",
            defaultDegree: "Bachelor of Arts in Computer Science",
            defaultTime: "Aug. 2014 - May 2018",
        }

        const defaultUniversity2 = {

        }

        this.state = {
            universities: [defaultUniversity1]
        }
    }

    handleInputChange = (event, index) => {
        const newUniversities = [...this.state.universities];
        let varName = event.target.name;
        newUniversities[index][varName] = event.target.value;
        this.setState({
            universities: newUniversities,
        })

    }

    setNameInputIfEmpty = (event, value) => {

    }

    changeInputWidth = (event, index, inputName) => {
        const newUniversities = [...this.state.universities];
        newUniversities[index][inputName] = event.target.value.length;
        console.log(newUniversities[index][inputName])
        this.setState({
            universities: newUniversities
        })
    }

    render(){
        return(
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
                    {this.state.universities.map( (university, index) => {
                        return (
                            <div key={index} className={EducationCSS.educationCard}>
                                <div className={EducationCSS.educationCard}>
                                    <div className={EducationCSS.mainInformation}>
                                        <input style={{width: university.nameInputWidth + "ch"}} className={EducationCSS.universityName}
                                            type="text" name="name" value={university.name} 
                                            onChange={event => {this.handleInputChange(event, index); this.changeInputWidth(event, index, "nameInputWidth")}}
                                            onBlur = {event => {this.setNameInputIfEmpty(event, university.defaultName)}}/>
                                        <input style={{width: university.locationInputWidth + "ch"}} className={EducationCSS.universityLocation}
                                            type="text" name="location" value={university.location} 
                                            onChange={event => {this.handleInputChange(event, index); this.changeInputWidth(event, index, "locationInputWidth")}}
                                            onBlur = {event => {this.setNameInputIfEmpty(event, university.defaultLocation)}}/>
                                    </div>
                                    <div className={EducationCSS.secondaryInformation}>
                                        <input style={{width: university.degreeInputWidth + "ch"}} className={EducationCSS.universityDegree}
                                            type="text" name="degree" value={university.degree} 
                                            onChange={event => {this.handleInputChange(event, index); this.changeInputWidth(event, index, "degreeInputWidth")}}
                                            onBlur = {event => {this.setNameInputIfEmpty(event, university.defaultDegree)}}/>
                                        <input style={{width: university.timeInputWidth + "ch"}} className={EducationCSS.universityTime}
                                            type="text" name="time" value={university.time} 
                                            onChange={event => {this.handleInputChange(event, index); this.changeInputWidth(event, index, "timeInputWidth")}}
                                            onBlur = {event => {this.setNameInputIfEmpty(event, university.defaultTime)}}/>
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