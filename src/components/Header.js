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
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    changeInputWidth = event => {
        console.log(event.target.value.length)
        this.setState({
            nameInputWidth: event.target.value.length,
        })
    }

    render(){
        return(
            <div className={HeaderCSS.header}>
                    <input style={{width: this.state.nameInputWidth + "ch"}} className={HeaderCSS.fullName} type="text" name="fullName" value={this.state.fullName} onChange={event => {this.handleInputChange(event); this.changeInputWidth(event)}}/>
                    <div></div>
                <div>

                </div>
            </div>
        )
    }
}

export default Header;