
import React, {Component} from "react";
import HeaderCSS from "./Header.module.css"

class Header extends Component {
    constructor(props){
        super(props);   
        
        this.state = {
            fullName: "John Doe",
            nameInputWidth: 12,
            contactInfo: [
                {phone: "(123) 456-789",
                phoneInputWidth: 12,},
                {email: "john@gmail.com",
                emailInputWidth: 14,},
                {linkedin: "linkedin.com/in/john",
                linkedinInputWidth: 18,},
                {github: "github.com/john",
                githubInputWidth: 14,}
            ],
            defaultPhone: "(123) 456-789",
            defaultEmail: "john@gmail.com",
            defaultLinkedin: "linkedin.com/in/john",
            defaultGithub: "github.com/john",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.changeInputWidthLong = this.changeInputWidthLong.bind(this);
        this.changeInputWidthShort = this.changeInputWidthShort.bind(this);
        this.setNameInputIfEmpty = this.setNameInputIfEmpty.bind(this);
    }

    handleInputChange = (event, index) => {
        let newContactInfo = [...this.state.contactInfo];
        newContactInfo[index][event.target.name] = event.target.value;
        
        this.setState({
            contactInfo: newContactInfo,
        })
    }

    handleInputChangeSimple = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    setNameInputIfEmpty = (event, index) => {
        if (this.state.fullName == ""){
            this.setState({
                [event.target.name]: "Name",
                nameInputWidth: 8
            })
        } 
    }

    changeInputWidthLong = (event, inputName) => {
        this.setState({
            [inputName]: event.target.value.length + 2,
        })
    }

    changeInputWidthShort = (event, index) => {
        let newContactInfo = [...this.state.contactInfo];
        newContactInfo[index][event.target.name + "InputWidth"] = event.target.value.length;
        
        this.setState({
            contactInfo: newContactInfo,
        })
    }

    deleteElement = (event, index) => {
        if (event.target.value == ""){
            let newContactInfo = this.state.contactInfo.filter((contact, contactIndex) => {
                return contactIndex !== index;
            })
    
            this.setState({
                contactInfo: newContactInfo,
            })
        }

    }

    render(){
        return(
            <div className={HeaderCSS.header}>
                <input style={{width: this.state.nameInputWidth + "ch"}} className={HeaderCSS.fullName} 
                    type="text" name="fullName" value={this.state.fullName} 
                    onChange={event => {this.handleInputChangeSimple(event); this.changeInputWidthLong(event, "nameInputWidth")}}
                    onBlur = {event => {this.setNameInputIfEmpty(event, "Name")}}/>

                <div className={HeaderCSS.contactContainer}>
                    {/* <div className={HeaderCSS.contactCard}>
                        <input style={{width: this.state.phoneInputWidth + "ch"}} type="text" name="phoneNumber" 
                        value={this.state.phoneNumber} 
                        onChange={event => {this.handleInputChange(event); this.changeInputWidthShort(event, "phoneInputWidth")}}
                        onBlur = {event => {this.setNameInputIfEmpty(event, "(123) 456-789")}}/>
                    </div>
                    <div className={HeaderCSS.contactCard}>
                        <input style={{width: this.state.emailInputWidth + "ch"}} type="text" name="email" 
                        value={this.state.email} 
                        onChange={event => {this.handleInputChange(event); this.changeInputWidthShort(event, "emailInputWidth")}}
                        onBlur = {event => {this.setNameInputIfEmpty(event, "john@gmail.com")}}/>
                    </div>
                    <div className={HeaderCSS.contactCard}>
                        <input style={{width: this.state.linkedinInputWidth + "ch"}} type="text" name="linkedin" 
                        value={this.state.linkedin} 
                        onChange={event => {this.handleInputChange(event); this.changeInputWidthShort(event, "linkedinInputWidth")}}
                        onBlur = {event => {this.setNameInputIfEmpty(event, "linkedin.com/in/john")}}/>
                    </div>
                    <div style={{border: 0}} className={HeaderCSS.contactCard}>
                        <input style={{width: this.state.githubInputWidth + "ch"}} type="text" name="github" 
                        value={this.state.github} 
                        onChange={event => {this.handleInputChange(event); this.changeInputWidthShort(event, "githubInputWidth")}}
                        onBlur = {event => {this.setNameInputIfEmpty(event, "github.com/john")}}/>
                    </div> */}
                    {this.state.contactInfo.map((contact, index) => {
                        return(
                        <div style={index == this.state.contactInfo.length - 1 ? {border: 0} : {}} key={index} className={HeaderCSS.contactCard}>
                            <input style={{width: contact[Object.keys(contact)[1]] + "ch"}} type="text" name={Object.keys(contact)[0]}
                            value={contact[Object.keys(contact)[0]]} 
                            onChange={event => {this.handleInputChange(event, index); this.changeInputWidthShort(event, index)}}
                            onBlur = {event => {this.deleteElement(event, index)}}/>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Header;