import React, {Component} from "react";
import EducationCSS from "./Education.module.css"

class Education extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <p className={EducationCSS.title}>EDUCATION</p>
            </div>
        )
    }
}

export default Education;