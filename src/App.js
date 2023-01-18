import React, { Component } from "react";
import "./styles.css";
import Table from "./components/tableany/tableany";

export default class BASE extends React.Component {
  constructor(props) {
    super(props); //quando for usar props
    this.state = {
      login: true,
      Darktheme: true,
    };
  }

  componentDidMount() {
    if (document.querySelector("body").classList == "active") {
      this.setState({ Darktheme: !this.state.Darktheme });
    }
  }

  render() {
    return (
      <>
        <Table />
      </>
    );
  }
}
