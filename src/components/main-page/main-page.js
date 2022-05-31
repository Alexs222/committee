import React, { Component } from "react";

import "./main-page.scss";

import background from './building.jpg'

export default class MainPage extends Component {

  render() {

    return (
      <div className="page main-page" style={{ backgroundImage: `url(${background})` }}>
        Main page
      </div>
    );
  }
}
