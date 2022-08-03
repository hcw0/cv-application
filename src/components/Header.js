import React, {Component} from "react";
import HeaderCSS from "./Header.module.css"

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullName: "John Doe",
            nameInputWidth: 12
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.changeInputWidth = this.changeInputWidth.bind(this);
        this.setValueIfEmpty = this.setValueIfEmpty.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })

    }

    setValueIfEmpty = (event, value) => {
        if (this.state.fullName == ""){
            this.setState({
                [event.target.name]: value,
                nameInputWidth: 8
            })
        }
    }

    changeInputWidth = event => {
        this.setState({
            nameInputWidth: event.target.value.length + 2,
        })
    }

    render(){
        return(
            <div className={HeaderCSS.header}>
                <input style={{width: this.state.nameInputWidth + "ch"}} className={HeaderCSS.fullName} 
                    type="text" name="fullName" value={this.state.fullName} 
                    onChange={event => {this.handleInputChange(event); this.changeInputWidth(event)}}
                    onBlur = {event => {this.setValueIfEmpty(event, "Name")}}/>
                <div className={HeaderCSS.contactContainer}>
                    <input type="text" />
                </div>
            </div>
        )
    }
}

export default Header;