import React, { Component } from "react";
import style from "./App.module.css";
import { Choice } from "./components/Choice/Choice";
import { StikerList } from "./components/StikerList/StikerList";

class App extends Component {
  state = {
    nameImg: "",
  };

  handleSelectedName = (label) => {
    this.setState({ nameImg: label });
  };

  render() {
    return (
      <div className={style.app}>
        <h1 className={style.title}>Sticker App Pigs</h1>
        <StikerList onSelected={this.handleSelectedName} />
        <Choice selected={this.state.nameImg} />
      </div>
    );
  }
}

export default App;
