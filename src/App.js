
import AppCSS from './App.module.css';
import React, {Component} from "react";
import Header from "./components/Header"
import Education from "./components/Education"
import Experience from './components/Experience';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render (){
    return (
      <div className={AppCSS.page}>
        <Header/>
        <Education/>
        <Experience/>
      </div>
    )
  }
}
export default App;
