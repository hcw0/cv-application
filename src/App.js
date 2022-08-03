
import AppCSS from './App.module.css';
import React, {Component} from "react";
import Header from "./components/Header"
import Education from "./components/Education"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render (){
    return (
      <div className={AppCSS.page}>
        <Header/>
        <Education/>
      </div>
    )
  }
}
export default App;
