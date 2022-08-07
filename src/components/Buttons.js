import ButtonsCSS from "./Buttons.module.css"
import React, {Component} from "react";

class Buttons extends Component {
    constructor(props){
        super(props);
    }

    printFunction = () => {
        window.print()
    }

    render(){
        return (
            <div className={ButtonsCSS.buttons}>
                <button onClick={this.printFunction} className={ButtonsCSS.printButton}>Print</button>
            </div>
        )
    }
}

export default Buttons;