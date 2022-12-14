
import AppCSS from './App.module.css';
import React, {Component} from "react";
import Header from "./components/Header"
import Education from "./components/Education"
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

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
        <Projects/>
        <Skills/>
      </div>
    )
  }
}
export default App;
