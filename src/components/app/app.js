import React, { Component } from "react";
import MainPage from "../main-page";

import "./app.scss";

export default class App extends Component {

  render() {

    return (
      <div className="todo-app">
        <MainPage />
      </div>
    );
  }
}
