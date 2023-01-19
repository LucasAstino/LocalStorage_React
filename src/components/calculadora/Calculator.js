import React, { Component } from "react";
import "./styleCalculator.css";

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      num: "5",
    };
  }
  addNum = (e) => {
    // this.setState({ num: e.target.value });
    console.log(e.target.value);
  };

  render() {
    return (
      <div class="container">
        <h1 class="display">{this.state.num}</h1>
        <section class="teclado">
          <button>AC</button>
          <button>-/+</button>
          <button>%</button>
          <button class="orange">/</button>
          <button onClick={(e) => this.addNum(e)} class="gray">
            7
          </button>
          <button class="gray">8</button>
          <button class="gray">9</button>
          <button class="orange">X</button>
          <button class="gray">4</button>
          <button class="gray">5</button>
          <button class="gray">6</button>
          <button class="orange">-</button>
          <button class="gray">1</button>
          <button class="gray">2</button>
          <button class="gray">3</button>
          <button class="orange">+</button>
        </section>
        <footer class="footer">
          <button class="gray teste">0</button>
          <button class="gray">,</button>
          <button class="orange">=</button>
        </footer>
      </div>
    );
  }
}
