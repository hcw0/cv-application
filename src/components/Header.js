
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
            buttonDisplay: "none",
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

    showButton = event => {
        event.preventDefault();
        this.setState({
            buttonDisplay: "inline-block",
        })
    }
    
    hideButton = event => {
        event.preventDefault();
        this.setState({
            buttonDisplay: "none",
        })
    }

    addNewContactInformation = event => {
        let defaultContact = {
            name: "contact",
            nameInputWidth: 7,
        }
        event.preventDefault();
        let newContactInfo = [...this.state.contactInfo, defaultContact]

        this.setState({
            contactInfo: newContactInfo,
        })
    }

    render(){
        return(
            <div className={HeaderCSS.header}>
                <input style={{width: this.state.nameInputWidth + "ch"}} className={HeaderCSS.fullName} 
                    type="text" name="fullName" value={this.state.fullName} 
                    onChange={event => {this.handleInputChangeSimple(event); this.changeInputWidthLong(event, "nameInputWidth")}}
                    onBlur = {event => {this.setNameInputIfEmpty(event, "Name")}}/>
                
                <div className={HeaderCSS.contactContainer} onMouseEnter={this.showButton} onMouseLeave={this.hideButton}>
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
                    <i style={{display: this.state.buttonDisplay}} class="fa-solid fa-plus" onClick={this.addNewContactInformation}></i>
                </div>
            </div>
        )
    }
}

export default Header;