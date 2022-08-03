
import AppCSS from './App.module.css';
import React, {Component} from "react";
import Header from "./components/Header"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render (){
    return (
      <div className={AppCSS.page}>
        <Header/>
      </div>
    )
  }
}
export default App;
