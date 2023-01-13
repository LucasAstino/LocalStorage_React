import React, { Component } from "react";
import Sun from "./Assets/sun.svg";
import Moon from "./Assets/moon.svg";
import Sol from "./Assets/sun.png";
import Lua from "./Assets/lua.png";
import "./style.css";

export default class DarkAndWhite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clima: false
    };
  }

  toogle = () => {
    document.querySelector("#toogle").classList.toggle("active");
    document.querySelector("body").classList.toggle("active");
    this.setState({
      clima: !this.state.clima
    });
  };

  render() {
    return (
      <>
        <div id="toogle">
          <img src={Sun} alt="moon" />
          <img src={Moon} alt="sun" />

          <div onClick={() => this.toogle()} id="button"></div>
        </div>
        <img src={this.state.clima ? Sol : Lua} />
      </>
    );
  }
}
