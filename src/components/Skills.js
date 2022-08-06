import React, {Component} from "react";
import SkillsCSS from "./Skills.module.css";

class Skills extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={SkillsCSS.mainContainer}>
                <div className={SkillsCSS.titleContainer}>
                    <p className={SkillsCSS.title}>SKILLS</p>
                </div>
            </div>
        )
    }
}

export default Skills;